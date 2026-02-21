---
title: Running Alpine Linux
type: docs
prev: docs/Database/
---

Believe it or not, but not only can you run Alpine Linux on the Kindle, it is surprisingly easy!

## KindleForge
Thanks to GreenCat, Alpine Linux is available on the [KindleForge](./kforge.md) appstore.

## With a Scriptlet
1. Click [here](https://github.com/GreenCat-777/QuickAlpine/releases/latest/download/install_alpine.sh) to download the latest release.
2. Move the file to the documents folder on your Kindle.
3. Open it from your Kindle's homescreen

## With KUAL
1. Download the latest release [here](https://github.com/schuhumi/alpine_kindle_kual/releases/latest/download/alpine_kindle_kual.zip)
2. Extract the .zip file's contents to the extensions folder on your Kindle.
3. Start KUAL and open the Alpine app
4. Click the `Deploy` button to download the latest release

## Through KTerm
1. Open [kterm](https://github.com/bfabiszewski/kterm)
2. Enter and run the command
```
sh -c "$(curl -fsSL https://tinyurl.com/alpinek)"
```

## Manually. 

### Option 1
Download the [latest release](https://github.com/schuhumi/alpine_kindle/releases/latest/download/alpine.zip) and extract the contents into your root directory, then copy `alpine.conf` to `/etc/upstart/` via ssh or by doing `cp /mnt/us/alpine.conf /etc/upstart/alpine.conf` in KTerm

### Option 2
Follow the guide [here](https://github.com/schuhumi/alpine_kindle)

## Credits
- [schuhumi](https://github.com/schuhumi) - Wrote Alpine for Kindle and the KUAL Installer
- [GreenCat777](https://github.com/GreenCat-777) - Wrote QuickAlpine, the KTerm script, and a good chunk of the page.
- [gingrspacecadet](https://github.com/gingrspacecadet) - cURL command
