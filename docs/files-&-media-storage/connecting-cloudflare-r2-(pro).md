---
title: Connecting Cloudflare R2 (Pro)
description: Learn how to connect FluentCommunity to Cloudflare R2, a high-performance, S3-compatible object storage solution, to host your community's media files.
---

# Connecting Cloudflare R2 (Pro)

**Cloudflare R2** is a modern object storage solution that offers high performance and is fully compatible with the Amazon S3 API. A key advantage of R2 is that it has zero egress fees, meaning you are not charged when users download files from your community. This makes it an extremely cost-effective choice for media-heavy sites.

> **Use Case:** If your community hosts a large number of downloadable course materials or high-resolution images, using Cloudflare R2 can significantly reduce your monthly costs compared to other services that charge for data bandwidth every time a file is accessed.

## Prerequisites

Before you begin, you must have:

* A **Cloudflare Account**.
* An **R2 Bucket** created within your Cloudflare dashboard.
* An **R2 API Token** (`Access Key ID` and `Secret Access Key`) with permissions to read and write to your bucket.

## Configuration Steps

1.  From your WordPress dashboard, navigate to **FluentCommunity → Settings**.
2.  Click on the **Media & Storage** or a similarly named tab.
3.  In the storage options, select **Cloudflare R2**.
4.  This will reveal the R2 configuration fields. You will need to enter the following information from your Cloudflare account:
    * **Account ID:** Your main Cloudflare Account ID.
    * **Access Key ID:** Your R2 API token's access key.
    * **Secret Access Key:** Your R2 API token's secret key.
    * **Bucket Name:** The exact name of the R2 bucket you created.
    * **Public URL:** The public URL for your R2 bucket, which you can find in your Cloudflare dashboard.

    [Screenshot: The Cloudflare R2 configuration screen in FluentCommunity settings, showing fields for Account ID, Access Key, Secret Key, Bucket Name, and Public URL.]

5.  After entering all the details, click the **Save Settings** button.

FluentCommunity will now use Cloudflare R2 to store and serve all new media files. The S3-compatible API ensures a seamless and reliable integration.

> **✨ Note:**
> Because Cloudflare R2 is S3-compatible, the setup process is very similar to connecting with Amazon S3. The primary difference is where you obtain your credentials (from your Cloudflare dashboard instead of AWS).

**Related Topics:**
- Learn about [using the local server](./using-the-local-server.md) for default storage
- Explore [connecting Amazon S3](./connecting-amazon-s3-(pro).md) for cloud storage
- Set up [CDN and image proxy](./cdn-&-image-proxy-setup-(pro).md) for global delivery