// -------------------------------preload------------------------
$(window).on('load',function(){
  $("#status").fadeOut();
  $("#preloader").delay(500).fadeOut('slow');
  $("body").delay(500).css({'overflow':'visible'});
});

// -------------------------------menu-resize--------------------------
$("#nav-toggle").click(function(){
  $(this).toggleClass("active");
  $(".menu-resize").slideToggle();
});
  
   

// -----------------------------menu-resize-submenu----------------------------
  $('.overlay ul li.has-child .mdi-plus').click(function () {
    
    $(this).parent('p').parent('li.has-child').find('> ul').slideToggle();
    $(this).parent('p').parent('li.has-child').siblings('').find('ul').slideUp();
  
    $(this).parent('p').parent('li.has-child').siblings('').removeClass('open');
    $(this).parent('p').parent('li.has-child').toggleClass('open');
  
});
// --------------------------search---------------------
$("#search").click(function(){
  
  $(".search-display").toggle();
  $(".search-content").toggleClass("show");
 
}
  // ---------------------------------------dot-vertical------------------------
  );
  $(".more").click(function(){
    // $(".search-content").hide();
    // $(".dot-vertical").css("display","block");
    $(".dot-vertical").css("opacity","1");
    $(".dot-vertical").toggle("slow");
   
  }
    
    );
// -------------------------------owl-caousel-------------------------
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:5,

        dots:false,
        // autoplay:true,
        nav:true,
        loop:true,
        margin:10,
        responsive : {
          0 : {
             items:1,
          },
         480 : {
             items:2,
          },
         768 : {
             items:2,
           },
           992:{
             items:3
           },
           1024: {
            items:4
           }
    
         }
        });

        $(".owl-prev").append('<span><i class="mdi mdi-arrow-left"></i></span>' );
        
        $(".owl-next").append('<span><i class="mdi mdi-arrow-right"></i></span>' );
    });
    // ---------------------------------gallery-------------------------
    filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show-gallery");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show-gallery");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("gallery");
var btns = btnContainer.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName(" select");
    current[0].className = current[0].className.replace(" select", " ");
    this.className += " select";
  });
}
    
// --------------------accrodian---------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
};

  
  // ----------------------------- click-button-animation---------------------------------

    $(document).ready(function() {
      $(".custum-btn-purple").on({
        click:function() {
        $(this).addClass('clicked');
      },
      mouseleave:(function() {
        $(".custum-btn-purple").removeClass('clicked');
      })

    });
    });
    $(document).ready(function() {
      $(".custum-btn-white").on({
        click:function() {
        $(this).addClass('clicked');
      },
      mouseleave:(function() {
        $(".custum-btn-white").removeClass('clicked');
      })

    });
    });
 
   
   