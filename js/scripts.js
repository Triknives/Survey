$(document).ready(function() {
  $(".form1").submit(function(event) {
    var name = $("input#name").val();
    $(".name").text(name);


    var country = $("#country");

    var date1 = $("#date1").val();
    var color1 =$("#color").val();
    // var results = (name, country, date1, color1);

    event.preventDefault();

  });
});
