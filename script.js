$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

var save = $(".btn");

function saveButton(event) {
  console.log($(this).siblings());
}

save.on("click", saveButton);

$(".btn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, value);
});
