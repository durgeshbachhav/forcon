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

import drawProcessSteps from './modules/steps';
import {initReviewsSlider} from './modules/slider';
import drawTabs from './modules/tabs';

document.addEventListener('DOMContentLoaded', () => {
    drawTabs();
    drawProcessSteps();
    initReviewsSlider();
})