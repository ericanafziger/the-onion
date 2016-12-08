$(document).ready(function(){
  $("#menu-bars").click(function() {
    $("#fly-out-panel").show();
    $("body").addClass("stop-scroll");

    $(".hide").click(function() {
      $("#fly-out-panel").hide();
      $("body").removeClass("stop-scroll");
    });
  });

}); //end of document ready
