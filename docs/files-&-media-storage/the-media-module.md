---
title: The Media Module
description: Learn about the Media Module in FluentCommunity and how to choose where your community's media is stored, from local server storage to cloud providers.
---

# The Media Module

The **Media Module** lets you choose where FluentCommunity stores the images, files, and other media your members upload. Picking the right storage option keeps your media loading fast and your server load manageable as your community grows.

> **Use Case:** Your community is uploading gigabytes of images every month and slowing down your WordPress host. You move media storage to a cloud provider like Cloudflare R2 so files are served from a fast CDN instead of your server.

## How to Access Media Settings

1.  Go to your FluentCommunity **Settings** and select the **Features & Addons** section from the left sidebar.
2.  Find the **Media Module** option and click its **Configure** button to open the storage settings.

![The Media Module option in Features & Addons settings](/images/files-media-storage/the-media-module/Media-Module-1-scaled.webp)

## Storage Options

Under **Community Media Storage**, you'll find four storage options to choose from:

* **Server Storage**
* **Cloudflare R2**
* **Amazon S3**
* **BunnyCDN**

### Server Storage

This option saves your media to the `fluent-community` folder inside your WordPress **Uploads** directory. It's the simplest choice and requires no external setup.

![Server Storage configuration in the Media Module](/images/files-media-storage/the-media-module/Media-Module-2.webp)

### Cloudflare R2

Cloudflare R2 is a cloud storage service you can connect to serve your community media from Cloudflare's network. See [Connecting Cloudflare R2](/files-&-media-storage/connecting-cloudflare-r2-(pro)) for the full setup process.

![Cloudflare R2 configuration in the Media Module](/images/files-media-storage/the-media-module/Media-Module-3.webp)

### Amazon S3

Amazon S3 is another cloud storage option for hosting your community media files. See [Connecting Amazon S3](/files-&-media-storage/connecting-amazon-s3-(pro)) to link your storage to an S3 bucket.

![Amazon S3 configuration in the Media Module](/images/files-media-storage/the-media-module/Media-Module-4.webp)

### BunnyCDN

BunnyCDN is a cloud storage and content delivery service you can use to store and serve your community's media. Configure it in this section to route your media through the Bunny network.

![BunnyCDN configuration in the Media Module](/images/files-media-storage/the-media-module/Features-Settings-bunny-.webp)

## Related Documentation

- [Storage Configuration](/files-&-media-storage/storage-configuration) — an overview of how media storage works across providers.
- [Using the Local Server](/files-&-media-storage/using-the-local-server) — details on keeping media on your own server.
- [Connecting Cloudflare R2](/files-&-media-storage/connecting-cloudflare-r2-(pro)) — set up Cloudflare R2 as your storage backend.
- [Connecting Amazon S3](/files-&-media-storage/connecting-amazon-s3-(pro)) — set up Amazon S3 as your storage backend.
