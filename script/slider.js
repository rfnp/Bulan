$(document).ready(function(){

  var currIdx = 1;
  var currIdxprice = 1;
  // var idx=1;

  function slidingleft(){

      if(currIdx != 5){
          $('.product-slider').animate({left: "-=300px"}, 500);
          currIdx++;
      }
      else{
          $('.product-slider').animate({left: 0}, 500);
          currIdx = 1;
      }      
  } 

  function slidingleftprice(){

    if(currIdxprice != 5){
        $('.price-slider').animate({left: "-=120px"}, 500);
        currIdxprice++;
    }
    else{
        $('.price-slider').animate({left: 0}, 500);
        currIdxprice = 1;
    }      
} 

    setInterval(slidingleft, 2000)
    setInterval(slidingleftprice, 2000)
});