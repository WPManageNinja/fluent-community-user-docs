---
title: Space Pages (Pro)
description: Create static pages inside a FluentCommunity Space — rules, an FAQ, current offers — with the block editor, choose a layout, control who can view them, and show them as tabs in the Space menu.
---

# Space Pages (Pro)

**Space Pages** let you add static, evergreen pages to any Space — the kind of content that shouldn't scroll away in the feed. A page is written in the same block editor you use for course lessons, gets its own URL inside the Space, and can appear as a tab in the Space's navigation right next to **Posts** and **Members**.

> **Use Case:** Pin the house rules as a **Guidelines** tab, keep an **FAQ** that answers the questions new members ask most, publish a **Current Offers** page for a promotion, or write a **Start Here** page that walks newcomers through the Space.

> **✨ Note:** Space Pages are part of **FluentCommunity Pro**. In the free plugin, the **Pages** tab is still visible in Space Settings but shows an upgrade prompt instead of the page manager.

Pages are available in every discussion Space — there is nothing to switch on. Any **Space Admin** or **Moderator** can create and manage pages for the Spaces they look after. Course Spaces do not support pages yet.

## Opening the Pages Manager

1. Navigate to the [Space](./creating-a-new-space.md) you want to add a page to.
2. Click the **⋮ (three-dot)** menu in the top-right corner and select **Space Settings**.
3. Click the **Pages** tab at the top of the settings panel.

The **Pages** tab lists every page in the Space — published or draft — with its template, when it was last updated, and who wrote it.

![The Pages tab in Space Settings, listing three pages with their status, template and last-updated columns](/images/community-hub/space-pages-pro/pages-tab-1.webp)

> **💡 Tip:** Every settings tab now has its own URL, so you can bookmark the page manager directly: `/space/your-space-slug/settings/pages`.

## Creating a Page

### Step 1: Add a New Page

Click **Add New Page** in the top-right corner of the Pages tab. A small popup asks for a title — that's all you need to start. You can change the title any time later.

![The New Page popup asking for a page title, with Cancel and Create Page buttons](/images/community-hub/space-pages-pro/add-new-page-2.webp)

Click **Create Page**. The page is created as a **draft** and the editor opens immediately.

### Step 2: Write Your Content

The page editor is the familiar WordPress block editor, so headings, lists, images, embeds, buttons and columns all work the way you expect. The controls in the top bar are:

* **Back to Pages** — return to the page list. If you have unsaved changes, you'll be asked to confirm first.
* **Draft / Published** — the status switch. A draft is only visible to Space Admins and Moderators.
* **Save** — save your changes. Saving does not change the status, so you can keep working on a draft across several sessions.
* **👁 (Preview)** — open the page at its real URL in a new tab, even while it's still a draft.

![The page editor with Community Guidelines content on the left and the Space Page settings sidebar on the right](/images/community-hub/space-pages-pro/page-editor-3.webp)

> **✨ Note:** If you try to leave with unsaved edits — the Back button, the browser's Back button, another link in the portal, or closing the tab — FluentCommunity asks you to confirm so nothing is lost silently.

![The unsaved-changes confirmation asking whether you are sure you want to close](/images/community-hub/space-pages-pro/unsaved-changes-15.webp)

### Step 3: Set Who Can See It and Where It Appears

Everything a page has beyond its title and content lives in the **Space Page** sidebar on the right. If the sidebar is hidden, click the **Settings** icon (the panel icon) in the editor's top-right corner.

![The Space Page sidebar with the visibility dropdown, URL slug, Show in space menu, Menu Label and Enable comments controls](/images/community-hub/space-pages-pro/summary-panel-4.webp)

**Set featured image**: Pick an image for the page. It's used for the link preview when the page is shared and shows in search results. Whether it also prints across the top of the page is a separate choice — see [Page Layout](#step-4-choose-a-page-layout) below.

**Who can view this page**:
* **Everyone who can view the space** — anyone who can see the Space's posts can read the page. In a public Space that includes logged-out visitors.
* **Space members only** — only members of the Space can read it. Everyone else is told the page is for members.

**URL Slug**: The last part of the page address, for example `community-guidelines`. It's generated from the title, and you can edit it — but changing it breaks any links you've already shared.

**Show in space menu**: Tick this to add the page as a tab in the Space's navigation bar, next to Posts and Members. Untick it to keep the page reachable by its URL only.

**Menu Label**: A shorter name for the tab. Leave it empty to use the page title. A page titled *Community Guidelines* reads better as **Guidelines** in a tab.

**Enable comments**: Adds a comment thread beneath the page, just like a post. It's off by default — most pages are reference material, but an FAQ or a feedback page benefits from a discussion.

### Step 4: Choose a Page Layout

The **Page Layout** panel decides how the page sits inside the Space. Pick the thumbnail that suits the content; the description underneath explains each one.

![The Page Layout panel with four template thumbnails and the Show the page title and Show the featured image toggles](/images/community-hub/space-pages-pro/page-layout-5.webp)

| Template | What it looks like | Best for |
| :--- | :--- | :--- |
| **Unified** (default) | One surface filling the whole content area, flush under the Space menu, with the text in a comfortable reading column. No box. Reads like a course lesson. | Guidelines, long-form guides, anything you want to feel like "part of the Space" |
| **Standard** | A card across the full width of the Space, the same width as the **Members** and **Documents** tabs. | Structured reference pages, FAQs |
| **Classic** | A card the width of a single feed post, with the Space's **About** sidebar beside it. | Short announcements, pages that should feel like a pinned post |
| **Full Width** | No card at all. Blocks run edge to edge, so full-width cover images and columns design the page. | Landing pages, offers, visual pages |

Here is the same page in each template:

![The Unified template — page content on one surface with no card](/images/community-hub/space-pages-pro/template-unified-6.webp)

![The Standard template — page content inside a full-width card](/images/community-hub/space-pages-pro/template-standard-7.webp)

![The Classic template — a post-width card with the Space's About sidebar on the right](/images/community-hub/space-pages-pro/template-classic-8.webp)

![The Full Width template — page content running edge to edge with no card](/images/community-hub/space-pages-pro/template-full-width-9.webp)

Two toggles under the templates work independently of the layout you picked:

* **Show the page title** — prints the title as a heading at the top of the page. Turn it off when the content starts with its own hero or cover block. The title still names the page in the menu.
* **Show the featured image** — prints the featured image as a banner across the top. Off by default, because most pages set an image for link previews rather than to display it. The image is still used in search results and link previews either way.

### Step 5: Add an SEO Description

Open the **SEO** panel and write a one- or two-sentence **SEO Description**. Search engines show it under the page title in results, and messaging apps use it in the link preview when someone shares the page.

![The SEO panel with the SEO Description field](/images/community-hub/space-pages-pro/seo-description-10.webp)

> **✨ Note:** Only pages that are published, set to **Everyone who can view the space**, and inside a public Space are listed for search engines. They are also included in the [FluentCommunity sitemap](/sitemaps-&-seo). Members-only pages and drafts are never listed.

### Step 6: Publish

Change the status switch in the top bar from **Draft** to **Published** and click **Save**. The page goes live at its URL, and — if **Show in space menu** is ticked — its tab appears in the Space navigation right away.

## Where Pages Appear

A page that's shown in the menu becomes a tab in the Space header, after **Posts** and **Members** (and after **Media** and **Documents** if those are on). Tabs are ordered the same way the pages are ordered in the Pages tab — drag to reorder them there. If there are more tabs than fit, the rest move into a **More** menu.

![The Start Here Space header with Guidelines and FAQ page tabs next to Posts and Members](/images/community-hub/space-pages-pro/page-in-space-menu-12.webp)

On phones and small screens the Space tabs fold into a single menu button that shows the name of the section you're on. Page tabs are listed there alongside Posts, About and Members.

![The Space menu on a phone, listing Posts, About, Members, Guidelines and FAQ](/images/community-hub/space-pages-pro/mobile-space-menu-16.webp)

Every page also has a direct URL you can share anywhere:

```
https://yourdomain.com/portal/space/<space-slug>/page/<page-slug>
```

A page slug only has to be unique inside its own Space, so two Spaces can each have a `rules` page.

## Who Can See a Page

| Page status and visibility | Space Admins and Moderators | Space members | Non-members who can view the Space |
| :--- | :---: | :---: | :---: |
| Published · Everyone who can view the space | ✓ | ✓ | ✓ |
| Published · Space members only | ✓ | ✓ | Members-only notice |
| Draft | ✓ (with a draft banner) | — | — |

Anyone who isn't allowed to see a page gets a normal "not found" page, so a draft never gives itself away.

### Previewing a Draft

There is no separate preview mode. Because Space Admins and Moderators can open drafts at their normal URL, previewing is simply opening the page — use the **👁** icon in the editor, or click the slug under the page's title in the Pages tab (it reads **Preview draft** for drafts). A **Draft preview** banner across the top reminds you that only managers can see it, with an **Edit Page** shortcut on the right.

![A draft page showing the Draft preview banner that says only space admins and moderators can see this page](/images/community-hub/space-pages-pro/draft-preview-11.webp)

## Comments on a Page

When **Enable comments** is on, a **Discussion** thread appears beneath the page content — the same comment box, reactions and replies members already use on posts. The thread only shows once the page is published and only to people who can view the page.

![The Frequently Asked Questions page with a Discussion section and comment box beneath the content](/images/community-hub/space-pages-pro/page-comments-14.webp)

## Managing Pages

Everything in the list on the **Pages** tab is live — no separate save step.

* **Search and filter**: Use the search box to find a page by title, or the **All / Published / Draft** buttons to narrow the list.
* **Reorder**: Drag a page by its **⠿ grip** on the left to change its position. The order controls the order of the tabs in the Space menu. Reordering is paused while a search or filter is active.
* **Edit**: Opens the page in the editor.
* **⋮ (three-dot) menu**: Quick actions for each page, without opening the editor.

![The three-dot menu on a page row showing Switch to Draft, Hide from Menu, Copy Link, Duplicate and Delete](/images/community-hub/space-pages-pro/pages-manager-13.webp)

| Action | What it does |
| :--- | :--- |
| **Publish** / **Switch to Draft** | Flips the page's status instantly. Switching a live page to draft hides it from everyone but managers. |
| **Show in Menu** / **Hide from Menu** | Adds or removes the page's tab in the Space navigation. The page stays reachable by URL either way. |
| **Copy Link** | Copies the page's URL to your clipboard. |
| **Duplicate** | Creates a copy of the page as a draft — handy for reusing a layout. |
| **Delete** | Removes the page and its comments permanently, after a confirmation. |

> **⚠️ Important:** Deleting a Space also deletes all of its pages. Duplicate any page you want to keep into another Space first.

## Good to Know

* **No extra setup.** Pages work in every discussion Space as soon as FluentCommunity Pro is active — there is no feature toggle to turn on.
* **Courses don't have pages yet.** The Pages tab is only available for discussion Spaces.
* **Pages are separate from Space Links.** [Space Links](./space-links.md) add a link to *another* URL to the Space menu; a Space Page holds its own content inside the Space. Use both together — a page for the rules, a link for the Zoom room.
* **Search engines can find public pages.** A published page set to *Everyone who can view the space* in a public Space gets its own title, description and preview image tags, and is listed in the [FluentCommunity sitemap](/sitemaps-&-seo). Members-only pages and drafts are kept out.
