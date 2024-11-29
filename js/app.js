"use strict";
import {dcl, StartICEApp} from "./ICE.js";
import { AutoReloadOnBlur } from "./background-refresh.js";

function StartApp() {
    dcl.register("SideNav", "./components/SideNav.js");
    StartICEApp();
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        StartApp();
    });
} else {
    StartApp();
}

AutoReloadOnBlur();