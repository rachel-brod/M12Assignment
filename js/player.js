class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
let albums = [
    new Album('Operation Ivy', 'Energy'),
    new Album('Blink 182', 'Dude Ranch'),
    new Album('New Found Glory', 'Sticks and Stones')
]

for (let album of albums) {
    jbox.addAlbum(album)
}

for (let i = 0; i <albums.length; i++){
    let dropdown = document.getElementById("jukeboxList")
    let option = document.createElement('option')
    option.value = `${albums[i].artist} - ${albums[i].title}`
    option.id = 'song_' + [i]
    option.text = `${albums[i].artist} - ${albums[i].title}`
    dropdown.appendChild(option)
}


let playBtn = document.getElementById("playBtn")
let dropdownList = document.getElementById("jukeboxList")

playBtn.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') {
        let options = dropdownList.selectedOptions

        for (let i=0; i < options.length; i++) {
            let id = options[i].id
            if (id === 'song_0') {
                albums[0].play()
            } else if (id === 'song_1') {
                albums[1].play()
            } else if (id === 'song_2') {
                albums[2].play()
            }
        }
    }
})


let favoriteAlbumBtn = document.getElementById("favoriteAlbum");
favoriteAlbumBtn.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') {
        
        console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)
    }
})
