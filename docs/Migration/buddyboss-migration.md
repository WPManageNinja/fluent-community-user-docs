---
title: BuddyBoss Migration
description: Step-by-step guide to migrate your BuddyBoss community — groups, members, posts, comments, and reactions — into FluentCommunity.
---

# BuddyBoss Migration

This guide walks you through migrating your BuddyBoss community data into FluentCommunity. Both the **UI method** (recommended for most sites) and the **WP-CLI method** (recommended for large communities) are covered.

::: warning Back Up Before You Start
Create a **complete backup** of your WordPress files and database before running any migration. The CLI migration in particular may overwrite existing FluentCommunity data.
:::


## What Gets Migrated

| BuddyBoss Data | FluentCommunity Equivalent |
|---|---|
| Groups | Spaces |
| Group Members | Space Members |
| Group Activity / Posts | Space Feed Posts |
| Comments & Reactions | Comments & Reactions |
| General "What's New" Activity | Main Community Feed |
| Avatars (avatar-based profile pictures) | Profile Pictures |

## What Does NOT Get Migrated

- Private messages between members
- Member connections (friends list)
- bbPress forum data
- Custom profile types and field data
- Uploaded profile pictures and space cover images (avatar-based images do migrate)
- BuddyBoss theme settings and configurations
- Data from third-party BuddyBoss add-ons


## Method 1: Migrate Through the UI

### Step 1: Open the Migration Tool

Go to your FluentCommunity portal on the front end. Click the **Settings** button in the bottom-right corner of the screen. In the settings menu, select **Manage Migration** from the left sidebar. You will see the **Migrate Data from Other Plugins** section with the **BuddyBoss Module** option. Click on it to begin.

![FluentCommunity BuddyBoss Migration - Open migration tool](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-1-scaled.webp)

### Step 2: Map Groups and Start Migration

Once inside the BuddyBoss Module, you can map BuddyBoss Groups to specific existing Spaces in FluentCommunity. Mapped groups will appear under the designated Space after migration.

When ready, click **Start Migrating Data** to begin. FluentCommunity will copy all your BuddyBoss data across.

![FluentCommunity BuddyBoss Migration - Start migration](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-2-scaled.webp)

### Step 3: Confirm Completion

When the migration finishes, a congratulatory notification confirms that the process is complete.

![FluentCommunity BuddyBoss Migration - Completion notification](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-3-scaled.webp)


## Method 2: Migrate Using WP-CLI (Recommended for Large Communities)

If you have a very large community, WP-CLI is faster and more reliable than the UI method. Run the following command in your server terminal:

```bash
wp fluent_community migrate_from_bb
```

::: warning
The CLI migration may overwrite or reset existing FluentCommunity data before importing BuddyBoss data. Always take a full site backup before running this command.
:::

This command migrates:
- Groups → Spaces
- Members
- Posts and interactions
- Comments and reactions

## Verifying Your Migrated Data

After migration completes, review the following to confirm everything transferred correctly.

### Feed Preview

All posts, reactions, and comments from BuddyBoss are now visible in the corresponding Space feeds and the main community feed.

![FluentCommunity BuddyBoss Migration - Feed preview](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-4-scaled.webp)

### Spaces Preview

All BuddyBoss Groups now appear as Spaces in FluentCommunity. Groups you mapped to existing Spaces during setup appear under those designated Spaces.

![FluentCommunity BuddyBoss Migration - Spaces preview](https://fluentcommunity.co/wp-content/uploads/2025/01/FlunetCommunity-BuddyBoss-Migration-5-scaled.webp)


## After Migration: Next Steps

- **Review Space Settings**: Go through each imported Space and configure privacy, member permissions, and content settings. See [Space Settings & Privacy](/community-hub/space-settings-&-privacy).
- **Rebuild Permalinks**: Go to **WordPress Admin → Settings → Permalinks** and click **Save Changes** to ensure all community URLs resolve correctly.
- **Customize Your Portal**: Apply your branding, colors, and layout in **FluentCommunity → Portal Settings**. See [Adding Custom Sidebar Links](/portal-settings/adding-custom-sidebar-links).
- **Announce the Change**: Let your members know the community has moved to a new platform and highlight what's improved.


