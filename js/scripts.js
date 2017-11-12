    // NAVBAR HAMBURGER TOGGLE
document.addEventListener('DOMContentLoaded', function () {
    
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Check if there are any nav burgers
      if ($navbarBurgers.length > 0) {
    
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
    
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
    
            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
          });
        });
      }
    
    });


    // NAVBAR SCROLL TOGGLING
    // from:       https://codepen.io/philipbenton/pen/Ftmfz
    $(document).ready(function(){
        
        /** ===========================================
            Hide / show the master navigation menu
        ============================================ */
        
          // console.log('Window Height is: ' + $(window).height());
          // console.log('Document Height is: ' + $(document).height());
        
          var previousScroll = 0;
        
          $(window).scroll(function(){
        
            var currentScroll = $(this).scrollTop();
        
            /*
              If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
            */
            if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
              /*
                If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
              */
              if (currentScroll > previousScroll){
                window.setTimeout(hideNav, 300);
              /*
                Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
              */
              } else {
                window.setTimeout(showNav, 300);
              }
              /* 
                Set the previous scroll value equal to the current scroll.
              */
              previousScroll = currentScroll;
            }
        
          });
        
          function hideNav() {
            $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
          }
          function showNav() {
            $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
          }
        
        });

        $('button').click(function () {
            $(this).css('background-color', 'black');
        })


        // https://michalsnik.github.io/aos/
        AOS.init({
          offset: 300,
          duration: 900,
          easing: 'ease-in-sine',
          delay: 100,
        });