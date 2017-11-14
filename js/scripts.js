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


        ////////////////////////// VALIDATION 
        ////////////////////////// VALIDATION https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
        
        function validate() {
          // NAME VALIDATION STARTS
          var name = $("#name-input").val();
          if (name == '') {
            $("#name-input").removeClass('is-success').addClass('is-danger');
            $("#name-input-help").removeClass('is-success').addClass('is-danger').html('Please enter your name');
            $("#name-input-icon").removeClass('fa-check').addClass('fa-warning');
          } else {
            $("#name-input").removeClass('is-danger').addClass('is-success');
            $("#name-input-help").removeClass('is-danger').addClass('is-success').text('');
            $("#name-input-icon").removeClass('fa-warning').addClass('fa-check');
          }
          
          // MESSAGE (TEXT-AREA) VALIDATION STARTS
          var message = $("#message-input").val().split(' ');
          console.log(message);
          if (message.length < 20) {
            $("#message-input").removeClass('is-success').addClass('is-danger');
            $("#message-input-help").removeClass('is-success').addClass('is-danger').html('Please make your message more informative');
          } else {
            $("#message-input").removeClass('is-danger').addClass('is-success');
            $("#message-input-help").removeClass('is-danger').addClass('is-success').text('');
          }

          // EMAIl VALIDATION STARTS
          function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }

          var email = $("#mail-input").val();
          if (validateEmail(email)) {
            $("#mail-input").removeClass('is-danger').addClass('is-success');
            $("#mail-input-help").removeClass('is-danger').addClass('is-success').html('<i><b>' + email +'</b></i>' + ' is a valid email');
            $("#mail-input-icon").removeClass('fa-warning').addClass('fa-check');
          } else if (email == '') {
            $("#mail-input").removeClass('is-success').addClass('is-danger');
            $("#mail-input-help").removeClass('is-success').addClass('is-danger').html('Please enter your email that you will get response to');
            $("#mail-input-icon").removeClass('fa-check').addClass('fa-warning');
          } else {
            $("#mail-input").removeClass('is-success').addClass('is-danger');
            $("#mail-input-help").removeClass('is-success').addClass('is-danger').html('<i><b>' + email + '</b></i>' + ' is not valid email');
            $("#mail-input-icon").removeClass('fa-check').addClass('fa-warning');
          }
          
          return false;

        }
        
        $("#submit").bind("click", validate);




        // https://michalsnik.github.io/aos/
        AOS.init({
          disable: 'mobile'
        });