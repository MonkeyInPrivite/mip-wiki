---
title: Toggling Bluetooth In a Non Supported Region Or On an Unregistered Device 
type: docs
prev: docs/Database/
---

If you live in a non audible region but want the bluetooth features of a kindle this is for you

## Method 1 - With a Scriptlet 
1. GreenCat777 has provided a pair of scriptlets that does it all for you, you can download it [here](../assets/bt.zip).
2. Extract the .zip to the root of your Kindle, making sure that the files are in the correct place.
> [!IMPORTANT]
> The bluetooth.sh script goes in the root of your Kindle, **not** in the documents folder.
## Method 2 - Through kterm 
1. Open kterm
2. Run this command to enable bt
`lipc-set-prop -s com.lab126.btfd BTenable 1:1`
and this to turn it off
`lipc-set-prop -s com.lab126.btfd BTenable 0:1`

## Explanation 
Bluetooth is only enabled on Kindles where Audible (Amazon's audiobook platform) is supported. Also if you deregister your Kindle, it's regionless, so Bluetooth is disabled.
## Credits
- [GreenCat777](https://github.com/GreenCat-777) - Wrote this guide and created the provided files.
