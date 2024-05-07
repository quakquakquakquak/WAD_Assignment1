let musicModule =  {
    song: [{ name: "Maestro", artist: "SEVENTEEN", duration: "3:18", listeners: "9,000,000", genre: "KPOP" }, { name: "Pretty U", artist: "SEVENTEEN", duration: "3:27", listeners: "111,000,000", genre: "KPOP" }, { name: "Heya", artist: "IVE", duration: "3:50", listeners: "3,000,000", genre: "KPOP" }],
    playlist: [{ name: "Favourites", songs: ["Maestro", "Pretty U"] }],
    // Explain what function A does
    addSong(n, a, d, l, g) {
        this.song.push({ name: n, artist: a, duration: d, listeners: l, genre: g });
        console.log('"' + n + '" has been added!');
    },
    // Explain what function B does
    playSong(n) {
        let selected = null;
        for (let i = 0; i < this.song.length; i++) {
            if (this.song[i].name === n){
                selected = this.song[i];
                break;
            }
        }
        
        if (selected !== null) {
            console.log("Currently Playing: " + selected.name); // Log the name of the selected song
            console.log("Song Details: ");
            console.log(selected);
        } else {
            console.log("Song not found");
        }
    },
    viewPlaylist(n) {
        let selected = null;
        for (let i = 0; i < this.playlist.length; i++) {
            if (this.playlist[i].name === n){
                selected = this.playlist[i];
                break;
            }
        }
        if (selected !== null) {
            console.log("Currently Viewing Playlist: " + selected.name); // Log the name of the selected song
            console.log("Playlist Contains: " + selected.songs);
        } else {
            console.log("Playlist not found");
        }
    },
    addPlaylist() {

    },
    allSongs() {
        console.log(this.song);
    },
    searchGenre() {

    },
}
module.exports = musicModule;

//console.log(musicModule.playSong("Maestro"));
//console.log(musicModule.allSongs());
console.log(musicModule.viewPlaylist("Favourite"));
