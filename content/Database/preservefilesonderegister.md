---
title: Preserve Files on Deregistering
type: docs
prev: docs/Database/
---

If you had to switch accounts to jailbreak or don't want to be registered to Amazon you can use this.

## Method 1 - With a Scriptlet 
1. GreenCat777 has provided a scriptlet that does it all for you, You can [download it here](../assets/preserve.sh).

## Method 2 - Through kterm 
1. Open kterm
2. Run these commands in order
`mntroot rw`
`touch /var/local/DONT_DELETE_CONTENT_ON_DEREGISTRATION`
`mntroot ro`

> [!IMPORTANT]
Books and Scriptlets will not appear in library due to the kindle thinking they have been deleted, when they haven't actually been deleted. To restore them, you can copy them to your pc then back to the Kindle.

Bluetooth is also hidden on deregistered devices as it only appears on devices of audible regions but a deregistered kindle is region-less to restore bluetooth you can use [this guide](put a link for restoring bt on diff regions guide here).

## Credits
GreenCat777 - Wrote this guide and the provided files
