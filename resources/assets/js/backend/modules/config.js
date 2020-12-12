// @flow
'use strict';

import Uploadfile from './../partials/uploadfile';
import Notification from './../partials/notification';
import 'fontawesome-iconpicker';

class Config {
  form () {
    var notification = new Notification();
    notification.flashMessage();
    var _$ = window.jQuery;
    var uploadfile = new Uploadfile();
    uploadfile.init();
    var uploadblog = new Uploadfile('#blog_banner', '#blog_banner-upload');
    uploadblog.init();
    var uploadAbout = new Uploadfile('#about_banner', '#about_banner-upload');
    uploadAbout.init();
    var uploadContactBanner = new Uploadfile('#contact_banner', '#contact_banner-upload');
    uploadContactBanner.init();
    var uploadContactBanner1 = new Uploadfile('#contact_banner_1', '#contact_banner_1-upload');
    uploadContactBanner1.init();
    var uploadContactBanner2 = new Uploadfile('#contact_banner_2', '#contact_banner_2-upload');
    uploadContactBanner2.init();
    _$('.icon-picker').iconpicker({
        icons: [
            {
                title: "fa fa-pencil",
                searchTerms: ['pencil']
            },
            {
                title: "fa fa-lightbulb-o",
                searchTerms: ['globe']
            },
            {
                title: "ion ion-ios-people",
                searchTerms: ['people']
            },
            {
                title: "ion ion-ios-planet",
                searchTerms: ['planet']
            },
            {
                title: "ion ion-ios-ribbon",
                searchTerms: ['ribbon']
            },
            {
                title: "ion ion-ios-globe",
                searchTerms: ['globe']
            },
            {
                title: "ion ion-ios-unlock",
                searchTerms: ['unlock']
            },
            {
                title: "fa fa-address-card-o",
                searchTerms: ['address']
            },
            {
                title: "fa fa-diamond",
                searchTerms: ['diamond']
            },
            {
                title: "fa fa-envelope-open-o",
                searchTerms: ['envelope']
            },
            {
                title: "fa fa-commenting",
                searchTerms: ['commenting']
            },
            {
                title: "fa fa-rocket",
                searchTerms: ['rocket']
            },
            {
                title: "fa fa-camera-retro",
                searchTerms: ['camera']
            },
            {
                title: "fa fa-file-image-o",
                searchTerms: ['file-image']
            },
            {
                title: "fa fa-television",
                searchTerms: ['television']
            },
            {
                title: "fa fa-handshake-o",
                searchTerms: ['handshake']
            }
        ],
    });
  }
}

export default window.config = new Config();
