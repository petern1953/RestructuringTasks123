// Mentsd el külön -- tetszőleges nevű -- változókba az alábbi tömb egyes, hármas és ötös indexű elemét!
// const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];

'use strict';

const names = ['John', 'Jane', 'Judith', 'Jennifer', 'Jeremiah', 'Johnny'];

const [, one, , three, , five] = names;

console.log(one, three, five);