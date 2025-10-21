---
title: Using The Local Server
description: Learn about the default local server storage option in FluentCommunity for hosting all your community's uploaded files and media.
---

# Using The Local Server

By default, FluentCommunity stores all uploaded files—such as images in posts, user avatars, and course attachments—directly on the same server where your WordPress site is hosted. This is known as **Local Server Storage**.

## How Local Server Storage Works

When a user uploads a file, it is saved into your WordPress site's `wp-content/uploads` directory. This is the simplest storage method and requires no extra configuration to get started.

**Advantages:**
* **Zero-Configuration:** It works out of the box as soon as you install FluentCommunity.
* **No Extra Cost:** You do not need to pay for a separate third-party storage service.
* **Simple Backups:** All your community files are included in your standard WordPress site backups.

**Disadvantages:**
* **Uses Server Space:** As your community grows and members upload more files, it can consume a significant amount of your hosting plan's storage space.
* **Can Impact Performance:** Serving many large files (especially videos) directly from your server can impact your site's loading speed for visitors who are geographically distant from your server's location.

## When to Use Local Storage

Local server storage is a perfect solution for:
* New communities that are just starting out.
* Smaller communities with a primary focus on text-based discussions.
* Sites with generous hosting plans that offer plenty of storage space and bandwidth.

> **✨ Note:**
> For larger, media-heavy communities, we highly recommend connecting to a dedicated third-party storage provider like Amazon S3 or Cloudflare R2 to optimize performance and save server space. These options are covered in the following guides.

**Related Topics:**
- Learn about [connecting Amazon S3](./connecting-amazon-s3-(pro).md) for cloud storage
- Explore [connecting Cloudflare R2](./connecting-cloudflare-r2-(pro).md) for high-performance storage
- Set up [CDN and image proxy](./cdn-&-image-proxy-setup-(pro).md) for global delivery