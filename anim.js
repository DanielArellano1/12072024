// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

const lyricsArray = [
    { time: 14.37, text: "In the rearview mirror" },
    { time: 18.87, text: "I saw the setting Sun on your neck" },
    { time: 26.13, text: "And felt the taste of you bubble up inside me" },
    { time: 35.04, text: "But with everybody watching us" },
    { time: 38.38, text: "Our every move" },
    { time: 41.11, text: "We do have reputations" },
    { time: 46.44, text: "Will you keep it secret?" },
    { time: 49.96, text: "Won't let them have it" },
    { time: 58.97, text: "So come inside and be with me" },
    { time: 67.00, text: "Alone with me" },
    { time: 70.20, text: "Alone" },
    { time: 73.71, text: "With me alone" },
    { time: 75.98, text: "If you would let me give you pinky promise kisses" },
    { time: 83.42, text: "Then I wouldn't have to scream your name atop of every roof in the city of my heart" },
    { time: 94.60, text: "If I could see you" },
    { time: 100.45, text: "Once more to see you" },
    { time: 112.55, text: "Come inside and be with me" },
    { time: 116.16, text: "Alone with me" },
    { time: 118.92, text: "Alone" },
    { time: 120.23, text: "With me alone" },
    { time: 124.01, text: "If you would let me give you pinky promise kisses" },
    { time: 133.03, text: "Then I wouldn't have to scream your name atop of every roof in the city of my heart" },
    { time: 144.44, text: "If I could see you" },
    { time: 151.68, text: "Once more to see you" },
    { time: 154.94, text: "If I could see you" },
    { time: 158.97, text: "Once more to see you" },
];

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const currentLyrics = lyricsArray.filter(lyric => lyric.time <= currentTime);
    const latestLyric = currentLyrics[currentLyrics.length - 1];

    if (latestLyric) {
        lyrics.innerText = latestLyric.text;
    }
});
