
(function () {
	window.onload=function () {
		var video = document.getElementsByTagName("video")[0]
		var cav = document.getElementsByTagName("canvas")[0]
		var cavWidth = 800 
		var cavHeight = 420
		cav.width=cavWidth
		cav.height=cavHeight 
		var ctx = cav.getContext("2d")
		var capObjs = []
		var lastItemTime
		var capHeight = 20 
		var inputEle = document.getElementsByClassName("caption-input-text")[0]
		var sendEle = document.getElementsByClassName("caption-sendButton")[0]
		var colorUl = document.getElementsByClassName("colorItems")[0]
		var ismoveInputEle = document.getElementsByClassName("caption-input-ismove")[0]
		var colors=["#fff","#FFCCCC","#CCFFCC","#CCCCFF","#FFFFCC","#CCFFFF"]
		var selectedColorIndex = 0
		var prevPlayTime = 0
		var testArrayCopy = []
//test data
var testArray = [{content:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",time:"1",ismove:false,colorIndex:0},
{content:"233333333333333",time:"2",ismove:true,colorIndex:0},
{content:"干杯，哈哈哈~~~~~~",time:"2",ismove:true,colorIndex:5},
{content:"干杯，哈哈哈~~~~~~",time:"2",ismove:true,colorIndex:4},
{content:"干杯，哈哈哈~~~~~~",time:"2",ismove:true,colorIndex:4},
{content:"干杯，哈哈哈~~~~~~",time:"2",ismove:true,colorIndex:0},
{content:"干杯，哈哈哈~~~~~~",time:"2",ismove:true,colorIndex:0},
{content:"233333333333333",time:"3",ismove:true,colorIndex:0},
{content:"233333333333333",time:"3",ismove:true,colorIndex:0},
{content:"233333333333333",time:"3",ismove:true,colorIndex:0},
{content:"233333333333333",time:"3",ismove:true,colorIndex:0},
{content:"233333333333333",time:"3",ismove:true,colorIndex:0},
{content:"233333333333333",time:"3",ismove:true,colorIndex:0},
{content:"233333333333333",time:"4",ismove:false,colorIndex:0},
{content:"233333333333333",time:"5",ismove:true,colorIndex:4},
{content:"233333333333333",time:"6",ismove:true,colorIndex:2},
{content:"233333333333333",time:"7",ismove:true,colorIndex:2},
{content:"233333333333333",time:"7",ismove:true,colorIndex:2},
{content:"233333333333333",time:"7",ismove:true,colorIndex:2},
{content:"233333333333333",time:"7",ismove:true,colorIndex:2},
{content:"233333333333333",time:"7",ismove:true,colorIndex:2},
{content:"233333333333333",time:"7",ismove:true,colorIndex:2},
{content:"233333333333333",time:"8",ismove:true,colorIndex:0},
{content:"233333333333333",time:"9",ismove:true,colorIndex:0},
{content:"233333333333333",time:"10",ismove:true,colorIndex:0},
{content:"老师说的非常好，我要好好学习了》》》》",time:"12",ismove:true,colorIndex:0},
{content:"老师说的非常好，我要好好学习了》》》》",time:"13",ismove:true,colorIndex:0},
{content:"老师说的非常好，我要好好学习了》》》》",time:"14",ismove:true,colorIndex:2},
{content:"老师说的非常好，我要好好学习了》》》》",time:"15",ismove:false,colorIndex:0},
{content:"老师说的非常好，我要好好学习了》》》》",time:"16",ismove:true,colorIndex:2},
{content:"老师说的非常好，我要好好学习了》》》》",time:"17",ismove:true,colorIndex:3},
{content:"老师说的非常好，我要好好学习了》》》》",time:"18",ismove:true,colorIndex:2},
{content:"老师说的非常好，我要好好学习了》》》》",time:"19",ismove:true,colorIndex:0},
{content:"老师说的非常好，我要好好学习了》》》》",time:"20",ismove:true,colorIndex:3},
{content:"老师说的非常好，我要好好学习了》》》》",time:"21",ismove:true,colorIndex:0},
{content:"老师说的非常好，我要好好学习了》》》》",time:"22",ismove:true,colorIndex:0},
{content:"老铁们，小礼物走一波了，小汽车小火箭刷起来吧=========",time:"23",ismove:true,colorIndex:0},
{content:"老铁们，小礼物走一波了，小汽车小火箭刷起来吧=========",time:"24",ismove:true,colorIndex:0},
{content:"老铁们，小礼物走一波了，小汽车小火箭刷起来吧=========",time:"25",ismove:true,colorIndex:3},
{content:"老铁们，小礼物走一波了，小汽车小火箭刷起来吧=========",time:"26",ismove:true,colorIndex:0},
{content:"老铁们，小礼物走一波了，小汽车小火箭刷起来吧=========",time:"27",ismove:true,colorIndex:5},
{content:"老铁们，小礼物走一波了，小汽车小火箭刷起来吧=========",time:"28",ismove:false,colorIndex:5},
{content:"老铁们，小礼物走一波了，小汽车小火箭刷起来吧=========",time:"29",ismove:true,colorIndex:5},
{content:"老铁们，小礼物走一波了，小汽车小火箭刷起来吧=========",time:"30",ismove:true,colorIndex:5},
{content:"马上就下课了，瓦罗蓝大陆走起了～～～",time:"31",ismove:true,colorIndex:5},
{content:"马上就下课了，瓦罗蓝大陆走起了～～～",time:"32",ismove:true,colorIndex:2},
{content:"马上就下课了，瓦罗蓝大陆走起了～～～",time:"33",ismove:true,colorIndex:2},
{content:"马上就下课了，瓦罗蓝大陆走起了～～～",time:"33",ismove:true,colorIndex:5},
{content:"马上就下课了，瓦罗蓝大陆走起了～～～",time:"34",ismove:true,colorIndex:5},
{content:"马上就下课了，瓦罗蓝大陆走起了～～～",time:"35",ismove:true,colorIndex:5},
{content:"马上就下课了，瓦罗蓝大陆走起了～～～",time:"36",ismove:true,colorIndex:2},
{content:"马上就下课了，瓦罗蓝大陆走起了～～～",time:"37",ismove:true,colorIndex:2}]
		// var testArray = [{content:"233333333333333",time:"1"},
		// 				{content:"老师说的非常好，我要好好学习了》》》》",time:"12"},
		// 				{content:"老铁们，小礼物走一波了，小汽车小火箭刷起来吧=========",time:"23"}]
		// console.log(testArray)
		// setInterval(function () {
		// 	console.log(video.currentTime)
		// },500)
		// testArrayCopy = testArray
		copyArray(testArray , testArrayCopy)
		function Caption( x , y , ismove , spe , col , text ) {
			this.top = y || 20
			this.left = x || cavWidth
			this.isMove = ismove
			this.speed = spe
			this.color = col || "#ff0"
			this.content = text
			this.latestTime = 0 
		}
		Caption.prototype.init = function () {
			
		}
		Caption.prototype.moving = function () {
			if (this.isMove) {
				this.left-=this.speed
			} 
			else{
				this.latestTime += 1
			}
		}
		Caption.prototype.dispose = function () {
			
		}
		// Caption.prototype.getLeftValue = function(){
			
		// };

		var cap1 = new Caption( 0 , 400 , true , 1 , 0 , "小礼物走一波，双击6666。。。。")
		capObjs.push(cap1)
		// console.log(cap1)

		function drawAllText () {
			ctx.clearRect( 0 , 0 , cavWidth , cavHeight)
			ctx.beginPath()
			for(var i=0 , len = capObjs . length ; i < len ; i++ ){
				// console.log(capObjs[i])+
				ctx.fillStyle = capObjs[i].color
				ctx.font = "bold 20px Courier New"
				ctx.fillText( capObjs[i].content , capObjs[i].left , capObjs[i].top )
				ctx.closePath()
				capObjs[i].moving()
				// if (capObjs[i].left < - cavWidth ) {
					// capObjs.splice (i ,1)
					// if excute this statement , will has fault because some item in array is null
					// solution is : write a new function to refresh the array   
				// }
				// console.log(capObjs)
			}
		}

		function refreshObjs(objs) {
			for (var i = objs.length - 1; i >= 0; i--) {
				if (objs[i].left < - cavWidth || objs[i].latestTime > 450 ) {
					objs.splice(i , 1)
				}

			}
		}

		function updateArray () {
			var now = parseInt( video.currentTime )
			for (var i = testArray.length - 1; i >= 0; i--) {
				var nowItemTime = parseInt(testArray[i].time) 
				if ( nowItemTime == now ) {
					var nowItemLeft = getLeftValue(testArray[i])
					
					var diffTime = Math.abs(nowItemTime - lastItemTime)
					if (diffTime < 6) { 
						capHeight += 30
						capHeight = capHeight > 400 ? 20 : capHeight
					}	
					var temcolor = colors[testArray[i].colorIndex]
					var temcap = new Caption ( nowItemLeft , capHeight , testArray[i].ismove , 1 , temcolor , testArray[i].content  )
					// console.log(temcolor)
					capObjs.push(temcap)
					temcap = null
					lastItemTime = parseInt(testArray[i].time)
					testArray.splice(i,1)
					console.log(testArray.length +">" +testArrayCopy.length)
				}
			}
		}

		function sendCaption (argument) {
			var inputEleTxt = inputEle.value
			var now = parseInt( video.currentTime )
			var inputIsmoveValue = ismoveInputEle.checked
			var temObj = {content:inputEleTxt,time:now,ismove:inputIsmoveValue,colorIndex:selectedColorIndex}
			// testArray.push(temObj)
			// var temcap = new Caption ( 0 , capHeight , inputIsmoveValue , 1 , colors[selectedColorIndex] , inputEleTxt)

			testArray.push(temObj)
			inputEle.value = ""
		}
		function getLeftValue (obj) {
			if (obj.ismove) {
				return 0
			}
			else {
				var contentLength = obj.content.length
				var nowItemLeft = 420 - contentLength * 9
				return nowItemLeft
			}
		}

		function reinitCav (argument) {
			// testArray = testArrayCopy
			copyArray(testArrayCopy , testArray)
			capObjs = []
			capHeight = 0
			clearInterval(canvasTimer)
			initCanvas()
		}
		function getTopValue (argument) {
			
		}

		var canvasTimer = null 

 		function initCanvas () {
				canvasTimer = setInterval(function (argument) {
					drawAllText()
					updateArray()
					refreshObjs(capObjs)
					// console.log(capObjs)
					// console.log(video.currentTime)
			},10)
		}//end function initCanvas

		function copyArray (arr1 , arr2) {
			for (var i =0 , len=arr1.length ; i < len ; i++) {
					arr2[i] = arr1[i]
				}	
		}

		//color select event
		colorUl.addEventListener("click", function( e ){
			var prevSelectItemId = ""
			switch (selectedColorIndex) {
				case 0:
					prevSelectItemId = "colorItemFrist"
					break;
				case 1:
					prevSelectItemId = "colorItemSecond"
					break;
				case 2:
					prevSelectItemId = "colorItemThrid"
					break;
				case 3:
					prevSelectItemId = "colorItemFourth"
					break;
				case 4:
					prevSelectItemId = "colorItemFifth"
					break;
				case 5:
					prevSelectItemId = "colorItemSixth"
					break;
				default:
					// statements_def
					break;
			}
			var prevSelectItem = document.getElementById(prevSelectItemId)
			prevSelectItem.className = ""
			var eventTarget = e.target
			eventTarget.className = "selectedColor"
			var eveTarId = eventTarget.id.substring(9)
			switch (eveTarId) {
				case "Frist":
					selectedColorIndex = 0
					break;
				case "Second":
					selectedColorIndex = 1
					break;
				case "Thrid":
					selectedColorIndex = 2
					break;
				case "Fourth":
					selectedColorIndex = 3
					break;
				case "Fifth":
					selectedColorIndex = 4
					break;
				case "Sixth":
					selectedColorIndex = 5
					break;
				default:
					// statements_def
					break;
			}
		}, false)
		video.addEventListener("playing" , function () {
			initCanvas()
		})
		video.addEventListener("timeupdate", function  () {
			// reinitCav()
			var nowPlayTime = video.currentTime
			var diffTime = Math.abs(nowPlayTime - prevPlayTime)
			prevPlayTime = nowPlayTime
			if (diffTime > 1) {
				console.log(diffTime)
				reinitCav()
			}
		}, false)
		video.addEventListener("pause" , function () {
			clearInterval(canvasTimer)
		})
		sendEle.addEventListener("click" , sendCaption)
		inputEle.addEventListener("keydown", function(e) {
			var keynum = 0
			keynum = window.event ? e.keyCode : e.which
			if (keynum == 13) {
				sendCaption()
			}
		})



	}//end
})()