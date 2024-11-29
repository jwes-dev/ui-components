use strict;

import {Controller} from "/js/app.js";

export class SideNav extends Controller {
   constructor() {
       super();
           this.Init().then(() => {
           this.SetupListeners();
       }).catch((reason) => {
           console.error("could not setup SideNav component");
           console.error(reason);
       });
   }
   SetupListeners() {

   }
}