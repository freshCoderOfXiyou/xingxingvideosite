!function () {
	// alert(1)
	var $loadCover = $(".load-cover")

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