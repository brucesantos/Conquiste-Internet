!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function($){function e(e){var a={},t=/^jQuery\d+$/;return $.each(e.attributes,function(e,l){l.specified&&!t.test(l.name)&&(a[l.name]=l.value)}),a}function a(e,a){var t=this,r=$(t);if(t.value==r.attr("placeholder")&&r.hasClass("placeholder"))if(r.data("placeholder-password")){if(r=r.hide().nextAll('input[type="password"]:first').show().attr("id",r.removeAttr("id").data("placeholder-id")),e===!0)return r[0].value=a;r.focus()}else t.value="",r.removeClass("placeholder"),t==l()&&t.select()}function t(){var t,l=this,r=$(l),o=this.id;if(""===l.value){if("password"===l.type){if(!r.data("placeholder-textinput")){try{t=r.clone().attr({type:"text"})}catch(n){t=$("<input>").attr($.extend(e(this),{type:"text"}))}t.removeAttr("name").data({"placeholder-password":r,"placeholder-id":o}).bind("focus.placeholder",a),r.data({"placeholder-textinput":t,"placeholder-id":o}).before(t)}r=r.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",o).show()}r.addClass("placeholder"),r[0].value=r.attr("placeholder")}else r.removeClass("placeholder")}function l(){try{return document.activeElement}catch(e){}}var r="[object OperaMini]"==Object.prototype.toString.call(window.operamini),o="placeholder"in document.createElement("input")&&!r,n="placeholder"in document.createElement("textarea")&&!r,d=$.valHooks,c=$.propHooks,i,u;o&&n?(u=$.fn.placeholder=function(){return this},u.input=u.textarea=!0):(u=$.fn.placeholder=function(){var e=this;return e.filter((o?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":a,"blur.placeholder":t}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},u.input=o,u.textarea=n,i={get:function(e){var a=$(e),t=a.data("placeholder-password");return t?t[0].value:a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":e.value},set:function(e,r){var o=$(e),n=o.data("placeholder-password");return n?n[0].value=r:o.data("placeholder-enabled")?(""===r?(e.value=r,e!=l()&&t.call(e)):o.hasClass("placeholder")?a.call(e,!0,r)||(e.value=r):e.value=r,o):e.value=r}},o||(d.input=i,c.value=i),n||(d.textarea=i,c.value=i),$(function(){$(document).delegate("form","submit.placeholder",function(){var e=$(".placeholder",this).each(a);setTimeout(function(){e.each(t)},10)})}),$(window).bind("beforeunload.placeholder",function(){$(".placeholder").each(function(){this.value=""})}))});