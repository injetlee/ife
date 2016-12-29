var res = {
	"arr":[],
	"right-in":function(){
		var value = document.getElementById("input").value;

	}
}

var getButton = document.getElementsByTagName("button");
for(var i=0;i<getButton.length;i++){
	getButton[i].onclick = res[getButton[i].id]
}

function render(val){
	var str=""
	var getDisplay = document.getElementById("display-area");
	if(res.arr.length>60){
		alert("当前已经有"+ res.arr.length + "个元素")
	}
	for(var i=0;i<res.arr.length;i++){
		str += "<div>" + res.arr[i] + "</div>"
	}
	getDisplay.innerHTML = str;
	var getDisplay = document.getElementById("display-area");
	var getDiv = getDisplay.getElementsByTagName("div");
	for(var i=0;i<getDiv.length;i++){
		getDiv[i].onclick = function(){
		alert(this.innerHTML)
		getDisplay.removeChild(this)

		}
	}
}
