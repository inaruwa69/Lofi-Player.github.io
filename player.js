function onYouTubeIframeAPIReady() {
    const ctrlq = document.getElementById("youtube-audio");
    const icon = document.createElement("i");
    icon.setAttribute("id", "youtube-icon");
    icon.className = "fa-solid fa-play";
    icon.style.cssText = "cursor: pointer; font-size: 2em;";
    ctrlq.appendChild(icon);

    const div = document.createElement("div");
    div.setAttribute("id", "youtube-player");
    ctrlq.appendChild(div);

    let player;
    let playlist;
    let currentVideoIndex = 0;

    const toggleButton = (play) => {
        icon.className = play ? "fa-solid fa-pause" : "fa-solid fa-play";
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
