---
title: Using Webhooks (Pro)
description: Learn how to use outgoing webhooks in FluentCommunity to send real-time data to external applications and create custom automation workflows.
---

# Using Webhooks (Pro)

Webhooks are a powerful tool for developers and power users that allow you to send data from your community to external applications in real-time. Whenever a specific event happens in FluentCommunity, it can automatically send a notification (a "payload" of data) to a URL you provide.

> **Use Case:** You want to post a message in a private Slack channel every time a new member joins your "VIP" space. You can set up a webhook that triggers on the "User Joins Space" event and sends the user's details to a specific Slack webhook URL.

## How Webhooks Work

1.  **An Event Occurs:** Something happens in your community (e.g., a new post is created).
2.  **Webhook Triggers:** FluentCommunity packages up information about that event into a structured data format (usually JSON).
3.  **Data is Sent:** It sends this data packet to a unique URL you've specified (your "webhook URL").
4.  **External App Listens:** Your external application (like Zapier, Pabbly, or a custom script) is "listening" at that URL, receives the data, and performs a pre-defined action.

## Configuring an Outgoing Webhook

1.  From your WordPress dashboard, navigate to **FluentCommunity → Settings**.
2.  Find and click on the **Webhooks** or **API & Webhooks** tab.
3.  Click the **Add New Webhook** button.

[Screenshot: The Webhooks settings screen with the "Add New Webhook" button highlighted.]

### Webhook Setup

You will need to configure two main things:

* **Webhook URL:** This is the unique URL provided by the external service you want to send data to (e.g., your Slack or Zapier webhook URL). You must get this from the other application.
* **Trigger Event:** Select the event in FluentCommunity that should trigger this webhook. From a dropdown list, you can choose from dozens of events, such as:
    * User Joins a Space
    * New Post Created
    * User Completes a Course
    * Comment is Replied To

[Screenshot: The webhook configuration screen showing the fields for the Webhook URL and a dropdown menu to select the Trigger Event.]

After configuring the webhook, click **Save Webhook**. Now, every time the selected event occurs, FluentCommunity will automatically send the relevant data to your specified URL, enabling powerful custom automations.

> **⚠️ Important:**
> Webhooks are an advanced feature that requires an external service to receive the data. Ensure that the webhook URL you provide is correct and that the receiving application is properly set up to handle the incoming data from FluentCommunity.