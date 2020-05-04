$(".portfolio-item").click(function(){
    console.log($(this).data("item"));
    $(".modal-content-load").load("/Portfolio/"+$(this).data("item")+".html", function(){

        $('.showhide').click(function() {   
            //$("#modal").removeClass('modal-dialog');
            if ($("#modal").hasClass('show-simulation')){
              $("#modal").removeClass('show-simulation');
            } else {
               $("#modal").addClass('show-simulation');
            }
    
            var x = document.getElementById("simulationDialog");
            if (x.style.display === "none") {
            x.style.display = "block";
            } else {
            x.style.display = "none";
            }
        });

    });
});



// Collapse Navbar
var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);


$(".copyright").html("MSL Mediadora de Seguros do Lima, Lda " + (new Date()).getFullYear() +". Todos os direitos reservados")



