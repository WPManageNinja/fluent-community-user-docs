---
title: Space Settings & Privacy
description: Learn how to configure the privacy, layout, and member access settings for your Spaces in FluentCommunity, including public, private, and secret types.
---

# Space Settings

Every Space in FluentCommunity is highly customizable. This guide walks you through the **General Settings** tab, where you control visibility, appearance, and functionality for each Space.

> **Use Case:** You might set an "Announcements" Space to Public with a List layout for clarity, while keeping a "Premium Mastermind" Space Private and monetizing it via the Paywalls tab.

## Accessing Space Settings

Space Settings are managed from the community frontend, not the WordPress dashboard.

1. Navigate to the Space you want to edit.
2. Click the **⋮** **(three-dot)** menu in the top-right corner of the Space, next to the Posts, Members, and Chat tabs.

3. Select **Space Settings** from the dropdown for customization or editing the space.
4. You can **Delete** this space here by clicking this Delete icon.

![Accessing Space Settings from the three-dot menu](/images/community-hub/space-settings-privacy/space-settings.webp)

The settings panel opens with three tabs at the top: **General Settings**, **Paywalls**, and **Space Links**. Click **Save Changes** in the top-right to apply any edits.

## General Settings Tab

### 1. General

This section defines the basic identity of your Space.

* **Space Title:** The name displayed to members. Click the icon on the left to change the Space emoji or image.
* **Slug (optional):** The URL path for this Space (e.g., `yourcommunity.com/spaces/announcement`). Click **change** to set a custom slug. Only letters, numbers, hyphens, and underscores are allowed.
* **Description:** A short summary of what the Space is about.
* **Menu Group:** Assigns this Space to a sidebar navigation group. If no group is selected, the Space appears only on the All Spaces page.

### 2. Access Control

Controls who can find and join this Space.

**Privacy**

* **Public:** Visible to everyone. Any site member can see the Space content and who's in it.
* **Private:** The Space appears in the directory, but only members can see its content. Non-members see a Lock Screen. Required for using Paywalls.
* **Secret:** Completely hidden from non-members. Accessible only via direct link or invitation.

When **Private** is selected, a **Lock Screen Type** option appears:

* **Custom:** Build a custom lock screen or sales page using the drag-and-drop builder.
* **Default:** Show the standard community lock screen.
* **Redirect to an URL:** Send non-members to an external page (e.g., a sales or landing page).

**Allow users to request to join this Space:** When enabled, non-members can submit a join request. Admins and Moderators approve or reject requests from the Space's Members tab.

**Show Paywalls in Default Lock Screen:** When using the Default Lock Screen, check this to display paywall content to non-members.

**Who can view space members:** Controls who can see the member list for this Space. Options: *Anyone*, *Members Only*, or *Admin/Moderators Only*.

![Space General Settings and Access Control](/images/community-hub/space-settings-privacy/space-settings-1.webp)

### 3. Features Customizations

Controls posting permissions, sidebar visibility, and document management.

* **Only admin or moderators can create post:** Turns the Space into an announcement-style channel. Regular members can read and comment, but cannot create new posts.
* **Show Right Sidebar on Space:** Enabled by default. Displays the "About" and "Recent Activities" widgets inside the Space.
* **Hide Members count from spaces page (when members page access unavailable):** Hides the member count from the Space card in the All Spaces directory.
* **Enable File/Document Library for this space:** Adds a dedicated **Files** tab to the Space. When enabled, two additional options appear:
    * **Document Library Access (View & Download):** Choose who can view and download files — *Members of this space*, *Any Logged in users*, or *Public*.
    * **Who can upload the documents?:** Choose between *Any Members* or *Admin/Moderators Only*.

**Default Post Sort By:** Sets the default order for posts when members load the Space (e.g., **Latest Posts Sort**).

* **Disable Post Sort By Options:** Locks the sort order and prevents members from changing it.

**Default Comment Sort By:** Sets the default order for comments within posts (e.g., **Latest Comments Sort**).

### 4. Layout

Controls how posts are displayed in this Space.

**Default Layout Styles:** Choose one of three display options:

* **Timeline** - a standard chronological feed.
* **List** — a compact, text-focused view.
* **Card** — a grid of visual cards, ideal for image-heavy content.

**Disable Layout Style Change Option:** Check this to prevent members from switching to a different layout themselves.

### 5. Others

**Topic Navigation:** Categorize posts within your Space. Select up to 20 topics — members can then filter the Space feed by topic. Click **+ New** to create a topic directly from this window, or click **Manage all topics** to manage them centrally.

* **Make members select a topic:** Requires members to choose a topic before creating a new post.

**Group Chat:** Check **Enable group chat for this space members** to create a dedicated real-time chat room for all Space members.

**Thumbnail / Open Graph Image (Recommended Size: 1200×630):** Used on the All Spaces card preview and when the Space URL is shared on social media.

**Featured Image (Recommended size: 1600×500) — Optional:** Shown as a banner at the top of the Space homepage. If no image is added, no banner appears.

![Space Features, Layout, and Others settings](/images/community-hub/space-settings-privacy/space-settings-2.webp)


## Paywalls Tab

Visible when the Space privacy is set to **Private**. Use this tab to link [FluentCart products](/integrations/connecting-with-fluentcart) to charge for Space access, allowing you to monetize physical products, digital downloads, and courses. Once a product is added, return to the Lock Screen settings to design your sales page.

## Space Links Tab

Use this tab to manage external links associated with this Space. [Space Links](community-hub/space-links) appear in the Space's navigation for quick access to related resources.
