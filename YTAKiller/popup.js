
setTimeout(function(){
    console.log("Running youtube overlay killer");
    killAds();
}, 1500);



window.addEventListener('yt-navigate-start', function (e) {
    console.log('yt nav start');
    setTimeout(function(){
        console.log("Running youtube overlay killer");
        killAds();
    }, 1500);
}, false);

function killAds() {
    var ytdPlayer = document.getElementById('ytd-player');
    var parent = ytdPlayer.children[0];
    for (var i = 0; i < parent.children.length; i++) {
        var child = parent.children[i];
        if (child.className.indexOf('html5-video-container') === -1 &&
            child.className.indexOf('ytp-chrome-bottom') === -1) {
            parent.removeChild(child);
        }
    }
}




