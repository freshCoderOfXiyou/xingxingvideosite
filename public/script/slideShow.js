/*
	@desnitanion:an object construction which for the slide show in the page
	@param: an object , should has these attributes:
	attributes1:the div element which is the parent node of images , $imgs
	attributes2:the ul element which is the parent node of btns ,$btns
	attributes3:the btn element which for sliding to left
	attributes4:the btn element which for sliding to right
	attributes5:the slide special,value could be : nospecial , slide , easyinout
	attributes6:the time  
	these attrubutes from 2 to 6 could be omit
*/
function SlideShow(arg) {
	this.imgs = arg.imgs
	this.btns = arg.btns || null
	this.toLeft = arg.toLeft || null
	this.toRight = arg.toRight || null
	this.special = arg.special || "nospecial"
	this.time = arg.time || 5000
	this.timer = null
	this.imgsNumber = 0
	this.imgsWidth = 0
}
SlideShow.prototype.nospecialMove = function(argument){
	//body...
};
SlideShow.prototype.slideMove = function(argument){
	// body... 
};
SlideShow.prototype.easyinoutMove = function(argument) {
	// body...
};
SlideShow.prototype.getLiIndex = function(argument){
	// body... 
};
SlideShow.prototype.getEleByIndex = function(argument){
	// body... 
};
SlideShow.prototype.setImgNumber = function(argument){
	// body... 
};
SlideShow.prototype.setImgsWidth = function(argument){
	// body... 
};