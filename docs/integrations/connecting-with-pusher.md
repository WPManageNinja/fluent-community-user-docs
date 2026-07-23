---
title: Connecting with Pusher
description: Learn how to connect Pusher with FluentCommunity to power real-time chat, delivering messages to members instantly through a reliable cloud-based service.
---

# Connecting with Pusher

**Pusher** is a powerful, cloud-based service that handles real-time data delivery. It's one of the real-time drivers that powers your community's [group chat](/using-group-chat-(pro)) — connecting it lets your members enjoy a seamless, live conversation experience without ever refreshing their page.

> **Use Case:** You want reliable real-time chat but would rather not run your own socket server, so you connect Pusher's managed cloud service to handle message delivery for you.

This guide walks you through setting up a Pusher account, creating your channel app, and securely connecting it to FluentCommunity.

## How to Connect Pusher

### Step 1: Create a Channel App in Pusher

To get the connection keys, first go to the **Channels** app within your Pusher dashboard.

1.  Sign in to your Pusher account dashboard.
2.  Select the **Channels** product from your main dashboard and click **Manage**.

![The Pusher dashboard with the Channels product](/images/integrations/connecting-with-pusher/pusher-realtime-chat-1-1-scaled.webp)

Now create and configure your app:

1.  Click the **Create app** button.
2.  **Name your app:** Give it a recognizable name, such as "FluentCommunity Chat".
3.  **Select a Cluster:** Choose the cluster (server location) closest to where your website is hosted for the fastest response times.
4.  Click the **Create app** button to generate your new connection.

![The Pusher create app configuration screen](/images/integrations/connecting-with-pusher/pusher-realtime-chat-3-scaled.webp)

### Step 2: Collect Your Credentials

Once your app is created, Pusher generates a set of unique security keys. You'll need these to authorize the connection from your WordPress site.

1.  In your new Pusher app dashboard, click the **App Keys** tab in the left-hand menu.
2.  Copy and safely store the following four items: **app_id**, **key**, **secret**, and **cluster**.

![The Pusher App Keys tab showing the app credentials](/images/integrations/connecting-with-pusher/pusher-realtime-chat-4-scaled.webp)

> **✨ Note:**
> Keep these keys strictly confidential. They're the secure passwords that let your website push data through your Pusher account.

### Step 3: Connect Pusher to FluentCommunity

Now plug your Pusher credentials into your community settings to bring your chat to life.

1.  Go to your WordPress dashboard and navigate to **FluentCommunity > Settings**.
2.  Click **Features & Addons** in the left sidebar, locate the [Group Chat module](/using-group-chat-(pro)), and click the **Messaging Settings** button.
3.  Find the **Enable Real-Time Messaging** toggle and switch it **On**.
4.  From the driver dropdown menu, select **Pusher**.
5.  Paste your **App ID**, **App Key**, **App Secret**, and **Cluster** into their matching fields.
6.  Click the **Save Settings** button at the bottom of the screen.

![The FluentCommunity messaging settings with Pusher selected as the driver](/images/integrations/connecting-with-pusher/pusher-realtime-chat-5-scaled.webp)
