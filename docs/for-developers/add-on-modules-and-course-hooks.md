---
title: Add-on Modules & Course Hooks
description: Build add-ons that share FluentCommunity's Vue, Element Plus and UI kit through an import map, and use the course completion and admin course hooks.
---

# Add-on Modules & Course Hooks

FluentCommunity lets your add-on reuse the plugin's own Vue, Element Plus and UI kit instead of bundling copies. It also provides hooks for course completion, the admin course menu and course settings tabs.

> **Use Case:** You are building an add-on that adds a page to Portal Settings. With the shared runtime you import `vue` and `element-plus` from FluentCommunity, so your bundle stays small and nothing breaks from two copies of Vue on one page.

::: info For developers
This page is for people who write PHP and JavaScript. If you only want to style your portal, see [Adding Custom CSS & JavaScript](/adding-custom-css).
:::

## The Shared Runtime

FluentCommunity prints a browser import map before any module script on the portal and on the admin Portal Settings pages. It lets your add-on import these three packages by name:

| Import | Provides |
|---|---|
| `@fluentcommunity/vue` | FluentCommunity's copy of Vue |
| `@fluentcommunity/element-plus` | FluentCommunity's copy of Element Plus |
| `@fluentcommunity/ui` | FluentCommunity's UI kit |

Mark these three as external in your bundler so your build leaves the import statements as they are. A second copy of Vue or Element Plus on the same page breaks components, so always import from the names above.

```js
import { ref } from '@fluentcommunity/vue';
import { ElButton } from '@fluentcommunity/element-plus';
```

### Load Your Module Script

Register your script with the `fluent_community/module_scripts` filter. FluentCommunity places it after its `start.js` and before the main app, so your add-on can register routes before the app reads them.

```php
add_filter('fluent_community/module_scripts', function ($scripts, $runtime) {
    // $runtime is 'portal' on the community pages and 'admin' on Portal Settings.
    $scripts['my-addon'] = [
        'url' => plugins_url('build/my-addon.js', __FILE__), // no query string
    ];
    return $scripts;
}, 10, 2);
```

Do not add a query string to the URL. FluentCommunity appends its own `?ver=` value to every script.

### Add Your Own Imports

Use the `fluent_community/module_import_map` filter to add more bare names to the map.

```php
add_filter('fluent_community/module_import_map', function ($imports, $runtime) {
    $imports['@my-addon/shared'] = plugins_url('build/shared.js', __FILE__);
    return $imports;
}, 10, 2);
```

## Course Completion Hooks

Run your code when a student finishes a lesson, a module or a whole course. These are PHP actions.

| Action | When it runs | Arguments |
|---|---|---|
| `fluent_community/course/lesson_completed` | A student marks a lesson complete. | `$lesson`, `$userId` |
| `fluent_community/course/lesson_marked_incomplete` | A student unmarks a completed lesson. | `$lesson`, `$userId` |
| `fluent_community/course/topic_completed` | A student finishes every published lesson in a module. | `$topic`, `$userId`, `$lesson` |
| `fluent_community/course/completed` | A student finishes the whole course. | `$course`, `$userId` |

```php
add_action('fluent_community/course/completed', function ($course, $userId) {
    // For example, tag the user in your CRM or send a custom message.
}, 10, 2);
```

In the browser, a JavaScript action also fires when a lesson completes the course:

```js
window.FluentCommunityUtil.hooks.addAction('fluent_com_course_completed', 'my-addon', (course, response) => {
    // Runs on the lesson page right after the course is completed.
});
```

## Admin Course Menu Items and Settings Tabs

Two JavaScript filters let an add-on extend the course admin screens. Register them from your module script.

| Filter | What it changes | Arguments |
|---|---|---|
| `fluent_com_admin_course_menu_items` | The **Course Management** menu in Portal Settings. | `items` (an empty array), `appVars` |
| `fluent_com_course_settings_tabs` | The tabs inside a course's settings. | `tabs`, `course` |

```js
window.FluentCommunityUtil.hooks.addFilter('fluent_com_course_settings_tabs', 'my-addon', (tabs, course) => {
    tabs.push({
        name: 'my_addon_tab',
        title: 'My Add-on',
        route: { name: 'my_addon_course_tab', params: { course_id: course.id } },
    });
    return tabs;
});
```

Register the route itself with the `fluent_com_portal_admin_routes` filter, which receives the admin route list and returns it.


