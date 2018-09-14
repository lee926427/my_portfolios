var player;
var currentPlay = 0;

function onYouTubeIframeAPIReady() {
    console.log("[onYouTubeIframeAPIReady] in");
    player = new YT.Player('player', {
        height: "390",
        width: "640",
        videoId: playList[currentPlay],
        playerVars: {
            "autoplay": 0,
            "controls": 0,
           // "start": playTime[currentPlay][0],
            //"end": playTime[currentPlay][1],
            "showinfo": 0,
            "rel": 0,
            "iv_load_policy": 3
        },
        events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    $("#playButton").click(function () {
        $("#mainbody h2").text(player.getVideoData().title);
        player.playVideo();
    });
}
function onPlayerStateChange(event) {
    if (event.data == 0 && (Math.floor(player.getCurrentTime()) == playTime[currentPlay][1])) {
        if (currentPlay < playList.length - 1) {
            currentPlay++;
            
            player.loadVideoById({
                "videoId": playList[currentPlay],
                "startSeconds": playTime[currentPlay][0],
                "endSeconds": playTime[currentPlay][1],
                "suggestedQuality": "large"
            });
        } else {
            currentPlay = 0;
            player.cueVideoById({
                "videoId": playList[currentPlay],
                "startSeconds": playTime[currentPlay][0],
                "endSeconds": playTime[currentPlay][1],
                "suggestedQuality": "large"
            });
        }
    }
    if (player.getVideoLoadedFraction() > 0) {
        $("#mainbody h2").text(player.getVideoData().title);
    }
}

function loadList(){
    for(i=0;i<playList.length-1;i++){
        $("#playList").append("<tr>"+i+"<input type='text' class='waitingPlay'>"+player.getVideoData().title+"</tr>");
    }
}
/*
if ($('#updateList').click()) {
           playList.push($('#song').val()); 
    console.log(playList[0]);
}
*/