!function () {
		var $conSendBtn = $(".video-conver-sendBtn")
		var $conSendTxt = $(".video-conver-sendTxt")
		var $conMain = $(".video-conver-main")
		var $direcBtn=$(".video-directory-btn")
		var $direcUl = $(".video-directory")
		var $loadCover = $(".load-cover")
		var ulVisible = true
		var conMainEle = document.getElementsByClassName("video-conver-main")[0]
		var myHeaderSrc = "./images/pc/index/usr3.jpg"
		var myName = "汉东网警"

		// create ele and append to the parent , add a record to conversiton area 
		// @param1:userHeaderSrc , string , path for the img
		// @param2:userName , string ,name of the user
		// @param3:my , boolean , mean is or not from me
		// @param4:txt , string , the text of the conversition
		function sendConver(userHeaderSrc , userName , my , txt) {
			// body...
			var conSin =  document.createElement("div")
			conSin.classList.add("video-conver-sin")

			var userHeaderDiv = document.createElement("div")
			userHeaderDiv.classList.add("video-converSin-usrheader")

			var userHeaderImg = document.createElement("img")
			userHeaderImg.setAttribute("src", userHeaderSrc)

			userHeaderDiv.appendChild(userHeaderImg)
			conSin.appendChild(userHeaderDiv)

			var userContentDiv = document.createElement("div")
			userContentDiv.classList.add("video-converSin-con")

			var userContentNameSpan = document.createElement("span")
			userContentNameSpan.classList.add("vieo-converSin-username")

			userContentNameSpan.innerText = userName
			userContentDiv.appendChild(userContentNameSpan)

			var userConTxtDiv = document.createElement("div")
			userConTxtDiv.classList.add("video-converSin-text")
			userConTxtDiv.innerText = txt

			if (my) {
				conSin.classList.add("video-conver-mymessage")
			}
			userContentDiv.appendChild(userConTxtDiv)
			conSin.appendChild(userContentDiv)

			var converMainDiv = document.getElementsByClassName("video-conver-main")[0]
			converMainDiv.appendChild(conSin)
			// console.log(conSin)
		}

		//scoll to the bottom of area
		function scrollToBottom (argument) {
			// body... 
			// var height = $conMain.css("height")
			var height = parseInt($conMain.css("height"))
			var scrollTopValue = conMainEle.scrollTop
			var scrollHeightValue = conMainEle.scrollHeight
			var moveLength = scrollHeightValue - height - scrollTopValue
			var diff = scrollHeightValue - height 
			if (moveLength > 0) {
				var timer = setInterval(function () {
					scrollTopValue = conMainEle.scrollTop
					scrollTopValue++
					conMainEle.scrollTop = scrollTopValue
					moveLength = scrollHeightValue - height - scrollTopValue
					if (moveLength < 0) {
						clearInterval(timer)
					} 
				},3)
			}
		}


		scrollToBottom()


		//event listener section
		$conSendBtn.bind("click" , function  () {
			var mytext = $conSendTxt.val()
			sendConver(myHeaderSrc , myName , true , mytext)
			$conSendTxt.val("")
			console.log(mytext)
			scrollToBottom()
		})
		$direcBtn.bind("click", function () {
			if (ulVisible) {
				$direcUl.css("display" , "none")
				ulVisible = false
				$(this).removeClass("glyphicon-eye-close")
				$(this).addClass("glyphicon-eye-open")
			}
			else {
				$direcUl.css("display" , "block")
				ulVisible = true
				$(this).removeClass("glyphicon-eye-open")
				$(this).addClass("glyphicon-eye-close")
			}
		})

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
	
}()