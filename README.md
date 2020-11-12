# RockstarGames status

Simple package to get the current status of Rockstar Games services

## Example

```js
const fetchStatus = require('rockstar-games-status');

fetchStatus().then((statuses) => {

    console.log(statuses.gtao.pc); // Up
    console.log(statuses.gtao.ps4); // Down

});
```

### Fetch with specific timezone and languages

Get results in another language or for another timezone:

```js
const fetchStatus = require('rockstar-games-status');

fetchStatus('Europe/Rome', 'fr').then((statuses) => {

    console.log(statuses.gtao.pc); // Actif

});
```
