

import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import '../css/index.css';
import 'Swiper/dist/css/swiper.css';
import Swiper from 'Swiper/dist/js/swiper.js';


var mySwiper = new Swiper ('.swiper-container', {
	//loop: true,
})

var height2 = $("nav-banner").height();
console.log(height2)