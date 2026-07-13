---
title: Connecting with FluentSocket
description: Learn how to connect FluentSocket with FluentCommunity to power real-time chat, delivering messages and notifications to members instantly with no page refresh.
---

# Connecting with FluentSocket

**FluentSocket** is a high-performance socket server built specifically for the Fluent ecosystem. It's one of the real-time drivers that powers your community's [group chat](/community-hub/using-group-chat-(pro)) — connecting it lets messages and notifications reach your members the exact moment they happen, with no page refresh required.

> **Use Case:** Your members chat in real time across several Spaces, and you want a self-hosted socket server that keeps conversations instant and reliable without relying on a third-party cloud service.

This guide walks you through creating a FluentSocket app and connecting it to your community.

## How to Connect FluentSocket

### Step 1: Create Your FluentSocket App

To get the credentials for the integration, first create an "App" within your FluentSocket account.

1.  Sign in to your FluentSocket account.
2.  Click the **Apps** button in the top navigation bar.
3.  Click the **Create New App** button to open the configuration window.

![The Apps section of the FluentSocket dashboard](/images/integrations/connecting-with-fluentsocket/fluentsocket-1-scaled.webp)

Now configure your app:

* **App Name:** Give your app a clear name (e.g., "My Community Chat").
* **Max Connections:** Set your preferred limit for simultaneous connections.
* **Enable Client Messages:** Check this box. It's a recommended setting for real-time chat to function correctly.

Click the **Create App** button to finalize.

![The FluentSocket app configuration window](/images/integrations/connecting-with-fluentsocket/fluentsocket-2-scaled.webp)

### Step 2: Collect Your Credentials

Once your app is created, FluentSocket generates unique keys to secure the connection.

1.  Locate your newly created app in the list.
2.  Find and copy the following three pieces of information: **App ID**, **App Key**, and **App Secret**.

![The FluentSocket app credentials: App ID, App Key, and App Secret](/images/integrations/connecting-with-fluentsocket/fluentsocket-3-scaled.webp)

> **✨ Note:**
> Keep these credentials private — they allow your website to communicate securely with the socket server.

### Step 3: Connect FluentSocket to FluentCommunity

Now plug your credentials into your WordPress site.

1.  Go to your WordPress dashboard and navigate to **FluentCommunity > Settings**.
2.  Click **Features & Addons** in the left sidebar.
3.  Find the [Group Chat module](/community-hub/using-group-chat-(pro)) and click the **Messaging Settings** button.
4.  Locate the **Enable Real-Time Messaging** toggle and turn it **On**.
5.  Select **FluentSocket** as your real-time driver.
6.  Paste the **App ID**, **App Key**, and **App Secret** into their respective fields.
7.  Click the **Save Settings** button.

![The FluentCommunity messaging settings with FluentSocket selected as the driver](/images/integrations/connecting-with-fluentsocket/fluentsocket-4-scaled.webp)

After saving, you should see a success notification — your community is now powered by FluentSocket. To test it, open your portal in two different browser windows; a message sent in one should appear instantly in the other, with no lag.

## Related Documentation
- [Using Group Chat (Pro)](/community-hub/using-group-chat-(pro)) — enable and use the real-time chat this integration powers.
- [Connecting with Pusher](/integrations/connecting-with-pusher) — an alternative real-time driver if you prefer a cloud-hosted service.
