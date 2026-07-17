---
title: Connecting Cloudflare R2 (Pro)
description: A complete guide to setting up CloudFlare R2 with FluentCommunity — creating and configuring an R2 bucket, generating API tokens, and setting up the plugin.
---

# Configuring CloudFlare R2

This comprehensive guide will walk you through the entire process of setting up CloudFlare R2 to work with the FluentCommunity Plugin. We'll cover how to create and configure an R2 bucket, generate API tokens, and set up the plugin's settings.

Follow these steps to set up Cloudflare R2 with your FluentCommunity.

## Cloudflare Account ID

First, log in to your **[Cloudflare Account](https://dash.cloudflare.com/login)**. Navigate to **Storage & Databases** > **R2 Object Storage** > **Overview**. On the right side of the page, you will find the **Account Details** section. Your **Account ID** is displayed here. Click the **copy icon** next to the ID to save it for later use.

![The Account Details section showing the Cloudflare Account ID](/images/files-media-storage/connecting-cloudflare-r2/account-api-scaled.webp)

Alternatively, you can find your **Account ID** in the **URL** of your Cloudflare account, as shown in the screenshot below. You can also copy your Account ID from here.

![The Cloudflare Account ID shown in the browser URL](/images/files-media-storage/connecting-cloudflare-r2/CF-Account-ID-3.png)

### Create a CloudFlare R2 Bucket (Bucket Name & Public URL)

Navigate to **R2 Object Storage** from the left sidebar, find **Overview** under R2 Object Storage, and click on it. Now click on the **Create Bucket** button to create a bucket.

![The Create Bucket button in R2 Object Storage](/images/files-media-storage/connecting-cloudflare-r2/create-bucket-scaled.webp)

Enter a name for your bucket that is easy to identify and unique across your projects. Leave the **Location** of the bucket as **Default** unless you have specific storage.

Double-check your settings and click the **Create Bucket** button**.**

![Entering a bucket name and location on the Create Bucket page](/images/files-media-storage/connecting-cloudflare-r2/3111748f564e.png)

### Cloudflare Bucket Public URL

You can now see the Bucket Details. Scroll down to the **Public Development URL** section. Here, you need to enable access to this public URL.

Click the **Enable** link, and a pop-up will appear. Type "allow" in the field to grant access to the **Public Development URL.**

![The Public Development URL section in the bucket details](/images/files-media-storage/connecting-cloudflare-r2/public-development-url-scaled.webp)

A pop-up will appear to **Enable Public Development URL**. Type in 'allow' to confirm. Then, press the **Allow** button.

![Typing allow to confirm enabling the public development URL](/images/files-media-storage/connecting-cloudflare-r2/allow-button-1024x559.webp)

Now from here, you will get the **Cloudflare Bucket Public URL**.

![Copying the Cloudflare Bucket Public URL](/images/files-media-storage/connecting-cloudflare-r2/copy-public-url-scaled.webp)

### Cloudflare Bucket EndPoint

To connect FluentCommunity with Cloudflare R2, you also need the S3 API endpoint for your specific bucket.

1. Navigate to R2 Object Storage > Overview from the left sidebar.

2. Click on the specific Bucket you created in the previous steps.

![Selecting the bucket from the R2 Object Storage overview](/images/files-media-storage/connecting-cloudflare-r2/cloudflare-bucket-endpoint.webp)

Once inside the bucket, switch to the **Settings** tab.

Under the **General** section, locate the **S3 API** field. **Copy** this URL (e.g., https://&lt;account-id>.r2.cloudflarestorage.com/base-logs). This URL will be used as your **Endpoint**.

![The S3 API endpoint URL in the bucket settings](/images/files-media-storage/connecting-cloudflare-r2/enpoint-url.webp)

### Cloudflare Access Key & Secret Key

To generate your credentials, go back to the **R2 Object Storage > Overview** page. In the **Account Details** box on the right, click the **{} Manage** button next to **API Tokens**.

![The Manage button next to API Tokens in Account Details](/images/files-media-storage/connecting-cloudflare-r2/manage-button-scaled.webp)

On the next page, click the **Create API token** button.

![The Create API token button](/images/files-media-storage/connecting-cloudflare-r2/create-account-api-token.webp)

Now, configure your token with the following settings:

1. Token Name: Give your token a descriptive name.

2. Permissions: Select Object Read & Write.

3. Bucket: Choose the specific bucket you created from the dropdown menu.

Next, click the **Create Account API token** button at the bottom.

![Configuring the API token name, permissions, and bucket](/images/files-media-storage/connecting-cloudflare-r2/create-account-api-token-2-scaled.webp)

You will now see your **Access Key ID** and **Secret Access Key**. **Copy them immediately**, as the Secret Key will never be shown again for security reasons.

![The generated Access Key ID and Secret Access Key](/images/files-media-storage/connecting-cloudflare-r2/copy-secret-and-api-key-scaled.webp)

## Configure FluentCommunity

Now access FluentCommunity and go to **Settings > Features & Addons**. Here you will see the [**Media Module**](./the-media-module.md) section and click on the **Configure** button.

![The Media Module section under Features & Addons](/images/files-media-storage/connecting-cloudflare-r2/Media-Module-1-1-scaled.webp)

Next, select **Cloudflare R2** and enter the credentials you collected from your Cloudflare account in the earlier steps of this guide.

**Cloudflare Account ID:** Input your CloudFlare Account ID.

**Cloudflare Access Key:** Paste the Access Key you got earlier from your CloudFlare API token.

**Cloudflare Secret Key:** Enter the Secret Key from your CloudFlare API token.

**Cloudflare Bucket Name:** Enter the name of the R2 bucket you created.

**Cloudflare Bucket Public URL:** Provide the Public R2.dev Bucket URL.

**Bucket Sub-Folder (Optional):** If you'd like to organize files within a specific subfolder in your bucket, specify the subfolder name here.

Once all fields are filled in correctly, click the **Save Settings** button to store your configuration.

![The completed Cloudflare R2 configuration in FluentCommunity](/images/files-media-storage/connecting-cloudflare-r2/Media-Module-2-1-scaled.webp)

### Additional Configuration (Optional)

For more advanced setups, you can define your CloudFlare R2 settings in your wp-config.php file. This method provides an extra layer of security and is useful for managing configurations across different environments.

```php
// CloudFlare R2 Configuration

define('FLUENT_COMMUNITY_CLOUD_STORAGE', 'cloudflare_r2');

define('FLUENT_COMMUNITY_CLOUD_STORAGE_ACCOUNT_ID', 'YOUR_ACCOUNT_ID'); // Example: 1718cb5a51e65c8f19e8sahdakh763

define('FLUENT_COMMUNITY_CLOUD_STORAGE_ACCESS_KEY', 'YOUR_ACCESS_KEY');

define('FLUENT_COMMUNITY_CLOUD_STORAGE_SECRET_KEY', 'YOUR_SECRET_KEY');

define('FLUENT_COMMUNITY_CLOUD_STORAGE_BUCKET', 'YOUR_BUCKET_NAME');

define('FLUENT_COMMUNITY_CLOUD_STORAGE_PUBLIC_URL', 'https://pub-SOME_RANDOM_STRINGS.r2.dev'); // Custom domain if configured

define('FLUENT_COMMUNITY_CLOUD_STORAGE_SUB_FOLDER', 'your-subfolder-name'); // Optional
```

::: tip Note
Defining these values in wp-config.php will override any settings configured in the FluentCommunity plugin's admin panel.
:::

#### Troubleshooting Common Issues

1. API Token Permissions: Ensure your API token has the correct permissions for R2 access.

2. Incorrect Bucket or URL: Double-check that your bucket name and public URL are accurate and correctly configured.

3. Custom Domain Setup: If using a custom domain, confirm it is properly configured in CloudFlare to avoid connectivity issues.
