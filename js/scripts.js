$(document).ready(function(){
  $("form#dating").submit(function(event){
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var religion = $("input:radio[name=religion]:checked").val();

    if (religion === "notJewish" || age < 18) {
      alert("Sorry, this site is not for you!");
    } else if (religion === "halfJewish" || religion === "jewish") {
      console.log("1");
      if (gender === 'female') {
        if (age >= 18 && age <= 30){
          $(".femaleAdult").hide();
          $(".femaleOld").hide();
          $(".femaleYoung").show();
            console.log("2");
        } else if (age > 30 && age <= 55){
          $(".femaleYoung").hide();
          $(".femaleOld").hide();
          $(".femaleAdult").show();
            console.log("3");
        } else if (age > 55){
          $(".femaleYoung").hide();
          $(".femaleAdult").hide();
          $(".femaleOld").show();
        } else {
            console.log("4");
          alert("Please enter an age");
          //window.location.reload();
        }
      }
      else if (gender === "male"){
          console.log("5");
        if (age >= 18 && age <= 30){
          $(".maleAdult").hide();
          $(".maleOld").hide();
          $(".maleYoung").show();
            console.log("6");
        } else if (age > 30 && age <= 55){
          $(".maleYoung").hide();
          $(".maleOld").hide();
          $(".maleAdult").show();
            console.log("7");
        } else if (age > 55){
          $(".maleYoung").hide();
          $(".maleAdult").hide();
          $(".maleOld").show();
        } else {
            console.log("8");
          alert("Please enter an age");
          //  window.location.reload();
        }
      }
    }
    event.preventDefault();
  });


});
