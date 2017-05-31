
var hasParamLinks = document.getElementsByClassName("hasParamLink")
var hideForm = document.createElement("form")

hideForm.style.display="none"
for (var i = hasParamLinks.length - 1; i >= 0; i--) {
	hasParamLinks[i].addEventListener("click",function (e) {
		e.preventDefault()
		var value = this.innerHTML
		var input = document.createElement("input")
		input.setAttribute("type" , "hide")
		input.setAttribute("name" , "fname")
		input.setAttribute("value" , value)
		hideForm.appendChild(input)
		hideForm.submit()
	})
}