function getButton(){
	var getButton = document.getElementsByTagName("button");
	for(var i=0;i<getButton.length;i++){
		getButton[i].addEventListener("click",showmessage);
	}
}

function showmessage(){
	var getOperation = this.getAttribute("id");
	var getValue = document.getElementById("input");
	var getDisplay = document.getElementById("display-area");
	var addDiv = document.createElement("div");
	addDiv.onclick = function(){
		getDisplay.removeChild(this)

	}
	addDiv.innerHTML = getValue.value;
	console.log(getOperation)
	if(getOperation == "left-in"){
		getDisplay.insertBefore(addDiv,getDisplay.childNodes[0]);
	}
	if(getOperation == "right-in"){
		getDisplay.appendChild(addDiv);
	}
	if(getOperation == "left-out"){
		alert(getDisplay.childNodes[0].innerHTML);
		getDisplay.removeChild(getDisplay.childNodes[0]);
	}
	if(getOperation == "right-out"){
		alert(getDisplay.lastChild.innerHTML)
		getDisplay.removeChild(getDisplay.lastChild)
	}
}

getButton()