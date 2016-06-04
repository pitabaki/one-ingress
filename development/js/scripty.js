function init(){
    'use strict';

    /*************************************************
    //////////////////////////////////////////////////

    bgFadeIn/Out built to reduce repetitive code

    //////////////////////////////////////////////////
    *************************************************/

    //Background Fade In + Form Function
    function bgFadeIn(form){
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
            $(form).css({
                'display': 'block'
            });
            setTimeout(function(){
                $('#login-modal').css({
                    'bottom':'0%'
                });
            }, 50);
        }, 50);   
    }
    //Background Fade Out Function
    function bgFadeOut(){
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
                $('.sign-form').css({
                    'display': 'none'
                });
            }, 100);
        }, 50);
    }

    /*************************************************
    //////////////////////////////////////////////////

    Function to show/hide "menu" on homepage

    //////////////////////////////////////////////////
    *************************************************/

    $('#menu-icon').hover(function(){
        $('#menu-id').css({
            'left': '0'
        });
    }, function(){
        $('#menu-id').css({
            'left': '-45px'
        });
    });

    /*************************************************
    //////////////////////////////////////////////////

    Operates dropdown. The method and object are
    controlled by materialize.js

    //////////////////////////////////////////////////
    *************************************************/

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
    //Removed because it interfered with accessing the product page
    /*
    $('.nest-trigger').click(function(){
        var nestDropdown = $('.nest-dropdown');
        var height = nestDropdown.css('min-height');
        if(height !== "0px"){
            $('.nest-dropdown').css('cssText', 'min-height: 0px !important;');
        }else{
            $('.nest-dropdown').css('cssText', 'min-height: 150px !important;');
        }
        return false;
    });*/
    
    /*************************************************
    //////////////////////////////////////////////////

    Fade in/out pop-up forms

    //////////////////////////////////////////////////
    *************************************************/

    $('#login').click(function(){
        bgFadeIn('#form-signin');
        return true;
    });
    $('.signup-arrow').click(function(){
        bgFadeIn('#form-signup');
        return false;
    });
    $("#black-bg").click(function(){
        bgFadeOut();
    });
    $('#form_signin').submit(function(){
        var name = document.getElementById('username-form-signin');
        name = name.value;

        var displayChillins = $('#display-name').children();
        if(displayChillins.length === 0){
            $('#display-name').append("<p id='user-id'>Hi, " + name + "</p>");
            bgFadeOut();
        }else{
            $('#user-id').text("Hi, " + name);
            bgFadeOut();
        }
        return false;
    });

    /*************************************************
    //////////////////////////////////////////////////

    Operates in-document navigation

    //////////////////////////////////////////////////
    *************************************************/

    $('.down-arrow').click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 80
                }, 500);
                return false;
            }
        }
    });

    /*************************************************
    //////////////////////////////////////////////////

    Functions to operate the product pages's suite section

    //////////////////////////////////////////////////
    *************************************************/
    function suiteJSON(suiteType){
        $.getJSON("ajax/suite.json", function ( data ) {
            var suiteInfo = [],
                def;

            $.each(data, function(key, val){
                if ((key === suiteType) && (suiteType !== "def")){
                    suiteInfo.push("<img src='" + val.image + "' alt='" + val.name + "'><h2>" + val.title + "</h2><p>" + val.summary + "</p><div class='outer-center'><div class='mid-left'><a href='" + val.external + "'>Learn More </a></div><div class='mid-left icon'><a href='" + val.external + "'><img class='icon-arrow' src='img/icon_blue_arrow.png' alt='' /></a></div></div>");
                }
            });
            if(suiteInfo.length < 1){
                $.each(data, function(key, val){
                    if(key === "def"){
                        def = val;
                        suiteInfo.push("<div class='default-text'><h2>Ops! We are still working!</h2><p>We plan on launching this suite soon.<br>Be on the look out!</p></div><img src='" + def.image + "' alt='Page under construction'>");
                    }
                });
                $( "<div/>", {
                    "class": "col s12 m12 l12 center default-img",
                    html: suiteInfo
                }).appendTo( '.product-summaries' );
                setTimeout(function(){
                    $('.product-summaries').css({'max-height':'800px'});
                    $('.default-text').css({'opacity':'1'});
                }, 50);
                return false;
            }
            $( "<div/>", {
                "class": "col s12 m12 l8 center",
                html: suiteInfo
            }).appendTo( '.product-summaries' );
            setTimeout(function(){
                $('.product-summaries').css({'max-height':'800px'});
            }, 50);
        });
    }

    $('.suite').click(function(){
        var suiteType = $(this).data('product');
        $('.suite').removeClass('active');
        $(this).addClass('active');
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 500);
            }
        }
        setTimeout( function () {
            //$(this).addClass('active');
            if($('.product-summaries').children().length > 0){
                $('.default-text').css({'opacity':'0'});
                $('.product-summaries').css({'max-height':'0'});
                setTimeout(function(){
                    $('.product-summaries').empty();
                }, 500);
                setTimeout(function(){
                    suiteJSON(suiteType);
                }, 500);
            }else{
                suiteJSON(suiteType);
            }
        }, 500);
        return false;
    });

    /*************************************************
    //////////////////////////////////////////////////

    Functions to operate the about page's bio section

    //////////////////////////////////////////////////
    *************************************************/

    $('.bigwigs').hover(function(){
        var bigwig = $(this).data('bigwig'),
            anchor = $(this);
        $.getJSON( "ajax/about-us.json", function( data ) {
            var bio = [];
            $.each(data, function( key, val){
                if (key == bigwig){
                    bio.push("<span id='" + bigwig + "' class='about-inner-desc'><h6><strong>" + val.name + "</strong>, " + val.job + "</h6><p>" + val.bio + "</p></span>" );
                }
            });
            $( "<span/>", {
                "class": "about-desc",
                html: bio
              }).appendTo( anchor );
            setTimeout(function(){
              $('.about-desc').css({'opacity':'1'});
            }, 50);
        });
    }, function(){
        var selected = $(this);
        $('.about-desc').css({'opacity':'0'});
        setTimeout(function(){
            selected.empty();
        }, 100);
    });
}
window.onload = init;