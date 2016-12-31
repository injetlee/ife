var res = {
	"arr":[],
	"tagarr":[],
	"insert":function(){
		var value = document.getElementById("input").value.trim();
		res.arr = value.split(/[^0-9A-Za-z_u4E00-\u9FA5]+/);
		if(res.arr.length>10){
			var length = res.arr.length;
		for(var i=0;i<length-10;i++){
			console.log(res.arr.shift())
		}
	}	var getDisplay = document.getElementById("display-area");
		render(getDisplay,res.arr)
	},
	"tag-input":function(){
		var value = this.value;
		var pattern = /[^'0-9A-Za-z_u4E00-\u9FA5]+/;
		if (pattern.test(value)){
			var newPattern = /([0-9A-Za-z_u4E00-\u9FA5]+)/
			var testData = newPattern.exec(value)
			if(testData){
			res.tagarr.push(value)
			console.log(testData[0])

			}
			this.value=null
			var getTag = document.getElementById("display-tag")
			render(getTag,res.tagarr)
			//console.log('haha')
		}
	}

}
var getInput = document.getElementById("tag-input");
getInput.oninput = res[getInput.id]
var getButton = document.getElementsByTagName("button");
for(var i=0;i<getButton.length;i++){
	getButton[i].onclick = res[getButton[i].id]
}

function render(id,val){
	var str=""
	

	for(var i=0;i<val.length;i++){
		str += "<div><span class='delete'>"+"删除"+"</span>" + val[i] + "</div>"
	}
	id.innerHTML = str;
	var getDiv = id.getElementsByTagName("div");
	for(var i=0;i<getDiv.length;i++){
		getDiv[i].onclick = function(){
			id.removeChild(this)
		}
	}
}
