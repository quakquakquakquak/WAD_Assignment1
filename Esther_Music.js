let musicModule = {
    song: [{ name: "Maestro", artist: "SEVENTEEN", duration: "3:18", listeners: "9,000,000", genre: "KPOP" }, { name: "Pretty U", artist: "SEVENTEEN", duration: "3:27", listeners: "111,000,000", genre: "KPOP" }, { name: "Heya", artist: "IVE", duration: "3:50", listeners: "3,000,000", genre: "KPOP" }],
    playlist: [{ name: "Favourites", songs: ["Maestro", "Pretty U"] }],


    // Explain what function A does
    addSong(n, a, d, l, g) {
        for (let i = 0; i < this.song.length; i++) {
            if (this.song[i].name === n) {
                console.log("This song already exists, please add another one!");
                break;
            }
            else {
                this.song.push({ name: n, artist: a, duration: d, listeners: l, genre: g });
                console.log('"' + n + '" by ' + a +  ' has been added!');
                break;
            }
        }
    },
    // Explain what function B does
    playSong(n) {
        let selected = null;
        for (let i = 0; i < this.song.length; i++) {
            if (this.song[i].name === n) {
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
            if (this.playlist[i].name === n) {
                selected = this.playlist[i];
                break;
            }
        }
        if (selected !== null) {
            console.log("Currently Viewing Playlist: " + selected.name); // Log the name of the selected song
            if (selected.songs && selected.songs.length > 0) {
                console.log("Playlist Contains: " + selected.songs);
            }
            else {
                console.log("Playlist is empty. Start adding songs to it!");
            }

        } else {
            console.log("Playlist not found");
        }
    },
    createPlaylist(n) {
        this.playlist.push({ name: n, songs: [] });
        console.log(n + " has been created!");
    },
    addToPlaylist(p,n) {
        let existSong = false;
        let existPlaylist = false;
        for (let i = 0; i < this.song.length; i++) {
            if (this.song[i].name === n) {
                existSong = true;
            }
        }
        for (let i = 0; i < this.playlist.length; i++) {
            if (this.playlist[i].name === p) {
                existPlaylist = true;
            }
        }
        if (existSong && existPlaylist) {
            for (let i = 0; i < this.playlist.length; i++) {
                if (this.playlist[i].name === p) {
                    this.playlist[i].songs.push(n);
                    console.log(n + " has been added to playlist '" + p + "'.");
                    break;
                }
            }
        } else if (!existPlaylist) {
            console.log("Playlist '" + p + "' does not exist.");
        } else if (!existSong) {
            console.log("Song '" + n + "' does not exist.");
        }
    },
    allSongs() {
        console.log(this.song);
    },
    searchGenre(g) {
        search = [];
        for (let i = 0; i < this.song.length; i++){
            if (this.song[i].genre === g){
                search.push(this.song[i]);
            }
        }
        if (search.length===0){
            console.log("There are no songs in this genre, try again!");
        }
        else {
            console.log(g + " songs are:")
            console.log(search);
        }
    },
}
module.exports = musicModule;

//console.log(musicModule.playSong("Maestro"));
//console.log(musicModule.allSongs());
//console.log(musicModule.viewPlaylist("Favourites"));
//console.log(musicModule.createPlaylist("test"));
//console.log(musicModule.viewPlaylist("test"));
//console.log(musicModule.addToPlaylist("test", "Maestro"));
//console.log(musicModule.viewPlaylist("test"));
//console.log(musicModule.addToPlaylist("testwer", "Maestro"));
//console.log(musicModule.addToPlaylist("test", "idk"));
//console.log(musicModule.searchGenre("lol"));
console.log(musicModule.addSong("Lalali","SEVENTEEN","2:52", "1,000,000", "KPOP"));
console.log(musicModule.playSong("Lalali"));

