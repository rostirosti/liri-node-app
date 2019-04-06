///Required files
require('dotenv').config();
axios = require('axios');
fs = require('fs');
var Spotify = require('node-spotify-api');
require('bandsintown')('codingbootcamp');

///Command line inputs
var commandInput = process.argv[2];
var commandInput3 = process.argv.slice(3).join('%20');


///fs read file to import keys
fs.readFile('keys.js', 'utf8', function (error, data) {
      if (error) {
        return console.log("error with keys");
      }
        })

///reading env file to import keys
var spotify = new Spotify({
   id: process.env.SPOTIFY_ID,
   secret: process.env.SPOTIFY_SECRET
 });



//concertSearch uses bandsInTown API
var concertSearch = function () {
  axios.get(`https://rest.bandsintown.com/artists/${commandInput3}/events?app_id=codingbootcamp`)
  .then(function (response) {
    if (response.status === 200) {
      for (let i = 0; i < response.data.length; i++) {
        console.log(JSON.stringify("Venue name: " + response.data[i].venue.name));
        console.log(JSON.stringify("Venue location: " + response.data[i].venue.city + " " + response.data[i].venue.region + " " + response.data[i].venue.country));
      };
    };
  })
}

//spotifySearch API
var spotifySearch = function () {
  spotify.search({
    type: 'track',
    query: commandInput3
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(JSON.stringify("Track name: " + data.tracks.items[0].name));
    for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
    console.log(JSON.stringify("Artists name: " + data.tracks.items[0].artists[i].name));
    };
    console.log(JSON.stringify("Preview url: " + data.tracks.items[0].preview_url));
    console.log(JSON.stringify("Album name: " + data.tracks.items[0].album.name));
  });
}

//fs import of random.txt which contains song list
var songListImport = function () {
  fs.readFile('random.txt', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    const output = data.split(',');
    for (let i = 0; i < output.length; i++) {
      if ( i > 0) {
        commandInput3 = output[i];
        spotifySearch();
      }
    }

})
};

//omdb api using axios
var movieThis = function () {

// Building the query URL
const queryUrl = `http://www.omdbapi.com/?apikey=trilogy&t=${commandInput3}`

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

// Then run a request to the IEX API with the movie specified
axios.get(queryUrl).then(function(response) {

  // If the request is successful
  if (response.status === 200) {

    console.log(`Movie Title: ${response.data.Title}`);
    console.log(`Year: ${response.data.Year}`);
    console.log(`IMDB Rating: ${response.data.Ratings[0].Value}`);
    console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
    console.log(`Country of Production: ${response.data.Country}`);
    console.log(`Language of movie: ${response.data.Language}`);
    console.log(`Plot: ${response.data.Plot}`);
    console.log(`Actors: ${response.data.Actors}`);
  }
});
}


///decision block for deciding which function to run based on the command line arguments
if (commandInput === 'concert-this') {
  concertSearch();
  //spotifying a song name
} else if (commandInput === 'spotify-this-song') {
  if (!commandInput3){
    commandInput3 = "What's My Age Again";
  }
  spotifySearch();
} else if (commandInput === 'do-what-it-says') {
  songListImport();
} else if (commandInput === 'movie-this') {
  if (!commandInput3){
    commandInput3 = "Mr. Nobody";
  }
  movieThis();
};
