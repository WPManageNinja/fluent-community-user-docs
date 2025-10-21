---
title: Connecting With Paymattic
description: Learn how to integrate FluentCommunity with Paymattic to sell access to your private Spaces and Courses, and set up one-time or recurring subscription payments.
---

# Connecting With Paymattic

The integration with **Paymattic** is a powerful way to monetize your community. It allows you to create payment forms that, upon successful submission, will automatically enroll users into your private Spaces and Courses.

> **Use Case:** You want to sell lifetime access to an exclusive "VIP Members" space for a one-time fee of $99. You can create a Paymattic form for this, and any user who completes the payment will be automatically added to that private space.

## How the Integration Works

The process involves creating a payment form in Paymattic and then linking it to a FluentCommunity action using an integration feed.

### Step 1: Create a Payment Form

First, you need to set up the form that will accept the payment.

1.  From your WordPress dashboard, navigate to **Paymattic → All Forms**.
2.  Click **Add New Form** and design your payment form. You can add various fields and, most importantly, configure the payment amount and gateway (e.g., Stripe, PayPal).

[Screenshot: The Paymattic form editor, showing a simple payment form with name, email, and payment amount fields.]

### Step 2: Configure the FluentCommunity Integration

Now, you need to connect this form to your community.

1.  In your Paymattic dashboard, go to **Integrations** and ensure the **FluentCommunity** module is enabled.
2.  Go back to edit the payment form you just created.
3.  Click on the **Form Integrations** tab at the top.
4.  Click **Add New Integration** and select **FluentCommunity** from the dropdown list.

[Screenshot: The "Form Integrations" tab in Paymattic, with the FluentCommunity integration being added.]

### Step 3: Set Up the Feed

The "feed" tells Paymattic what to do after a payment is successfully processed.

1.  Give the feed a name for your reference.
2.  **Select Action:** Choose the action you want to perform. You can **Add User to Space** or **Enroll User to Course**.
3.  **Select Space/Course:** From a dropdown list, select the specific Space or Course you want to grant access to.
4.  **Map Fields:** Ensure the user's information from the form is correctly mapped to their community profile.

[Screenshot: The FluentCommunity integration feed setup in Paymattic, showing the action being selected and a course being chosen from a dropdown.]

Click **Create FluentCommunity Feed** to save the integration. Your payment form is now active. When a user completes a purchase through this form, they will be automatically enrolled in the corresponding Space or Course.

> **✨ Note:**
> With Paymattic Pro, you can also set up recurring subscriptions. This allows you to sell monthly or yearly access to your premium spaces and courses, creating a sustainable membership model for your community.

**Related Topics:**
- Learn about [connecting with FluentCRM](./connecting-with-fluentcrm.md) for email automation
- Explore [connecting with Fluent Forms](./connecting-with-fluent-forms.md) for custom registration
- Set up [creating spaces](../Community%20Hub/creating-a-new-space.md) to organize your community