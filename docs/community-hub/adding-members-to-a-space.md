---
title: Adding Members to a Space
description: Learn the four ways to add members to a FluentCommunity Space — existing WP users, bulk import from another Space or Course, CSV upload, and FluentCRM tags.
---

# Adding Members to a Space

FluentCommunity makes it easy to build your audience inside each **Space**. Whether you're adding a single person who already has an account or bulk-importing hundreds from a spreadsheet, there's a method for it.

Before you start, make sure:

- You are logged into your WordPress dashboard.
- You have **Administrator** or **Moderator** privileges for the Space you want to manage.

::: tip Looking for roles instead?
This guide covers *adding* people. To change someone's role or remove them from a Space, see [Assigning User Roles](/assigning-user-roles).
:::

## Step 1: Navigate to Your Member List

To start managing your community, you first need to access the dedicated member area for your specific Space.

1. Go to your community portal and click on **Spaces** from the main top navigation menu.
2. Find the specific Space you want to manage and click the **View Space** button on its card.

![Finding a Space and clicking View Space](/images/community-hub/adding-members-to-a-space/add-member-1-scaled.webp)

3. Once inside the Space, click on the **Members** tab located in the top-right menu area (next to Posts and Documents).

![The Members tab inside a Space](/images/community-hub/adding-members-to-a-space/add-member-2-scaled.webp)

Here, you will see a list of everyone currently in the Space. You can use the search bar to quickly find existing members, and you can easily see each person's role (like Admin or Moderator) displayed directly under their name.

## Step 2: Add New Members

Click the **Add Member** button to open the invitation menu. From here, you can choose one of the following four tabs based on your needs.

### Method A: WP Users (Add Existing Site Users)

This is the perfect method if the person you want to add already has an account on your WordPress website.

1. Click the **WP Users** tab.
2. Search for the user's name or email in the **Users** field.
3. Select the **Membership Role** you want to give them (e.g., Member, Moderator, or Admin).
4. Click **Add as member**.

![Adding an existing WordPress user to a Space](/images/community-hub/adding-members-to-a-space/add-member-3-scaled.webp)

### Method B: From Space/Course (Bulk Import)

Do you already have a thriving [Course](/course-layouts-&-enrollment) or another Space? You can copy all of those members over at once.

1. Click the **From Space/Course** tab.
2. Click the dropdown menu and select the source Space or Course.
3. Click **Import Members**.

::: warning Note
All users imported using this method will automatically be added with the standard **Member** role.
:::

![Bulk importing members from another Space or Course](/images/community-hub/adding-members-to-a-space/add-member-4-scaled.webp)

### Method C: CSV Import (Upload a List)

If you have an external directory of users you want to enroll (such as a spreadsheet exported from another platform), you can add them all simultaneously via a CSV upload.

1. Click the **CSV Import** tab at the top of the Add Member sliding panel.
2. Upload your file. Once processed, the panel displays the file name along with the total count of recognized contacts.
3. Review the data preview columns underneath to ensure they map correctly — **Name**, **Email**, and **Username**.
4. Configure your user account creation settings using the onboarding options:

   - **Create WordPress accounts for new email addresses:** Check this box if these users do not yet have a profile on your WordPress site. FluentCommunity will securely generate an account for them.
   - **Send default WordPress welcome email for new users:** Check this box to trigger the standard WordPress welcome email automatically, allowing new members to receive their system login credentials immediately.

5. Click the **Import Members** button at the bottom to complete the import queue.

![Importing members from a CSV file](/images/community-hub/adding-members-to-a-space/csve-import-scaled.webp)

### Method D: CRM Tag (Integrate with FluentCRM)

If you use [FluentCRM](/managing-access-with-fluentcrm-tags), you can automatically pull in contacts based on the tags they have in your CRM.

1. Click the **CRM Tag** tab.
2. Select the specific FluentCRM Tag from the dropdown menu (e.g., "Subscriber" or "VIP").
3. If these contacts do not have user accounts on your website yet, check the box that says **Create WordPress accounts for contacts without an existing account**.
4. Click **Add Members**.

![Adding members by FluentCRM tag](/images/community-hub/adding-members-to-a-space/add-member-7-scaled.webp)
