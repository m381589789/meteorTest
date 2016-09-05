import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';
Meteor.subscribe('posts', 'bob-smith');
// learn => http://zh.discovermeteor.com/chapters/routing/