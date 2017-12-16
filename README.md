# Z-Notifier
Z-notifier is a Firefox add-on that checks your webmail accounts and notifies the number of unread emails.

It's a fork of [X-notifier](https://addons.mozilla.org/firefox/addon/xnotifier/) [3.5.23](https://addons.mozilla.org/firefox/addon/xnotifier/versions/3.5.23), fixed to make it work on latest Firefox versions.

## Requirements
Z-Notifier should work on Firefox Firefox 25 - 59.

But since Firefox 57, you may need to change some Firefox preferences in `about:config`:
 - `extensions.legacy.enabled = true` allows legacy extensions.
 - `extensions.allow-non-mpc-extensions = true` allows extensions not compatible with multi-process.
 - `xpinstall.signatures.required = false` allows unsigned add-ons (Mozilla no longer signs legacy extensions).
 - `browser.tabs.remote.autostart = false` disables multi-process.
 
See https://wiki.mozilla.org/Add-ons/Firefox57 for more information.

Note these preferences will have no effect for Firefox Beta and Release. Consider using [Developer Edition](https://www.mozilla.org/firefox/channel/desktop/#developer) or [Nightly](https://www.mozilla.org/firefox/channel/desktop/#nightly).
  
## Download and Install
Available at release page: https://github.com/Loirooriol/Z-Notifier/releases

## License
Z-notifier is based on X-notifier, so it's also licensed under [GNU General Public License, version 2.0](http://www.gnu.org/licenses/gpl-2.0.html).

## Credit
Thanks a lot [tobwithu](http://xnotifier.tobwithu.com), the creator of the original [X-notifier](https://addons.mozilla.org/firefox/addon/xnotifier/) extension.

