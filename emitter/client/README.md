# Frontend Task

## To run the app

To run the app open 2 terminals from the root directory.
First terminal: Go into the emitter folder and run `npm i` then `npm start`
Second terminal: Go into the client folder inside the emitter folder and run `npm i` then `npm start`, this should automatically open a browser window if not open your browser and go to http://localhost:3000/.

## App description

This app emits random data from a Socket.io server on ws://localhost:3050.
Upon initialisation of the app it will open the LEADERBOARD tab and display the data in a table sorted by score from highest to lowest.
By default this table starts with only 10 entries and only the top 10 scores will be visible.
Each new entry submitted to the table will be made obvious by the change in color.
Each row of the table has a delete button as they are removable.

The other tab is the SETTINGS tab, the user can click on this and it will display a slider which gives the user the ability to set the number of entries on the leaderboard table from 1 to 20 entries and when they click back on to the LEADERBOARD tab will see their new settings implemented.

## Testing the app

To run the test suite open a new terminal along with the existing ones and navigate to `emitter/client` and run `npm test a`.
Or alternatively to run Cypress testing navigate to `emitter/client` and run `npm run cypress:open`.