
setTimeout(function(){
    console.log("Running youtube overlay killer");
    killAds();
}, 1500);

var retried = false;

window.addEventListener('yt-navigate-start', function (e) {
    console.log('yt nav start');
    retried = false;
    setTimeout(function(){
        console.log("Running youtube overlay killer");
        killAds();
    }, 1500);
}, false);




function killAds() {


    try {
        var ytdPlayer = document.getElementById('ytd-player');
        var parent = ytdPlayer.children[0];
        var bezel = document.getElementsByClassName('ytp-bezel')[0];
        var storyboard = document.getElementsByClassName('ytp-storyboard')[0];
        var adPersist = document.getElementsByClassName('ytp-ad-persistent-progress-bar-container')[0];
        var upnext = document.getElementsByClassName('ytp-upnext')[0];
        var remote = document.getElementsByClassName('ytp-remote')[0];
        var videoContent = document.getElementsByClassName('ytp-iv-video-content')[0];
        var sharePanel = document.getElementsByClassName('ytp-share-panel')[0];
        var playerContent = document.getElementsByClassName('ytp-player-content')[0];
        var popup = document.getElementsByClassName('ytp-popup')[0];
        for (var i = 0; i < parent.children.length; i++) {
            var child = parent.children[i];
            if (child.className.indexOf('html5-video-container') === -1 &&
                child.className.indexOf('ytp-chrome-bottom') === -1) {
                parent.removeChild(child);
            }
        }
        bezel && bezel.parentNode ? parent.removeChild(bezel) : '';
        storyboard && storyboard.parentNode ? parent.removeChild(storyboard) : '';
        adPersist && adPersist.parentNode ? parent.removeChild(adPersist) : '';
        upnext && upnext.parentNode ? parent.removeChild(upnext) : '';
        remote && remote.parentNode ? parent.removeChild(remote) : '';
        videoContent && videoContent.parentNode ? parent.removeChild(videoContent) : '';
        playerContent && playerContent.parentNode ? parent.removeChild(playerContent) : '';
        sharePanel && sharePanel.parentNode ? parent.removeChild(sharePanel) : '';
        popup && popup.parentNode ? parent.removeChild(popup) : '';
        retried = true;
    } catch (error) {
        console.log(error);
        if (!retried) {
            setTimeout(function () {
                console.log("Running youtube overlay killer");
                killAds();
            }, 1500);
            retried = true;
        }
    }

}




