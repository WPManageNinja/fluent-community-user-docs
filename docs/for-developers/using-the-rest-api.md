---
title: Using The Rest Api
description: A guide for developers on how to use the FluentCommunity REST API to programmatically access community data like posts, members, and spaces.
---

# Using The Rest Api

FluentCommunity includes a comprehensive **REST API** that allows developers to interact with your community's data programmatically. You can use it to create, read, update, and delete information such as spaces, members, and posts using standard HTTP requests.

> **Use Case:** You want to build a custom mobile app for your community. You can use the REST API to fetch all the posts from your community's feed and display them in your app's native interface. Another common use is building "headless" integrations, where your community runs on WordPress but the front-end is a separate application built with a framework like React or Vue.

## Authentication

To use the API, you must first authenticate your requests to prove that you have permission to access the data. The API uses a standard API key system.

You can generate and manage your API keys from the WordPress dashboard.

1.  Navigate to **FluentCommunity → Settings → API & Webhooks**.
2.  In the **REST API Keys** section, you can generate a new set of keys.
3.  Your API request must include these keys in the request headers for authentication.

[Screenshot: The API Keys section in the FluentCommunity settings, showing where to generate new keys.]

> **⚠️ Important:**
> Your API keys are like a password for your community's data. Keep them secure and do not expose them in any client-side code (like public JavaScript files). All API requests should be made from a secure server-side environment.

## Common API Endpoints

The REST API is organized around resources. Here are some of the primary endpoints you can interact with:

* `GET /wp-json/fluent-community/v1/spaces`
    * Retrieves a list of all public spaces.
* `GET /wp-json/fluent-community/v1/spaces/{id}/posts`
    * Retrieves all posts from a specific space.
* `POST /wp-json/fluent-community/v1/spaces/{id}/posts`
    * Creates a new post in a specific space.
* `GET /wp-json/fluent-community/v1/members`
    * Retrieves a list of community members.
* `GET /wp-json/fluent-community/v1/courses`
    * Retrieves a list of all available courses.

## Example Request

Here is a basic example of how you might fetch a list of spaces using a command-line tool like `cURL`:

```bash
curl --request GET \
  --url [https://yourdomain.com/wp-json/fluent-community/v1/spaces](https://yourdomain.com/wp-json/fluent-community/v1/spaces) \
  --header 'Authorization: Bearer your_api_secret_key'
```
