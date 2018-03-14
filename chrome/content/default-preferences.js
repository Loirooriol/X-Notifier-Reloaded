/***********************************************************
Load default preferences
/defaults/preferences/prefs.js is not automatically loaded since bug 1413413.
***********************************************************/

var prefService = Components.classes["@mozilla.org/preferences-service;1"]
                            .getService(Ci.nsIPrefService);
var defaultBranch = prefService.getDefaultBranch("extensions.xnotifier.");

function pref(name, value) {
  switch (typeof value) {
    case "boolean": defaultBranch.setBoolPref(name, value); return;
    case "number": defaultBranch.setIntPref(name, value); return;
    case "string": defaultBranch.setCharPref(name, value); return;
    default: throw new Error("Invalid preference value");
  }
}

pref("startupDelay", 500);
pref("updateInterval", 10);
pref("maxConnections", 15);
pref("connections", 4);
pref("connectionDelay", 2000);
pref("openInTab",true);
pref("reuseTab",true);
pref("reloadTab",true);
pref("loadInBackground",false);
pref("resetCounter",false);
pref("checkOnStartup",true);
pref("autoLoginDefaultAccount",true);
pref("multiSession",true);
pref("yahoo.showCaptcha",true);
pref("showNotification",true);
pref("notificationDelay",4000);
pref("autoHideNotification",true);
pref("alertOrigin",0);
pref("alertTextStyle","");
pref("alertSound",true);
pref("customSound",false);
pref("soundUrl","");
pref("showStatusbarIcon",true);
pref("enableToolbar",true);
pref("showTabMenu",true);
pref("showBookmarkMenu",false);
pref("startupOpenXN",false);
pref("clearPasswdAlert",true);
pref("menuShowData",true);
pref("menuWindow",true);
pref("menuSidebar",true);
pref("inboxOnly",true);
pref("showFolders",true);
pref("dataColWidth",10);
pref("enabled",true);
pref("keepSession",false);
pref("keepSessionForNewTab",true);
pref("shortcut.sidebar.key","X");
pref("shortcut.sidebar.modifiers","accel,alt");
pref("showToolbarText",true);
pref("saveCookies",true);
pref("countTotal",0);
pref("activityIcon",0);
pref("iconLeftClick",0);
pref("debug",0);
