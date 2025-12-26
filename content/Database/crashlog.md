---
title: Disabling Crash Logs
type: docs
prev: docs/Database/
---

Every now and then, you may see random files appearing on your homescreen called "KPPMainApp" or "Mesquite" which can become quite annoying. While sometimes there is an underlying issue that you should fix, it is possible to disable them.

## Method 1 - With a Computer
1. Connect your Kindle to your computer.
2. Create a file called "DISABLE_CORE_DUMP" with no file extension.

## Method 2 - Through kterm
1. Open kterm
2. Run this command ```touch /mnt/us/DISABLE_CORE_DUMP```

## Method 3 - With a Scriptlet
1. GreenCat777 has provided a scriptlet that runs the past command for you! You can download it [here](../assets/disable_crash_logs.sh)