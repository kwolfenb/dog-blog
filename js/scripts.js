$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass("lighttheme");
    $("body").addClass("darktheme");
  });
  $("button#light").click(function() {
    $("body").removeClass("darktheme");
    $("body").addClass("lighttheme");
  });
});
