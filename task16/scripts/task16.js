/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var oCity = document.getElementById("aqi-city-input").value;
  var oAqi = document.getElementById("aqi-value-input").value;
  var trimCity = oCity.trim();
  var resultCity = trimCity.match(/^[a-zA-Z\u4E00-\u9FA5]+$/);
  if(!resultCity){
    alert("城市名只能包含英文和中文");
    return;
  }
  if(!oAqi.match(/^[0-9]+$/)){
      alert("城市名只能包含英文和中文");
      return;

    }
  aqiData[trimCity] = oAqi;

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var oTable = document.getElementById("aqi-table");
  oTable.innerHTML = "";
  for (var name in aqiData){
    var aqiValue = aqiData[name];
    var oTr = oTable.getElementsByTagName("tr");
    if(oTr[0] == undefined && aqiValue!= ''){
      var th = document.createElement("tr");
      var oth = "<td>" + "城市" + "</td><td>" + "空气质量" + "</td><td>" + "操作" + "</td>";
      th.innerHTML = oth;
      oTable.appendChild(th);
    }
    var newLine = document.createElement("tr");
    // if(validateCity){
      var newTd = "<td>" + name + "</td><td>" + aqiValue + "</td><td><button>" + "删除" + "</button></td>";
      newLine.innerHTML = newTd;
      oTable.appendChild(newLine);
    // }
  }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
  // do sth.
  var tr = target.parentElement.parentElement;
  var content = tr.firstChild.innerHTML;
  delete aqiData[content];

  renderAqiList();
  
}

function init() {
  document.getElementById("add-btn").onclick = addBtnHandle;
  var table = document.getElementById("aqi-table");
  table.addEventListener("click",function(e){
    if(e.target && e.target.nodeName == 'BUTTON'){
      console.log(e.target)
      delBtnHandle(e.target)
    }
  })
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}
//document.getElementById("add-btn").onclick = addBtnHandle;
init();