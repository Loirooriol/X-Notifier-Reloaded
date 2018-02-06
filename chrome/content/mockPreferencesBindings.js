// Since bug 1379338, chrome://global/content/preferencesBindings.js exposes a Preferences
// object that should be used to define the properties.
// This file provides a limited mock of it for previous version of Firefox.
if (typeof Preferences == "undefined") {
  window.Preferences = {
    addAll: Function.prototype,
    get: (pref) => document.getElementById(pref)
  };
}
