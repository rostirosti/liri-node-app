# LIRI Bot

### overview

In this application we have LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


### prereqs

1. Install required node packages by running "npm install".
2. Make sure you have valid API keys for Spotify sitting in a .env file.  
3. Your file should look like the following: 
SPOTIFY_ID=yourID#
SPOTIFY_SECRET=yourSecret#


### running the app

To use the app you can run "node liri.js" + "what you want to do" + "the query".  So for example to look up a concerts for Weezer you would run "node liri.js concert-this weezer".  Acceptable accepted formats are as follows:

1. concert-this + Artist Name
2. spotify-this-song + Song Name
3. do-what-it-says (this will run through a list of songs contained in random.txt)
4. movie-this + Movie Name


###Enjoy the app!  