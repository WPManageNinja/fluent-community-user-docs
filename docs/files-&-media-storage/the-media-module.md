---
title: The Media Module
description: Learn how to select a media storage option in FluentCommunity — Server Storage, Cloudflare R2, Amazon S3, or BunnyCDN — for smoother media delivery on your site.
---

# Media Module

The Media Module controls where FluentCommunity stores the images, videos, and files your members upload. Choosing the right storage option keeps media loading quickly and stops uploads from filling up your server.

## Access Media Settings

Go to the FluentCommunity **Settings** and select the **Features & Addons** section from the left sidebar. Find the **Media Module** option and click the **Configure** button to open its settings.

![The Media Module option under Features & Addons](/images/files-media-storage/the-media-module/Media-Module-1-scaled.webp)

Under **Community Media Storage**, you can choose from four storage options:

1. Server Storage
2. Cloudflare R2 Storage
3. Amazon S3 Storage
4. BunnyCDN

**Server Storage:** This option saves your content to the Fluent-Community folder located within the WordPress Uploads directory on your site.

![The Server Storage option in Community Media Storage](/images/files-media-storage/the-media-module/Media-Module-2.webp)

**Cloudflare R2:** Cloudflare R2 is a cloud storage service you can use for your community media. To set it up, see the [Configuring CloudFlare R2](/connecting-cloudflare-r2-(pro)) guide.

![The Cloudflare R2 storage option](/images/files-media-storage/the-media-module/Media-Module-3.webp)

**Amazon S3:** Amazon S3 is another cloud storage service where you can store your community media files. You need to configure the S3 bucket before you can use it — see the [Configuring Amazon S3](/connecting-amazon-s3-(pro)) guide.

![The Amazon S3 storage option](/images/files-media-storage/the-media-module/Media-Module-4.webp)

**BunnyCDN:** BunnyCDN is a cloud storage and delivery service you can use to store your community media. To connect it, see the [Configuring BunnyCDN](/cdn-&-image-proxy-setup-(pro)) guide.

![The BunnyCDN storage option](/images/files-media-storage/the-media-module/Features-Settings-bunny-.webp)
