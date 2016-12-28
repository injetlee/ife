var res = {
	"arr":[],
	"left-in":function(){
		var value = document.getElementById("input").value;
		pattern = /^[0-9]+$/;
		if(pattern.test(value)){
			res.arr.unshift(value);
			render();
		}else{
			alert("请输入数字");
		}
	},
	"right-in":function(){
		var value = document.getElementById("input").value;
		pattern = /^[0-9]+$/
		if(pattern.test(value)){
			res.arr.push(value);
			render();
		}else{
			alert("请输入数字");
		}
	},
	"left-out":function(){
		alert(res.arr.shift());
		render();
	},
	"right-out":function(){
		alert(res.arr.pop());
		render();
	},
	"random":function(){
		res.arr = []
		for(var i=0;i<50;i++){
			var value = Math.floor(Math.random()*100)
			console.log(value)
			res.arr.push(value)
			render()
		}
	},
	"rank":function(){
		valueList = res.arr;
		console.log('cccc'+valueList)
		count = 1;
		while (count<50){
			for(var i=0;i<res.arr.length;i++){
				if(valueList[i]>valueList[i+1]){
					temp = valueList[i];
					valueList[i] = valueList[i+1];
					valueList[i+1] = temp;
				}
			}
			count += 1 ;
			render()
		}
	}
}

var getButton = document.getElementsByTagName("button");
for(var i=0;i<getButton.length;i++){
	getButton[i].onclick = res[getButton[i].id]
}

function render(){
	console.log('bbv')
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
		getDiv[i].style.height= parseInt(getDiv[i].innerHTML)*5 +'px'
		getDiv[i].onclick = function(){
		alert(this.innerHTML)
		getDisplay.removeChild(this)

		}
	}
}
