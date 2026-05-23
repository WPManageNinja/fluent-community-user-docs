---
title: The Member Directory
description: Learn how to use and configure the Member Directory in FluentCommunity, a central place for users to discover and connect with other members of the community.
---

# The Member Directory

The **Member Directory** is a central hub where people in your community can discover, search, and connect with each other. Think of it as your community's "people finder" where members can quickly identify who is active and relevant to their interests.

> **Use Case:** A new member joins and wants to find experienced users in a specific niche. They can open the Member Directory, search by name or keyword, and follow the right people immediately.

## Accessing the Member Directory

For members, the directory is available from the front-end community navigation, usually under the **Members** tab.

For administrators, you can view and manage members from the back-end by navigating to **FluentCommunity → Members** in your WordPress dashboard.

The Member Directory is more than a static user list. It includes tools that make discovery easy:

* **Search Members:** Find people by display name, username, or relevant profile keywords.
* **Sort Results:** Reorder the list by criteria such as **Last Activity**, **Display Name**, or **Joining Date**.
* **Quick Profile Context:** Each row/card gives useful at-a-glance context (name, username, joined date, and activity info).
* **Follow and Connect:** Members can follow others directly from the directory to build meaningful connections.

![Directory](/images/community-hub/member-directory/member-1.png)

## Directory Privacy Settings

As an administrator, you control who can view the Member Directory and related member pages. Configure these options from your WordPress dashboard:

1. Go to **FluentCommunity → Settings**.
2. Open the **Privacy Settings** tab.
3. Adjust the visibility options below, then click **Save Settings**.

![Privacy Settings in Portal Settings](/images/community-hub/member-directory/member-privacy-settings-2.png)

### Who Can View the Member Directory

**Who can view all members page?** controls access to the Member Directory itself:

* **Everybody**: Anyone can browse the full members list.
* **Only logged-in members**: Only signed-in users can view the directory (recommended for private communities).
* **Only Admin/Moderators**: Only staff can access the directory; members cannot browse all members publicly.

### Related Profile & Community Visibility

These settings work alongside the directory and affect how members appear across the community:

**Who can view user profile page?**  
Choose **Everybody**, **Only logged-in members**, or **Only Admin/Moderators**. Members can always view their own profile.

**Who can view leaderboard top members?**  
Control who can see top members on the leaderboard using the same visibility levels.

**Who can view spaces and courses on the user profile page**  
Control who can see the Spaces and Courses tabs on a member's profile.

### Member Account Permissions

* **Allow users to change their community username** — When enabled, members can update their own username. When disabled, only admins or moderators can change it.
* **Allow users to change their account email address** — When enabled, members can update their WordPress account email from profile settings.

> **Use Case:** For a private membership community, set **Who can view all members page?** to **Only logged-in members** so the directory is visible to members only, not public visitors.

## Best Practices

* Keep the Member Directory visible to logged-in users to encourage networking and collaboration.
* If your community is private, restrict directory visibility to members only.
* Encourage members to complete profiles so directory search becomes more useful.
* Use sorting (especially **Last Activity**) to help users find active contributors quickly.
