var val,flag=false;
var res = {
	"arr":[],
	"delay":10,
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
			res.arr.push(value)
			render()
		}
	},
	"rank":function(){
		// var flag = false;
		var delay = document.getElementById("speed").value;
		console.log(delay)

		if(delay){
			res.delay = delay;
		}
		var valueList = res.arr;
		var i=0,j=1;
		if(flag==false && valueList.length>0){
			var timer = setInterval(function(){
				flag = true;
				if(valueList[i]>valueList[i+1]){
					temp = valueList[i];
					valueList[i] = valueList[i+1];
					valueList[i+1] = temp;
				}
				render(i)
				++i;
				
				if(i == res.arr.length-j){
					i = 0;
					++j;
				}
				if(j==res.arr.length){
					flag = false;
					clearInterval(timer)
					render()
				}
			},res.delay)
		}else if(flag==true){
			alert("正在排序")
		}
		// while (count<50){
		// 	for(var i=0;i<res.arr.length;i++){
		// 		if(valueList[i]>valueList[i+1]){
		// 			temp = valueList[i];
		// 			valueList[i] = valueList[i+1];
		// 			valueList[i+1] = temp;
		// 		}
		// 	}
		// 	count += 1 ;
		// 	render()
		// }
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
	var getVal = getDisplay.getElementsByTagName("div");
	if(val>-1 && val<49){
		getVal[val].style.background="green";
		getVal[val+1].style.background="green"
	}
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
