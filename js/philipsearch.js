$(document).ready(function(){

  hideAllTemplates();
  $("#tmpFitness").show();
  $(".fitness").css("color","orange");


  function hideAllTemplates(){
    $("#tmpFitness").hide();
    $("#tmpNutrition").hide();
    $("#tmpLife").hide();
    $("#tmpConnect").hide();
  }

  function resetLinkColor(){
    $(".fitness").css("color","white");
    $(".nutrition").css("color","white");
    $(".life").css("color","white");
  }

  $(".fitness").click(function(){
    hideAllTemplates();
    resetLinkColor();
    $(".fitness").css("color","orange");
    $("#tmpFitness").show();
  })
  $(".nutrition").click(function(){
    hideAllTemplates();
    resetLinkColor();
    $(".nutrition").css("color","orange");
    $("#tmpNutrition").show();
  })
  $(".life").click(function(){
    hideAllTemplates();
    resetLinkColor();
    $(".life").css("color","orange");
    $("#tmpLife").show();
  })
  $(".connect").click(function(){
    hideAllTemplates();
    resetLinkColor();
    $("#tmpConnect").show();
  })



})
