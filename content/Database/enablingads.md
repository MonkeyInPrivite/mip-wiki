---
title: Enabling Ads
type: docs
prev: docs/Database/
---

If you don't have ads enabled and would like to use [AdBreak](https://www.mobileread.com/forums/showthread.php?p=4539164#post4539164), this guide is for you!

# In-Depth Guide
> [!IMPORTANT]
> If you have any issues along the way, there is different troubleshooting steps listed in the table of contents and linked at the end of some lines.

1. Go to https://amazon.com
2. On mobile, click on your account, click "See all options", and click on "Devices"
On a Computer, click on your account, and click on "Devices"
3. Find your Kindle and click on it
4. Scroll down to "Special Offers"
5. Click "Sign up for offers"
6. On the window that pops up, click "Sign up for offers" (yes, again)
7. Ads should now be available on your Kindle, you can confirm this by going to the home screen, clicking on the 3 dots in the top right, and seeing if there is a button to view the ads.

# Troubleshooting 
## My Kindle isn't showing up under devices!
Make sure your Kindle is registered to that Amazon account. You can check the account on your Kindle in Settings.

## I get a generic error when trying to enable ads.
If you are getting the error,"Something went wrong, please try again later," chances are your country is not supported. If you have experience with the browser developer tools, you can verify this by checking the network requests for "COR_NOT_SUPPORTED" (COR standing for "**C**ountry **O**f **R**esidence"). Thankfully, this is decently easy to fix.
1. Change the region on your Amazon account to the US
2. Remove all addresses on your account, and add the White House (1600 Pennsylvania Avenue NW, Washington, DC 20500)

## I get a request to add a payment method when trying to enable ads.
This is quite common likely due to the fact that disabling ads creates a transaction. If you have a valid form of payment you can attatch that. But reports have also surfaced that it might have to be a valid **US** form of payment to enable ads.
If you do not have a valid form of payment, things can get complicated. Previously, it was possible to bypass this using a [Demo Card](https://developer.mastercard.com/mastercard-send/documentation/implementation/sandbox-test-cards/), but Amazon being Amazon, has seemingly patched this method. Now, you need a valid US account with a payment method to enable ads. If you don't have one, you now have 2 options.
