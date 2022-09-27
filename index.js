// myScript.js
shaka.polyfill.installAll();

var video = document.getElementById('video');
var player = new shaka.Player(video);
window.player = player;

var manifestUrl = 'https://etslive-2-vidio-com.akamaized.net/exp=1664281111~acl=/hls-b/ingest_9858_*/*~hmac=cb835256937afd5f9c258336309deea9158d676eb035b71a19fb159404ec338a/hls-b/ingest_9858_1080p/index.m3u8?&m=1';    

player.load(manifestUrl);
