$(document).ready(function(){
    var w = 0;
    $('#btn').on('click',function(){
        let w = setInterval(ani,300);
        function ani(){
            if(w <= 300){
                w++;
                document.getElementById('#square').style.width=w+"%";
                console.log(w);
            }else{
                clearInterval(w);
            }
        }
        
    });
    
});