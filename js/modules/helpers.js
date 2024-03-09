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

export function setCurrentYear() {
    const container = document.getElementById('currentYear');

    if (container) {
        container.textContent = String(new Date().getFullYear());
    }
}

export function detectLanguage() {
    const userLang = navigator.language.slice(0, 2),
        RTL = ['ar', 'he', 'az', 'dv', 'fa', 'ur'];
    if (RTL.includes(userLang)) {
        document.documentElement.setAttribute('dir', 'rtl');
    }
}

export function setEdgePadding(container) {
    const margin = parseInt(window.getComputedStyle(container).marginLeft),
        padding = parseInt(window.getComputedStyle(container).paddingLeft);
    return margin + padding
}

export function preventDefault() {
    document.querySelectorAll('a[href="#"]').forEach(el => {
        el.addEventListener('click', e => {
            e.stopPropagation();
            e.preventDefault();
        });
    })

    document.querySelectorAll('form[action="#"]').forEach(el => {
        el.addEventListener('submit', e => {
            e.preventDefault();
        });
    })
}