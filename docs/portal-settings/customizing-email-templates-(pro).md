---
title: Customizing Email Templates (Pro)
description: Configure FluentCommunity Email Settings — the from name and address, reply-to details, email footer and smartcodes, header logo, and the default notification and weekly digest emails.
---

# Customizing Email Templates (Pro)

Every automated email FluentCommunity sends — a new comment alert, a reply notification, the weekly digest — is built from one shared set of options. **Email Settings** is where you set who those emails come from, what the footer and header look like, and which events trigger an email in the first place.

Get this right once and every message your community sends carries your branding and stays compliant.

> **Use Case:** Your emails currently arrive from "WordPress" with no logo, and members reply to them into a black hole. You set the **From Name** to your community name, point **Reply to email** at your support inbox, upload your logo, and add your business address to the footer — all in a single screen.

## How to Open Email Settings

1. Open your community portal and click **Settings** at the bottom of the left sidebar.
2. In **Portal Settings**, click **Email Settings**.

The page is split into two sections: **Mailing Settings** and **Email Notification Settings**.

## Mailing Settings

These configurations apply to every email FluentCommunity sends.

![The Mailing Settings section of FluentCommunity Email Settings, with From Name, From Email, reply-to fields, the email footer, and the header logo](/images/portal-settings/customizing-email-templates-(pro)/mailing-settings.webp)

### Sender Details

| Field | What it does |
| :--- | :--- |
| **From Name** | The name members see in their inbox. Use your community or brand name. |
| **From Email** | The address emails are sent from. It must be a valid address for your domain or SMTP settings. |
| **Reply to name** *(optional)* | The name used for the reply-to attribute. |
| **Reply to email** *(optional)* | Where replies land when a member answers a notification email. |

> **⚠️ Important:**
> The **From Email** has to match your domain or SMTP configuration. An address your mail server isn't authorized to send for will get your notifications filtered into spam — or rejected outright.

### Email Footer

The footer text is appended to **all** emails sent from FluentCommunity. The default content looks like this:

```
You are getting this email because you are a member of {{site_name_with_url}}.
{{manage_email_notification_url|Manage Your Email Notifications Preference}}.
```

The double-brace tags are **smartcodes** — placeholders replaced with real values when the email goes out:

::: v-pre
* `{{site_name_with_url}}` — your site name, linked to its permalink.
* `{{manage_email_notification_url|Manage Your Email Notifications Preference}}` — a link to the member's own notification preferences. The text after the `|` is the link label, so you can change the wording without breaking the link.
:::

> **💡 Tip:** Add your business name and physical address to this footer. Most anti-spam regulations expect a real postal address and a working unsubscribe path in every bulk email, and this footer is the one place that covers all of them at once.

### Branding

* **Logo for Email Header** — upload the image that appears at the top of your emails. Click the pencil icon to swap it out.
* **Disable powered by FluentCommunity in the email footer** — tick this checkbox to remove the plugin credit line from the bottom of every email.

## Email Notification Settings

This section sets the **defaults for all community members**. Individual members can override them from their own notification preferences, so treat these as the starting point rather than a hard rule.

![The Email Notification Settings section, with toggles for new comment, comment reply, and post announcement emails, plus the weekly digest schedule](/images/portal-settings/customizing-email-templates-(pro)/email-notification-settings.webp)

### Event Notifications

| Setting | What it does |
| :--- | :--- |
| **Email on new comment** | Sends an email to the post author when a new comment is added to their post. |
| **Email on comment reply** | Emails a comment author when someone replies to their comment. |
| **Email Announcement on Post** | Gives admins and moderators the option to send an email when they publish a post in a space. |

That third setting is worth noticing: it doesn't email anyone by itself. It simply *adds the option* for admins and moderators, so they can decide post by post whether something is worth landing in every member's inbox.

### Weekly Digest Email

Tick **Enable Weekly Digest Email for community members** to send a recurring summary of community activity. Members can enable or disable their own digest, so this is a default rather than a mandate.

Two controls set the schedule:

* **In which day, the digest email will be sent** — pick the weekday, for example *Every Tuesday*.
* **Time to send the digest email** — pick the hour, for example *09:00*. This is an approximate start time; sending begins around then and works through your member list.

> **✨ Note:**
> The digest is the gentlest way to bring quiet members back. Members who never log in still get one email a week showing what they missed, without the noise of a notification for every individual comment.

## Saving Your Changes

Click **Save Settings** — the button appears both at the top-right of the page and at the bottom of the form. Nothing on this screen takes effect until you save.

For the on-site alerts that appear in the bell menu rather than the inbox, see [In App Notification Settings](/in-app-notification-settings).
