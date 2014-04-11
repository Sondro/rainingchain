var m = Init.db.map.baseMap();
m.name = "Test";
m.grid = ['000000000000000000000000000000000000100000000000000000000000100000000000000000000000000000000000','000000000000000000000000000000000000100000000000000000000000100000000000000000000000000000000000','000000000000000000000000000000000000100000000000000000000000100000000000000000000000000000000000','000000000000000000000000000000000000100000000000000000000000100000000000000000000000000000000000','000000000000000000000000000000000000100000000100000010011000100000000000000000000000000000000000','000000000000000000000000000000000000100000000100000010000000100000000000000000000000000000000000','000000000000000000000000000000000000100000000000000000000000100000111110000000000000000000000000','000000000000000000000000111111111111100000000000000000000000111111100010000000000000000000000000','000000000000000000000000100000000000000000000000000000000000000000000010000001111100000000000000','000000000000000000000000100110000000000000000000000000000000000000000010000111000110000000000000','000000000000000000000000100110000000000000000000000000000000000000000001111100000110000000000000','000000011111000000000000100000000000000000000000000000000000000000011000000000000110000000000000','000000010001000000000000100000000000100000000000000000000000000000011000000000000010000000000000','000001110001000000000000100000000000000000000000000000000000000110000000000000000010000000000000','000001000001000000000000100000000000000000000000000000000000000000000000000000000010000000000000','000001001101000000000000100000000000000000000000000000000000000000000000000000000010000000000000','000001001101000000000000111110000000000000000011000000000000000000000000001111111111110000000000','000001000001000000000000111010000000000000000011000000000000000000000000011000000010010000000000','000001110111000000000000110010000000000000000000000000000000000000000000010000000001010000000000','000000010111000000000000110010000000000000000000000000000000000000000000010000000001010000000000','000000010001000000000000110010000000000000000000000000000000000000000000010000000000111100000000','000000010001000000000000111110000000000000000000000011111100000000000000010000000000010110000000','000000010001111111111111100000000000000000000000111110000100001100000000010000000000010010000000','000000010000000000000000000000000000000000001111100000000110001100000000010000000000010010000000','000000010000000000000000000000000000000001111000000000000010001100000000010000000000010010000000','000000010000000000000000000000000000111111000000000000000010001100000000011100000011110110000000','000000010001100000000000000000000000100000000000000000000011100000000000001000000010000100000000','000000010001100000000000000000000000100000000000000000000000100000000000001000000010000100000000','000000110000000000000000000000000001100000000000000011000000100000000011111000000010000100000000','000000100000000000000000000000000001000000110000000011000000100000000011111111111110000100000000','000000100000000000000001000000000001000000110011110000000000100000000000000000000000000100000000','000000100000000000000000000000000001000000110011110000000000100000000000000000000000000100000000','000000110000000000000000000000000011000000001000000000000000100000000000000000000000000111000000','000000010000000000000000000000000010000000000000000000000111100000000000000000000000000001100000','000000010000000000000000000000000010000000000000000000000111100010000000000000000011000001100000','000000010000000000000000000000000010000000000000000000000111100000000000001111000011000000100000','000000011111000000000000000000000010000000000000000000000111100000000000001111000000000000100000','000000000001000000000000000000000010000000000000000000000111100000000000001111000000000000100000','000000000001111000000000000000000011000000000000000000000100000000000000000000000000000001100000','000000000000001000000000000000000011100000000000000000000100000000000000001111000000000001000000','000000000000001001000000000000000011110000000000000000000100000000000000011001111000000001000000','000000000000001000000000000011000011111100000000000000000100000000000000010000001111000001000000','000000000000001000000000000011000001111110000000000000000100000000000000010000000001100111000000','000000000000001100000000000000000000111111000001100000001100000000000000010000000000111100000000','000000000000000100000000000000000000111111000001111111111100000000000000010000000000000000000000','000000000000000100000000000000000000001111000001111011100100000001000000010000000000000000000000','000000000000000100000000000000000000000011000001100000000100000000000000010000110000000000000000','000000000000000100000000000000000000000011000001100000011100000000000000010000110000000000000000','000000000000000100000000000000000000000000000000111111110000000000000000011000000000000000000000','000000000000000100000000000000000000000000000000000000000000000000000000001000000000000000000000','000000000000000100000000000000000000000000000000000000000000000000000000001000000000000000000000','000000000000000100000110000000000000000000000000000000110000000000000000001000000000000000000000','000000000000000100000110000000000000000000000000000000110000000000000000001000000000000000000000','000000000000001100000110000000000000000000000000000000000000000000000011001000000000000000000000','000000000000001000000110000000000000000000000000000000000000000000000011001100000000000000000000','000000000000001000000000000000000000000000000000000000000000000000000011000100000000000000000000','000000000000001000000000000000000000000000000000000000000000000000000011000100000000000000000000','000000000000001000000000000000000000000000000000000000000001000000000000000100000000000000000000','000000000000111000000000000000000000000000000000000000000000000000000000000111110000000000000000','000000000011100000000000000000000000000000000011110000000000000000000000000000010000000000000000','000000001110000000000000000001000000000000000011110000000000000000000000000000011100000000000000','000000001000000000000000000000000000000000000000000000000000000000000000000000000100000000000000','000000001000000000111111110000000000000000000000000000000000000000000000000000000100000000000000','000000001000000011100000011100000000000000000000000000000000000000111111111111100100000000000000','000000011000001110000000000100000000000111100000000000000000001111100000000000111100000000000000','000000010000001010000000000100000000000111100000000000000000001000000000000000001100000000000000','000000010000001000000000000100000000000111100000000000000000011000000000000000000111000000000000','000000010000001000000000000100000000000000000000000000000000010000000000000000000101010000000000','000000010000001000000000000100000000000000000000000000000000010000000000000000000101110000000000','000000011100001110000000111100000000000000000000000000000000010000000000000000000100111000000000','000000000100000010000000100000000000000000000000000000000000010000000000000000000100011000000000','000000000100000010000000100000000000000000000000000000110000010000000000000000000100011000000000','000000000100000010000000100000000110000000000000000000110000011110000000000000000100011000000000','000000000100000011111111100000000110000000000000000000000000000010000000000000000100001000000000','000000000100000000000000000000000000000000000000000000000000000010000000000000011100001000000000','000000000100000000000000000000000000000000000000000000000000000010000000000000010000011000000000','000000000100000000000000000000000000000000000110000000000000000010000000000000010000010000000000','000000000100000000000000000000000000000010000110000000000000000010000000000000010000010000000000','000000000100000000000000000000000000000000000000000110000000000011111111111111110000010000000000','000000000111111100000000000000000000000000000000000000000000000000000000110000000000010000000000','000000000000000100000000000000000000000000000000000000000000000000110000110111100000010000000000','000000000000000110000000000000000000000000000000000000000000000000000000000111100000010000000000','000000000000000010000000000000000000000000000000000000000000000000000000000000000000010000000000','000000000000000010000000000000000000000000000000000000000000000000000000000000000000010000000000','000000000000000011000000000000000000000000000000000000000000000000000000000000000000110000000000','000000000000000001000000000000000000000000000000000000000000000000000000000000000000100000000000','000000000000000001000000000000000000000000000000000011000000000000011110000000000111100000000000','000000000000000001100000000000000000000000000000000011000000001111011110000000000100000000000000','000000000000000000100000000000000000000000011111000000000000001111000000000000000100000000000000','000000000000000000100000000001111111111000010001110000000000000000000000000000111100000000000000','000000000000000000111000000001000000001000010000011111111111111111110000000000100000000000000000','000000000000000000001000000001000000001111110000000000000000000000011000111111100000000000000000','000000000000000000001111111111000000000000000000000000000000000000001111100000000000000000000000','000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000']
m.lvl = 0;
var a = m.addon.main = {};
a.load = function(map,spot,v){
	
}

a.loop = function(map,spot,v){
	
}


a.variable = {
	atk:{'type':"bullet",'angle':15,'amount':1, 'aim': 0,'objImg':{'name':"iceshard",'sizeMod':1},'hitImg':{'name':"coldHit",'sizeMod':0.5},
		'dmg':{'main':1,'ratio':{'melee':0,'range':10,'magic':80,'fire':10,'cold':0,'lightning':0}}},	
};
exports.map = function(){ return m; }
		
		