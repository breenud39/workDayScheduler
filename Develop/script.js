var day = "use moment js to get teh day attribute";
var month = "Use moment to get the month attribute";
var dayNum = "Use moment to get number day";

var hoursOfDay = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

$(document).ready(function()
{
  // var m = moment().utcOffset(0);
  // m.set({hour:14,minute:0,second:0})
  // m.toISOString()
  // m.format()
  // console.log(m);
  var format = 'hh:mm:ss'
  var currentTime = moment('10:53:00',format),
  startTime = moment('09:00:00', format),
  endTime = moment('17:00:00', format);
  if (currentTime.isBetween(startTime, endTime)) {

    console.log('is between')
  
  } else {
  
    console.log('is not between')
  
  }
  for (let i = 0; i <= 8; i++)
  {
    // let time = moment().hour(9).add(i, 'hours').format("hA")
    let currentTime = moment().format("hA")
    // console.log(currentTime>time);
    // console.log(time)
    let parentElement = $("div").addClass("row parent");
    let para = $("<p></p>").text(moment().hour(9).add(i, 'hours').format("hA"));

    para.addClass("col-md-3");
    let textArea = $("<textarea 'style= padding left: 100px' />").addClass("col-md-6");
    let linkElement = $("<button><img src='./Develop/img/lock.jpg' height=50px width=50px /></button>").addClass("col-md-3");
    linkElement.on("click", function()
    {
      console.log("button clicked");
      console.log(textArea.val());
      localStorage.setItem("textAreaValue"+i,textArea.val());
    });
    textArea.html(localStorage.getItem("textAreaValue"+i));
    $(".container").append(parentElement, para, textArea, linkElement);
  }
  let currentDay = $("#currentDay").text(moment().format("dddd, MMM Do"));
  $("#jumbotron").append(currentDay);
});
