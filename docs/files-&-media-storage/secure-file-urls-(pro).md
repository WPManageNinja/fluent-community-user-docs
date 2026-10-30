---
title: Secure File URLs (Pro)
description: Learn how FluentCommunity Pro uses signed, temporary links for document downloads, and which files keep a permanent public link.
---

# Secure File URLs (Pro)

FluentCommunity Pro gives document downloads a signed, temporary link. The link stops working after a short time, so a copied link does not work for long.

> **Use Case:** You add a PDF e-book to a paid course lesson. An enrolled student downloads it. If the student copies the download link and sends it to a friend, the link expires after 15 minutes.

## What a Secure File URL Is

A Secure File URL is a download link that your storage provider signs. The signature proves that your site made the link. The link expires 15 minutes after FluentCommunity creates it.

## Which Files Get Secure File URLs

Secure File URLs apply only to the [document library](/the-file-&-document-library-(pro)):

* Documents in a Space
* Documents in a course lesson

All other uploads use a permanent public link:

* Images and videos in posts and comments
* Images in direct messages
* Profile photos, cover photos, and Space images

## How a Document Download Works

1. A member clicks a document.
2. FluentCommunity checks if the member has access to the Space or the course.
3. If the member has access, FluentCommunity creates a signed link and sends the member to the file.
4. If the member does not have access, FluentCommunity shows an error page.

The document link in your community does not expire. FluentCommunity checks access each time a member clicks it. Only the signed link to the stored file expires.

## Turning On Secure File URLs

There is no setting to turn on. FluentCommunity Pro uses Secure File URLs automatically when your media storage is Amazon S3 or Cloudflare R2.

To set up the storage, see [Connecting Amazon S3 (Pro)](/connecting-amazon-s3-(pro)) or [Connecting Cloudflare R2 (Pro)](/connecting-cloudflare-r2-(pro)).

## Protection by Storage Provider

The signed link controls who gets a download link. The storage provider controls if the stored file is also open to anyone who knows its address.

| Storage | Document download | Direct access to the stored document |
| --- | --- | --- |
| Amazon S3 | Signed link, valid for 15 minutes | Blocked. FluentCommunity uploads documents as private files. |
| Cloudflare R2 | Signed link, valid for 15 minutes | Possible. R2 does not support private files, and the bucket has a public URL. |
| BunnyCDN | Permanent public link | Possible. |
| Local server | Your site sends the file after the access check | Possible through the uploads folder. |

## Files with a Permanent Public Link

FluentCommunity gives every uploaded file a long, random name. Nobody can guess the name or get a list of the files. But anyone who has the link can open the file without logging in.

This also applies to images in private Spaces, paid Spaces, and posts that wait for moderation.

> **⚠️ Important:**
> If a file must stay private, do not attach it to a post, a comment, or a message. Upload it to the document library instead. For the best protection, use Amazon S3 as your media storage.
