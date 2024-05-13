# Music Module

## Description

A music playing module!

## Setting Up

To use this module, please make sure that:

1. Node is installed
2. Clone this repository 
3. You can either use this js file on its own and run with
    ```
    node Esther_Music.js
    ```

    Use it with your other files, just make sure this file is required
    ```
    // you may change the const name to whatever you deem fit
    const musicModule = require("./Esther_Music.js");
    ```

## Functions



* playSong
    - *display details of the specific song*

    command:
    ```js
    playSong("Maestro")
    ```

    output:
    ```js
    Currently Playing: Maestro
    Song Details:
    {
        name: 'Maestro',
        artist: 'SEVENTEEN',
        duration: '3:18',
        listeners: '9,000,000',
        genre: 'KPOP'
    }
    ```

* addSong
    - *adds a song*
    - *parameters are: **< n, a, d, l, g >** <br />
    *'n' = name, 'a' = artist, 'd' = duration, 'l' = listeners, 'g' = genre*

    command:
    ```js
    addSong("Lalali", "SEVENTEEN", "2:52", "1,000,000", "KPOP")
    ```

    output:
    ```js
    "Lalali" by SEVENTEEN has been added!
    ```

* editSong
    - *change details of existing song*
    - parameters usable are: **< newName, artist, duration, listeners, genre >**

    command:
    ```js
    editSong("Maestro", newName = "Conductor")
    ```

    output:
    ```js
    Song 'Conductor' has been updated.
    {
        name: 'Conductor',
        artist: 'SEVENTEEN',
        duration: '3:18',
        listeners: '9,000,000',
        genre: 'KPOP'
    }
    ```

* viewPlaylist
    - *view what song(s) is in a certain playlist*

    command:
    ```js
    viewPlaylist("Favourites")
    ```

    output:
    ```js
    Currently Viewing Playlist: Favourites
    Description: Favourite songs
    Playlist Contains: Maestro,Pretty U
    ```

* createPlaylist
    - *creates a new playlist*
        - *descriptions are optional*

    command:
    ```js
    createPlaylist("test1")
    //OR
    createPlaylist("test2", description = "idk")
    ```

    output:
    ```js
    test1 has been created!
    test2 has been created!
    ```

* addToPlaylist
    - *adds an existing song to an existing playlist*
    - parameters are **< p, n>**<br />
        *'p' = name of playlist, 'n' = name of song*

    command:
    ```js
    addToPlaylist("Favourites", "Lalali")
    ```

    output:
    ```js
    Lalali has been added to playlist 'Favourites'.
    ```

* searchGenre
    - *get all songs that has the entered genre*

    command:
    ```js
    searchGenre("kpop")
    ```

    output:
    ```js
    kpop songs are:
    [
        {
            name: 'Maestro',
            artist: 'SEVENTEEN',
            duration: '3:18',
            listeners: '9,000,000',
            genre: 'KPOP'
        },
        {
            name: 'Pretty U',
            artist: 'SEVENTEEN',
            duration: '3:27',
            listeners: '111,000,000',
            genre: 'KPOP'
        },
        {
            name: 'Heya',
            artist: 'IVE',
            duration: '3:50',
            listeners: '3,000,000',
            genre: 'KPOP'
        }
    ]
    ```

* allSongs
    - *displays all songs stored*

    command:
    ```js
    allSongs()
    ```

    output:
    ```js
    These are the songs in the database:
    [ 'Maestro', 'Pretty U', 'Heya' ]
    ```

* allPlaylist
    - *displays all playlists made*

    command:
    ```js
    allPlaylist()
    ```

    output:
    ```js
    These are the playlists in the database:

    Name: Favourites
    Description: Favourite songs

    Name: test1
    Description: None

    Name: test2
    Description: idk
    ```


