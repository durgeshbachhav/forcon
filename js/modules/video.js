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

export default function toggleVideo() {
    const videoContainers = document.querySelectorAll('.video');
    if (videoContainers) {
        videoContainers.forEach(container => {
            const video = container.querySelector('video'),
                cover = container.querySelector('.video_cover'),
                btn = container.querySelector('.video_btn'),
                iconPlay = btn.querySelector('.icon-play'),
                iconPause = btn.querySelector('.icon-pause');

            btn.addEventListener('click', e => {
                e.stopPropagation();
                e.preventDefault();
                video.paused ? play() : pause();
            });

            video.addEventListener('ended', () => {
                cover.classList.remove('hidden');
                btn.classList.remove('hidden');
                iconPlay.style.opacity = 1;
                iconPause.style.opacity = 0;
            })

            video.addEventListener('click', () => {
                video.paused ? play() : pause();
            })

            container.addEventListener('mouseenter', () => {
                btn.classList.remove('hidden');
            })

            container.addEventListener('mouseleave', () => {
                !video.paused && btn.classList.add('hidden');
            })

            function play() {
                video.play();
                cover.classList.add('hidden');
                btn.classList.add('hidden');
                iconPlay.style.opacity = 0;
                iconPause.style.opacity = 1;
            }

            function pause() {
                video.pause();
                cover.classList.remove('hidden');
                btn.classList.remove('hidden');
                iconPlay.style.opacity = 1;
                iconPause.style.opacity = 0;
            }
        })
    }
}