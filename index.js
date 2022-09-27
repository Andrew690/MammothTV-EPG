// myScript.js
shaka.polyfill.installAll();

var video = document.getElementById('video');
var player = new shaka.Player(video);
window.player = player;

var manifestUrl = 'https://etslive-2-vidio-com.akamaized.net/exp=1664281111~acl=/hls-b/ingest_9858_*/*~hmac=cb835256937afd5f9c258336309deea9158d676eb035b71a19fb159404ec338a/hls-b/ingest_9858_1080p/index.m3u8';    

player.load(manifestUrl);

player.configure('streaming.alwaysStreamText', true)
player.load(manifestUrl).then(function(){
        player.addTextTrack(captionUrl, lang, type, 'text/vtt');
        var tracks = player.getTextTracks();
        player.selectTextTrack(tracks[0]);
});

player.setTextTrackVisibility(true)

player.getNetworkingEngine().registerRequestFilter(function (type, request) {
  if (type === shaka.net.NetworkingEngine.RequestType.LICENSE) {
    request.headers['Authorization'] = 'Bearer ' + token;
  }
});

player.configure({
  drm: {
    servers: {
      "com.widevine.alpha": "YOUR WIDEVINE LICENSE URL",
      "com.microsoft.playready": "YOUR PLAYREADY LICENSE URL"
    }
  }
});

const req = await fetch("YOUR FAIRPLAY CERTIFICATE URL");
const cert = await req.arrayBuffer();
player.configure('drm.advanced.com\\.apple\\.fps\\.1_0.serverCertificate', new Uint8Array(cert));
