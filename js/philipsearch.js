$(document).ready(function(){

  $(".ui-loader").hide();
  $("#flipit").hide();

  $( window ).on( "orientationchange", function( event ) {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

      if (event.orientation === 'landscape'){
        $("#maincontentrow").hide();
        $("#flipit").show();

      } else {
          $("#maincontentrow").show();
          $("#flipit").hide();
      }
   // some code..

  };
});





  $('.button-collapse').sideNav();
  hideAllTemplates();
  hideAllPhils();
  $("#tmpFitness").show();
  $(".fitness").css("color","#F39B3B");
  $(".nutrition").css("color","white");
  $(".life").css("color","white");
  $(".connect").css("color","white");
  $("#img_FitPhil").show();

  $(".getstarted").click(function(){
    hideAllTemplates();
    hideAllPhils();
    $("#tmpConnect").show();
      $("#img_ContactPhil").show();
  })


  function hideAllTemplates(){
    $("#tmpFitness").hide();
    $("#tmpNutrition").hide();
    $("#tmpLife").hide();
    $("#tmpConnect").hide();
  }

  function hideAllPhils(){
    $("#img_NutritionPhil").hide();
    $("#img_LifePhil").hide();
    $("#img_FitPhil").hide();
    $("#img_ContactPhil").hide();
  }

  function resetLinkColor(){
    $(".fitness").css("color","white");
    $(".nutrition").css("color","white");
    $(".life").css("color","white");
    $(".nutrition").removeClass("light-blue-text text-lighten-3");
    $(".life").removeClass("pink-text");
    $(".connectMobile").css("color","white");
  }

  $(".fitness").click(function(){
    hideAllTemplates();
    hideAllPhils();
    resetLinkColor();
    $(".fitness").css("color","#F39B3B");
    $("#tmpFitness").show();
    $("#img_FitPhil").show();


  })
  $(".nutrition").click(function(){
    hideAllTemplates();
    hideAllPhils();
    resetLinkColor();
    $(".nutrition").addClass("light-blue-text text-lighten-3");
    $("#tmpNutrition").show();
    $("#img_NutritionPhil").show();
  })
  $(".life").click(function(){
    hideAllTemplates();
    hideAllPhils();
    resetLinkColor();

    $("#tmpLife").show();
    $(".life").addClass("pink-text text-lighten-2");
    $("#img_LifePhil").show();
  })

  $(".connect").click(function(){
    hideAllTemplates();
    hideAllPhils();
    resetLinkColor();
    $("#tmpConnect").show();
    $(".connectMobile").css("color","#ef5350");
    $("#img_ContactPhil").show();
  })



})
