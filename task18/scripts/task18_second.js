var res = {
	"arr":[],
	"left-in":function(){
		var value = document.getElementById("input").value;
		res.arr.unshift(value);
		render();
	},
	"right-in":function(){
		var value = document.getElementById("input").value;
		res.arr.push(value);
		render()
	},
	"left-out":function(){
		res.arr.shift()
		render()
	},
	"right-out":function(){
		res.arr.pop()
		render()
	}

}

var getButton = document.getElementsByTagName("button");
for(var i=0;i<getButton.length;i++){
	console.log(res['abc'])
	getButton[i].onclick = res[getButton[i].id]
}
// var getDisplay = document.getElementById("display-area");
// var getDiv = getDisplay.getElementsByTagName("div");
// for(var i=0;i<getDiv.length;i++){
// 	index = i;

// 	getDiv[i].onclick = function(){
// 		alert('click')
// 		res.arr.splice(index,1)
// 	}
// }
function render(){
	var str=""
	var getDisplay = document.getElementById("display-area");
	for(var i=0;i<res.arr.length;i++){
		str += "<div>" + res.arr[i] + "</div>"
	}
	getDisplay.innerHTML = str;
	var getDisplay = document.getElementById("display-area");
	var getDiv = getDisplay.getElementsByTagName("div");
	for(var i=0;i<getDiv.length;i++){
	getDiv[i].onclick = function(){
		console.log(getDiv.indexOf(getDiv[i]))
		console.log(i)
		res.arr.splice(i,1)
		render()
	}
}
}
