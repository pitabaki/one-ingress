function init(){"use strict";function i(i){$("#black-bg").css({display:"block"}),setTimeout(function(){$("#black-bg").css({opacity:"0.7"})},50),setTimeout(function(){$("#login-modal").css({display:"block"}),$(i).css({display:"block"}),setTimeout(function(){$("#login-modal").css({bottom:"0%"})},50)},50)}function s(){$("#black-bg").css({opacity:"0"}),setTimeout(function(){$("#black-bg").css({display:"none"})},100),setTimeout(function(){$("#login-modal").css({bottom:"-100%"}),setTimeout(function(){$("#login-modal").css({display:"none"}),$(".sign-form").css({display:"none"})},100)},50)}function t(){function i(i,s,t){var a="img/icon-"+t+".png";i.children("img").addClass(s),setTimeout(function(){i.children("img").attr("src",a)},100)}function s(){return $(".illum-desc").css({opacity:"0"}),$(".illum-desc").remove(),!1}$(".illum-button").click(function(){if($(this).hasClass("takeFlight"))return i($(this),"counter","plus"),s(),$(".illum-button").removeClass("takeFlight"),!1;i($(this),"clockwise","minus"),s(),$(".illum-button").removeClass("takeFlight");var t=$(this).data("illum"),a="<span class='illum-desc'><span class='about-inner-desc'><p>",n="</p></span></span>";return $(this).addClass("takeFlight"),"popupOne"===t?$(this).append(a+e[0]+n):"popupTwo"===t?$(this).append(a+e[1]+n):"popupThree"===t&&$(this).append(a+e[2]+n),setTimeout(function(){$(".illum-desc").css({opacity:"0.9"})},100),!1}),$(".illum-desc").click(function(){var i=$(".illum-button").children("img"),t="clockwise";return i.each(function(i){$(this).hasClass(t)===!0&&($(this).removeClass(t),$(this).attr("src","img/icon-plus.png"))}),s(),!1}),$(".product-summaries").click(function(){var i=$(".illum-button").children("img"),t="clockwise";return i.each(function(i){$(this).hasClass(t)===!0&&($(this).removeClass(t),$(this).attr("src","img/icon-plus.png"))}),s(),!1})}function a(i){$.getJSON("ajax/suite.json",function(s){var a,n=[];return $.each(s,function(s,t){e=[],s===i&&"def"!==i&&(n.push("<img src='"+t.image+"' alt='"+t.name+"'><h2>"+t.title+"</h2><p>"+t.summary+"</p><div class='outer-center'><div class='mid-left'><a href='"+t.external+"'>Learn More </a></div><div class='mid-left icon'><a href='"+t.external+"'><img class='icon-arrow' src='img/icon_blue_arrow.png' alt='' /></a></div></div>"),n.push("<a href='#!' class='illum-button' data-illum='popupOne'><img src='img/icon-plus.png' alt=''></a>"),n.push("<a href='#!' class='illum-button' data-illum='popupTwo'><img src='img/icon-plus.png' alt=''></a>"),n.push("<a href='#!' class='illum-button right' data-illum='popupThree'><img src='img/icon-plus.png' alt=''></a>"),e.push(t.popupOne,t.popupTwo,t.popupThree))}),n.length<1?($.each(s,function(i,s){"def"===i&&(a=s,n.push("<div class='default-text'><h2>Oops! We are still working!</h2><p>We plan on launching this suite soon.<br>Be on the look out!</p></div><img src='"+a.image+"' alt='Page under construction'>"))}),$("<div/>",{"class":"col s12 m12 l12 center default-img",html:n}).appendTo(".product-summaries"),setTimeout(function(){$(".product-summaries").css({"max-height":"800px"}),$(".default-text").css({opacity:"1"})},50),!1):($("<div/>",{"class":"col s12 m10 l8 center",html:n}).appendTo(".product-summaries"),setTimeout(function(){$(".product-summaries").css({"max-height":"800px"})},50),void t())})}$("#menu-icon").hover(function(){$("#menu-id").css({left:"0"})},function(){$("#menu-id").css({left:"-45px"})}),$(".dropdown-button").dropdown({inDuration:500,outDuration:225,constrain_width:!1,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"}),$(".nest-trigger").hover(function(){$(".nest-dropdown").css("cssText","min-height: 150px !important;")}),$("#login").click(function(){return i("#form-signin"),!0}),$(".signup-arrow").click(function(){return i("#form-signup"),!1}),$("#black-bg").click(function(){s()}),$("#form_signin").submit(function(){var i=document.getElementById("username-form-signin");i=i.value;var t=$("#display-name").children();return 0===t.length?($("#display-name").append("<p id='user-id'>Hi, "+i+"</p>"),s()):($("#user-id").text("Hi, "+i),s()),!1}),$(".down-arrow").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=$(this.hash);if(i=i.length?i:$("[name="+this.hash.slice(1)+"]"),i.length)return $("html,body").animate({scrollTop:i.offset().top-80},500),!1}});var e=[];$(".suite").click(function(){var i=$(this).data("product");if($(".suite").removeClass("active"),$(this).addClass("active"),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var s=$(this.hash);s=s.length?s:$("[name="+this.hash.slice(1)+"]"),s.length&&$("html,body").animate({scrollTop:s.offset().top-80},500)}return setTimeout(function(){$(".product-summaries").children().length>0?($(".default-text").css({opacity:"0"}),$(".illum-button").css({opacity:"0"}),$(".product-summaries").css({"max-height":"0"}),setTimeout(function(){$(".product-summaries").empty()},500),setTimeout(function(){a(i),setTimeout(function(){$(".illum-button").css({opacity:"1"})},100)},500)):(a(i),setTimeout(function(){$(".illum-button").css({opacity:"1"})},100))},500),!1}),$(".bigwigs").hover(function(){var i=$(this).data("bigwig"),s=$(this);$.getJSON("ajax/about-us.json",function(t){var a=[];$.each(t,function(s,t){s==i&&a.push("<span id='"+i+"' class='about-inner-desc'><h6><strong>"+t.name+"</strong>, "+t.job+"</h6><p>"+t.bio+"</p></span>")}),$("<span/>",{"class":"about-desc",html:a}).appendTo(s),setTimeout(function(){$(".about-desc").css({opacity:"1"})},50)})},function(){var i=$(this);$(".about-desc").css({opacity:"0"}),setTimeout(function(){i.empty()},100)}),$("#xcard-slider").ready(function(){console.log("load working");var i="<div class='row copy'><div class='index-slider'><div class='assistant'></div><div class='text'>",s="<div class='row'><div class='col s12 m6 l6 left slider-text'>",t="<div class='outer-left'><div class='mid-left'>",a="<div class='row copy index-slide-inner'>",e="<div class='col s12 m12 l6'><div class='index-slider'><div class='assistant'></div>",n="#xcard-slider";$.getJSON("ajax/xcard.json",function(c){var o=[];$.each(c,function(n,c){console.log("working each"),c.summaryTwo.length>0?(console.log("working if"),o.push(i+"<img src='"+c.image+"' alt='"+c.name+"'><h3>"+c.title+"</h3>"+s+"<h6>"+c.summaryTitle+"</h6><p>"+c.summary+"</p>"+t+"<a href='"+c.external+"'>Learn More</a></div><div class='mid-right icon'><a href='"+c.external+"'><img class='icon-arrow' src='img/icon_blue_arrow.png' /></a></div></div></div><div class='col s12 m6 l6 left slider-text'><h6>"+c.summaryTwoTitle+"</h6><p>"+c.summaryTwo+"</p></div>")):o.push(a+e+"<img src='"+c.image+"' alt='"+c.name+"'></div></div>"+e+"<div id='full-width' class='text left'><h3>"+c.title+"</h3><h4>"+c.summaryTitle+"</h4><p>"+c.summary+"</p></div></div></div></div>")}),o.length<=2&&o.push(o[0],o[1]),$.each(o,function(i){$("<div/>",{"class":"control",html:o[i]}).appendTo(n)});var l=$(".slider-outer").children(),r=0;$.each(l,function(i){r+=1,$(this).data("sliders",i)});var u=r-1;$.each(l,function(){0===$(this).data("sliders")?$(this).css({display:"block"}):1===$(this).data("sliders")?$(this).css({display:"block",left:"1200px",right:"0",opacity:"0"}):$(this).data("sliders")===u&&$(this).css({display:"block",left:"-1200px",opacity:"0"})})})}),$("#membership-slider").ready(function(){var i="<div class='row img'><div class='membership-slider img'><div class='assistant'></div><img src='",s="<div class='row copy'><div class='membership-slider'><div class='assistant'></div><div class='text'>",t="#membership-slider";$.getJSON("ajax/membership.json",function(a){var e=[];$.each(a,function(t,a){e.push(i+a.image+"' alt='"+a.name+"'></div></div>"+s+"<h6>"+a.title+"</h6><p>"+a.summary+"</p></div></div></div>")}),$.each(e,function(i){$("<div/>",{"class":"control",html:e[i]}).appendTo(t)});var n=$(".slider-outer").children(),c=0;$.each(n,function(i){c+=1,$(this).data("sliders",i)});var o=c-1;$.each(n,function(){0===$(this).data("sliders")?$(this).css({display:"block"}):1===$(this).data("sliders")?$(this).css({display:"block",left:"1200px",right:"0",opacity:"0"}):$(this).data("sliders")===o&&$(this).css({display:"block",right:"0",left:"-1200px",opacity:"0"})})})}),$("#left-click").click(function(){var i=$(".slider-outer").children(),s=0;$.each(i,function(i){s+=1});var t=s-1;return $.each(i,function(){var i=$(this).data("sliders");0===i?($(this).css({right:"0",left:"-1200px",opacity:"0"}),$(this).css("display",function(){setTimeout(function(){return"none"},50)})):1===i?$(this).css({display:"block",left:"0",right:"0",opacity:"1"}):i===t&&$(this).css("display","none")}),$.each(i,function(i){var s=$(this).data("sliders")-1;0===$(this).data("sliders")?$(this).data("sliders",t):$(this).data("sliders",s),console.log($(this).data("sliders"))}),$.each(i,function(){1===$(this).data("sliders")&&$(this).css({display:"block",left:"1200px",right:"0",opacity:"0"})}),!1}),$("#right-click").click(function(){var i=$(".slider-outer").children(),s=0;$.each(i,function(i){s+=1});var t=s-1;return $.each(i,function(){var i=$(this).data("sliders");0===i?($(this).css({left:"1200px",right:"0",opacity:"0"}),$(this).css("display",function(){setTimeout(function(){return"none"},50)})):i===t?$(this).css({display:"block",left:"0",right:"0",opacity:"1"}):1===i&&$(this).css("display","none")}),$.each(i,function(i){var s=$(this).data("sliders")+1;$(this).data("sliders")===t?$(this).data("sliders",0):$(this).data("sliders",s),console.log($(this).data("sliders"))}),$.each(i,function(){$(this).data("sliders")===t&&$(this).css({display:"block",right:"0",left:"-1200px",opacity:"0"})}),!1})}window.onload=init;