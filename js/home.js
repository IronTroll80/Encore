
var playLast= document.getElementById('playLast')
var playedbar = document.getElementById('playedbar')
var playLast = document.getElementById('playLast')
var sTitle = document.getElementById('sTitle')
var sArtiste = document.getElementById('sArtiste')
var lastPlayed = document.getElementById('lastPlayed')
var recent = document.getElementsByClassName('thum')
var player = document.getElementsByClassName('rec-song-title')
var playerSong = document.getElementById('playerSong')
var playerArtiste = document.getElementById('playerArtiste')
var playerImg = document.getElementById('playerImg')
var playing = true
var latestFave  = document.getElementsByClassName('fave')
var arr = []
var personOne = document.getElementById('personOne')
var loadUI = document.getElementById('loadUI')
var close = document.getElementById('close')
var closeX = document.getElementById('closeX')
var loadContent = document.getElementById('loadContent')

console.log(recent, typeof recent)

for (i = 0; i < player.length; i++){
recent[i].addEventListener('click', function(){
    lastPlayed.style.backgroundImage = 'url(' + event.target.src +')'
    var details = event.target.alt
    var split = details.indexOf(',')
    var recSong = details.substring(0, split)
    var recArtiste = details.substring(split +1, details.length)
    sTitle.innerHTML = recSong
    sArtiste.innerHTML = recArtiste
    playerSong.innerHTML = recSong
    playerArtiste.innerHTML  = recArtiste
    playerImg.src  = event.target.src
    console.log(recSong)
})}

Array.from(latestFave).forEach(element =>{
    element.addEventListener('click', function(){
    element.style.color = 'rgb(177, 111, 182)'})
})



var progress = 1
playedbar.style.width = 0 +'px'
playLast.onclick =  function(){setInterval(function(){
    if (progress < 900){
        progress += 1
    }
    playedbar.style.width = progress + 'px'
    console.log(num, typeof playedbar.style.width)
    }, 100)}


personOne.addEventListener('click', function(){
    loadUI.style.display = 'block'
})


/*playLast.onclick = function(){
    if (playing === true){
        playing = false
        if(playing === false){
            playLast.classList.remove('fa-pause')
            playLast.classList.add('fa-play')
        }
        
    }else
    if (playing === false){
        playing = true
        if(playing === true){
            
        }
        playLast.classList.add('fa-pause')
        playLast.classList.remove('fa-play')
}
} */