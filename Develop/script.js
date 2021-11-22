// This function uses moment js to calculate your time, and the time between the work times. (past, between, and future)
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

  }
  let currentDay = $("#currentDay").text(moment().format("dddd, MMM Do"));
  $(".jumbotron").append(currentDay);
});

// This function dynamically creates all the HTML elements you can see as well as printing the time on your screen.
function createElementsAsPerTime(time,i)
{
  let parentElement = $("div").addClass("time-block row");
  let para = $("<p class='hour'></p>").text(moment().hour(9).add(i, 'hours').format("hA"));

  para.addClass("col-md-1");
  let textArea = $("<textarea class="+time+"/>").addClass("col-md-10 description");
  let linkElement = $("<button class='saveBtn'><i class='fas fa-unlock'></i></button>").addClass("col-md-1");
  linkElement.on("click", function()
  {
    console.log("button clicked");
    console.log(textArea.val());
    localStorage.setItem("textAreaValue"+i,textArea.val());
  });
  textArea.html(localStorage.getItem("textAreaValue"+i));
  $(".container").append(parentElement, para, textArea, linkElement);
}

