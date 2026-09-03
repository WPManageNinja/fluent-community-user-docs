---
title: Progressive Web App (PWA) (Pro)
description: Turn your FluentCommunity portal into an installable app — enable the PWA module and set the app name, short name, splash color, icon, and install button.
---

# Progressive Web App (PWA) (Pro)

The **Progressive Web App (PWA)** module lets members install your community on their phone or desktop like a native app. Once enabled, an **Install App** button appears in the portal sidebar one tap, and your community sits on the member's home screen with your icon, your name, and no browser bar around the content.

You control exactly how that installed app presents itself: its name, its home-screen label, the color of its loading screen, its icon, and where the install button appears.

> **Use Case:** Your members open your community from a browser tab every day and it never quite feels like "their" app. You enable the PWA module, upload your icon, set the app name to your community's name, and now one tap from the sidebar puts a branded app icon on their home screen no App Store submission required.

## Enabling the PWA Module

1. Open your community portal and click **Settings** at the bottom of the left sidebar.
2. In **Portal Settings**, click **Features & Addons**, then open **Advanced Features & Addons**.
3. Scroll down to **Progressive Web App (PWA)** and click its **Settings** button.

![The Progressive Web App (PWA) ](/images/portal-settings/progressive-web-app-(pro)/access-pregressive-app-1.webp)

4. Check the box to **Enable Progressive Web App (PWA)** at the top of the configuration drawer.



## Configure Your App Branding

Once enabled, the module's status on the Advanced Features & Addons list changes to **Enabled**, and the install button becomes available to members.

 * **App Name:** Enter the full name displayed on the installation popup and the loading screen. This defaults to your portal's community name.

 * **Short Name:** Enter a brief label (capped at 12 characters) that appears directly under the app icon on a member's home screen. If you leave this blank, it automatically reuses your App Name.

 * **Splash Screen Color:** Choose the solid background color that displays while your app is loading. If left blank, it automatically matches your default portal background.

 * **App Icon:** Choose **Default (Community Logo**) to reuse your existing site logo, or select **Custom** to upload a dedicated app icon.

> [!Note]
> If you upload a **custom** icon, it must be a perfectly square image and no larger than 512x512 pixels. Mobile browsers automatically reject oversized images, which will cause the install button to break and disappear for your members.


![The Progressive Web App (PWA) Settings](/images/portal-settings/progressive-web-app-(pro)/pregressive-web-app-settings-2.webp)


## Configure the Install Button

Below the branding settings, you can control exactly where and how your members see the installation prompt inside your community.

 * **Show Install App in portal menu (mobile only):** Turn this on to add a convenient "Install App" button directly into your sidebar.

 * **Allow members to hide the install button:** Check this box to let members manually dismiss the install prompt. If a member closes it, the button will stay hidden for 7 days before returning.

 * **Install Button Position:** Choose whether the install button sits at the Sidebar Top or Sidebar Bottom of your main portal menu.

Click the **Save Settings** button at the bottom of the drawer to lock in your configuration!

## How Members Install Your App

Once everything is saved, members can easily install your branded community to their personal devices. The app will even automatically sync with their device's light or dark mode preferences.

* **For Android & Desktop Users:** Members simply tap the "Install App" button in your sidebar. With one tap, your community is added to their home screen.

* **For Apple iOS Users (iPhone/iPad):** Apple's Safari browser does not support one-tap install buttons. To install the app on an iPhone, members must tap their browser's native **Share** menu icon and select **Add to Home Screen**.


![Install App entry](/images/portal-settings/progressive-web-app-(pro)/install-app-3.webp)


## For Developers

Several filters are available for finer control over the install experience including the install button's text, the app's theme color, and its screen orientation so agencies can tailor the PWA behavior for a client without adding extra settings screens.

For the on-site sidebar links that surround the Install App entry, see [Menu Settings](/menu-settings).
