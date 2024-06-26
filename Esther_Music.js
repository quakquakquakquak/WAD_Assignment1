
module.exports = {
    // array of songs and their info
    song: [{ name: "Maestro", artist: "SEVENTEEN", duration: "3:18", listeners: "9,000,000", genre: "KPOP" }, { name: "Pretty U", artist: "SEVENTEEN", duration: "3:27", listeners: "111,000,000", genre: "KPOP" }, { name: "Heya", artist: "IVE", duration: "3:50", listeners: "3,000,000", genre: "KPOP" }],

    // array of playlists
    playlist: [{ name: "Favourites", songs: ["Maestro", "Pretty U"], description: "Favourite songs" }],


    // add a song to the list of song array
    // 'n' = name, 'a' = artist, 'd' = duration, 'l' = listeners, 'g' = genre
    addSong(n, a, d, l, g) {
        for (let i = 0; i < this.song.length; i++) {
            // checking is song with this name already exists
            if (this.song[i].name === n) {
                throw Error(console.log("This song already exists, please add another one!"))
                //console.log("This song already exists, please add another one!");
                //break;
            }
            else {
                this.song.push({ name: n, artist: a, duration: d, listeners: l, genre: g });
                console.log('"' + n + '" by ' + a + ' has been added!');
                break;
            }
        }

    },
    // edit an existing song
    // 'n' = name, 'newName' = new name,  'artist' = new artist, 'duration' = duration, 'listeners' = listeners, 'genre' = genre
    editSong(n,  newName = null, artist = null, duration = null, listeners = null, genre = null ) {


        let oldSong = null;
        let index = null;
        let updatedSong;

        // checking is song exists
        for (let i = 0; i < this.song.length; i++) {
            if (this.song[i].name === n) {
                oldSong = this.song[i];
                index = i;
                break;
            }
        }

        // if the song is found, update it with the new information
        if (oldSong !== null) {
            // fill up updatedSong with old song's info first
            updatedSong = {
                name: oldSong["name"],
                artist: oldSong["artist"],
                duration: oldSong["duration"],
                listeners: oldSong["listeners"],
                genre: oldSong["genre"]
            };

            // update any info provided
            if (newName) updatedSong.name = newName;
            if (artist) updatedSong.artist = artist;
            if (duration) updatedSong.duration = duration;
            if (listeners) updatedSong.listeners = listeners;
            if (genre) updatedSong.genre = genre;

            // update the song at the found index with the updated song object
            this.song[index] = updatedSong;
            console.log("Song '" + newName + "' has been updated.");
            console.log(updatedSong);
        }
        // if song is not found 
        else {
            console.log("Song '" + n + "' not found. No changes made.");
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
    // view what song(s) is in a certain playlist
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

            // if there's a playlist description
            if (selected.description) {
                console.log("Description: " + selected.description);
            }

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
    // 'n' is the name of the new playlist, optional 'description'
    createPlaylist(n, description = "None") {

        // check if playlist name exists
        for (let i = 0; i < this.playlist.length; i++) {
            if (this.playlist[i].name === n) {
                // If the name exists, log a message and return
                console.log("Name for playlist is already in use, please enter a new one.");
                return;
            }
        }
        // if name is not in use, create new playlist
        this.playlist.push({ name: n, songs: [], description: description });
        console.log(n + " has been created!");


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
        let songNames = [];
        // go through all songs, get the name
        for (let i = 0; i < this.song.length; i++) {
            songNames.push(this.song[i].name);
        }
        console.log("These are the songs in the database:")
        console.log(songNames);
    },
    // display all existing playlists and it's description
    allPlaylist() {
        let playlistNames = [];
        let playlistDesc = [];
        // go through all songs, get the name
        for (let i = 0; i < this.playlist.length; i++) {
            playlistNames.push(this.playlist[i].name);
            playlistDesc.push(this.playlist[i].description);
        }
        console.log("These are the playlists in the database: \n")

        for (let i = 0; i < playlistNames.length; i++) {
            console.log("Name: " + playlistNames[i] + "\nDescription: " + playlistDesc[i] + " \n");
        }
    },
    // search for songs that has a certain genre
    // 'g' = name of genre
    searchGenre(g) {
        // convert the input genre to lowercase
        const genreToSearch = g.toLowerCase();
    
        // empty array of possible songs in that genre
        let search = [];
    
        // find songs with that genre
        for (let i = 0; i < this.song.length; i++) {
            // convert the genre of each song to lowercase for comparison
            const songGenre = this.song[i].genre.toLowerCase();
            
            if (songGenre === genreToSearch) {
                // if there are any songs with that genre, add that song object into the array
                search.push(this.song[i]);
            }
        }
    
        if (search.length === 0) {
            // if array is empty, means there are no songs with that genre
            console.log("There are no songs in this genre, try again!");
        } else {
            // if array not empty, display the songs + song details in that genre
            console.log(g + " songs are:");
            console.log(search);
        }
    },
}

