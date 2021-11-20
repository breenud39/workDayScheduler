$(document).ready(function()
{
  console.log(moment());
  let currentDay = $("#currentDay").text("current day");
  let parentElement = $("div").addClass("row parent");
  let para = $("<p></p>").text("will add hours of day here");
  // para.addClass("col-md-3");
  let textArea = $("<textarea 'style= padding left: 100px' />");
  let linkElement = $('<p></p>').text("Here will be a link t save local storage");
  $("#jumbotron").append(currentDay);
  $(".container").append(parentElement, para, textArea, linkElement);
});