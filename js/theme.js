/* RTL */
var rtl_document, rtl=false;

rtl_document = $("html").attr('dir');

if (rtl_document){
    rtl=true;
}
/* RTL */
$(document).ready(function() {


   $('#solution-carousel').owlCarousel({
    margin:30,
    dots:true,
    rtl:rtl,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:true,
            stagePadding: 50
        },
        390:{
            items:1,
            loop:true,
            stagePadding: 100
        },
        500:{
            items:2,
            loop:true,
            stagePadding: 50
        },
        750:{
            items:2,
            loop:true,
            stagePadding: 100
        },
        980:{
            items:3,
            loop:true,
            stagePadding: 100
        },
        1200:{
            items:4
        }
    }
});
   $('#partners-carousel').owlCarousel({
    loop:false,
    margin:10,
    dots:true,
    //rtl:rtl,
    responsiveClass:true,
    responsive:{
        0:{
            items:5
        },
        768:{
            items:11,
            autoWidth:true
        },
        1200:{
            items:11,
            autoWidth:true
        }
    }
});


$('#partners-bg').owlCarousel({
    lazyLoad:true,
    loop:false,
    dots:true,
    //rtl:rtl,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:0
        },
        450:{
            items:2,
            autoWidth:false,
            margin:10
        },
        768:{
            items:5,
            autoWidth:false,
            margin:30
        },
        1200:{
            items:10,
            autoWidth:false,
            margin:35
        }
    }
});
      

   $('#power-bi-carousel').owlCarousel({
    margin:30,
    dots:true,
    //rtl:rtl,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:true,
            stagePadding: 50
        },
        768:{
            items:4
        },
        1200:{
            items:4
        }
    }
});
   $('#projects-power-bi-carousel').owlCarousel({
    margin:30,
    dots:true,
    rtl:rtl,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:true,
            stagePadding: 50
        },
        768:{
            items:2
        },
        1200:{
            items:2
        }
    }
});


   $('#projects-carousel').owlCarousel({
    margin:30,
    rtl:rtl,
    responsiveClass:false,
    responsive:{
        0:{
            items:1,
            loop:true,
            dots:true
        },

        768:{
            items:7,
            margin:0
        },
        1200:{
            items:7,
            margin:0
        }
    }
});


   /* inline SVG */
   inlineSVG.init({
      svgSelector: 'img.svg',
      initClass: 'js-inlinesvg',
  }, function () {
   console.log('All SVGs inlined');
});
   /* inline SVG */

   $('nav .icon').click(function(){
      $(this).toggleClass('active');
  });

});



var bg = $(".bgimage");

function resizeBackground() {
    bg.height($(window).height());
}

$(window).resize(resizeBackground);
resizeBackground();