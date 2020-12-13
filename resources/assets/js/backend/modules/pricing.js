// @flow
'use strict';

import Notification from './../partials/notification';

class Pricing {
  form () {
    var notification = new Notification();
    notification.flashMessage();
    var _$ = window.jQuery;
  }
}

export default window.pricing = new Pricing();
