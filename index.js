let selectPoint = 0;

$("button").click(function () {
  /// === 0
  if (!selectPoint) {
    return warning();
  }
  $(".mainContainer").remove();
  $("main").append($("<div>").addClass("mainContainer").addClass("center"));
  //new image
  $("<img />", {
    src: "images/illustration-thank-you.svg",
    width: 120,
  }).appendTo($(".mainContainer"));
  $(".mainContainer").append(
    $("<p>")
      .addClass("pointContainer")
      .text(`You selected ${selectPoint} out of 5`)
  );

  $(".mainContainer").append($("<h1>").text(`Thank you!`));
  $(".mainContainer").append(
    $("<p>").text(`We appreciate you taking the time to give a rating. If
  you ever need more support, don’t hesitate to get in touch!`)
  );
});

function warning() {
  $(`.pleaseSelect`).text(`* please rate 1-5`).css(`color`, `red`);
}

function select(id) {
  selectPoint = id;
  console.log(id);

  $(".number").removeClass("selected");
  $(`#${id}`).addClass("selected");
}

//alternative
// $(".number").click(function () {
//let n = $(this).attr("id")
//   $(".number").removeClass("selected");
//
//
//
//   $(this).addClass("selected");
//
// });
