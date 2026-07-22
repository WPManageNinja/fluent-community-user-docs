---
title: Monetizing Your Courses
description: Learn how to monetize a course in FluentCommunity by setting it to Private, adding a custom Lock Screen, and connecting a Fluent Forms payment form.
---

# Monetizing Your Courses

FluentCommunity lets you sell access to your courses just as easily as your Spaces. You set a course to **Private**, place a custom **Lock Screen** in front of it with a **Call to Action** button, and link that button to a payment form. When a student pays, you grant them access. This guide walks through the flow using **Fluent Forms**.

> **Use Case:** You've built a "Web Development Bootcamp" course and want to charge a one-time enrollment fee. Non-students see a Lock Screen with an "Enroll Now" button that leads to a Fluent Forms payment form, and paying students are enrolled automatically.

## Step 1: Set Up Your Course

### Create or Edit a Course

Start with a new course or an existing one. For the full walkthrough, see [Creating Your First Course](/courses-&-learning-(pro)/creating-your-first-course).

### Set the Course to Private

Open the course you want to monetize, go to its **Edit** option, and set its **Privacy** to **Private**. The **Custom Lock Screen** only becomes available once privacy is set to **Private**. With the course set to private, click the **Lock Screen** option in the top menu.

![Course privacy set to Private with the Lock Screen option](/images/monetization/monetizing-your-courses/Lock-Screen--scaled.webp)

### Enable the Lock Screen

Design what non-students will see and add a **Call to Action (CTA)** button. For design tips, see [Course Privacy](/courses-&-learning-(pro)/course-privacy).

![Course Lock Screen settings with a Call to Action button](/images/monetization/monetizing-your-courses/Lock-Screen-Settings--scaled.webp)

## Step 2: Add a Payment Option with Fluent Forms

> **✨ Note:**
> You'll need **Fluent Forms Pro** to complete these steps.

### Create a Payment Form

In Fluent Forms, create a new payment form with the fields you need plus a [**Payment Field**](https://wpmanageninja.com/docs/fluent-form/field-types/payment-field-in-wp-fluent-forms/) set to your course price. Save the form when you're done.

### Configure the FluentCommunity Integration Feed

> **✨ Note:**
> To use the FluentCommunity Integration Feed, first [activate the FluentCommunity module](/integrations/connecting-with-fluent-forms) in Fluent Forms.

Open the form's **Settings & Integration** tab, choose **Configure Integration** from the left sidebar, click **Add New Integration**, and select **FluentCommunity Integration Feed**.

![Adding a new FluentCommunity Integration Feed in Fluent Forms](/images/monetization/monetizing-your-courses/FFIntegration-1-scaled.webp)

Now map the fields for your feed:

* **Name:** A label for the feed so you can identify it later.
* **Select Space or Course to Enroll:** Pick the course students should be added to. Both Secret Spaces and Secret Courses appear in this list as well.

**Map Fields**

* **Email Address:** Select the email field to map users' email addresses.

**For New Users Outside WordPress**

* **Full Name:** Map the name field for new users. Shortcodes are supported here.
* **Password:** Map a password field so users can set a login password for your community. Shortcodes work here too.

**Additional Options**

* **Allow the user to login automatically after form submission:** Logs users in immediately after they submit the form.
* **Send Welcome Emails:** Sends WordPress's default welcome email to new users after registration.
* **Conditional Logic:** Apply conditions to control when this feed runs, for more targeted enrollment.

Click **Save Feed** to store your configuration.

![Configured FluentCommunity Integration Feed with mapped fields](/images/monetization/monetizing-your-courses/Add-New-Fluent-Community-Integration-Feed-Fluent-Forms-12-03-2024_07_45_PM-scaled.webp)

## Step 3: Publish Your Payment Form

You can share the form using either its shortcode or a dedicated landing page URL. This guide uses the landing page option.

In the form's **Settings & Integration** section, select **Landing Page** from the left sidebar and check **Enable Form Landing Page Mode**. Click **Save**, then **Share** to reveal the landing page URL, and copy it. For deeper customization, see the [Fluent Forms landing page documentation](https://wpmanageninja.com/docs/fluent-form/advanced-features-functionalities-in-wp-fluent-form/dedicated-landing-page-fluent-forms/).

![Fluent Forms landing page settings with the URL to share](/images/monetization/monetizing-your-courses/Form-5-scaled.webp)

> **✨ Note:**
> You can also monetize a course with a WooCommerce product and use a FluentCRM automation funnel to enroll students automatically after payment.

## Step 4: Link the Form to the Lock Screen

Return to your Lock Screen's CTA button and paste the landing page URL into the **Button Link** field.

![Pasting the payment form URL into the course Lock Screen CTA button link field](/images/monetization/monetizing-your-courses/Zoro-11-14-2024_04_58_PM-scaled.webp)

## Start Selling Your Course

Your course is now ready to sell. When visitors reach it, they'll see the Lock Screen with your CTA button pointing to the payment form. Once they complete payment, you can grant them access, and your Fluent Forms feed handles enrollment automatically.
