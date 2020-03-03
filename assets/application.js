// Put your application javascript here

let script = document.createElement('script');
 
script.src = '//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 

$(document).ready(function() {
        // Add smooth scrolling to all links
        $("a").on("click", function(event) {
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top
              },
              800,
              function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              }
            );
          } // End if
        });
      });