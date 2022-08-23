$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));



var save = $(".btn");

function saveButton(event) {
    console.log($(this).siblings())
}

save.on("click", saveButton)