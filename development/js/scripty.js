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

    //Don't add "out" handler. It's important the user hovers over '.dropdown-constant' to close out '.nest-trigger'

    $('.nest-trigger').hover(function(){
        $('.nest-dropdown').css('cssText', 'min-height: 150px !important;');
    });
    
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

    function clickInit(){
        function imgRotate(imgSelect){
            imgSelect.children('img').addClass('clockwise');
            setTimeout(function(){
                imgSelect.children('img').attr('src','img/icon-minus.png');
            }, 50);
        }
        function removeIllum(){
            $('.illum-desc').css({'opacity':'0'});
            $('.illum-desc').remove();
            return false;
        }
        $('.illum-button').click(function(){
            imgRotate($(this));
            if($(this).hasClass("takeFlight")){
                removeIllum();
                $('.illum-button').removeClass('takeFlight');
                return false;
            }else{
                removeIllum();
                $('.illum-button').removeClass('takeFlight');
                var attribute = $(this).data('illum'),
                    open = "<span class='illum-desc'><span class='about-inner-desc'><p>",
                    close = "</p></span></span>";

                $(this).addClass('takeFlight');

                if(attribute === "popupOne"){
                    $(this).append(open + popupData[0] + close);
                }else if (attribute === "popupTwo"){
                    $(this).append(open + popupData[1] + close);
                }else if (attribute === "popupThree"){
                    $(this).append(open + popupData[2] + close);
                }
                setTimeout(function(){
                    $('.illum-desc').css({'opacity':'1'});
                }, 100);
                return false;
            }
        });
        $('.illum-desc').click(function(){
            removeIllum();
        });
        $('.product-summaries').click(function(){
            removeIllum();
        })
    }

    var popupData = [];

    function suiteJSON(suiteType){
        $.getJSON("ajax/suite.json", function ( data ) {
            var suiteInfo = [],
                def;

            $.each(data, function(key, val){
                popupData = [];
                if ((key === suiteType) && (suiteType !== "def")){
                    suiteInfo.push("<img src='" + val.image + "' alt='" + val.name + "'><h2>" + val.title + "</h2><p>" + val.summary + "</p><div class='outer-center'><div class='mid-left'><a href='" + val.external + "'>Learn More </a></div><div class='mid-left icon'><a href='" + val.external + "'><img class='icon-arrow' src='img/icon_blue_arrow.png' alt='' /></a></div></div>");
                    suiteInfo.push("<a href='#!' class='illum-button' data-illum='popupOne'><img src='img/icon-plus.png' alt=''></a>");
                    suiteInfo.push("<a href='#!' class='illum-button' data-illum='popupTwo'><img src='img/icon-plus.png' alt=''></a>");
                    suiteInfo.push("<a href='#!' class='illum-button right' data-illum='popupThree'><img src='img/icon-plus.png' alt=''></a>");
                    popupData.push(val.popupOne, val.popupTwo, val.popupThree);
                }
            });
            if(suiteInfo.length < 1){
                $.each(data, function(key, val){
                    if(key === "def"){
                        def = val;
                        suiteInfo.push("<div class='default-text'><h2>Oops! We are still working!</h2><p>We plan on launching this suite soon.<br>Be on the look out!</p></div><img src='" + def.image + "' alt='Page under construction'>");
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
            clickInit();
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
            //remove any children from Product Summaries (container)
            if($('.product-summaries').children().length > 0){
                $('.default-text').css({'opacity':'0'});
                $('.illum-button').css({'opacity':'0'});
                $('.product-summaries').css({'max-height':'0'});
                setTimeout(function(){
                    $('.product-summaries').empty();
                }, 500);
                setTimeout(function(){
                    suiteJSON(suiteType);
                    setTimeout(function(){
                        $('.illum-button').css({'opacity':'1'});
                    }, 100);
                }, 500);
            }else{
                suiteJSON(suiteType);
                setTimeout(function(){
                    $('.illum-button').css({'opacity':'1'});
                }, 100);
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

    /*************************************************
    //////////////////////////////////////////////////

    Functions to operate the Index pages's slider

    //////////////////////////////////////////////////
    *************************************************/

    $('#xcard-slider').ready(function(){
        console.log("load working");
        var divOpen = "<div class='row copy'><div class='index-slider'><div class='assistant'></div><div class='text'>",
            rowOpen = "<div class='row'><div class='col s12 m6 l6 left slider-text'>",
            linkOpen = "<div class='outer-left'><div class='mid-left'>",
            rowOpenTwo = "<div class='row copy index-slide-inner'>",
            divOpenTwo = "<div class='col s12 m12 l6'><div class='index-slider'><div class='assistant'></div>",
            identifier = "#xcard-slider";

        $.getJSON("ajax/xcard.json", function ( data ) {
            var sliders = [];
            $.each(data, function(key, val){
                console.log("working each");
                if (val.summaryTwo.length > 0) {
                    console.log("working if");
                    sliders.push(divOpen + "<img src='" + val.image + "' alt='" + val.name + "'><h3>" + val.title + "</h3>"+ rowOpen + "<h6>" + val.summaryTitle + "</h6><p>" + val.summary + "</p>" + linkOpen + "<a href='" + val.external + "'>Learn More</a></div><div class='mid-right icon'><a href='" + val.external + "'><img class='icon-arrow' src='img/icon_blue_arrow.png' /></a></div></div></div><div class='col s12 m6 l6 left slider-text'><h6>" + val.summaryTwoTitle + "</h6><p>" + val.summaryTwo + "</p></div>");
                }else{
                    sliders.push(rowOpenTwo + divOpenTwo + "<img src='" + val.image + "' alt='" + val.name + "'></div></div>" + divOpenTwo + "<div id='full-width' class='text left'><h3>" + val.title + "</h3><h4>" + val.summaryTitle + "</h4><p>" + val.summary + "</p></div></div></div></div>");
                }
            });
            if(sliders.length <= 2){
                sliders.push(sliders[0],sliders[1]);
            }
            $.each(sliders, function(index){
                $( "<div/>", {
                    "class": "control",
                    html: sliders[index]
                }).appendTo( identifier );
            });
            var sliderArray = $(".slider-outer").children(),
                total = 0;
            $.each(sliderArray, function(index){
                total += 1;
                $(this).data("sliders", index);
            });
            var last = total - 1;
            $.each(sliderArray, function(){
                if($(this).data("sliders") === 0){
                    $(this).css({
                        "display":"block"
                    });
                } else if ($(this).data("sliders") === 1){
                    $(this).css({
                        "display":"block",
                        "left":"1200px",
                        "right":"0",
                        "opacity":"0"
                    }); 
                } else if ($(this).data("sliders") === last){
                    $(this).css({
                        "display":"block",
                        "left":"-1200px",
                        "opacity":"0"
                    }); 
                }
            });
        });
    });

    /*************************************************
    //////////////////////////////////////////////////

    Functions to operate the membership pages's slider

    //////////////////////////////////////////////////
    *************************************************/

    $('#membership-slider').ready(function(){
        var constantImgBegin = "<div class='row img'><div class='membership-slider img'><div class='assistant'></div><img src='",
            constantCopyBegin = "<div class='row copy'><div class='membership-slider'><div class='assistant'></div><div class='text'>",
            identifier = "#membership-slider";

        $.getJSON("ajax/membership.json", function ( data ) {
            var sliders = [];
            $.each(data, function(key, val){
                sliders.push(constantImgBegin + val.image + "' alt='" + val.name + "'></div></div>" + constantCopyBegin + "<h6>" + val.title + "</h6><p>" + val.summary + "</p></div></div></div>");
            });
            $.each(sliders, function(index){
                $( "<div/>", {
                    "class": "control",
                    html: sliders[index]
                }).appendTo( identifier );
            });
            var sliderArray = $(".slider-outer").children(),
                total = 0;
            $.each(sliderArray, function(index){
                total += 1;
                $(this).data("sliders", index);
            });
            var last = total - 1;
            $.each(sliderArray, function(){
                if($(this).data("sliders") === 0){
                    $(this).css({
                        "display":"block"
                    });
                } else if ($(this).data("sliders") === 1){
                    $(this).css({
                        "display":"block",
                        "left":"1200px",
                        "right":"0",
                        "opacity":"0"
                    }); 
                } else if ($(this).data("sliders") === last){
                    $(this).css({
                        "display":"block",
                        "right":"0",
                        "left":"-1200px",
                        "opacity":"0"
                    }); 
                }
            });
        });
    });

    $("#left-click").click(function(){
        var sliderArray = $(".slider-outer").children(),
            total = 0;
        $.each(sliderArray, function(index){
            total += 1;
        });
        var last = total - 1;
        $.each(sliderArray, function(){
            var slide = $(this).data("sliders");
            if(slide === 0){
                $(this).css({
                    "right": "0",
                    "left":"-1200px",
                    "opacity": "0"
                });
                $(this).css("display", function(){
                    setTimeout(function(){
                        return "none";
                    }, 50);
                });
            } else if (slide === 1) {
                $(this).css({
                    "display":"block",
                    "left":"0",
                    "right": "0",
                    "opacity": "1"
                });
            } else if (slide === last) {
                $(this).css("display","none");
            }
        });
        $.each(sliderArray, function(index){
            var newSlider = $(this).data("sliders") - 1;
            if($(this).data("sliders") === 0){
                $(this).data("sliders", last);
            } else {
               $(this).data("sliders", newSlider); 
            }
            console.log($(this).data("sliders"));
        });
        $.each(sliderArray, function(){
            if ($(this).data("sliders") === 1) {
                $(this).css({
                    "display":"block",
                    "left":"1200px",
                    "right":"0",
                    "opacity":"0"
                });
            }
        });
        return false;
    });

    $("#right-click").click(function(){
        var sliderArray = $(".slider-outer").children(),
            total = 0;
        $.each(sliderArray, function(index){
            total += 1;
        });
        var last = total -1;
        $.each(sliderArray, function(){
            var slide = $(this).data("sliders");
            if(slide === 0){
                $(this).css({
                    "left": "1200px",
                    "right":"0",
                    "opacity": "0"
                });
                $(this).css("display", function(){
                    setTimeout(function(){
                        return "none";
                    }, 50);
                });
            } else if (slide === last) {
                $(this).css({
                    "display":"block",
                    "left":"0",
                    "right": "0",
                    "opacity": "1"
                });
            } else if (slide === 1) {
                $(this).css("display","none");
            }
        });
        $.each(sliderArray, function(index){
            var newSlider = $(this).data("sliders") + 1;
            if($(this).data("sliders") === last){
                $(this).data("sliders", 0);
            } else {
               $(this).data("sliders", newSlider); 
            }
            console.log($(this).data("sliders"));
        });
        $.each(sliderArray, function(){
            if ($(this).data("sliders") === last) {
                $(this).css({
                    "display":"block",
                    "right":"0",
                    "left":"-1200px",
                    "opacity":"0"
                });
            }
        });
        return false;
    });
}
window.onload = init;