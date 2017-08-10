#!/usr/bin/env node
import { askUserName, showGreeting, showMessage } from '..';

showMessage('Welcome to the Brain Games!\n');
const userName = askUserName();
showGreeting(userName);
