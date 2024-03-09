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

export default function drawTabs() {
    const tabTriggers = document.querySelectorAll('.tabs_nav-item');

    tabTriggers.forEach(el => {
        el.addEventListener('click', e => {
            const tabPanel = document.querySelector(el.getAttribute('data-bs-target'));
            const tabPanels = document.querySelectorAll('.tab-pane');
            tabTriggers.forEach(el => {
                el.classList.remove('active');
            })
            tabPanels.forEach(el => {
                el.classList.remove('show', 'active');
            })
            el.classList.add('active');
            tabPanel.classList.add('show', 'active');
        })
    })
}