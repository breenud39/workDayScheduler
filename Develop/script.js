$(document).ready(function()
{
  var format = 'hh:mm:ss'
  var presentTime = moment().format("HH:mm:ss");
  console.log(presentTime);
  var startTime = moment('09:00:00', format);
  var endTime = moment('17:00:00', format);
  let currentTime =moment().format('HH');
  console.log(presentTime);
  for (let i = 0; i <= 8; i++)
  {
    // if (presentTime.isBetween(startTime, endTime)) {

      console.log('is between')
        if(i < currentTime -9)
        {
          // color grey
          createElementsAsPerTime("past",i)
        }else if(i === currentTime - 9)
        {
          // color red
          createElementsAsPerTime("present",i)
        }
        else if(i > currentTime -9){
          // color green
          createElementsAsPerTime("future",i)
        }
    // } else {
      // createElementsAsPerTime("outsideTimeZone",i)
    // }
  }
  let currentDay = $("#currentDay").text(moment().format("dddd, MMM Do"));
  $("#jumbotron").append(currentDay);
});

function createElementsAsPerTime(time,i){
  let parentElement = $("div").addClass("row parent");
  let para = $("<p></p>").text(moment().hour(9).add(i, 'hours').format("hA"));

  para.addClass("col-md-3");
  let textArea = $("<textarea class="+time+" 'style= padding left: 100px' />").addClass("col-md-6");
  let linkElement = $("<button class='saveBtn'><i class='fas fa-unlock'></i></button>").addClass("col-md-3");
  linkElement.on("click", function()
  {
    console.log("button clicked");
    console.log(textArea.val());
    localStorage.setItem("textAreaValue"+i,textArea.val());
  });
  textArea.html(localStorage.getItem("textAreaValue"+i));
  $(".container").append(parentElement, para, textArea, linkElement);
}

