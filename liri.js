///Required files
require('dotenv').config();
axios = require('axios');
fs = require('fs');
var Spotify = require('node-spotify-api');
require('bandsintown')('codingbootcamp');

///Command line inputs
const commandInput = process.argv[2];
const commandInput2 = process.argv[3];
const commandInput3 = process.argv.slice(3).join('%20');
console.log(commandInput3);

///Bug logging
console.log("The command is" + commandInput);

// ///fs read file to import keys
// fs.readFile('keys.js', 'utf8', function (error, data) {
//      if (error) {
//        return console.log(error);
//      }

// //     var Keys = data;
//  console.log(data);    
// //const spotify = new Spotify(keys.spotify)

//      })

var spotify = new Spotify({
  id: 'ac8b5bd597d946cf86642507045668ed',
  secret: '447b449be0f2445caa153416dc575a1b'
});

// var spotifyThing = function (spotifyInput){
//     axios.get(`https://rest.bandsintown.com/artists/${spotifyInput}/events?app_id=codingbootcamp`)
//       .then(function (response) {
//         if (response.status === 200) {
//           for (let i = 0; i < response.data.length; i++) {
//             console.log(JSON.stringify("Venue name: " + response.data[i].venue.name));
//             console.log(JSON.stringify("Venue location: " + response.data[i].venue.city + " " + response.data[i].venue.region + " " + response.data[i].venue.country));
//           };
//         };
//       })

// };

//code to retrieve the lists of artists.  currently does not work with artist names that have spaces in their name
if (commandInput === 'concert-this') {
  axios.get(`https://rest.bandsintown.com/artists/${commandInput3}/events?app_id=codingbootcamp`)
    .then(function (response) {
      if (response.status === 200) {
        for (let i = 0; i < response.data.length; i++) {
          console.log(JSON.stringify("Venue name: " + response.data[i].venue.name));
          console.log(JSON.stringify("Venue location: " + response.data[i].venue.city + " " + response.data[i].venue.region + " " + response.data[i].venue.country));
        };
      };
    })

  //spotifying a song name
} else if (commandInput === 'spotify-this-song') {
  spotify.search({
    type: 'track',
    query: 'Stan'
  }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(JSON.stringify(data.tracks.items[0].name));
    for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
      console.log(JSON.stringify(data.tracks.items[0].artists[i].name));
    };
    console.log(JSON.stringify(data.tracks.items[0].preview_url));
    console.log(JSON.stringify(data.tracks.items[0].album.name));
  });
} else if (commandInput === 'do-what-it-says') {
  //   // Includes the FS package for reading and writing packages
  // const fs = require('fs');

  // Running the readFile module that's inside of fs.
  // Stores the read information into the variable 'data'
  fs.readFile('random.txt', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }

    // Break the string down by comma separation and store the contents into the output array.
    const output = data.split(',');

    // Loop Through the newly created output array
    for (let i = 0; i < output.length; i++) {
     
      // Print each element (item) of the array/
      console.log(output[i]);

      // axios.get(`https://rest.bandsintown.com/artists/${output[i]}/events?app_id=codingbootcamp`)
      // .then(function (response) {
      //   if (response.status === 200) {
      //     for (let i = 0; i < response.data.length; i++) {
      //       console.log(JSON.stringify("Venue name: " + response.data[i].venue.name));
      //       console.log(JSON.stringify("Venue location: " + response.data[i].venue.city + " " + response.data[i].venue.region + " " + response.data[i].venue.country));
      //     };
      //   };
      // })
  
    //spotifying a song name
  


    }
  });


};

///importing file







// }

// axios.get(`https://rest.bandsintown.com/artists/weezer/events?app_id=codingbootcamp`).then(function (response) {
//   if (response.status === 200) {
//     for (let i = 0; i < response.data.length; i++) {
//       console.log(response.data[i].venue.name);
//     };
//   });

// }

// const data = response.data;
// console.log(JSON.stringify(data.DISPLAY.BTC.USD, null, 2));


//
// else if (operand === 'movie-this') {
//   outputNum = operations.multiply(num1, num2);
// }
// else if (operand === 'do-what-it-says') {
//   outputNum = operations.multiply(num1, num2);
//}