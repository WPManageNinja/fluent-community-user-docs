---
title: Cdn & Image Proxy Setup (Pro)
description: Learn how to configure a CDN (Content Delivery Network) like BunnyCDN and an Image Proxy in FluentCommunity to optimize media delivery and improve site speed.
---

# Cdn & Image Proxy Setup (Pro)

To deliver a truly fast experience for a global audience, serving your media files through a **Content Delivery Network (CDN)** is essential. FluentCommunity supports popular CDNs like **BunnyCDN** and includes an image proxy feature to optimize how images are served.

> **Use Case:** Your community has members from all over the world. When a user from Japan visits your site (hosted in the USA), a CDN delivers images from a server in Asia instead of from the USA. This dramatically reduces latency and makes the site feel much faster for that user.

## How a CDN Works

A CDN is a network of servers distributed globally. When you use a CDN, copies of your media files are stored on these servers. When a user requests a file, it's delivered from the server geographically closest to them, ensuring the fastest possible delivery speed.

## Configuring BunnyCDN

FluentCommunity has built-in support for BunnyCDN, a popular and affordable CDN service.

1.  From your WordPress dashboard, navigate to **FluentCommunity → Settings**.
2.  Click on the **Media & Storage** tab.
3.  Find the **CDN Settings** section.
4.  You will need to enter the **CDN URL** or **Pull Zone Name** provided by your BunnyCDN account. This tells FluentCommunity to rewrite your local file URLs to use the CDN.

[Screenshot: The CDN Settings section in FluentCommunity, showing the input field for the BunnyCDN URL or Pull Zone Name.]

5.  Click **Save Settings**.

Now, all your community's media files will be served through the BunnyCDN network.

## Using an Image Proxy

The image proxy feature adds another layer of optimization. When enabled, it acts as an intermediary for serving images. This can provide benefits like:

* **Image Resizing:** Automatically create and serve smaller, optimized image sizes for different contexts (e.g., a small thumbnail vs. a full-size image).
* **Anonymization:** Hide your origin server's IP address, which can be a security benefit.

Configuration for the image proxy is also located in the **Media & Storage** settings. You will typically need to enable it and may need to provide a specific proxy URL or secret key depending on the service you use.

> **⚠️ Important:**
> Setting up a CDN and image proxy are advanced configurations. You must have an active account with a third-party service like BunnyCDN before you can complete this setup. Always refer to your CDN provider's documentation for the correct URL and settings to use.