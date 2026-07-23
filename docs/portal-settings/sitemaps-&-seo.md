---
title: Sitemaps & SEO
description: Learn how FluentCommunity generates an XML sitemap of your public content so search engines like Google and Bing can discover and index your spaces, courses, and discussions.
---

# Sitemaps & SEO

A sitemap works like a roadmap for your website, helping search engines like Google, Bing, and Yahoo find and index your content more easily. FluentCommunity Pro includes a built-in Sitemap Configuration tool with support for Google-recommended SEO schemas and structured data, so your spaces, courses, and discussions can appear in search results without a third-party SEO plugin.

> **Use Case:** You've created several public spaces and courses that you want to rank in Google. By generating a sitemap and submitting it to Google Search Console, you give search engines a direct roadmap to all the indexable content in your community.

## Generating the FluentCommunity Sitemap

The sitemap is generated and updated automatically by FluentCommunity, so no manual setup is required. You just need to know where to find it and how to use it.

### How to Find the Sitemap Tool

1.  Navigate to **FluentCommunity → Settings**.
2.  Click the **Tools** tab.
3.  Open the **Sitemap Configuration** page.

![The Sitemap Configuration page under Tools](/images/portal-settings/sitemaps-and-seo/fluentcommunity-sitemap-scaled.webp)

### What the Sitemap Includes

To protect your members' privacy, the sitemap includes only public-facing content:

* **Public Spaces**
* **Public Courses (Pro)**
* **Public Posts & Discussions**
* **Member Profiles** (only if the member's profile visibility is set to public)

> **✨ Note:**
> All Private and Secret content is automatically excluded from the sitemap to protect your members and any sensitive data.

### How It Works

FluentCommunity generates a standard XML file at a dedicated URL, which looks something like this:

```
https://yourdomain.com/portal/site-map/index.xml
```

This URL is fully compatible with all major search engines and SEO tools.

### Using Your Sitemap

Once the sitemap is generated, you can use its URL in a few ways:

* **Submit to search engines:** Copy the sitemap URL and submit it directly to Google Search Console and Bing Webmaster Tools.
* **Use with SEO plugins:** If you use Rank Math or Yoast SEO, find the setting for **Additional Sitemaps** or **External Sitemaps** and paste your FluentCommunity sitemap URL there. This tells your SEO plugin to include your community content in its main index.

> **✨ Troubleshooting:**
> If your sitemap appears to be missing content, the most common cause is caching. Clear all caches from your caching plugins, server, and CDN. Also confirm that the spaces or courses you expect to see are set to **Public**.

## Creating an XML Sitemap

For your community content to be indexed, your portal must be publicly accessible. If your portal is private, search engines can't crawl it.

### Make Your Portal Public

Go to the **FluentCommunity Dashboard** and scroll down to [**Portal Access Settings**](/portal-access-settings). Under Portal Access, select the **Everyone** option. Once your portal is public, your sitemap becomes active and your site is ready to be indexed by search engines.

![Setting Portal Access to Everyone](/images/portal-settings/sitemaps-and-seo/XML-sitemap-01-scaled.webp)

### Configure the Sitemap

Navigate to the **Tools** section under **Portal Settings**. Here you'll see that your portal's sitemap is already created and configured automatically. You can view it from the **Sitemap URL**, which is now ready and easily indexable by Google.

![The automatically created sitemap and its URL](/images/portal-settings/sitemaps-and-seo/sitemap-created-02-scaled.webp)
