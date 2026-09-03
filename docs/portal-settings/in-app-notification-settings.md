---
title: In-App Notification Settings
description: Inside the FluentCommunity Notification Center — the bell icon and unread badge, the Recent, Unread, Mentions, and Following tabs, and email preferences.
---

# In-App Notification Settings

The **Notification Center** is what pulls members back into the conversation. Every time someone replies to their post, mentions them, reacts to their content, or follows them, an alert lands in the bell menu in real time — no email required, no page refresh needed.

This guide walks through what members see and how each part of the panel works.

> **Use Case:** A member posts a question in the morning and closes the tab. Three people reply and one mentions them directly. When they come back, the bell shows a red **4** — they open the **Mentions** tab, jump straight to the comment that needs them, and reply without hunting through the feed.

## Opening the Notification Center

The bell icon sits in the top-right corner of the community portal, next to the search icon and the member's avatar. When there are unread alerts, a **red badge** appears on the bell showing the count.

Click the bell to open the **Recent Notifications** panel.

![The FluentCommunity Notification Center open on the Recent tab, showing the bell icon with a red unread badge](/images/portal-settings/in-app-notification-settings/notification-center.webp)

## Reading a Notification

Every row in the panel packs four pieces of information:

* **Avatar with a type icon** — the member who triggered the alert, with a small colored badge on their photo showing what they did (a comment bubble, a heart for a reaction, and so on).
* **The message** — who did what, and where. Post titles and space names are highlighted, so you can tell a comment in **Announcement** from one in **Premium space** at a glance.
* **Timestamp** — how long ago it happened, like "a minute ago" or "2 minutes ago".
* **Blue dot** — shown on the right while the notification is still unread. It disappears once the notification has been read.

Clicking any row takes you directly to the post, comment, or profile it refers to.

## The Four Tabs

The panel splits alerts into four views so members can cut through the noise.

### Recent

The default view — everything, newest first, read and unread together. This is the full picture of what happened while you were away.

### Unread

Only the notifications you haven't opened yet. Once you've caught up, this tab empties out, which makes it the fastest way to work through a backlog without re-reading things you've already handled.

![The Unread tab of the Notification Center, filtered to notifications that have not been opened yet](/images/portal-settings/in-app-notification-settings/notifications-unread-tab.webp)

### Mentions

Only the alerts where someone typed your `@name` in a post or a comment. These are the notifications that usually need a reply, so this tab is worth checking first on a busy day.

![The Mentions tab showing only notifications where the member was directly mentioned](/images/portal-settings/in-app-notification-settings/notifications-mentions-tab.webp)

To learn how mentions are written, see [Post Reactions & Mentions](/post-reactions-&-mentions).

### Following

Activity connected to the people and content you follow — new followers, plus comments and reactions on the posts you're following. This tab depends on the **Follower Module**, which an administrator enables under **Portal Settings → Features & Addons**. See [Following & Blocking Members](/following-&-blocking-members) for the setup steps.

![The Following tab showing activity from members and posts the user follows](/images/portal-settings/in-app-notification-settings/notifications-following-tab.webp)

## Types of Alerts Members Receive

The Notification Center covers the direct interactions that matter most:

| Alert | When it fires |
| :--- | :--- |
| **Followed you** | Another member starts following your profile. |
| **Commented on your post** | Someone replies to a post you created. The post title and the space are both shown. |
| **Mentioned you** | Someone tags you with `@name` in a post or a comment. |
| **Reacted to your post** | Someone likes or reacts to your content. |

> **💡 Tip:** Long post titles are shortened with an ellipsis so each row stays on one or two lines. Hover or click through to see the full post.

## Clearing and Expanding the List

Two controls handle the panel itself:

* **Mark all as read** — the button in the top-right corner of the panel. One click clears every blue dot and resets the red badge on the bell to zero. It does not delete the notifications; they stay available under **Recent**.
* **View All** — the button at the bottom of the panel. It opens the full notification history, which is useful when the dropdown only shows the most recent handful.

## Member Notification Preferences

The Notification Center covers what happens **inside** the portal. Separately, every member — admins included — controls which of those events also reach their **inbox**, from their own profile.

To open them, click your profile picture in the top-right corner of the community dashboard, select **Your Profile**, then click **Notification Settings** in the menu bar.

### Global Email Notifications

These apply across every space and group the member belongs to:

* **Email me when someone comments on my post** — an email whenever someone comments on one of your posts.
* **Email me when someone replies to my comments** — an email whenever someone replies to a comment you left.
* **Email me when someone mentions me in a post or comment** — an email whenever someone tags or mentions you.
* **Weekly digest on Monday** — a summary of the week's activity. When unchecked, no digest email is sent.
* **Email sending frequency for one-to-one messages** — how often unread direct-message emails go out. This option only appears when email notifications for one-to-one messages are enabled in the messaging settings. See [Direct Messaging (Pro)](/direct-messaging-(pro)).

### New Posts Notifications

Below the global options, **New Posts Notifications** lets members subscribe to new posts **per space**, rather than all-or-nothing. Spaces are listed in a **Space / Notification** table, grouped by space group, with a dropdown on each row:

| Option | What the member receives |
| :--- | :--- |
| **Email Disabled** | No email for new posts in that space. |
| **Notify only for Admin Posts** | Email only when an admin posts in that space. |
| **Notify for all posts** | Email for every new post in that space. |

Click **Save Changes** to apply.

> [!Tip]
> Members who find a busy space noisy don't have to mute the whole community, switching that one space to **Notify only for Admin Posts** keeps announcements coming while dropping the day-to-day chatter.

![The New Posts Notifications table](/images/portal-settings/in-app-notification-settings/new-posts-notifications.webp)



### Email Status and Re-Confirming Your Address

If your address is connected through [FluentCRM](/connecting-with-fluentcrm) and gets marked **Bounced**, **Complained**, or **Spammed**, FluentCommunity pauses notification emails to that address and shows its status right here on this screen.

Click **Re-confirm My Email Address** to send yourself a fresh double opt-in email. Confirming it clears the flag and notification emails resume.

> **✨ Note:** These preferences are the member's own. Administrators set the community-wide defaults and choose which emails exist at all — see [Connecting with FluentSMTP](/connecting-with-fluentsmtp) for the sending setup and [Customizing Email Templates (Pro)](/customizing-email-templates-(pro)) for branding those messages.

## Beyond the Bell: Browser Push Notifications

The Notification Center and email preferences above only reach members while they're on your site or checking their inbox. To send real, OS-level push notifications that reach members even when their browser is closed, see [Push Notifications with Firebase (Pro)](./push-notifications-with-firebase.md).

