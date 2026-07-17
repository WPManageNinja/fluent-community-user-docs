---
title: Frequently Asked Questions
description: Answers to the most common questions about installing, configuring, and using FluentCommunity and FluentCommunity Pro.
---

# Frequently Asked Questions

Can't find what you're looking for? Check the [Troubleshooting Common Issues](/help-&-resources/troubleshooting-common-issues) guide or [contact support](/help-&-resources/how-to-contact-support).


## General

**What is FluentCommunity?**

FluentCommunity is a WordPress plugin that lets you build a fully featured online community with Spaces, posts, comments, direct messaging, courses, gamification, and more, directly on your own WordPress site, without relying on third-party platforms.

**What is the difference between the free and Pro versions?**

The free version includes core community features: Spaces, posts, comments, reactions, mentions, basic leaderboards, basic quizzes, group chat, polls, hashtags, bookmarks, and push notifications. FluentCommunity Pro adds advanced features including Direct Messaging, badges, level-up automation, enhanced gamification, course creation, file storage integrations, email template customization, analytics, SEO/sitemap tools, and more.

**Does FluentCommunity work with any WordPress theme?**

Yes. FluentCommunity renders inside its own portal page and is largely independent of your active WordPress theme. You can use it alongside any theme without conflicts.

**What are the minimum server requirements?**

- WordPress 6.0 or higher
- PHP 7.4 or higher (PHP 8.0+ recommended)
- MySQL 5.7+ or MariaDB 10.3+

**Is FluentCommunity compatible with page builders like Elementor or Divi?**

FluentCommunity does not use WordPress page builders for its community portal. However, you can embed community elements on standard WordPress pages using shortcodes, and the plugin does not conflict with page builders used elsewhere on your site.


## Installation & Activation

**How do I install FluentCommunity?**

Go to **WordPress Admin → Plugins → Add New**, search for "FluentCommunity", install, and activate. For Pro, upload the Pro plugin zip via **Plugins → Add New → Upload Plugin** and activate it alongside the free version. See the full [Installation & Activation](/getting-started/installation-&-activation) guide.

**Do I need both the free and Pro plugins installed?**

Yes. FluentCommunity Pro is an add-on that requires the free FluentCommunity plugin to be installed and activated first. Both must be active at the same time.

**Where do I enter my Pro license key?**

After activating FluentCommunity Pro, go to **WordPress Admin → FluentCommunity → Settings** and find the License section. Enter your license key and click **Activate**.

**Can I run FluentCommunity on a local/staging environment?**

Yes. License activations support staging environments. Check your license terms for the number of activations included with your plan.

**How do I run the Setup Wizard after initial setup?**

Go to **WordPress Admin → FluentCommunity** and look for the Setup Wizard option in the dashboard. If it no longer appears, you can manually configure your portal under **FluentCommunity → Portal Settings**.


## Spaces

**What is a Space?**

A Space is a dedicated area within your community for a specific topic, group, or course. Each Space has its own feed, members list, and settings. Think of it as a sub-community or channel within your main community. See [Creating a New Space](/community-hub/creating-a-new-space).

**What privacy options are available for Spaces?**

Spaces can be set to:
- **Public**: Visible and joinable by anyone.
- **Private**: Visible in the directory but requires joining or approval to access content.
- **Secret**: Hidden from the directory; accessible only by direct invite.

**Can I restrict access to a Space behind a payment?**

Yes. Set the Space to Private or Secret, then use the **Paywalls** tab in Space Settings to link a FluentCart or Paymattic product. See [Connecting with FluentCart](/integrations/connecting-with-fluentcart).

**Can I add navigation links inside a Space?**

Yes. In **Space Settings → Space Links**, you can add custom links that appear in the Space's navigation bar. See [Space Links](/community-hub/space-links).

**How many Spaces can I create?**

There is no hard limit on the number of Spaces you can create.


## Posts & Discussions

**Who can create posts in a Space?**

By default, any member of a Space can create posts. Admins can restrict posting to specific roles via the Space settings.

**Can members schedule posts?**

Scheduling posts is currently available to Admins only. Members with Admin role can schedule a post using the calendar icon in the post editor.

**Does post privacy follow the Space privacy setting?**

Yes. Posts inherit the visibility of the Space they are published in. There are no per-post privacy settings: the Space's privacy level controls what non-members can see.

**Can I pin a post to the top of a Space?**

Yes. Click the three-dot menu on any post and select **Pin Post**. Pinned posts stay at the top of the Space feed.

**What media types can members embed in posts?**

Members can embed images, videos (via URL or upload), links with previews, GIFs (Pro adds Giphy integration), and file attachments (Pro with storage module enabled).


## Members & Roles

**What roles are available in FluentCommunity?**

- **Admin**: Full access to all settings and content.
- **Moderator**: Can moderate content and manage members within a Space.
- **Manager**: Pro role with elevated permissions for managing Spaces and members.
- **Member**: Standard community member.

**How do I change a member's role?**

Go to the member's profile, click the three-dot menu, and select **Change Role**. See [Assigning User Roles](/community-hub/assigning-user-roles).

**Can I ban or remove a member from a Space?**

Yes. From the member's profile or the Space member list, use the three-dot menu to remove or ban the member. See [Moderating Chat Users (Pro)](/community-hub/moderating-chat-users-(pro)).

**Can members message each other privately?**

Yes, with FluentCommunity Pro. Direct Messaging must be enabled by an Admin in the portal settings. See [Direct Messaging (Pro)](/community-hub/direct-messaging-(pro)).


## Gamification

**Is the points system free or Pro?**

Basic points are available in the free version. Pro unlocks advanced point rules, custom events, and automation.

**Is the leaderboard free or Pro?**

The basic leaderboard is free. Pro adds enhanced scoring rules, custom leaderboard periods, and additional ranking options.

**How do badges work?**

Admins create badges and assign them manually to members, or set rules to award them automatically based on points, activity, or level. See [Creating & Assigning Badges](/gamification-(pro)/creating-&-assigning-badges).

**What triggers a level-up?**

Level-ups are triggered when a member reaches a configured point threshold. Admins define the point ranges and labels for each level in the Leaderboards module. See [Setting Up Leaderboards](/gamification-(pro)/setting-up-leaderboards).


## Courses & Learning

**Is the course feature free or Pro?**

Courses require FluentCommunity Pro.

**Is the quiz module free or Pro?**

Basic quizzes are available in the free version. Pro adds image-based questions, answer randomization, and quiz analytics.

**Can I sell access to a course?**

Yes. Set the course to Private, then link a FluentCart or Paymattic product via the Paywalls tab in course settings. See [Connecting with FluentCart](/integrations/connecting-with-fluentcart).

**Can I preview lessons before enrolling?**

Yes. Admins can mark specific lessons as preview-accessible so visitors can sample course content before purchasing. See [Enabling Lesson Previews](/courses-&-learning-(pro)/enabling-lesson-previews).


## Files & Media Storage

**Where are uploaded files stored by default?**

Files are stored on your local WordPress server by default. You can switch to Amazon S3, Cloudflare R2, or BunnyCDN for cloud storage. See [Using the Local Server](/files-&-media-storage/using-the-local-server).

**Is the file library free or Pro?**

The file & document library is a Pro feature. Basic media uploads in posts are available to all users.

**Can I protect uploaded files from direct URL access?**

Yes, with FluentCommunity Pro. Enable **Secure File URLs** to generate signed, expiring URLs that prevent unauthorized direct access. See [Secure File URLs (Pro)](/files-&-media-storage/secure-file-urls-(pro)).


## Notifications

**What notification types does FluentCommunity support?**

FluentCommunity supports in-app notifications, email notifications, and push notifications (browser-based). In-app and push notifications are free; email template customization requires Pro.

**How do I customize email notification templates?**

Go to **FluentCommunity → Portal Settings → Email Templates**. This requires FluentCommunity Pro. See [Customizing Email Templates (Pro)](/portal-settings/customizing-email-templates-(pro)).


## Integrations

**Does FluentCommunity work with FluentCRM?**

Yes. You can sync community membership, trigger automation, and segment contacts based on Space membership and activity. See [Connecting with FluentCRM](/integrations/connecting-with-fluentcrm).

**Does FluentCommunity work with WooCommerce?**

FluentCommunity's native payment integrations are FluentCart and Paymattic. For WooCommerce, use an automation tool such as Uncanny Automator or Flowmattic to bridge the two.

**Can I use webhooks to connect FluentCommunity to external tools?**

Yes. FluentCommunity provides an **Incoming Webhook**: you generate a webhook URL and external systems (CRMs, email tools, automation platforms, etc.) send data to it to add users to Spaces or Courses in real time. See [Incoming Webhook](/integrations/incoming-webhook).


## Migration

**Can I migrate from BuddyPress or BuddyBoss?**

Yes. FluentCommunity includes a built-in migration tool for both platforms. See the [BuddyPress Migration](/migration/buddypress-migration) and [BuddyBoss Migration](/migration/buddyboss-migration) guides.

**Will my existing members and content be preserved after migration?**

The migration tool imports members, groups (as Spaces), and activity data. Review the migration guide for your platform to understand what is and isn't included before running the migration on a live site.


## Billing & Licensing

**How many sites can I use my Pro license on?**

License limits depend on your plan. Check your account at [fluentcommunity.co](https://fluentcommunity.co/) for plan details and activation counts.

**What happens if my license expires?**

Your community continues to work, but you will no longer receive plugin updates or access to support. It is strongly recommended to keep your license active to receive security updates.

**Can I get a refund?**

Refund policies are managed by WPManageNinja. Contact support at [fluentcommunity.co](https://fluentcommunity.co/) for billing inquiries.


::: info Still have questions?
[Contact the FluentCommunity support team](/help-&-resources/how-to-contact-support). The team typically responds within 1 business day.
:::
