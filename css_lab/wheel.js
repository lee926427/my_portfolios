$(document).ready(function() {
       var c=0;
       setInterval(function(){
           $("#wheel").css("transform","rotate("+c+"deg)");
           c+=30;
       },50);  
