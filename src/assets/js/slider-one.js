(function ($) {
 "use strict";
/*--------------------------------
 slide product
---------------------------------- */   
     $(".slide-product").owlCarousel({
      navigation : true, 
      pagination : false,
      slideSpeed : 600,
      paginationSpeed : 400,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2], 
      itemsTablet: [767,2], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
  });
/*--------------------------------
 featured item
---------------------------------- */
     $(".featured-item").owlCarousel({
      navigation : true,
      pagination : false,
      slideSpeed : 600,
      paginationSpeed : 400,
	    autoPlay:true,
      items : 4,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,4], 
      itemsTablet: [767,3], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
  }); 


     $(".featured-item1").owlCarousel({
      navigation : true,
      pagination : false,
      slideSpeed : 600,
      paginationSpeed : 400,
    autoPlay:true,
      items : 4,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3], 
      itemsTablet: [767,2], 
      itemsMobile : [480,2],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
  });  


  $(".featured-item-2").owlCarousel({
      navigation : true,
      pagination : false,
      slideSpeed : 600,
      paginationSpeed : 400,
    autoPlay:true,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1], 
      itemsTablet: [767,1], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
  });    
/*--------------------------------
 camera-camcord
---------------------------------- */
     $(".camera-slide").owlCarousel({
      navigation : false,
      pagination : true,
      slideSpeed : 600,
      paginationSpeed : 400,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2], 
      itemsTablet: [767,1], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
  }); 
/*--------------------------------
 popular tab product
---------------------------------- */
$(".popular-tab-product").owlCarousel({
      navigation : true,
      pagination : false,
      slideSpeed : 600,
      paginationSpeed : 400,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2], 
      itemsTablet: [767,2], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>']
  });
/*--------------------------------
 popular tab product
---------------------------------- */
    var owl = $(".popular-tab-product-4");
      owl.owlCarousel({
      navigation:true,
      slideSpeed : 600,
      pagination : false,
      addClassActive : true,
      lazyLoad : true,
      items :2,
      itemsDesktop : [1024,2],
      itemsDesktopSmall : [980,2], 
      itemsTablet: [767,2], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>']
  });      
/*--------------------------------
 brand-logo
---------------------------------- */
     $(".brand-logo").owlCarousel({
      navigation : true,
      pagination : false,
      slideSpeed : 600,
      paginationSpeed : 400,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2], 
      itemsTablet: [767,3], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
  });
/*--------------------------------
 blog-box
---------------------------------- */
     $(".blog-box").owlCarousel({
      navigation : true,
      pagination : false,
      slideSpeed : 600,
      paginationSpeed : 400,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2], 
      itemsTablet: [767,2], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
  });
/*--------------------------------
 blog-box
---------------------------------- */
     $(".tab-info-product").owlCarousel({
      navigation : false,
      pagination : false,
      slideSpeed : 600,
      paginationSpeed : 400,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2], 
      itemsTablet: [767,2], 
      itemsMobile : [480,1],
  });
/*--------------------------------
 about-su-active
---------------------------------- */
    $(".about-us-slide").owlCarousel({
      autoPlay:10000,
      paginationSpeed : 1000,
      pagination : false,
      items : 4,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3],
      itemsTablet: [767,2]

    });
/*--------------------------------
 viewproduct
---------------------------------- */
    $("#viewproduct").owlCarousel({
      autoPlay:10000,
      paginationSpeed : 1000,
      pagination : false,
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
      itemsTablet: [767,4],
      itemsMobile : [480,2]
    });   
/*--------------------------------
 mobile menu tab
---------------------------------- */      
/*--------------------------------
 nivoSlider
---------------------------------- */     
 
/*--------------------------------
 tabs
---------------------------------- */  
  $('#tabs2').tab();
/*---------------------
 scrollUp
--------------------- */  
 
/*--------------------------------
 owlCarousel5
---------------------------------- */
  
   
})(jQuery);    