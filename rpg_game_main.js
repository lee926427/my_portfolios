var mapArray, ctx, currenttImgMainX, currenttImgMainY;
var imgMountain, imgMain, imgEnemy, imgKey,imgDoor;

$(document).ready(function () {
    mapArray = [0, 1, 1, 0, 0, 0, 3, 1, 2];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "RPG_game/resource/spriteSheet.png";
    currenttImgMainX = 0;
    currenttImgMainY = 0;

    imgMain.onload = function () {
        ctx.drawImage(imgMain, 0, 0, 80, 130, currenttImgMainX, currenttImgMainY, 200, 200);
    }

    imgMountain = new Image();
    imgMountain.src = "RPG_game/resource/material.png"
    imgEnemy = new Image();
    imgEnemy.src = "RPG_game/resource/Enemy.png";
    imgKey = new Image();
    imgKey.src = "RPG_game/resource/material.png"; 

    imgMountain.onload = function () {
        imgEnemy.onload = function () {
            for (var x in mapArray) {
                if (mapArray[x] == 1) {
                    ctx.drawImage(imgMountain, 32.2, 192, 32, 32, x % 3 * 200, Math.floor(x / 3) * 200, 200, 200);
                } else if (mapArray[x] == 3) {
                    ctx.drawImage(imgEnemy, 7, 40, 104, 135, x % 3 * 200, Math.floor(x / 3) * 200, 200, 200);
                }
            }
        }
    }
});
$(document).keydown(function (event) {
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;

    event.preventDefault();
    console.log(event.which);
    switch (event.which) {
        case 37:
        case 65: //往左走
            targetImgMainX = currenttImgMainX - 200;
            targetImgMainY = currenttImgMainY;
            cutImagePositionX = 175;
            break;
        case 38:
        case 87: //往上走
            targetImgMainX = currenttImgMainX;
            targetImgMainY = currenttImgMainY - 200;
            cutImagePositionX = 355;
            break;
        case 39:
        case 68: //往右
            targetImgMainX = currenttImgMainX + 200;
            targetImgMainY = currenttImgMainY;
            cutImagePositionX = 540;
            break;
        case 40:
        case 83: //往下走
            targetImgMainX = currenttImgMainX;
            targetImgMainY = currenttImgMainY + 200;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }

    if (targetImgMainX <= 400 && targetImgMainX >= 0 && targetImgMainY <= 400 && targetImgMainY >= 0) {
        targetBlock = targetImgMainX / 200 + targetImgMainY / 200 * 3;
    } else {
        targetBlock = -1;
    }
    ctx.clearRect(currenttImgMainX, currenttImgMainY, 200, 200);
    if (targetBlock == -1 || mapArray[targetBlock] == 1 || mapArray[targetBlock] == 3) {

    } else {
        $("#talkBox").text("");
        currenttImgMainX = targetImgMainX;
        currenttImgMainY = targetImgMainY;
    }
    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currenttImgMainX, currenttImgMainY, 200, 200);
    console.log(currenttImgMainX + "," + currenttImgMainY);

    switch (mapArray[targetBlock]) {
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("有山");
            break;
        case 2:
            $("#talkBox").text("撿到竹筍!");
            hero[0][1]=1;
            console.log(hero[0][1]);
            break;
        case 3:
            $("#talkBox").text("嗨~");
            break;
        case 4:
            $("#talkBox").text("過關了~");
    }
});
