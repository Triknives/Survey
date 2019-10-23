$(document).ready(function() {
  $(".form1").submit(function(event) {
    var name = $("input#name").val();
    $(".name").text(name);


    var countryVar = $("#country").val();
    $('.countryOutput').text(countryVar);

    var date1 = $("#date1").val();
    $(".date1").text(date1);

    var color1 =$("#color").val();

    event.preventDefault();

  });
});
