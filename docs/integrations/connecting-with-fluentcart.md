---
title: Connecting with FluentCart
description: Learn how to monetize your FluentCommunity Spaces and Courses by connecting FluentCart to gate access behind a product purchase.
---

# Connecting with FluentCart

FluentCart integrates with FluentCommunity to let you sell access to private Spaces and Courses. When a customer purchases a linked product, FluentCommunity automatically grants them access — no manual steps required.

::: info
This integration works for both **Spaces** and **Courses**. The setup process is identical for both.
:::

---

## Prerequisites

Before you begin, confirm the following:

- **FluentCommunity** is installed and activated on your WordPress site.
- **FluentCart** is installed and activated on the same WordPress site.
- You have at least one Space or Course created in FluentCommunity.
- You have WordPress **Admin** access.

---

## How It Works

When you link a FluentCart product to a private Space or Course, FluentCommunity automatically creates an integration feed inside FluentCart. This feed grants access to the content the moment a customer completes their purchase. You configure everything from inside FluentCommunity — no manual setup inside FluentCart is needed for the basic flow.

The setup has three stages:

1. Set your content to **Private** or **Secret**
2. Link a **FluentCart product** to the Paywall
3. Configure the **Lock Screen** — what non-members see before purchasing

---

## Configuration Steps

### Step 1: Set Your Content to Private

Content must be Private or Secret before paywall options become available.

**For a Space:**
1. Navigate to the Space you want to monetize.
2. Click the **⋮** (three-dot) menu in the top-right corner and select **Space Settings**.
3. In the **General Settings** tab, scroll to **Access Control**.
4. Click the **Privacy** dropdown and select **Private** or **Secret**.
5. Click **Save Changes**.

**For a Course:**
1. Navigate to the Course and click **Edit info**.
2. In the **General Settings** tab, scroll to **Access Control**.
3. Set **Privacy** to **Private** or **Secret**.
4. Click **Save Changes**.

Once saved, two new tabs appear at the top of the settings window: **Paywalls** and **Lock Screen**.

### Step 2: Link a Product to the Paywall

1. Click the **Paywalls** tab at the top of the settings window.
2. Click **Add Paywall**. A product selection popup appears with two options:

**Option A: Link an existing FluentCart product**
- Type the product name in the **Search Product** field.
- Select it from the list when it appears.

**Option B: Create a new product on the spot**
- Click **+ New**.
- Enter a **Title** (e.g., `Premium Space Access`) and a **Price**.
- Click **Create**.

FluentCommunity automatically creates the product in FluentCart and links it. The product now appears on the Paywalls page.

::: tip
You can link multiple products to the same Space or Course — useful for offering different pricing tiers (e.g., monthly vs. annual access).
:::

### Step 3: Configure the Lock Screen

The Lock Screen is what non-members see when they visit your private content. Choose one of two methods:

#### Method 1: Default Lock Screen (Quickest)

1. Go back to the **General Settings** tab.
2. Under **Access Control**, set **Lock Screen Type** to **Default**.
3. Check the **Show Paywalls in the default lock screen** checkbox.
4. Click **Save Changes & Close**.

The standard lock screen now includes a "Buy Now" section showing your linked product.

#### Method 2: Custom Builder (Full Visual Control)

1. In the **General Settings** tab, set **Lock Screen Type** to **Custom**.
2. Click the **Lock Screen** tab at the top of the settings window.
3. In the visual page builder, locate the **Paywalls** block in the left sidebar under **Page Blocks**.
4. Click the **Eye** icon on the Paywalls block to make it visible on the page.
5. Click the **Pencil** icon to edit the block's content and design:
   - **Content tab:** Edit the description shown alongside your product.
   - **Design tab:** Change the **Button Label** (e.g., "Enroll Today"), toggle the paywall description visibility, and set background color, text color, and button colors.
6. Click **Save Changes & Close**.

---

## Advanced Configuration in FluentCart

For more control over access rules, edit the integration directly inside FluentCart.

1. Go to the **Paywalls** tab in your Space or Course settings.
2. Click the **⋮** menu next to your product and select **Edit Product**.
3. Inside FluentCart, click the **Integrations** tab.
4. Find the **FluentCommunity Integration** entry (auto-created) and click the **pencil** icon to open its settings.

From here you can configure:

| Rule | What it does |
|---|---|
| **Add to Spaces/Courses** | Automatically add the buyer to additional Spaces or Courses on purchase |
| **Remove from Spaces/Courses** | Remove access if the order is refunded or a subscription expires |
| **Mark profile as verified** | Add a Verified badge to the customer's community profile |
| **Event Trigger** | Change when access is granted — e.g., *Order Paid* vs *Order Completed* |

::: warning
If you use subscription products, always configure the **Remove from Spaces/Courses** rule to revoke access when a subscription expires or is cancelled. Without it, customers retain access indefinitely after cancellation.
:::

---

## Verification

After completing setup, confirm the integration is working:

1. Log out of WordPress (or open a private browser window).
2. Navigate directly to your private Space or Course URL.
3. Confirm the Lock Screen appears — either the default paywall block or your custom page.
4. Click the purchase button and complete a test order using FluentCart's test mode.
5. After purchase, confirm you are redirected to or can now access the Space or Course content.
6. In WordPress, go to **FluentCart → Orders** and verify the order shows as paid.

---

## Troubleshooting

**Paywalls tab does not appear after setting content to Private**
The Privacy setting was not saved. Click **Save Changes** after selecting Private or Secret, then reload the settings panel — the Paywalls tab appears after saving.

**Customers can still access content after purchasing**
The FluentCart integration feed was not created correctly. Go to **FluentCart → Products → [your product] → Integrations** and confirm a FluentCommunity integration entry exists. If missing, remove and re-add the product in the Paywalls tab.

**Lock Screen shows but no product/Buy Now button appears**
The **Show Paywalls in the default lock screen** checkbox is unchecked. Go to **General Settings → Access Control**, check that box, and save.

**Access is not revoked after a refund**
The **Remove from Spaces/Courses** rule is not configured. Go to the product's Integrations tab in FluentCart, edit the FluentCommunity integration, and add a Remove rule triggered on refund or subscription expiry.

**Custom Lock Screen builder shows a blank page**
The Paywalls block is hidden. In the custom builder, click the **Eye** icon next to the Paywalls block in the left sidebar to make it visible.

---

## Related Documentation

- [Space Settings & Privacy](/community-hub/space-settings-&-privacy) — how to set a Space to Private and configure the Lock Screen
- [Course Layouts & Enrollment](/courses-&-learning-(pro)/course-layouts-&-enrollment) — course access control options
- [Connecting with Paymattic](/integrations/connecting-with-paymattic) — alternative payment integration
