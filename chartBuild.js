var records = [{
	"name": "Homicides",
	"value": 518904,
	"color": "AA4444"
}, {
	"name": "Sentences",
	"value": 8092,
	"color": "773377"
}, {
	"name": "Executions",
	"value": 1422,
	"color": "000000"
}]


function toArea(diameter) {return area = Math.PI*Math.pow((diameter/2), 2)}
function toDiameter(area) {return diameter = 2*Math.sqrt(area/Math.PI)}

var recordsValues = _.map(records, 'value');
var circleMax = window.innerHeight - 200;
var max = _.max(recordsValues);
var multiplier = toArea(circleMax)/max;

function circleCenter(circleSize) {
  if (circleSize < 40) {
    return "; margin-left: 20px"
  } else {
    return ""
  }
};

function buildCircles(record) {
  var circleSize = toDiameter(record.value * multiplier);

  $(".chart").append(
    "<div class='circleContainer'>"+
      "<div class='circle' style='"+
        "height: "+circleSize+"px; "+
        "width: "+circleSize+"px; "+
        "background-color: #"+record.color+
        circleCenter(circleSize)+
      "'></div>"+
      "<div class='tag'>"+record.name+"</div>"+
    "</div>"
  );
};

function buildLegend(record) {
  var circleSize = toDiameter(record.value * multiplier);
  $(".list").append(
    "<li class='list-group-item'>"+
      "<span style='font-size: 30px;color: #"+record.color+"'>●</span>"+
      "<span class='pull-right'>"+
        record.name+"<br>"+record.value+
      "</span>"+
    "</li>"
  );
};

$( document ).ready(function() {
  records.forEach(function(record) {
    buildCircles(record)
    buildLegend(record)
  });
});