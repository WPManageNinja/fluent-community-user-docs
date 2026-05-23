---
title: Hooks & Filters Reference
description: A guide for developers on using WordPress action and filter hooks in FluentCommunity to customize its functionality and integrate with other plugins.
---

# Hooks & Filters Reference

For developers who want to extend or modify FluentCommunity's core behavior, the plugin includes a wide range of WordPress **action and filter hooks**. These hooks act as entry points, allowing you to run your own custom code at specific moments during the plugin's execution.

> **Use Case:** You want to send a custom push notification to a mobile app every time a user receives a new badge. You can use the `fluentcommunity_badge_assigned` action hook to trigger a custom PHP function that sends the notification whenever that event occurs.

## How Hooks Work

FluentCommunity follows the standard WordPress hook system.

* **Actions (`do_action`)**: These are points in the code where FluentCommunity has finished a specific task. You can "hook" into this action to execute your own code, like sending an email or logging data.
* **Filters (`apply_filters`)**: These are points in the code where FluentCommunity is processing a piece of data. You can "hook" into this filter to modify that data before it is used. For example, you could change the text of a button or add a new item to a list.

## How to Use Hooks

To use a hook, you will add a corresponding `add_action()` or `add_filter()` function to your theme's `functions.php` file or a custom plugin.

### Example: Using an Action Hook

Let's say you want to run a function every time a user enrolls in a course. You could use the `fluentcommunity_course_enrolled` action.

```php
function my_custom_enrollment_function( $enrollment_data ) {
    // Get the user ID and course ID from the data array
    $user_id = $enrollment_data['user_id'];
    $course_id = $enrollment_data['course_id'];

    // Add your custom code here
    // For example, log this action to an external service
    log_to_my_service( "User {$user_id} enrolled in course {$course_id}." );
}

add_action( 'fluentcommunity_course_enrolled', 'my_custom_enrollment_function', 10, 1 );
```
