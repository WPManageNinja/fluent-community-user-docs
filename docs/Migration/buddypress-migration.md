# Migrating from BuddyPress to FluentCommunity

If you have an existing community built with BuddyPress, you can use our built-in migration tool to smoothly transition your members and content to our modern, high-performance platform.

This guide will walk you through the entire process, from pre-migration checks to the final steps after the import is complete.

## Important: Before You Begin

Migrating your community is a significant change. To ensure a safe and successful process, please review these points carefully before starting.

### 1. Create a Full Backup
This is the most critical step. Before you do anything else, please create a **complete backup of your WordPress website**. This includes both your website's **files** and its **database**. A backup ensures that you can restore your site to its previous state if anything goes wrong. You can use your hosting provider's backup feature or a popular backup plugin.

### 2. Keep Both Plugins Active
For the migration tool to work, both the **BuddyPress** plugin and the **FluentCommunity** plugin must be installed and active on your site at the same time.

### 3. What Data Will Be Migrated?
Our tool is designed to import the most essential components of your community:
* **BuddyPress Groups** will be converted into **FluentCommunity Spaces**.
* **Group Memberships** will be migrated, so all your users will be in the correct new Spaces.
* **Group Activity/Posts** will be imported into the corresponding Spaces.
* **General Site-wide Activity** will be imported into the main community feed.

### 4. What Data Will NOT Be Migrated?
Some BuddyPress data is unique to its platform and cannot be transferred:
* **Private Messages** between members.
* **Friend Connections** between members.
* **Custom Profile Fields** and member profile data beyond the standard WordPress user info.
* **Settings and data** from third-party BuddyPress add-ons.

## Step-by-Step Migration Guide

Follow these steps to migrate your community data.

### Step 1: Navigate to the Migration Tool
Once you have FluentCommunity installed and activated (alongside BuddyPress), go to your WordPress dashboard.
1.  Navigate to **FluentCommunity → Tools**.
2.  Click on the **Migration** tab.

[Screenshot: The FluentCommunity Tools -> Migration screen.]

### Step 2: Select BuddyPress and Start the Importer
On the Migration screen, you will see an option for the BuddyPress importer.
1.  Review the information to confirm you are ready.
2.  Click the **Migrate from BuddyPress** button to begin the process.

[Screenshot: The BuddyPress importer section showing the "Migrate" button.]

### Step 3: Monitor the Process
The migration will now begin. The tool will work in the background to copy your data from the BuddyPress database tables to the new FluentCommunity tables.

> ✨ **Note:**
> The migration process does **not** delete any of your original BuddyPress data. It only copies it. The time required will vary depending on the size of your community—larger communities with many groups and posts will take longer. Please be patient and do not close the browser tab while the migration is in progress.

You will see a confirmation message once the process is complete.

### Step 4: Verify the Migrated Data
After you see the "Success" message, it's time to check the results.
1.  Go to **FluentCommunity → Spaces** to see if your former BuddyPress Groups are listed.
2.  Click into a few Spaces to see if the members and activity posts have been imported correctly.
3.  Visit your community's main front-end portal to see the activity feed.

### Step 5: Deactivate BuddyPress
Once you have confirmed that your data has been successfully migrated and everything looks correct, you can safely deactivate and delete the BuddyPress plugin from your site.

## Post-Migration Checklist

Congratulations on your successful migration! Here are a few recommended next steps:

* **Configure Your Spaces:** Review the settings for each imported Space, as FluentCommunity offers different privacy and content controls. Learn about [space settings](../community-hub/space-settings-&-privacy.md).
* **Customize Your Portal:** Go to **FluentCommunity → Customization** to adjust the look and feel of your new community to match your brand. Explore [layout and appearance](../portal-settings/layout-&-appearance.md) options.
* **Check Permalinks:** Visit **Settings → Permalinks** in your WordPress dashboard and click "Save Changes" to ensure all your new community URLs are working correctly.
* **Announce the Change:** Let your members know about the new and improved community platform!

**Next Steps:**
- Learn about [creating new spaces](../community-hub/creating-a-new-space.md) to expand your community
- Explore [member management](../community-hub/managing-user-profiles.md) features
- Set up [content moderation](../community-hub/content-moderation.md) to maintain quality