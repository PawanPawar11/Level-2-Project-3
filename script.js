var arr = [
    {songName:"Cinderella by Cidergirl", url:"./songs/Cinderella by Cidergirl.mp3", img:"./images/Cinderella-by-Cidergirl.jpeg"},
    {songName:"Iro Kousui by Yoh Kamiyama", url:"./songs/Iro Kousui by Yoh Kamiyama.mp3", img:"./images/Iro-Kousui-by-Yoh-Kamiyama.jpeg"},
    {songName:"Lemon by Kenshi Yonezu", url:"./songs/Lemon by Kenshi Yonezu.mp3", img:"./images/Lemon-by-Kenshi-Yonezu.jpeg"},
    {songName:"Usotsuki by Yorushika", url:"./songs/Usotsuki by Yorushika.mp3", img:"./images/Usotsuki-by-Yorushika.jpeg"}
]

var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio() 

var selectedSong = 0

function mainFunction(){
    var clutter = "";
    arr.forEach(function(elem, idx){
    clutter += `<div class="song-card" id=${idx}>
            <div class="part1">
              <img
                src=${elem.img}
                alt=""
              />
              <h2>${elem.songName}</h2>
            </div>
            <h6>3:56</h6>
          </div>`
})
    allSongs.innerHTML = clutter
    audio.src = arr[selectedSong].url

    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}

mainFunction()

allSongs.addEventListener("click", function(dets){
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})

var flag = 0
play.addEventListener("click", function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }
    else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length - 1){
    selectedSong++
    mainFunction()
    audio.play()
    }else{
        forward.style.opacity = 0.5
    }
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
    selectedSong--
    mainFunction()
    audio.play()
    }else{
        backward.style.opacity = 0.5
    }
})