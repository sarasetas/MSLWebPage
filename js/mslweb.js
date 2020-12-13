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

    $("")
});

$('#portfolioModal').on('hidden.bs.modal', function (e) {
  if ($("#modal").hasClass('show-simulation')){
    $("#modal").removeClass('show-simulation');
  } 
})

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



$('#team ul>li').click(function(){

  var div = $(this).parent() 
  var label = $(div).parent().children("#label")
  
  var phone = ""
  var email = ""
  if(div.data("item")  == "Viana"){ 
    phone = "258 826 932"
    email = "msl.seguros@sapo.pt"
  }else if(div.data("item")  == "Caminha"){  
    phone = "258 721 442"
    email = "msl.seguros@sapo.pt"
  } else if(div.data("item")  == "PonteLima"){
    phone = "258 943 430"
    email = "msl.seguros@sapo.pt"
  } 

 
   
  if ($(this).data("item") == "Phone")
  { 
    console.log("pontelima")
    if (label.hasClass("show-number")){      
      label.removeClass("show-number") 
    }else{
      label.addClass("show-number")
      label.removeClass("show-email")     
      label.html(phone)
    } 
  }
  if ($(this).data("item") == "Email")
  {
    console.log("caminha")
    if (label.hasClass("show-email")){       
      label.removeClass("show-email") 
    }else{        
      label.addClass("show-email")
      label.removeClass("show-number") 
      label.html(email)
    }    
  }

})