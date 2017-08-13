#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!\n`);
