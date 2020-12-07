(function ($) {
    "use strict";

    var video,
        playerEl = "#player",
        videoEl = "#player > video",
        videoSrc = "https://stream.mux.com/9V2DYex7h8lpXWB64vh8yiEAdHti8VOG.m3u8",
        poster = 'https://image.mux.com/9V2DYex7h8lpXWB64vh8yiEAdHti8VOG/thumbnail.jpg',
        videoType = "hls",
        videoSrcType = "application/x-mpegURL";

    // var videoType = "mpd";
    // var videoSrcType = "application/dash+xml";

    var videoElement = $("<video>")
        .attr({
            "class"             : "video-js",
            "controls"          : "true",
            "preload"           : "auto",
            "webkit-playsinline": "true",
            "playsinline"       : "true"
        })
        .appendTo(playerEl);

    var videoPlayer = $(videoEl)[0];

    videojs.options.hls.overrideNative = true;

    var option = {
        autoplay: true,
        fluid: true,
        aspectRatio: '16:9',
        controlBar: {
            volumePanel: { inline: false }
        }
    };

    video = videojs(videoPlayer, option);

    video.poster(poster);

    video.src([
      {
        type: videoSrcType,
        src: videoSrc
      }
    ]);
})(window.$);
