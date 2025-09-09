---
title: Connecting With Fluent Forms
description: Learn how to integrate FluentCommunity with Fluent Forms to create powerful custom registration forms and automatically assign users to Spaces or Courses upon submission.
---

# Connecting With Fluent Forms

The integration between FluentCommunity and **Fluent Forms** allows you to create highly customizable forms that can register new users and automatically add them to specific Spaces or Courses. This is perfect for creating bespoke onboarding experiences.

> **Use Case:** You can design a detailed registration form for a "Graphic Design" course that not only signs the user up for your site but also automatically enrolls them into the course and adds them to a private "Design Students" space upon submission.

## How the Integration Works

When a user submits a form created with Fluent Forms, you can configure a special "FluentCommunity Feed" to trigger actions within your community.

### Step 1: Create Your Form

First, you need to create the form you want to use for registration or enrollment.

1.  From your WordPress dashboard, navigate to **Fluent Forms → New Form**.
2.  Design your form with all the necessary fields, such as Name, Email, and Password. You can also add custom fields to collect additional information.

[Screenshot: The Fluent Forms editor showing a sample registration form being built.]

### Step 2: Configure the FluentCommunity Feed

This is where you connect the form submission to actions in your community.

1.  While editing your form, go to the **Settings & Integrations** tab.
2.  Select **Marketing & CRM Integrations** from the left sidebar.
3.  Click the **Add New Integration** button and select **FluentCommunity Integration** from the list.

[Screenshot: The Fluent Forms integrations screen with the "FluentCommunity Integration" option highlighted.]

### Step 3: Map Your Fields and Actions

Now you need to tell the integration what to do with the form data.

1.  Give the new feed a name.
2.  **Select Action:** Choose the action you want to perform. The primary action is **User Registration**, which will create a new user account in WordPress.
3.  **Map Fields:** Match the fields from your form to the corresponding user fields (e.g., map your "Email" form field to the "User Email" field).
4.  **Assign to Spaces/Courses:** Below the field mapping, you can select one or more Spaces or Courses to automatically add the user to upon successful registration.

[Screenshot: The FluentCommunity feed configuration screen in Fluent Forms, showing field mapping and the dropdown to select a Space.]

Click **Save Feed** to activate the integration. Now, whenever a user successfully submits this form, a new user account will be created and they will be automatically added to the Spaces or Courses you selected.