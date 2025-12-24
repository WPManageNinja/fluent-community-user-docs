---
title: Connecting Amazon S3 (Pro)
description: Learn how to connect FluentCommunity to Amazon S3 (Simple Storage Service) to offload your media files, save server space, and improve performance.
---

# Connecting Amazon S3 (Pro)

For communities with a high volume of media uploads, offloading your files to a dedicated storage service is essential for scalability and performance. FluentCommunity integrates directly with **Amazon S3 (Simple Storage Service)**, one of the most popular and robust cloud storage solutions available.

> **Use Case:** Your community is growing rapidly, and members are sharing hundreds of images and videos daily. By connecting to Amazon S3, you can store all these files in a dedicated, low-cost bucket instead of filling up your web server's limited disk space. This ensures your site remains fast and your hosting costs stay predictable.

## Prerequisites

Before you can connect FluentCommunity to S3, you must have:

* An **Amazon Web Services (AWS) Account**.
* An **S3 Bucket** created within your AWS account to store your files.
* An **IAM (Identity and Access Management) User** with programmatic access keys (`Access Key ID` and `Secret Access Key`) that has permission to manage your S3 bucket.

> **⚠️ Important:**
> For security reasons, it is a best practice to create a dedicated IAM user with permissions restricted *only* to the specific S3 bucket you will use for your community. Avoid using your root AWS account keys.

## Configuration Steps

1.  From your WordPress dashboard, navigate to **FluentCommunity → Settings**.
2.  Click on the **Media & Storage** or a similarly named tab.
3.  In the storage options, select **Amazon S3**.
4.  This will reveal the configuration fields. You will need to enter the following information from your AWS account:
    * **Access Key ID:** Your IAM user's access key.
    * **Secret Access Key:** Your IAM user's secret key.
    * **Bucket Name:** The exact name of the S3 bucket you created.
    * **Bucket Region:** The AWS region where your bucket is located (e.g., `us-east-1`).

    [Screenshot: The Amazon S3 configuration screen in FluentCommunity settings, showing the fields for Access Key, Secret Key, Bucket Name, and Region.]

5.  After entering all the details, click the **Save Settings** button.

FluentCommunity will attempt to connect to your S3 bucket. If the connection is successful, all new file uploads will be automatically stored in your S3 bucket instead of on your local server.

**Related Topics:**
- Learn about [using the local server](./using-the-local-server.md) for default storage
- Explore [connecting Cloudflare R2](./connecting-cloudflare-r2-(pro).md) for high-performance storage
- Set up [CDN and image proxy](./cdn-&-image-proxy-setup-(pro).md) for global delivery