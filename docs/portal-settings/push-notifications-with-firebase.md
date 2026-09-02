---
title: Push Notifications with Firebase (Pro)
description: Install FluentNotify and connect it to a Google Firebase project to send real, OS-level browser push notifications for comments, replies, mentions, and new posts.
---

# Push Notifications with Firebase (Pro)

The Notification Center bell keeps members updated while they're inside your community, but it can't reach them once they close the tab. **FluentNotify** closes that gap: it connects your community to **Google Firebase Cloud Messaging (FCM)** and sends real, OS-level browser push notifications for comments, replies, mentions, and new posts — even when the member isn't looking at your site at all.

> **Use Case:** A member closes their browser after posting a question in a Space. Ten minutes later someone replies. With FluentNotify connected, they get a push notification on their desktop or phone the moment that reply is posted, and one tap takes them straight to it.

> [!Important]
> Set up [New Posts Notifications](/in-app-notification-settings#new-posts-notifications) before configuring FluentNotify. If no space has notifications enabled yet, the FluentNotify settings screen won't show any options.

## Installing FluentNotify

1. Go to **Portal Settings → Features & Addons → Advanced Features & Addons**.
2. Scroll down to the **Recommended Plugins and Addons** panel.
3. Find **FluentNotify** *"Send browser push notifications to your community members for comments, replies and mentions"* and click **Install FluentNotify**.

![Install FluentNotify button](/images/portal-settings/push-notifications-with-firebase/install-fluentnotify-1.webp)

Once it finishes installing, the button changes to **View Settings**.

![The same panel after installation](/images/portal-settings/push-notifications-with-firebase/view-settings-2.webp)

## Setting Default Push Notification Preferences

Click **View Settings** to open the **Push Notification Settings** drawer. These are the community-wide defaults applied to any member who hasn't chosen their own preference yet, once a member changes a setting for themselves, their choice is kept and this default no longer applies to them.

Three events are turned on by default:

* **Notify when someone comments on their post**
* **Notify when someone replies to their comment**
* **Notify when someone mentions them**

Uncheck any you don't want triggering a push notification by default, then click **Save Settings**. This takes you straight into FluentNotify's full settings screen, where you'll connect it to Firebase next.

![The Push Notification Settings drawer with three default notification checkboxes and a Save Settings button](/images/portal-settings/push-notifications-with-firebase/enable-notification-settings-3.webp)

## Confirming New Posts Notifications Are Set Up

FluentNotify only shows configuration options once at least one space has post notifications enabled for your own account. If you haven't already done this, set it up first:

1. Open **My Profile**, then click **Notification Settings**.
2. Scroll to **New Posts Notifications**.
3. For each Space, Community, or other Space you want alerts from, choose **Email Disabled**, **Notify only for Admin Posts**, or **Notify for all posts**.
4. Click **Save Changes**.

For the full breakdown of these three options, see [In-App Notification Settings](/in-app-notification-settings).


![The New Posts Notifications table ](/images/portal-settings/push-notifications-with-firebase/new-posts-notification-settings-3.webp)


## Configuring Google Firebase

FluentNotify needs a set of credentials from a Firebase project to actually send push notifications. The rest of this guide walks through generating them, step by step, in the [Google Firebase Console](https://console.firebase.google.com/).

### Step 1: Create a Firebase Project

Log in to the Firebase Console and click **Get started by setting up a Firebase project**.

Enter a name for your project (for example, your community's name), accept the Firebase terms, and click **Continue**.

![Continue button](/images/portal-settings/push-notifications-with-firebase/create-a-project-4.webp)

On the next screen, **Gemini in Firebase** is offered as an optional AI assistant for the project, it isn't needed for push notifications, so just click **Continue**.

![The AI assistance for your Firebase project screen with the Continue button](/images/portal-settings/push-notifications-with-firebase/Continue-5.webp)

Google Analytics is also optional. Leave it as you prefer and click **Create project**.

![Create project button](/images/portal-settings/push-notifications-with-firebase/create-a-project-6.webp)

Once Firebase finishes setting things up, click **Continue** to enter your new project.

![Continue button](/images/portal-settings/push-notifications-with-firebase/fcommunity-project-7.webp)

### Step 2: Register a Web App

Push notifications are sent to a web browser, so you need to register a **Web** app inside the project, not iOS or Android.

1. In the Firebase Console, go to **Settings → Project settings**, then stay on the **General** tab.


![Web platform icon highlighted](/images/portal-settings/push-notifications-with-firebase/general-settings-8.webp)


2. Under **Your apps**, click the **Web** (`</>`) icon.

![ Register app button](/images/portal-settings/push-notifications-with-firebase/web-app-9.webp)


3. Give the app a nickname (e.g., "My web app") and click **Register app**.

![The Add Firebase SDK step ](/images/portal-settings/push-notifications-with-firebase/register-app-10.webp)

4. On the **Add Firebase SDK** step, click **Continue to console**, you don't need to install anything via npm for FluentNotify to work.

![The SDK setup and configuration panel ](/images/portal-settings/push-notifications-with-firebase/add-firbase-sdk-11.webp)

### Step 3: Copy the Firebase Config

Back on the **Project settings → General** tab, your new web app now appears under **Your apps**. Under **SDK setup and configuration**, select the **Config** radio button to reveal the `firebaseConfig` object, and **copy** it.



You only need the values **inside the curly brackets** `{ }` — not the surrounding `const firebaseConfig = ... ;` code. Because FluentNotify expects strict **JSON**, not JavaScript, you need to add quotes around each key name. For example, this JavaScript snippet:

```js
const firebaseConfig = {
  apiKey: "AIzaSyCggvuWBMZ9Qs6H3iMswdyvddPpNxrJ_J0",
  authDomain: "fcommunity-e2bd9.firebaseapp.com",
  projectId: "fcommunity-e2bd9",
  storageBucket: "fcommunity-e2bd9.firebasestorage.app",
  messagingSenderId: "778673779588",
  appId: "1:778673779588:web:4781f9707ab69e59ee23d1"
};
```

...becomes this JSON, which is what you'll paste into FluentNotify:

```json
{
  "apiKey": "AIzaSyCggvuWBMZ9Qs6H3iMswdyvddPpNxrJ_J0",
  "authDomain": "fcommunity-e2bd9.firebaseapp.com",
  "projectId": "fcommunity-e2bd9",
  "storageBucket": "fcommunity-e2bd9.firebasestorage.app",
  "messagingSenderId": "778673779588",
  "appId": "1:778673779588:web:4781f9707ab69e59ee23d1"
}
```

Keep this JSON handy — you'll paste it into FluentNotify shortly.


![The copied firebaseConfig code block highlighted in the Firebase console](/images/portal-settings/push-notifications-with-firebase/copy-code-12.webp)



### Step 4: Get the VAPID Key

1. In **Project settings**, click the **Cloud Messaging** tab.
2. Scroll to **Web configuration → Web Push certificates**.
3. Click the copy icon next to the **Key pair** to **copy** your VAPID key.

![ Web Push certificates section with a Key pair](/images/portal-settings/push-notifications-with-firebase/vivid-key-12.webp)

### Step 5: Get Service Account Credentials

1. Still in **Project settings**, click the **Service accounts** tab.
2. Under **Firebase Admin SDK**, click **Generate new private key**.

![The Service accounts tab ](/images/portal-settings/push-notifications-with-firebase/service-account-13.webp)

3. In the confirmation pop-up, click **Generate key**.

![The Generate new private key ](/images/portal-settings/push-notifications-with-firebase/generate-key-14.webp)

A `.json` file downloads to your computer. Keep it safe. Firebase can't regenerate this exact file if you lose it, and it grants access to your project's Firebase services.

> [!Important]
> Keep your service account JSON file safe. You can only download the JSON key when it is created. If you lose the file, you will need to generate a new key from your service account and replace the old key in FluentCommunity.

## Connecting Firebase to FluentNotify

After you save your default push notification preferences, you land on FluentNotify's full **Settings** screen. This is where you connect it to the Firebase project you just configured.

1. At the top of the page, turn on the **Enable Push Notifications** toggle. Nothing is sent while it's off, but your credentials are kept either way, so it's safe to turn on before you finish the rest of the form.
2. Under **Web app config**, **paste** the **Firebase Config JSON** you copied in Step 3 into the box. FluentNotify auto-fills the **API Key**, **Project ID**, **Messaging Sender ID**, and **App ID** fields from it, or you can enter each one manually.
3. Under **Web Push certificate**, **paste** your **VAPID Key** from Step 4 into the **Key pair** field.
4. Under **Service account**, drop the `.json` file you downloaded in Step 5 onto the upload area (or click to browse for it). This auto-fills the **Private Key**, **Client Email**, and **Token URI** fields.
5. Click the **Save Settings** button.

Each panel shows a live count as you fill in its fields (e.g., "4 of 4"), and once everything is saved, the page header shows **Configuration complete** and **Notifications enabled**.

> [!Note]
> All five Firebase fields (API Key, Project ID, Messaging Sender ID, App ID, VAPID Key) plus the three service-account fields are required, **FluentNotify** won't send notifications until every one of them is filled in and **Enable Push Notifications** is on.

![The FluentNotify Settings ](/images/portal-settings/push-notifications-with-firebase/settings-12.webp)

## Notification Defaults

Below the connection settings, **Notification Defaults** controls the fallback icon, badge, and link used whenever a campaign doesn't set its own:

- **Default Icon URL** — shown next to the notification text. A square PNG of at least 192×192px works best.
- **Default Badge URL** — Android only. A small monochrome PNG shown in the status bar. Optional.
- **Default Click URL** — where the notification opens when it has no link of its own.

Two buttons sit at the bottom: **Send test to me** sends a preview notification using these defaults to your own device, and **Save Settings** applies the changes.

![The Notification Defaults panel](/images/portal-settings/push-notifications-with-firebase/notification-defult-13.webp)

### Data Retention

Further down, the **Data** panel controls what happens to your subscriber list if FluentNotify is ever deleted:

- **Delete all data when the plugin is deleted**: Leave it unchecked if you might reinstall FluentNotify later: a subscriber list can't be rebuilt, since every row represents a browser permission that visitor granted, and simply deactivating the plugin never deletes anything.

Click **Save** to apply.

## What Members See

Once connected, members who grant browser notification permission get a real push notification the moment someone comments, replies, or mentions them, the same way any other website's push alerts appear on desktop or mobile, even outside the browser.

Inside the community itself, the same activity also appears in the in-app bell dropdown:

![The Recent Notifications](/images/portal-settings/push-notifications-with-firebase/notification-14.webp)

> [!Tip]
> For the full breakdown of the bell dropdown's Recent, Unread, Mentions, and Following tabs, see [In-App Notification Settings](/in-app-notification-settings).
