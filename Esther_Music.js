let musicModule = {
    // array of songs and their info
    song: [{ name: "Maestro", artist: "SEVENTEEN", duration: "3:18", listeners: "9,000,000", genre: "KPOP" }, { name: "Pretty U", artist: "SEVENTEEN", duration: "3:27", listeners: "111,000,000", genre: "KPOP" }, { name: "Heya", artist: "IVE", duration: "3:50", listeners: "3,000,000", genre: "KPOP" }],

    // array of playlists
    playlist: [{ name: "Favourites", songs: ["Maestro", "Pretty U"] }],


    // add a song to the list of song array
    // 'n' = name, 'a' = artist, 'd' = duration, 'l' = listeners, 'g' = genre
    addSong(n, a, d, l, g) {
        for (let i = 0; i < this.song.length; i++) {
            // checking is song with this name already exists
            if (this.song[i].name === n) {
                console.log("This song already exists, please add another one!");
                break;
            }
            else {
                this.song.push({ name: n, artist: a, duration: d, listeners: l, genre: g });
                console.log('"' + n + '" by ' + a + ' has been added!');
                break;
            }
        }
    },
    // displays song info of specified song. 
    // 'n' is where they input the name of the song
    playSong(n) {

        // none will be selected at first,  var will be empted
        let selected = null;

        for (let i = 0; i < this.song.length; i++) {
            // check if song exists
            if (this.song[i].name === n) {
                // if yes, assign that object to the 'selected'
                selected = this.song[i];
                break;
            }
            // if it doesnt, 'selected' will remain empty
        }

        if (selected !== null) {
            // if its not empty, display song details
            console.log("Currently Playing: " + selected.name); // Log the name of the selected song
            console.log("Song Details: ");
            console.log(selected);
        } else {
            // if empty
            console.log("Song not found");
        }
    },
    // views what songs is in a certain playlist
    // 'n' is the name of the playlist
    viewPlaylist(n) {

        // none will be selected at first,  var will be empted
        let selected = null;

        for (let i = 0; i < this.playlist.length; i++) {
            // check if playlist exists
            if (this.playlist[i].name === n) {
                // if yes, assign that object to the 'selected'
                selected = this.playlist[i];
                break;
            }
            // if it doesnt, 'selected' will remain empty
        }

        if (selected !== null) {
            // if 'selected' is not empty, display playlist content
            console.log("Currently Viewing Playlist: " + selected.name);

            if (selected.songs && selected.songs.length > 0) {
                // if songs array in playlist is not empty
                console.log("Playlist Contains: " + selected.songs);
            }
            else {
                // if playlist has no songs
                console.log("Playlist is empty. Start adding songs to it!");
            }

        } else {
            console.log("Playlist not found");
        }
    },
    // create new playlist
    // 'n' is the name of the new playlist
    createPlaylist(n) {
        for (let i = 0; i < this.playlist.length; i++) {
            // check if playlist name exists
            if (this.playlist[i].name === n) {
                // if yes, break loop
                console.log("Name for playlist is already in used, please enter a new one.");
                break;
            }
            else {
                // if name is not in use, create new playlist
                this.playlist.push({ name: n, songs: [] });
                console.log(n + " has been created!");
                break;
            }
        }

    },
    //add songs to playlist
    // 'p' = name of playlist, 'n' = name of song
    addToPlaylist(p, n) {
        // check whether song and playlist exists before adding
        let existSong = false;
        let existPlaylist = false;
        // if song exists
        for (let i = 0; i < this.song.length; i++) {
            if (this.song[i].name === n) {
                existSong = true;
            }
        }
        // if playlist exists
        for (let i = 0; i < this.playlist.length; i++) {
            if (this.playlist[i].name === p) {
                existPlaylist = true;
            }
        }
        // if both condictions are true, add song into playlist
        if (existSong && existPlaylist) {
            for (let i = 0; i < this.playlist.length; i++) {
                if (this.playlist[i].name === p) {
                    this.playlist[i].songs.push(n);
                    console.log(n + " has been added to playlist '" + p + "'.");
                    break;
                }
            }
        }
        // if playlist doesnt exist
        else if (!existPlaylist) {
            console.log("Playlist '" + p + "' does not exist.");
        }
        // if song doesnt exists
        else if (!existSong) {
            console.log("Song '" + n + "' does not exist.");
        }
    },
    // display all songs
    allSongs() {
        console.log(this.song);
    },
    // search for songs that has a certain genre
    // 'g' = name of genre
    searchGenre(g) {
        // empty array of possible songs in that genre
        search = [];

        // find songs with that genre
        for (let i = 0; i < this.song.length; i++) {
            if (this.song[i].genre === g) {
                // if theres any songs with that genre, add that song object into the array
                search.push(this.song[i]);
            }
        }
        if (search.length === 0) {
            // if array is empty, means theres no songs with that genre
            console.log("There are no songs in this genre, try again!");
        }
        else {
            // if array not empty, display the songs + song details in that genre
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
console.log(musicModule.addSong("Lalali", "SEVENTEEN", "2:52", "1,000,000", "KPOP"));
console.log(musicModule.playSong("Lalali"));

