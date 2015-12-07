$(document).ready(function(){

  hideAllTemplates();
  hideAllPhils();
  $("#tmpFitness").show();
  $(".fitness").css("color","#f4ff81");
  $("#img_FitPhil").show();


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
  }

  function resetLinkColor(){
    $(".fitness").css("color","white");
    $(".nutrition").css("color","white");
    $(".life").css("color","white");
    $(".nutrition").removeClass("light-blue-text text-lighten-3");
    $(".life").removeClass("pink-text");
  }

  $(".fitness").click(function(){
    hideAllTemplates();
    hideAllPhils();
    resetLinkColor();
    $(".fitness").css("color","#f4ff81");
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
    $(".life").css("color","orange");
    $("#tmpLife").show();
    $(".life").addClass("pink-text");
    $("#img_LifePhil").show();
  })

  $(".connect").click(function(){
    hideAllTemplates();
    hideAllPhils();
    resetLinkColor();
    $("#tmpConnect").show();
  })



})
