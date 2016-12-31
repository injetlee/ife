var res = {
	"arr":[],
	"insert":function(){
		var value = document.getElementById("input").value.trim();
		var result = value.split(/[^0-9A-Za-z_u4E00-\u9FA5]+/);
		for (i in result){
			res.arr.push(result[i])
		}
		render()
	},
	"search":function(){
		var keyword = document.getElementById("keyword").value;
		render(keyword)
	}
}

var getButton = document.getElementsByTagName("button");
for(var i=0;i<getButton.length;i++){
	getButton[i].onclick = res[getButton[i].id]
}

function render(val){
	var str=""
	var getDisplay = document.getElementById("display-area");
	for(var i=0;i<res.arr.length;i++){
		if(val){
			var resDisplay = res.arr[i];
			str += "<div>" + resDisplay.replace(new RegExp(val,"g"),"<span class='select'>"+val + "</span>") + "</div>";
		}else{
			str += "<div>" + res.arr[i] + "</div>"
		}
	}
	getDisplay.innerHTML = str;
}
