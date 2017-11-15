/* var navItems = [
  `<a class="navbar-item has-text-primary" href="index.html">
    Home
  </a>`,
  `<a class="navbar-item" href="about.html">
    About
  </a>`,
  `<a class="navbar-item " href="services.html">
    Services
  </a>`,
  `<a class="navbar-item " href="jobs.html">
    Jobs
  </a>`,
  `<a class="navbar-item " href="clients.html">
    Clients
  </a>`,
  `<a class="navbar-item " href="portfolio.html">
    Portfolio
  </a>`,
  `<a class="navbar-item has-text-weight-bold" href="contact.html">
    Contact&nbsp;<span class="bd-emoji">☎️</span>
  </a>`
] */


// ////////////////////// GENERATING NAVBAR DYNAMICALLY
// store all navbar items in an array as objects
var navItems = [
  {
    path : "index.html",
    title : "Home"
  },
  {
    path : "about.html",
    title : "About"
  },
  {
    path : "services.html",
    title : "Services"
  },
  {
    path : "projects.html",
    title : "Portfolio"
  },
  {
    path : "clients.html",
    title : "Clients"
  },
  {
    path : "career.html",
    title : "Career"
  },
  {
    path : "contact.html",
    title : 'Contact&nbsp;<span class="bd-emoji">☎️</span>'
  }
  /////// ADD YOUR NEW ITEM HERE
]

for (var i = 0; i < navItems.length; i++) {
  $('#navMenu > .navbar-end').append(`<a class="navbar-item" href="${navItems[i].path}">${navItems[i].title}</a>`);
  // if (currentPath === navItems[i].path) {
  // }
}

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
          function validateName(name) {
            var reName = /[A-Za-z]/;
            return reName.test(name);
          }

          var name = $("#name-input").val();
          if (validateName(name)) {
            $("#name-input").removeClass('is-danger').addClass('is-success');
            $("#name-input-help").removeClass('is-danger').addClass('is-success').text('');
            $("#name-input-icon").removeClass('fa-warning').addClass('fa-check');
          } else {
            $("#name-input").removeClass('is-success').addClass('is-danger');
            $("#name-input-help").removeClass('is-success').addClass('is-danger').html('Please enter your name');
            $("#name-input-icon").removeClass('fa-check').addClass('fa-warning');
            
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
          
          // MESSAGE (TEXT-AREA) VALIDATION STARTS
          
          var message = $("#message-input").val().split(' ');
          if (message.length < 20) {
            $("#message-input").removeClass('is-success').addClass('is-danger');
            $("#message-input-help").removeClass('is-success').addClass('is-danger').html('Please make your message more informative');
                        
          } else {
            $("#message-input").removeClass('is-danger').addClass('is-success');
            $("#message-input-help").removeClass('is-danger').addClass('is-success').text('');
          }

          // Redirect if all the fields are filled correct
          if (validateName(name) && validateEmail(email) && message.length >= 20) {
            window.location.href = "success.html";
          }
          return false;
        }
        
        $("#submit").bind("click", validate);



/////////////////////// COMMENTS 
// COMMENT BODY

$('#submitComment').click(function() {
  // get element with id submitComment in document clients.html
  var username = $('#username').val(); // get element with id username and store its value to variable username
  var comment = $('#comment').val(); // get element with id comment and store its value to variable comment
  var commentBody =  `<article class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                              <img src="https://bulma.io/images/placeholders/128x128.png">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                            <p>
                                <strong>${username}</strong> <small>@username</small> <small>31m</small>
                                <br>
                                ${comment}
                            </p>
                            </div>
                            <nav class="level is-mobile">
                          <div class="level-left">
                                <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-reply"></i></span>
                                </a>
                                <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                                </a>
                                <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-heart"></i></span>
                                </a>
                            </div>
                            </nav>
                        </div>
                    </article>` // body of the comment output containing template strings for username and comment itself

  if (username !== '' && comment !== '') {
    $('#comments').append(commentBody); // if values are not empty, then append the commentBody to #comments div
    $('#comment').removeClass('is-danger'); // remove class of danger (red highlighning)
    $('#username').removeClass('is-danger'); // if it was added in the next case
  } else {
    $('#comment').addClass('is-danger'); // give these inputs class of danger to highlight 
    $('#username').addClass('is-danger');
  }
  $('#comment').val(' ');
  $('#username').val(' ');
    });


    /////////////////////// TABS
  
    function switchToAll() {
      removeActive();
      hideAll();
      $(".all-tab").addClass("is-active");
      $("#websites-tab-content").fadeIn();
      $("#webapps-tab-content").fadeIn();
      $("#ui-tab-content").fadeIn();
      
    }

    function switchToWebsites() {
      removeActive();
      hideAll();
      $(".websites-tab").addClass("is-active");
      $("#websites-tab-content").fadeIn();
    }

    function switchToWebapps() {
      removeActive();
      hideAll();
      $(".webapps-tab").addClass("is-active");
      $("#webapps-tab-content").fadeIn();
    }

    function switchToUI() {
      removeActive();
      hideAll();
      $(".ui-tab").addClass("is-active");
      $("#ui-tab-content").fadeIn();
    }

    function removeActive() {
      $("li").each(function() {
        $(this).removeClass("is-active");
      });
    }

    function hideAll(){
      $("#all-tab-content").fadeOut();
      $("#websites-tab-content").fadeOut();
      $("#webapps-tab-content").fadeOut();
      $("#ui-tab-content").fadeOut();
    }

  // https://michalsnik.github.io/aos/
  AOS.init({
    disable: 'mobile'
  });