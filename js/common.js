/**
 * Axial
 * Axial Construct is a universal template for factories, industry, construction, architecture, factories, mechanics, energy
 * Exclusively on https://1.envato.market/axial-html
 *
 * @encoding        UTF-8
 * @version         1.0.5
 * @copyright       (C) 2018 - 2023 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lilith Lamber (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
'use strict';

import {Tab, Collapse} from 'bootstrap';
import LazyLoad from 'vanilla-lazyload';
import AOS from 'aos';
import {setCurrentYear, detectLanguage, preventDefault} from './modules/helpers';
import validate from './modules/forms';
import {drawNav, scrollToTop} from './modules/nav';
import {initCounterAnimation} from './modules/effects';
import {initGallery} from './modules/gallery';
import {initGallerySlider} from './modules/slider';
import toggleVideo from './modules/video';

document.addEventListener('DOMContentLoaded', () => {
    detectLanguage();
    preventDefault();
    const lazyload = new LazyLoad();
    AOS.init({
        offset: 0, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 550, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // animation repeat
    });
    drawNav();
    scrollToTop();
    initCounterAnimation();
    initGallery();
    initGallerySlider();
    toggleVideo();
    validate();
    setCurrentYear();
})