---
title: Enabling & Disabling Push Notifications (Pro)
description: How members turn browser push notifications on or off for the community, on iOS and Android, in Safari and Chrome, with a quick-reference table for changing the setting later.
pageClass: notification-guide-page
---

# Enabling & Disabling Push Notifications (Pro)

When you use the community, you can turn on push notifications to stay updated on replies, mentions, and other activity. Turning them on always takes two steps: first the community itself asks whether you want notifications, then your device or browser shows its own official permission prompt.

> [!Important]
> If you click **Block** or **Don't Allow** on that official prompt, the community can't change this for you later, you have to manually turn notifications back on from your device or browser's own settings. The rest of this guide covers exactly how to do that for the device and browser you use.

![The "Never Miss a Reply" prompt with a Turn On Push Notifications button](/images/portal-settings/notification-user-guide/android-notification-4.webp)



## Apple iOS (iPhone & iPad)

### Using the Installed App (Home Screen PWA)

> [!Note]
> Web notifications on Apple devices require iOS 16.4 or newer.

* **First-time setup:** Open the website in Safari, tap the **Share** button, and select **Add to Home Screen**. Open the new app from your home screen. When it prompts you to enable notifications, tap to allow, then choose **Allow** on the official Apple pop-up.

#### To turn notifications off or back on

1. Open **Settings** on your iPhone and tap **Notifications**.

![The iPhone Settings app with Notifications highlighted](/images/portal-settings/notification-user-guide/notification-1.webp)

2. Find your installed community app in the list and tap it.

![The iPhone Notifications list with the community app highlighted](/images/portal-settings/notification-user-guide/notification-app-2.webp)

3. Turn the **Allow Notifications** switch off to stop notifications, or back on to resume them.

![The community app's notification settings with the Allow Notifications switch turned on](/images/portal-settings/notification-user-guide/allow-notification-3.webp)

### Using the Safari Browser

**First-time setup:** Open the website in Safari. When the community asks to send notifications, tap to enable them, then select **Allow** on the official pop-up.

**To change it later:** If you block notifications in Safari, you have to manage them directly through your iPhone's Safari permission settings under **Settings → Safari → Notifications**. Unlike Chrome, Safari doesn't have a quick notification toggle next to the website address.

## Android Devices

### Using the Installed App (Home Screen PWA)

* **First-time setup:** Install the website as an app on your home screen and open it. When the community asks to send notifications, tap to enable them, then select **Allow** on the official Android pop-up.

#### To turn notifications off or back on

1. Open your Android **Settings**, then go to **Notification & status bar**.

![Android Settings with Notification & status bar highlighted](/images/portal-settings/notification-user-guide/notification-and-statusbar-5.webp)

2. Find your installed community app in the per-app list and turn its switch off or back on.

![The per-app notification list with the community app's switch turned on](/images/portal-settings/notification-user-guide/community-app-enable-6.webp)

### Using the Chrome Browser

* **First-time setup:** Open the website in Chrome. When prompted, tap to enable notifications, then select **Allow** on the official Chrome pop-up.

#### To turn notifications off

1. Open the community website in Chrome and tap the **Site Information** icon next to the web address.

![The Chrome address bar with the Site Information icon highlighted](/images/portal-settings/notification-user-guide/site-icon-7.webp)

2. Tap **Permissions**.

![The site info popup with the Permissions row highlighted, showing Notifications blocked](/images/portal-settings/notification-user-guide/permission-8.webp)

3. Under **Notifications**, turn it off directly, or if it already shows **Not allowed** and you want to be asked again on your next visit, tap **Reset permissions** and confirm **Reset**. Resetting clears the block so the community's own prompt appears again the next time you visit.

![The Permissions page showing Notifications not allowed, with a Reset permissions confirmation dialog](/images/portal-settings/notification-user-guide/reset-permission-9.webp)

* **To turn notifications back on:** Open the community website in Chrome, tap the **Site Information** icon next to the web address, tap **Permissions**, then **Notifications**, and select **Allow**. Or, after resetting permissions, just click **Turn On Push Notifications** the next time the community's own prompt appears.

![The Never Miss a Reply prompt reappearing after resetting Chrome's notification permission](/images/portal-settings/notification-user-guide/turn-on-notification-10.webp)

> [!Tip]
> Alternative method: open Chrome, tap the **⋮** menu, go to **Settings → Site Settings → Notifications**, find the community website in the list, and select **Allow**.

## Quick Reference Summary

| Platform & View | Initial Setup Prompt | How to Change Settings Later |
| :--- | :--- | :--- |
| **iOS Installed App** | Website prompt → iOS prompt | iOS Settings → Notifications → App name |
| **iOS Safari Browser** | Website prompt → Safari prompt | iOS Safari permission settings |
| **Android Installed App** | Website prompt → Android prompt | Android Settings → Apps → App name → Notifications |
| **Android Chrome** | Website prompt → Chrome prompt | Chrome → Site Settings → Notifications → Website |

> [!Tip]
> This guide covers device- and browser-level permissions. For connecting the community to Firebase and configuring what triggers a push in the first place, see [Push Notifications with Firebase (Pro)](/push-notifications-with-firebase).
