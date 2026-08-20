---
title: Progressive Web App (PWA) (Pro)
description: Turn your FluentCommunity portal into an installable app — enable the PWA module and configure the app name, short name, splash screen color, icon, and install button behavior.
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

4. In the drawer that opens, tick **Enable Progressive Web App (PWA)** at the top.

Once enabled, the module's status on the Advanced Features & Addons list changes to **Enabled**, and the install button becomes available to members.

## Configuring the Installed App

With the module enabled, the same drawer exposes every setting for how the app looks and behaves.

| Field | What it does |
| :--- | :--- |
| **App Name** | The full name shown on the install dialog and the splash screen. Defaults to your community name. |
| **Short Name** | The label shown under the icon on the member's home screen, where space is limited. Capped at 12 characters leave it empty to reuse the **App Name**. |
| **Splash Screen Color** | The background color shown behind the app icon while the installed app is loading. Leave it empty to match your portal background. |
| **App Icon** | Choose **Default (Community Logo)** to reuse your existing site logo, or **Custom** to upload a dedicated app icon. |

> [!Note]
> When you choose **Custom**, upload a square image. Anything larger than 512×512 pixels is scaled down automatically mobile browsers reject oversized icons outright, and if that happens the install option never appears for members at all.


![The Progressive Web App (PWA) Settings](/images/portal-settings/progressive-web-app-(pro)/pregressive-web-app-settings-2.webp)


Below the branding fields, three more settings control where and how members see the install button:

| Setting | What it does |
| :--- | :--- |
| **Show Install App in portal menu (mobile only)** | Adds the **Install App** entry to the sidebar. It only appears on mobile browsers that support one-tap install on iOS, members install via the browser's Share menu instead. |
| **Allow members to hide the install button** | When enabled, members can dismiss the install button themselves. Once dismissed, it stays hidden for that member for 7 days. |
| **Install Button Position** | Places the **Install App** entry at the **Sidebar Top** or **Sidebar Bottom** of the portal menu. |

Click **Save Settings** at the bottom of the drawer once you're happy with the configuration nothing takes effect until you save.

## The Member Install Experience

When **Show Install App in portal menu** is on, members see an **Install App** entry in the sidebar, positioned wherever you set **Install Button Position** by default, at the bottom, just above the WordPress **Settings** link.


![Install App entry](/images/portal-settings/progressive-web-app-(pro)/install-app-3.webp)


Tapping it installs your community as an app using the details you configured, your icon on their home screen, your **Short Name** underneath it, and your **App Name** and **Splash Screen Color** on the loading screen. 

The installed app also follows your community's appearance in light and dark mode, keeping its title bar in sync with whichever color mode the member is using.

> [!Note]
> On iOS, browsers don't support one-tap install prompts the way Android and desktop browsers do. iOS members instead install the app from their browser's **Share** menu using **Add to Home Screen**.

::: tip
Because the installed app carries your branding instead of a browser address bar, double-check your icon, **App Name**, and **Splash Screen Color** before rolling this out — treat it the same way you'd treat a mobile app store listing.
:::

## For Developers

Several filters are available for finer control over the install experience including the install button's text, the app's theme color, and its screen orientation so agencies can tailor the PWA behavior for a client without adding extra settings screens.

For the on-site sidebar links that surround the Install App entry, see [Menu Settings](/menu-settings).
