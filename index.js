function select(id) {
  $(".number").removeClass("selected");
  $(`#${id}`).addClass("selected");
  $("button").click(function () {
    $(".mainContainer").remove();

    $("main").append($("<div>").addClass("mainContainer2"));
    //new image
    $("<img />", {
      src: "images/illustration-thank-you.svg",
      width: 120,
    }).appendTo($(".mainContainer2"));
    $(".mainContainer2").append(
      $("<p>").addClass("pointContainer").text(`You selected ${id} out of 5`)
    );

    $(".mainContainer2").append($("<h1>").text(`Thank you!`));
    $(".mainContainer2").append(
      $("<p>").text(`We appreciate you taking the time to give a rating. If
    you ever need more support, don’t hesitate to get in touch!`)
    );
  });
}

$("button").click(function () {
  $(".pleaseSelect").text("* please rate 1-5");
  $(".pleaseSelect").addClass("pleaseRate");
});

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
