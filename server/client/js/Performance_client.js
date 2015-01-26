
(function(){ //}
var FRAME_COUNT = 0;

Performance = {
	frequence:3*25,	//aka 5 sec
	oldtime:Date.now(),
	clientPerformance:'100%',
	latencyTime:0,
	cycleTime:0,

};
Performance.getLatency = function(){
	return Performance.latencyTime; 
}

Performance.loop = function(){
	if(FRAME_COUNT % 25*30 === 0){
		if(Input.isWindowActive())
			Command.execute('sendPing',[Performance.getLatency()]);
	}
	Performance.delay = Date.now() - Receive.START_TIME;
    if(FRAME_COUNT++ % Performance.frequence !== 0) return;
	
	var timeSupposedToTake = Performance.frequence*40;
	var timeTaken = Date.now() - Performance.oldtime;
	
	Performance.cycleTime = timeTaken / Performance.frequence;
	Performance.clientPerformance = (timeSupposedToTake/timeTaken*100).r(0) + '%';
	
	Performance.oldtime = Date.now();
	Performance.testLatency();
};
	

Performance.testLatency = function(){
	Socket.emit('ping', {'send':Date.now()});
}

Performance.init = function(){
	Socket.on('ping', function (d) {
		Performance.latencyTime = Date.now() - d.send; 
	});
	
	Dialog.UI('performance',{
		position:'absolute',
		left:900,
		top:5,
		width:'auto',
		height:'auto',
		color:'white',
		font:'1em Kelly Slab',
	},function(html){
		if(!Main.getPref(main,'displayFPS')) return false;
		//if overwrite old one, double tooltip...
		
		html.addClass('shadow');
		html.attr('title','Ping: ' + Performance.latencyTime + ' ms. FPS: ' + (1000/Performance.cycleTime).r(0) + '/25.');
		html.html(Performance.clientPerformance);
	},function(){
		return '' + Performance.latencyTime + Performance.clientPerformance + Main.getPref(main,'displayFPS');
	});
	
	
}


/*
	$("#performanceDiv").css({
		left:CST.WIDTH-CST.WIDTH/Main.getPref(main,'mapRatio')-50,
		width:50,
		height:30,
		fontFamily:'Kelly Slab',
		fontSize:'20px',
		whiteSpace:'normal',
		color:'white',
	});
	if(Main.getPref(main,'displayFPS')){
		var text = 
		Draw.setInn erHTML($("#performanceDiv")[0],text);
	} else {
		Draw.setIn nerHTML($("#performanceDiv")[0],'');
	}
	*/

})();