// Adott az alábbi objektum:
// const user = {
//     firstName: 'John',
//     lastName: 'Doe'
// };
// Mentsd el külön l, f és j változókba a fenti objektum lastName, firstName és job property-jeit!
// Ha valamelyik nincs megadva, akkor az érték legyen az “unknown” string!

'use strict';

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

const { lastName: l = 'unknown', firstName: f = 'unknown', job: j = 'unknown' } = user;

console.log(l, f, j);