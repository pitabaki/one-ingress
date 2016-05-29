(function(){
    'use strict';

    //Background Fade Function
    function bgFade(){
        $('#black-bg').css({
            "opacity":"0"
        });
        setTimeout(function(){
            $('#black-bg').css({
                'display':'none'
            });
        }, 100);
        setTimeout(function(){
            $('#login-modal').css({
                'bottom':'-100%',
            });
            setTimeout(function(){
                $('#login-modal').css({
                    'display':'none'
                });
            }, 100);
        }, 50);
    }
    $('#menu-icon').hover(function(){
    	$('#menu-id').css({
    		'left': '0'
    	});
    }, function(){
        $('#menu-id').css({
            'left': '-45px'
        });
    });
    $('.dropdown-button').dropdown({
        inDuration: 500,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

    $('.dropdown-constant').hover(function(){
        $('.nest-dropdown').css('cssText', 'min-height: 0px !important;');
    });

    //Don't add "out" handler. It's important the user hovers over '.dropdown-constant' to close out '.nest-trigger'

    $('.nest-trigger').hover(function(){
        $('.nest-dropdown').css('cssText', 'min-height: 150px !important;');
    });

    //UX Implementation: For Mobile Users, click functionality is necessary
    $('.nest-trigger').click(function(){
        var nestDropdown = $('.nest-dropdown');
        var height = nestDropdown.css('min-height');
        if(height !== "0px"){
            $('.nest-dropdown').css('cssText', 'min-height: 0px !important;');
        }else{
            $('.nest-dropdown').css('cssText', 'min-height: 150px !important;');
        }
        return false;
    });
    $('#login').click(function(){
        $('#black-bg').css({
            "display":"block"
        });
        setTimeout(function(){
            $('#black-bg').css({
                'opacity':'0.7'
            });
        }, 50);
        setTimeout(function(){
            $('#login-modal').css({
                'display':'block',
            });
            setTimeout(function(){
                $('#login-modal').css({
                    'bottom':'0%'
                });
            }, 50);
        }, 50);
        return true;
        /*$('.modal').css({
            'bottom':'0%'
        });*/
    });
    $("#black-bg").click(function(){
    	bgFade();
    });
    $('#form01').submit(function(){
        var name = document.getElementById('username-form01');
        name = name.value;

        var displayChillins = $('#display-name').children();
        if(displayChillins.length === 0){
        	$('#display-name').append("<p id='user-id'>Hi, " + name + "</p>");
        	bgFade();
        }else{
        	$('#user-id').text("Hi, " + name);
        	bgFade();
        }
        return false;
    });
    $('.down-arrow').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
            }
          }
    });
    $(document).ready(function(){
        $('.carousel').carousel({full_width: true});
    });
})
();