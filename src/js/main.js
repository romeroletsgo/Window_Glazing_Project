import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    //timer deadline
    let deadline = '2021-04-01';

    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms();
    timer('.container1', deadline);
});