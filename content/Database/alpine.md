---
title: Running Alpine Linux
type: docs
prev: docs/Database/
---

Believe it or not, but not only can you run Alpine Linux on the Kindle, it is surprisingly easy!

## With a Scriptlet
1. Click [here](https://github.com/GreenCat-777/QuickAlpine/releases/latest/download/install_alpine.sh) to download the latest release.
2. Move the file to the documents folder on your Kindle.
3. Open it from your Kindle's homescreen

## Through kterm
> [!IMPORTANT]
> You will get an error saying that the install file cannot be deleted, this can safely be ignored.
1. Open [kterm](https://github.com/bfabiszewski/kterm)
2. Enter and run the command ```sh -c "$(curl -fsSL https://tinyurl.com/curlalpine)"```

## With KUAL
1. Download the latest release [here](https://github.com/schuhumi/alpine_kindle_kual/releases/latest/download/alpine_kindle_kual.zip)
2. Extract the .zip file's contents to the extensions folder on your Kindle.
3. Start KUAL and open the Alpine app
4. Click the button to download the latest release

## Credits
schuhumi - Wrote Alpine for Kindle and the KUAL Installer  
GreenCat777 - Wrote QuickAlpine  
gingrspacecadet - curl command
