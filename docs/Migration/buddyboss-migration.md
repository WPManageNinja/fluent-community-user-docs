# Migrating from BuddyBoss to FluentCommunity

Making the move from a comprehensive platform like BuddyBoss to the lightweight and blazing-fast FluentCommunity is a significant upgrade for your community's performance and simplicity. This detailed guide is designed to hold your hand through every step of the process, ensuring a safe and successful transition.

We've built a migration tool to make this process as smooth as possible, and this document will explain exactly what to expect.

## ⚠️ Important: Before You Begin

A successful migration is 90% preparation. Please read this entire section carefully before you start. Skipping these steps can lead to data loss.

### Action Required: Create a Full Website Backup
This is the single most important, non-negotiable step. A migration involves making significant changes to your database. Before you begin, you must create a **complete backup of your WordPress website**. This backup must include both your website's **files** and its **database**. A full backup is your ultimate safety net, allowing you to restore your site to its original state instantly if you encounter any issues.

### Setting Expectations: How the Migration Works
* **It's a "Copy & Paste," not a "Cut & Paste":** The migration tool works by *copying* your data from BuddyBoss and writing it into FluentCommunity's format. It does **not** delete or alter your original BuddyBoss data during the import. This is for your safety.
* **Your "Look and Feel" Will Change:** FluentCommunity is a new platform with its own design and layout. The migration tool moves your *data* (groups, members, posts), not your BuddyBoss theme's design or settings. After migrating, you will use FluentCommunity's customization options to style your new community.

### What Data Will Be Migrated?
Our importer is built to bring over the core of your community:
* **BuddyBoss Groups** will be imported as **FluentCommunity Spaces**.
* **Group Memberships** will be transferred, ensuring your members are correctly placed in their new Spaces.
* **Group Activity Feeds** will be migrated into their corresponding Spaces.
* **General "What's New" Activity** will be imported into the main community activity feed.

### What Data Will NOT Be Migrated?
To set clear expectations, it's important to understand what will be left behind, as it is specific to the BuddyBoss platform:
* **Private Messages** between members.
* **Member Connections** (friends).
* **Forum data** from the integrated bbPress forums.
* **Custom Profile Types** and custom profile field data.
* **BuddyBoss Platform theme settings**, branding, and configurations.
* **Data from any third-party** BuddyBoss-specific add-ons or plugins.


## The Migration: A Step-by-Step Guide

With your backup complete and expectations set, you are ready to begin.

### Step 1: Navigate to the Migration Tool
First, ensure both the **BuddyBoss Platform** and **FluentCommunity** plugins are installed and active.
1.  From your WordPress admin dashboard, navigate to the **FluentCommunity** menu item.
2.  Click on the **Tools** sub-menu.
3.  Select the **Migration** tab. You will see the available importers here.

[Screenshot: The FluentCommunity Tools -> Migration screen.]

### Step 2: Start the BuddyBoss Importer
You will see a section for migrating from the BuddyBoss Platform. Take a final moment to ensure you are ready.
1.  Read the on-screen information.
2.  Once you have confirmed your backup is complete, click the **Migrate from BuddyBoss** button.

[Screenshot: The BuddyBoss importer section showing the "Migrate" button.]

### Step 3: Monitor the Migration (Be Patient!)
Once started, the importer will begin working. The tool is now reading your BuddyBoss database tables (for groups, members, and activity) and carefully writing that information into FluentCommunity's optimized format.

It is **critical** that you do not navigate away from this page, close your browser, or refresh the window while the process is running. The time required can range from a few minutes to much longer, depending entirely on the size of your community. A large, active community will take time.

You will see a clear success message when the process is 100% complete.

### Step 4: Verify Your Migrated Data
This is a crucial validation step. Don't just glance—take the time to thoroughly check your newly imported data.
1.  **Check the Spaces:** Navigate to **FluentCommunity → Spaces**. Is your list of former BuddyBoss Groups present? Check the member counts for a few of them.
2.  **Inspect Space Content:** Click into several different Spaces. Do you see the old activity posts and discussions? Are the right members listed in the "Members" tab for that space?
3.  **Review the Main Feed:** Go to your community's front-end page. Does the main activity feed look correct?

### Step 5: Deactivate the BuddyBoss Platform
Once you have done a thorough review and are confident that your content has been successfully imported, you can complete the transition.
1.  Navigate to the **Plugins** page in your WordPress dashboard.
2.  Find the **BuddyBoss Platform** plugin.
3.  Click **Deactivate**.
This action makes FluentCommunity the "live" and primary community engine for your website. Once you are 100% sure you no longer need it, you can also delete the BuddyBoss Platform plugin.

## Post-Migration: Setting Up Your New Community

Congratulations! Your data is migrated. Here are the recommended next steps to get your new community ready for your members.

* **Configure Your Spaces:** Go through each imported Space and review its settings. FluentCommunity has unique and powerful controls for privacy, content, and member permissions that you'll want to configure. Learn about [space settings](../community-hub/space-settings-&-privacy.md).
* **Customize Your Portal:** This is the fun part! Visit **FluentCommunity → Customization** to apply your brand's colors, logos, and layout preferences to your new community. Explore [layout and appearance](../portal-settings/layout-&-appearance.md) options.
* **Check Your Permalinks:** Go to **Settings → Permalinks** in WordPress and click "Save Changes" (even if you don't change anything). This simple action rebuilds your site's URL structure and is essential for ensuring all your new community pages load correctly.
* **Announce the Upgrade to Your Members:** Your community will look and feel different—and much faster! Prepare your members for the change. Let them know about the new platform and highlight the benefits of the new, improved experience.

**Next Steps:**
- Learn about [creating new spaces](../community-hub/creating-a-new-space.md) to expand your community
- Explore [member management](../community-hub/managing-user-profiles.md) features
- Set up [content moderation](../community-hub/content-moderation.md) to maintain quality