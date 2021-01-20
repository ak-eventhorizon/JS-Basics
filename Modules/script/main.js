// @ts-check -- enable type checking
'use strict';

import * as model from "./modules/model.js";
import * as view from "./modules/view.js";
import * as controller from "./modules/controller.js";


window.onload = function () {
    model.modelDone();
    view.viewDone();
    controller.controllerDone();
};