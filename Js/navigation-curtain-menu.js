$(document).ready(function() {
          $('.trigger').click(function() {
            var $this = $(this),
            notThis = $this.hasClass('open'),
            thisNav = $this.attr("rel");
            if (!notThis) {
             $('.triggered-area, .trigger').removeClass('open');
             if ( $( '.trigger' ).hasClass( "block-scroll" ) ){
              $('html').removeClass('disable-scroll');
              $('#overlay-mobile').removeClass('visible');
             }
            }
            $this.toggleClass('open');
            $("#"+thisNav).toggleClass('open');
            if ( $( this ).hasClass( "block-scroll" ) ){
             $('html').toggleClass('disable-scroll');
             $('#overlay-mobile').toggleClass('visible');
            }
          });
           $(document).on('click', function(event) {
            if (!$(event.target).closest('.triggered-area, .trigger').length) {
             $('.triggered-area, .trigger').removeClass('open');
             if ( $( '.trigger' ).hasClass( "block-scroll" ) ){
              $('html').removeClass('disable-scroll');
              $('#overlay-mobile').removeClass('visible');
             }
            }
          }); 
        });