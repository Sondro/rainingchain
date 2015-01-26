(function(){ //}

Dialog('questList','Quest List',Dialog.Size(1000,700),Dialog.Refresh(function(html,variable,param){	// {onlyShow:[]}
	//Daily Task
	/*
	if(!main.dailyTask.$isEmpty()){
		str += '<span style="color:yellow;" title="Huge Bonus Upon Completing Those Tasks">Daily Task: ';
		for(var i in main.dailyTask)
			str += '<span title="' + main.dailyTask[i].date + ': ' + main.dailyTask[i].description + '"> #' + (+i+1) + ' </span>';	
		str += '</span><br>';
	} else {
		str += '<span style="color:' + CST.color.green + ';" title="Good job! Come back tomorrow for another task.">Daily Task: All Done!</span><br>';
	}
	*/
		
	//Quest
	if(!(param && param.onlyShow)){
		var questDone = getPctQuestDone();
		var header = getStarQuestDone(questDone[0]/questDone[1]);
		
		var h2 = $('<h2>');
		h2.append(header,' ')
		if(questDone[0] !== questDone[1]){	//100% complete
			h2.append(Tk.round(questDone[0]/questDone[1]*100,1) + '% Complete')
				.attr('title',questDone[0] + ' Quests and Challenges completed out of ' + questDone[1]);
		} else {		
			var gemDone = getPctGemDone();
			h2.append(Tk.round(gemDone[0]/gemDone[1]*100,1) + '% out of Max GEM')
				.attr('title','x' + gemDone[0].r(2) + ' GEM out of the maximum of x' + gemDone[1].r(2) + ' GEM');
		}
		html.append(h2);
	}
	var all = $('<div>').addClass('shadow');
	html.append(all);
	
	var array = [
		['Quest','Rating','Chal. 1','Chal. 2','Chal. 3']
	];
	var thumbnail = $('<div>');
	var obj = $('<img>')
		.attr({width:500,height:380});
		
	var thumbText = $('<div>')
		.css({fontSize:'1.5em',width:475})
	thumbnail.append(obj,'<br>',thumbText);
	
	for(var i in main.quest){
		var q = QueryDb.get('quest',i);
		if(!q.showInTab) continue;
		if(param && param.onlyShow && !param.onlyShow.$contains(i)) continue;
		var mq = main.quest[i];
		if(!mq._challengeDone){
			ERROR(3,'mq doesnt have challegeDone',i);
			continue;
		}
		
		var sub = [];
		
		//name
		var name = q.name;
		var color = 'red';
		if(main.questActive === i) color = 'orange';
		else if(mq._complete) color = 'green';
				
		var text = $('<span>')
			.css({color:color})
			.addClass('shadow')
			.attr('title','Check '+ name)
			.html(name)
			.click((function(i){
				return function(event){
					if(!event.shiftKey) Dialog.open('quest',i);
					else if(main.questActive === i) Command.execute('win,quest,abandon',[i]);
					else Command.execute('win,quest,start',[i]);
				}
			})(i))
			.hover((function(i){
				return function(){
					var q = QueryDb.get('quest',i);
					if(!(!obj.attr('src') && !q.thumbnail))						
						obj.attr({src:q.thumbnail});
					thumbText.html(q.name + ' (by ' + (q.author || 'Anonymous') + '):<br> ' + q.description);
					
				}
			})(i),function(){});
		sub.push(text);
		
		//star
		if(q.rating !== 0){
			var starSpan = $('<div>').css({color:'yellow'}).addClass('shadow360');
			for(var j = 1 ; j <= q.rating; j++){
				starSpan.append('★');
			}
			var mod = q.rating % 1;
			if(mod >= 0.25 && mod <= 0.75)
				starSpan.append('+');
			if(mod >= 0.75)
				starSpan.append('+');
			starSpan.attr('title',q.rating.r(3) + '/3');
			sub.push(starSpan);
			
		} else {
			sub.push(' - ');
		}
		
		//Challenge
		var count = 1;
		for(var j in mq._challengeDone){
			if(mq._challengeDone[j]){
				sub.push($('<span>')
					.css({color:'green'})
					.addClass('shadow')
					.html('✔')
					.attr('title','Challenge \'' + q.challenge[j].name + '\' completed')
				);
			} else {
				sub.push($('<span>')
					.css({color:'red'})
					.addClass('shadow')
					.html('X')
					.attr('title','Challenge \'' + q.challenge[j].name + '\' never completed')
				);
			}
			count++;
		}
		for(var j = count; j < 4; j++){
			sub.push('-');
		}
		
		array.push(sub);
	}
	var table = Tk.arrayToTable(array,true,false,true).css({fontSize:'20px',textAlign:'center'});
	table.css({float:'left'});
	thumbnail.css({float:'left',margin:'10px 10px'});
	html.css({overflow:'auto'});
	html.append(table,thumbnail);
	//html.append(Tk.arrayToTable(cheat,false,false,false,'10px 10px'));
},function(){
	return main.questActive;
},10));
//Dialog.open('questList')

var getPctQuestDone = function(){
	var questAndChal = 0;
	var questAndChalDone = 0;
	for(var i in main.quest){
		if(!QueryDb.getQuestShowInTab(i)) continue;
		questAndChal++;
		if(main.quest[i]._complete)
			questAndChalDone++;
		for(var j in main.quest[i]._challengeDone){
			questAndChal++;
			if(main.quest[i]._challengeDone[j])
				questAndChalDone++;
		}
	}
	return [questAndChalDone,questAndChal];
}	

var getStarQuestDone = function(pct){
	var sp = $('<span>')
		.addClass('shadow')
		.html('★')
		
	if(pct < 0.125)
		return sp.css({color:'#CD7F32'})	//bronze
	if(pct < 0.25)
		return sp.css({color:'#C0C0C0'}) //silver
	if(pct < 0.5)
		return sp.css({color:'#FFD700'}) //gold
	if(pct < 0.75)
		return sp.css({color:'#FFD700'}).html('★★')
	if(pct <= 1)
		return sp.css({color:'#FFD700'}).html('★★★').attr('title','YOU ARE AMAZING!!!');
	return sp;	//if error?
}
var getPctGemDone = function(){
	var gem = Actor.getGEM(player);
	var maxGem = 1;
	
	for(var i in main.quest){
		if(!QueryDb.getQuestShowInTab(i)) continue;
		maxGem += Actor.getGEM.scoreToGEM(10000);	//cuz 10k is max score
	}
	maxGem += Actor.getGEM.scoreToGEM(10000);	//cuz tutorial...
	return [gem,maxGem];
}	


})(); //}




