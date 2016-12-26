/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};
// var toJson = JSON.stringify(aqiSourceData,null,4);
// console.log(toJson)
// console.log(aqiSourceData["北京"])
// var testData = randomBuildData(600);
// console.log(testData)

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity:"北京",
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
  console.log(pageState.nowGraTime);
  console.log(pageState.nowSelectCity);
  var city = pageState.nowSelectCity;
  var time = pageState.nowGraTime;
  console.log(time+'haha')
  initAqiChartData()
  var getInsertLocation = document.getElementsByClassName("aqi-chart-wrap")[0];
  var count = 0;

  if(time == "day"){
    getInsertLocation.innerHTML = ""
    //time = "北京";
    //getInsertLocation.style.position = "relative";
    for(var name in chartData[city]){
      count++;
      var addLi = document.createElement("li");
      addLi.setAttribute("title",name+':'+chartData[city][name])

      getInsertLocation.appendChild(addLi);
      addLi.style.height = chartData[city][name];

    }
  }else if(time != "day"){
    getInsertLocation.innerHTML = "";
    for(var name in chartData[time]){
      count++;
      var addLi = document.createElement("li");
      getInsertLocation.appendChild(addLi);
      addLi.setAttribute("title","第"+count+ time + ' ' + ':'+chartData[time][name])
      addLi.style.height = chartData[time][name];


    }
  }
  var getLi = document.getElementsByTagName("li");
  for(var i=0;i<getLi.length;i++){
    getLi[i].style.width = Math.floor(900/count);
    getLi[i].style.backgroundColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 

  // 设置对应数据

  // 调用图表渲染函数
  if(this.value){
    pageState.nowGraTime = this.value;
  }
  renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
  // 设置对应数据
  if(this.value){
      chartData = {}

    pageState.nowSelectCity = this.value; 
  }
  var time = initGraTimeForm()
  // 调用图表渲染函数
  renderChart()
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  var getRadio = document.getElementsByTagName("input");
  for(var i=0;i<getRadio.length;i++){
    getRadio[i].onclick = graTimeChange;
  }


}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项

  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  var option = ""
  var getSelect = document.getElementById("city-select");
  for(name in aqiSourceData){    
    option += "<option>" + name + "</option>";
  }
  getSelect.innerHTML = option;
  getSelect.onchange = citySelectChange;
  
}
/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  // var toJson = JSON.stringify(aqiSourceData,null,4);
  // chartData = toJson;
  // console.log(chartData)
  console.log('gggg')
  var dayAqi = aqiSourceData[pageState.nowSelectCity];
  chartData[pageState.nowSelectCity] = dayAqi;
  console.log(dayAqi)
  // console.log(dayAqi);
  //var weekAqi = dayAqi.length;
 var count = 0;
 var countDay =0;
 var weekAqi;
 var sumWeek = 0;
var weekNum = 1;
var weekResult = {};
  for(var name in dayAqi){
    var date = new Date(name);
    countDay += 1;
    sumWeek += dayAqi[name];
    if(date.getDay() == 0){
      weekAqi = Math.floor(sumWeek/countDay);
      countDay = 0;
      sumWeek = 0;      
      weekResult[weekNum] = weekAqi;     
      weekNum +=1;
    }
}
console.log(countDay)
    if(countDay!=0){
        weekAqi = Math.floor(sumWeek/countDay);
        weekResult[weekNum] = weekAqi;
      //}
    }
    chartData["week"] = weekResult;
  var countMonthDay = 0;
  var sumMonth = 0;
  var monthNum = 1;
  var monthResult = {};
  for(var name in dayAqi){
    var date = new Date(name);
    var dateVal = new Date(date.getFullYear(),date.getMonth()+1,0);
    //console.log('aaa'+dateVal)
    countMonthDay += 1;
    sumMonth += dayAqi[name];
    if(date.getDate() == dateVal.getDate()){
      monthAqi = Math.floor(sumMonth/countMonthDay);
      countMonthDay = 0;
      monthResult[monthNum] = monthAqi;
      monthNum += 1;
      sumMonth = 0;
    }
  }
  if(countMonthDay != 0){
    console.log(countMonthDay)
    monthResult[monthNum] = Math.floor(sumMonth/countMonthDay)
  }
  chartData["month"] = monthResult;
  console.log(chartData)
}
//initAqiChartData()
/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
  renderChart();
}

init();
