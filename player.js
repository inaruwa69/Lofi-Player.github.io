function onYouTubeIframeAPIReady() {
    const ctrlq = document.getElementById("youtube-audio");
    const buttonPlay = document.querySelector(".button-play");

    let player;
    let playlist;
    let currentVideoIndex = 0;

    const toggleButton = (play) => {
        if (play) {
            buttonPlay.classList.remove("paused");
            buttonPlay.classList.add("playing");
        } else {
            buttonPlay.classList.remove("playing");
            buttonPlay.classList.add("paused");
        }
    };

    ctrlq.onclick = () => {
        if (player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING) {
            player.pauseVideo();
            toggleButton(false);
        } else {
            player.playVideo();
            toggleButton(true);
        }
    };

    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        playerVars: {
            listType: 'playlist',
            list: 'PLFNmqAO4LZ_HBWPOpmjylXVrzwdV2kHyk', // Replace with your playlist ID
            autoplay: ctrlq.dataset.autoplay,
            loop: ctrlq.dataset.loop,
        },
        events: {
            'onReady': (e) => {
                player.setPlaybackQuality("small");
                toggleButton(player.getPlayerState() !== YT.PlayerState.CUED);
                playlist = player.getPlaylist(); // Get the playlist items
            },
            'onStateChange': (e) => {
                if (e.data === YT.PlayerState.ENDED) {
                    toggleButton(false);
                    currentVideoIndex = (currentVideoIndex + 1) % playlist.length;
                    player.loadVideoById(playlist[currentVideoIndex]);
                }
            }
        }
    });
}
