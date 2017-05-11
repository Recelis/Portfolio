 $(document).ready(function(){
      $("#About").on("click",function(event) {
        var offset = -60; //Offset of 20px

        $('html, body').animate({
            scrollTop: $("#Aboutsection").offset().top + offset
        }, 2000);
    });

    $("#Portfolio").on("click",function(event) {
        var offset = -60; //Offset of 20px

        $('html, body').animate({
            scrollTop: $("#Portfoliosection").offset().top + offset
        }, 2000);
    });

    $("#Contact").on("click",function(event) {
        var offset = 0; //Offset of 20px

        $('html, body').animate({
            scrollTop: $("#ContactMesection").offset().top + offset
        }, 2000);
    });  

    $("#Top").on("click",function(event) {
        var offset = 0; //Offset of 20px

        $('html, body').animate({
            scrollTop: $("#Home").offset().top + offset
        }, 2000);
    });

  });
  
  function autoScroll(){
       
  }
  document.getElementById