---
title: Course Certificates
description: Design certificates in a visual editor, award them automatically when students complete a course, and let anyone verify them on a public page with a QR code.
---

# Course Certificates

Course Certificates give your students something to keep and something to show. You design the certificate once in a visual editor. FluentCommunity awards it the moment a student finishes the course, and gives every certificate a public verification page that anyone can check.

> **Use Case:** You run a paid course called "Build a Community People Love." A student finishes the last lesson, and a certificate with their name appears straight away. They download it as a PDF, add it to LinkedIn, and a future employer clicks the link to confirm it is real.

## What You Get

* **A visual editor.** Drag, resize, and rotate every element on a fixed page. Start from one of six designs, or from a blank page.
* **Automatic awarding.** A certificate is issued the second a student completes the course.
* **Manual certificates.** Issue a certificate by hand to anyone, with or without an account.
* **Downloads.** PNG, PDF, and the browser's own print dialog.
* **A public verification page.** Every certificate has its own URL and QR code, and shows a live status: Valid, Expired, Suspended, or Revoked.
* **Open Badges.** Students can download a badge for a badge wallet or Credly.
* **Full control for admins.** Suspend, reinstate, revoke, or reissue any certificate.

## Turn On Certificates

Certificates have two switches: one for the site, one for each course.

### 1. Enable the module

Go to **Portal Settings → Features & Addons**, find **Course Module**, and click **Settings**.

* **Enable Course Certificates** — turn this on. When it is off, certificates are not shown or issued, and verification links stop working.
* **Who can see a member's certificates on their profile?** — choose one:
  * **Only the member** (the default)
  * **Logged-in members**
  * **Everyone**

* **Email students their certificate** — on by default. When a student completes a course, they get an email with a link to their certificate. Certificates issued for past completions are not emailed.

Others only ever see the certificates a member has marked **Public**, and your normal profile privacy settings still apply on top. This setting does not affect verification: anyone holding a certificate's link or QR code can always check it.

![The Course Module Settings drawer](/images/course-and-learning/course-certificates/course-module-certificate-settings.webp)

### 2. Enable it for a course

Open the course, go to **Settings → Certificate**, and turn on **Award a certificate when a student completes this course**.


* **Template** — pick a published template.
* **Valid for** — leave it on **Never expires**, or choose a number of months. An expired certificate stays on record, and its verification page says it has expired.

Click **Save Changes**.

![The Certificate tab in course settings](/images/course-and-learning/course-certificates/course-certificate-tab.webp)

### Catch up on past completions

If students finished the course before you turned certificates on, they are not left out. Once you save, a **Past completions** panel appears with a count.

Click the **Issue** button, which shows the count, for example **Issue 1 certificate**. Each student gets the date they actually completed the course, not today's date, so if you set an expiry, it counts from the real completion, and an old one may already be expired.

Students who already hold a certificate for the course are skipped, including anyone whose certificate you revoked.


![The Past completions panel](/images/course-and-learning/course-certificates/course-certificate-backfill.webp)

## Design a Certificate

Go to **Portal Settings → Certificates**. The page has three tabs: **Templates**, **Course Certificates** and **Manual Certificates**. The **Templates** tab lists your designs.

Each card shows a live preview, how many certificates use it, and which version is published.

![The Certificate Templates screen](/images/course-and-learning/course-certificates/certificate-templates-list.webp)

### Start a new template

Click **New Template**, give it a name, and choose a starting point.

There are six ready-made designs — **Classic Gold**, **Modern Minimal**, **Elegant Serif**, **Bold Navy**, **Academic (Portrait)**, and **Soft Teal** plus **Start from scratch** and **Import JSON** for a design exported from another site.

![The New certificate template dialog](/images/course-and-learning/course-certificates/new-certificate-template.webp)

### Use the editor

The editor has three columns:

* **Left** — add elements, and reorder, hide, or lock them in the layer list.
* **Middle** — the page itself. Drag elements anywhere, with snap guides, zoom, and undo/redo.
* **Right** — settings for the page, or for whatever element you have selected.

You can add these elements:

| Element | What it does |
|---|---|
| **Dynamic field** | A value filled in per student, such as their name or the course title |
| **Text** | Any fixed wording, such as "Certificate of Completion" |
| **Image** | A logo or any image from your media library |
| **Signature** | A signature image with a name and a title line under it |
| **QR code** | Links to this certificate's verification page |
| **Shape** / **Line** | Borders, bands, and rules |

![The certificate editor, with the element palette and layer list on the left, the page in the middle, and page settings on the right](/images/course-and-learning/course-certificates/certificate-editor.webp)

### Set the page

Under **Page** on the right, choose **A4** or **Letter**, and **Landscape** or **Portrait**. For the background, pick a colour or upload an image.

::: tip Design it in Canva
Make the artwork at the page size in a tool such as Canva, upload it as the background, then place the text on top. This is the quickest route to a certificate that looks designed.
:::

### Add dynamic fields

A dynamic field is a placeholder that becomes real text when a certificate is issued.

Twelve fields are available:

| Field | Value |
|---|---|
| Student full name | The member's community name, falling back to their WordPress display name |
| Student first name / last name | The separate parts of their name |
| Course title | The course they completed |
| Instructor name | The course instructor |
| Lesson count | How many lessons the course has |
| Completion date | When they finished the course |
| Issue date | When the certificate was issued |
| Expiry date | When it stops being valid, if you set an expiry |
| Credential ID | The unique ID, for example `FC-QJPV-NEBZ-V4XV` |
| Serial number | A running number for your own records |
| Site name | Your community name |

A student's name is never their login name.

![The Dynamic field menu open in the editor](/images/course-and-learning/course-certificates/certificate-dynamic-fields.webp)

### Style text and stop long names overflowing

Select any text element to open its settings.

![The text settings panel](/images/course-and-learning/course-certificates/certificate-editor-text-settings.webp)

You get font, size, colour, weight, case, line height, letter spacing, alignment, and italics, plus exact X, Y, width, height, and rotation in points.

**Shrink to fit** is the setting worth knowing. Turn it on for the student name, and a long name gets smaller instead of spilling out of its box.

Use the **Preview** dropdown at the top to check your work. **Very long name** loads a deliberately extreme name and course title so you can see the worst case before you publish.

![The editor previewing a very long student name](/images/course-and-learning/course-certificates/certificate-preview-long-name.webp)

### Publish the template

Your edits save as you work, but a course can only use a **published** template.

Click **Publish** and confirm. This writes a new version, and new certificates use it.

::: info Edits never change certificates already issued
Each certificate keeps the template version and the student details from the day it was issued. If you redesign the template later, certificates already in students' hands stay exactly as they were. The template card shows **Unpublished changes** when your draft is ahead of the published version.
:::

![The Publish this template confirmation](/images/course-and-learning/course-certificates/certificate-publish-template.webp)

## What the Student Sees

### On finishing the course

The moment a student completes the final lesson, their certificate appears.

They can download it right there, as **PNG**, **PDF**, or through **Print / Save as PDF**.

![The Congratulations dialog over the lesson page](/images/course-and-learning/course-certificates/student-congratulations-dialog.webp)

### On their profile

Every certificate is kept on a **Certificates** tab on the member's profile.

Each card has a **Private / Public** toggle. Private is the quiet default for the profile: others only see the certificates the member has made public.

![The Certificates tab on a member profile](/images/course-and-learning/course-certificates/student-profile-certificates.webp)

### Downloading and sharing

**View and share** opens the certificate full size.

* **Download PNG**: A high-resolution image, 3508 × 2479 pixels for A4, which is 300 DPI print quality.
* **Download PDF**: A a single-page PDF.
* **Download Open Badge**: The certificate as an Open Badges 3.0 credential. See [Open Badges](#open-badges).
* **Print / Save as PDF**: Opens the browser's print dialog. This route produces real, selectable text in the PDF, which matters for accessibility and for scripts such as Arabic, Bengali, and Hindi.
* **Add to LinkedIn**: Opens LinkedIn's "Add license or certification" form.
* **Copy link** and **Copy credential ID**, for pasting into any field LinkedIn leaves empty.

Downloads are named after the credential ID, for example `certificate-FC-EPTJ-CKQJ-BCVP.pdf`.

![The certificate dialog, with download buttons, LinkedIn and copy buttons, and a link to the public verification page](/images/course-and-learning/course-certificates/student-certificate-share-dialog.webp)

## The Public Verification Page

Every certificate has its own page at `/portal/certificates/<credential-id>`, and the QR code on the certificate points at it. Anyone can open it — no login needed.

![The public verification page for a valid certificate, showing a green valid banner, the certificate details, and the certificate itself](/images/course-and-learning/course-certificates/verification-page-valid.webp)

The page shows who it was awarded to, the course, the issuer, the issue and expiry dates, the credential ID with a copy button, and the certificate itself.

**The status is read from your database, not from the file.** Someone can edit a downloaded PDF, but they cannot change what this page says.

### The four statuses

| Status | What it means |
|---|---|
| **Valid** | In force |
| **Expired** | Past its expiry date. It stays on record and stays verifiable |
| **Suspended** | Withdrawn for now. An admin can reinstate it |
| **Revoked** | Withdrawn for good. This cannot be undone |

![The verification page for a revoked certificate, showing a red banner and no download buttons](/images/course-and-learning/course-certificates/verification-page-revoked.webp)

A suspended or revoked certificate still shows its details, but the certificate image and the download buttons are gone.

At the bottom of every verification page is a **Verify a certificate** box, where anyone can type a credential ID and check it directly.

## Open Badges

Every certificate is also issued as an **Open Badges 3.0** credential. This is an open standard that lets a student keep a verifiable badge in a badge wallet or on a platform such as Credly.

A student opens their certificate and clicks **Download Open Badge**.

![The certificate dialog with the Download Open Badge button highlighted next to Download PNG, Download PDF and Print / Save as PDF](/images/course-and-learning/course-certificates/student-certificate-open-badge.webp)

The file is the certificate image with a signed credential inside it. They upload that file to a badge wallet or to Credly. If you later suspend or revoke the certificate, the badge shows that change too.

## Issue a Certificate Manually

Not every achievement happens inside a course. You can issue a certificate by hand to a workshop attendee, a speaker or a volunteer. They do not need an account.

Go to **Portal Settings → Certificates → Manual Certificates**. The tab lists every certificate issued by hand. Search it by name, email, title or credential ID, and filter by template or status.

![The Manual Certificates tab, listing two certificates with the person, certificate title, template, credential ID, issue date and status](/images/course-and-learning/course-certificates/manual-certificates-list.webp)

Click **Issue certificate** and fill in the dialog. A live preview of the certificate updates on the right as you type.

![The Issue a certificate dialog, with person, account, template, certificate details, options and verification page settings, next to a live preview](/images/course-and-learning/course-certificates/manual-certificate-dialog.webp)

* **Person** — their **Full name** and **Email**.
* **Account** — choose one:
  * **No account.** The person gets a link to the verification page, where they can view, download and share the certificate.
  * **Link to the existing account.** Shows the certificate on that member's profile. This is available when the email matches an existing member.
  * **Create an account.** Creates a member for them. This is available when the email does not match an existing member. You can email them a link to set their password.
* **Template** — pick any published template. If none is listed, you see **Publish a certificate template first.**
* **Course (optional)** — attach the certificate to a course, or leave it on **No course**.
* **Certificate title** and **Course title** — the text that fills the template's dynamic fields. The fields you see depend on the template you chose.
* **Issue date** and **Expiry date (optional)** — leave the expiry on **Never expires** if the certificate should not expire.
* **Verification page** — choose **Public: shows the certificate**, or **Private: only confirms it is valid**.
* **Email the certificate to the person** — on by default. Turn it off if you want to share the link yourself.

Click **Issue certificate** to finish.

::: tip No account? Share the holder link
A person without an account opens their certificate through a **holder link**. Click **Copy holder link** on the certificate's row and send it only to that person. The link opens their private view and the Open Badge download.
:::

### Manage manual certificates

The **…** menu on each row has these actions.

![The row menu for a manual certificate, with Edit, View, Copy verification link, Copy holder link, Suspend and Revoke](/images/course-and-learning/course-certificates/manual-certificate-actions.webp)

* **Edit** — change the details. Every change is recorded.
* **View** — open the certificate.
* **Copy verification link** and **Copy holder link.**
* **Suspend** and **Revoke** — the same actions as for course certificates. A suspended certificate shows **Reinstate** instead of **Suspend**.

## Manage Issued Certificates

Go to **Portal Settings → Certificates → Course Certificates**.

![The Issued Certificates list, with search, course and status filters, and a row for each student](/images/course-and-learning/course-certificates/issued-certificates-list.webp)

Search by name, email, or credential ID, and filter by course or status.

The **…** menu on each row holds the actions.

![The row action menu, offering Copy verification link, Reissue with current details, Suspend, and Revoke](/images/course-and-learning/course-certificates/issued-certificate-actions.webp)

* **Copy verification link** — the public URL for that certificate.
* **Reissue with current details** — refreshes the student's name and moves the certificate to the current template version. Use it after a member changes their name. The credential ID, serial number, and issue date all stay the same, so links and LinkedIn entries keep working.
* **Suspend** — withdraw it for now, with a reason. You can reinstate it later.
* **Revoke** — withdraw it for good, with a reason.

::: warning Revoking is final
A revoked certificate cannot be reinstated, and the student is not given a new one if they complete the course again. Use **Suspend** if you might change your mind.
:::

## Good to Know

* **A student only ever gets one certificate per course.** Completing a course again, or finishing a lesson you published after they completed it, never creates a duplicate, and the original issue date is kept.
* **Resetting progress or unenrolling does not withdraw a certificate.** It records something they did. Suspend or revoke it by hand if you need to.
* **Credential IDs are random**, in the form `FC-XXXX-XXXX-XXXX`. They cannot be guessed from each other, and the serial number is only printed on the certificate — it is never used to look one up.
* **Verification pages are not indexed by search engines** by default.
* **Nothing is generated on your server.** The certificate is drawn in the student's browser when they view it, so there is no PDF job slowing your site down.

## Related Articles

* [Creating Your First Course](/creating-your-first-course)
* [Structuring Lessons & Modules](/structuring-lessons-&-modules)
* [Using the Quiz Module](/using-the-quiz-module)
* [Course Management](/course-management)
