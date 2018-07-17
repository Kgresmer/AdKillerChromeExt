
setTimeout(function(){
    console.log("Running youtube overlay killer");

    var ytdPlayer = document.getElementById('ytd-player');
    var parent = ytdPlayer.children[0];
    for (var i = 0; i < parent.children.length; i++) {
        var child = parent.children[i];
        if (child.className.indexOf('html5-video-container') === -1) {
            parent.removeChild(child);
        }
    }



}, 2000);




