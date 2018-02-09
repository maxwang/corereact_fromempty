require('./lib');
//$ = require('jquery');
import ES6Lib from './es6codelib';
import 'bootstrap/dist/css/bootstrap.min.css';
document.getElementById("fillthis").innerHTML = getText();

let myES6Object = new ES6Lib();
document.getElementById("fillthiswithes6lib").innerHTML = myES6Object.getData();

module.hot.accept();