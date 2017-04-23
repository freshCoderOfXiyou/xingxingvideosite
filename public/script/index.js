!function () {
	window.onload=function  () {
		//define global variable
		var $banner = $(".banner-imgs-img")
		var $loadCover = $(".load-cover")

		// define function
		function imagesmove ($node) {
			// body... 
			var imagesCount=$node.children('a').length
			var imageWidth=$node.width()
			var singleImageWidth=$node.find('img').width()
			var lastImageLeft=-singleImageWidth*(imagesCount-1)
			var nowIndex=0
			var oldIndex=1
			$('#bt1').css("background",'rgba(255,255,255,0.8)')
			window.setInterval(function () {
				var imagesCount=$node.children('a').length
				var imageWidth=$node.width()
				var singleImageWidth=$node.find('img').width()
				var lastImageLeft=-singleImageWidth*(imagesCount-1)
				var nowLeft=parseInt($node.css('left'))
				var nextLeft=nowLeft-singleImageWidth
				nowIndex=-nowLeft/singleImageWidth

				//image move
				if (nextLeft<=lastImageLeft) {
					$node.css('left',-singleImageWidth+'px')
				}else{
					$node.css('left',nextLeft+'px')
				}

				//buttons move
				$("#bt"+oldIndex).css('background','rgba(10, 10, 10, 0.58)')
				switch (nowIndex) {
					case 1:
						$('#bt2').css("background",'rgba(255,255,255,0.8)')
						oldIndex=2
						break;
					case 2:
						$('#bt3').css("background",'rgba(255,255,255,0.8)')
						oldIndex=3
						break;
					case 3:
						$('#bt4').css("background",'rgba(255,255,255,0.8)')
						oldIndex=4
						break;
					case 4:
						$('#bt5').css("background",'rgba(255,255,255,0.8)')
						oldIndex=5
						break;
					case 5:
						$('#bt1').css("background",'rgba(255,255,255,0.8)')
						oldIndex=1
						break;
					default:
						// statements_def
						break;
				}
			}, 3000)
		}//end function imagesmove

		//excatu function
		imagesmove($banner)


	//event listener section
	$(".header-right-loadbtn").bind("click" ,function  () {
		$loadCover.css("display" , "block")
	})
	$(".load-close-btn").bind("click", function () {
		$loadCover.css("display" , "none")
		$("#load-choose-load").click()
		
	})	
	$(".header-right-registerbtn").bind("click" ,function  () {
		$loadCover.css("display" , "block")
		$(".load-choose-scan").click()
	})
	$(".load-cover").bind("click", function (e) {
		console.log(e.target.className)
		var targetClass = e.target.className
		if (targetClass == "load-cover") {
			$loadCover.css("display" , "none")
		}
	})	



	}//the all end	
}()