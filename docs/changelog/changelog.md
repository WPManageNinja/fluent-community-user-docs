---
title: Changelog
description: All notable changes to the FluentCommunity WordPress plugin, newest first — new features, improvements, and fixes for each release.
---

# Changelog

All notable changes to **FluentCommunity** are documented here, newest first.

## FluentCommunity v2.7.0

*Released on Jul 8, 2026*

::: code-group

```markdown [✨ Newly Added]
• Space Media Gallery
• Sidebar Collapse Toggle with Persistence
• Invite Members by Email and Name
• Auto-Flag User Threshold Moderation
• Per-User Moderation Flag in Admin Actions
• FluentPlayer Block as Lesson Feature Media
• Required Video Completion to Complete Lesson
• Auto-Complete Lesson When the Feature Video Ends
• Profile Headline Field on Members Listing
• Upload Progress for Inline Images
• Missing Translation Strings
```

```markdown [🚀 Improvements]
• Email CSS Inlining for Better Rendering
• Feed Cache Refresh and Memory Cap
• Link Preview Detection and Pre-Fetch Hook
• Notification and CRM Tag Mapping List UI
• Site Time Format Across Schedule and Time UI
• Auto-Scroll After Settings and Profile Updates
• Comment and Reaction Cleanup on Feed Delete
• Custom Lockscreen Background to Match Page
```

```markdown [🔒 Security]
• Hardened Space, Feed, and Comment Access Authorization
• Gated Portal Access Before Profile Provisioning
```

```markdown [🐞 Bug fixes]
• Sidebar First-Paint Layout Shifts
• Document Upload Crash on Invalid File Type
• External Redirect URL for Portal Access Restriction
• Feed and Cross-Space Scroll Restore on Back Navigation
• All Spaces Infinite Loading Without Access
• Private Space Description Visibility
• Notification Settings Space Scope on Other Profiles
• Notification Auto-Marked Read on Feed Visit
• Clearing a Single-Select Custom Profile Field
• Profile First Name Saved to Last Name
• Leaderboard Permission Message for Unauthorized Users
• Feed Video Fallback When FluentPlayer Stalls
• Lesson Video Block Shifting Left
• Lesson Body Cannot Be Cleared in Editor
• New Section and Lesson Priority Stuck at Zero
• Course Creator Not Notified on Lesson Comments
• Sequential Lessons Not Unlocking in Order
• Scheduled Documents Showing in Documents List
• Scheduled Post with Documents Publishing Immediately
• Multibyte Title Truncation in Posts
• Checklist Bullets Missing in Custom Lockscreen
• Show More Always Expanding Inline
• Follow/Unfollow Toast Ignoring API Message
• RTL Customizer Overlap and Reversed Lightbox Arrows
• Search Input Background in Search Dialog
• Divider Not Using Theme Color
• User Name Included in Access URL
```

:::

## FluentCommunity v2.6.1

*Released on Jun 11, 2026*

::: code-group

```markdown [✨ Newly Added]
• Community-Scoped Filter for Signup Email Verification
```

```markdown [🐞 Bug fixes]
• Mobile Horizontal Overflow on Feed
• Enroll Button Shown for Non-Enrollable Courses
```

:::

## FluentCommunity v2.6.0

*Released on Jun 10, 2026*

::: code-group

```markdown [✨ Newly Added]
• Course Welcome Banners
• First Comment Approval Moderation Option
• Page Indicator in Image Carousel
• Duplicate Actions for Lessons and Quizzes
• Server-Side Thumbnails for Embedded Videos in Feeds
• Glow Highlight for New Posts and Comments
• German (de_DE) Translation Files (pro)
```

```markdown [🚀 Improvements]
• WordPress 7 Compatibility
• Course Quiz Setup Editor UX
• Comment Reply Thread Stay-Open Behavior
• Theme-Aware Status Colors on Course Card Buttons
• Paywall-Aware Default Lock Screen Description
• Clickable Full Layout Dropdown Row in Feeds View
• Validation for Space Topic and Title Fields
• Translation Coverage Across Portal UI Strings
```

```markdown [🐞 Bug fixes]
• Poll Vote Misattribution on Option Reorder
• Poll Options Deleted When Input Cleared
• Verification Badge Removed on Space Join via Invitation Link
• Course Creator Bypass on Private Space Approval
• Comment Notification Content Leak Across Subscribers
• Space Membership Data Bleed in FluentCRM Profile View
• Lesson Video Missing Until Hard Refresh
• Lesson Media Preview with FluentPlayer
• iPad Safari Full-Screen Lesson Trap
• Block Editor Not Rendering for Contributors
• Bunny Stream Embed Layout in Composer and Feed Views
• Stale Recent Activities Sidebar Widget
• Notification Popover Scroll and Overflow
• Scroll-to-Top Button Positioning Issues
• Comment Scroll Behavior Inside Feed Modal
• Section URL Placeholder Breaks in Hyperlinks
• Undefined Variable Warning in Digest Email
```

:::

## FluentCommunity v2.5.0

*Released on May 20, 2026*

::: code-group

```markdown [✨ Newly Added]
• Sequential Lesson Lock for Courses (pro)
• Courses Tab on User Profile
• Bulk Import Welcome Email Opt-In
• Scroll To Top Button in Feeds
• In-app Notification for Comment Reaction
• Hide Mobile Header and Footer on Scroll Option
• Unread Notifications Tab and Recent Notifications Popover
• Copy Code Button for Code Blocks in Posts and Comments
• Profile and Cover Photo Removal Options
• Post Scheduling by Space Admins
• Email Invite From Add Members Form
• See More/Less Toggle for Long Comments
• Duplicate Action for Custom Profile Fields
• Theme Color Support in Email Templates
• Filter Hook for Default Post Space Selection
```

```markdown [🚀 Improvements]
• Admin Manage Courses Page
• Settings Drawer with Dirty-State Save Confirmation
• Confirm Modal for Space Image Remove Actions
• Error Page CSS Customization Hook
• Pending and Blocked Members Tabs
• Character Limit Error Messages for Posts and Comments
• Slug Generation for Non-Latin Titles via ICU Transliteration
• Enrollment Cache and Course Thread Context Performance
```

```markdown [🐞 Bug fixes]
• Hide User Existence in Login Error
• Search Modal Context, Persistence, and Clear Button Behavior
• Sticky Pin Persistence Across Navigation and Layouts
• Edit Post Mobile Responsiveness
• HTML Entities in Course/Space Member Lists
• Missing Reaction Avatars on Bookmarks Page
• Drawer Width in Custom Profile Fields
• Status Action Buttons Race Condition
• Invitation Link Lands New Users on Login Instead of Register
• Comment Reaction List Not Refreshing After React/Unreact
• Avatar Upload Accessibility for Touch and Keyboard Users
• iOS Safari Forced Muted When Autoplay Is Disabled in FluentPlayer
```

:::

## FluentCommunity v2.4.01

*Released on May 01, 2026*

::: code-group

```markdown [🐞 Bug fixes]
• Issue with Custom CSS Sanitization
• Issue with FluentPlayer Video Upload
• Checkbox Checkmark Not Centered Inside the Box
• Icon Selector Hidden for System Menu Items in Menu Group Settings
```

:::

## FluentCommunity v2.4.0

*Released on Apr 30, 2026*

::: code-group

```markdown [✨ Newly Added]
• Bulk Add Members and Students from Multiple Sources
• Default-Collapse Sidebar Groups Option in Settings
• URL Autolink Support in Post Editor
• Create New Space via Slide-Out Drawer
• Fluent Player Share Links in Community Media
• Confirmation Modal Before Removing Post Preview Image
• Filter Hooks for Duplicate Post and Comment Check
```

```markdown [🚀 Improvements]
• Active Sidebar Group Auto-Expands on Navigation
• UI and UX with more Smoother Page Transitions
```

```markdown [🐞 Bug fixes]
• Hardened Webhook Key Generation and Rate Limiting
• Improved CSS and Input Sanitization Checks
• Approve Post Fails with Invalid Status Value Error
• Optional Custom Profile Field Values Not Resetting on Save
• Multiselect Custom Profile Field Values Wiped on Update
• Space Admin Options Disappear on Return Navigation
• Notification Links Not Navigating to Specific Comment
• Mobile Footer Not Visible on Block-Based Themes
• About Tab Inaccessible on Mobile for Non-Members
• Profile Feed Not Showing New Post Immediately
• Signup Buffering with FluentAuth
• RTL Profile Alignment and Course Lesson Padding
```

:::

## FluentCommunity v2.3.0

*Released on Mar 18, 2026*

::: code-group

```markdown [✨ Newly Added]
• Custom Profile Fields
• CSV Export for Course Members and Quiz Result
• Search and Filter for Followers/Following
• Send Message Action in FluentCRM
• Missing Translation Strings
```

```markdown [🚀 Improvements]
• Content Reporting and Review
```

```markdown [🐞 Bug fixes]
• Issue with User Recent Activities
• Issue with Single Feed Delete
• Issue with Fluentform Activation
• Space HTML Description Render Issue
• Cart Checkout Not Working with Root Portal
• Link Visibility Issue with Public Space Access
• Different Space Layout View Issue
• Redirect Issue After Login/Registration
• Issue with BuddyBoss Follower Migration
• Excluded Course from Sitemap When Disabled
• Customizer Panel Not Working with Root Portal
• Lesson Content Verse Block's Text Contrast in Dark Mode
• Social Media Link Preview for Twitter
• Join Button on Spaces Card Redirects to Broken/Empty Page
• Restore Space View Preference when Navigating between Spaces
• Issue with FluentPlayer Disabling
• FluentPlayer Issue with Youtube Short Video
• Vimeo URLs with Query Params Unrecognized by FluentPlayer
```

:::

## FluentCommunity v2.2.07

*Released on Feb 20, 2026*

::: code-group

```markdown [🐞 Bug fixes]
• Issue with Notification System
• Fixed Duplicate Post issues for pinned posts
```

:::

## FluentCommunity v2.2.05

*Released on Feb 20, 2026*

::: code-group

```markdown [✨ Newly Added]
• Disable Feed/Space Layout Switching
```

```markdown [🐞 Bug fixes]
• Issue with Vote Casting
• Lesson Content Update Issue
• Child Comments Appearing as Parent Comments
• Minor UI Issue
```

:::

## FluentCommunity v2.2.01

*Released on Feb 19, 2026*

::: code-group

```markdown [🐞 Bug fixes]
• Issue Template Page Styling
• Issue with Mentioning Users in Comments
```

:::

## FluentCommunity v2.2.0

*Released on Feb 19, 2026*

::: code-group

```markdown [✨ Newly Added]
• Card Layout View option
• Comment Pinning feature
• Profile Page Privacy Settings
• Real-time Chat functionality
• Video Upload with Fluent Player
• Ability to add users to Spaces/Courses from profile
• Chat Widget in Portal
• Inline Image support in Feed
• Media upload rate limiting
• Mentioned User Profile popover
• Default comment sorting option
• Tooltip for badge titles
• Editor Draft Guard to prevent accidental content loss
• Lesson Editor for improved usability
```

```markdown [🚀 Improvements]
• Portal performance for faster loading
• Course comments with filtering capability
• Feed commenter app notifications
• Various UI and UX enhancements across the portal
• Bookmark listing with filtering, layout view, and search
```

```markdown [🐞 Bug fixes]
• Cloudflare compatibility issue in specific regions
• Feed document deletion issue
• Mentions not working in course comments
• Unable to copy course comment link
• oEmbed issue with external providers
• User name not updating properly
• XML sitemap showing 404 when portal is set as root
• Feed icon not updating in Side Menu
• Prevented portal rendering on unrelated root requests
```

:::

## FluentCommunity v2.1.02

*Released on Dec 04, 2025*

::: code-group

```markdown [✨ Newly Added]
• Join Space Option for Public Posts
• Flagged Post Edit Option
```

```markdown [🚀 Improvements]
• Space Settings Navbar UI
```

```markdown [🐞 Bug fixes]
• Shared Document Delete Issue
• Migration Settings Access Issue
• Topic Post Filtering Issue
• Fluent-Messaging Not Installing
• UI Breaking for Multiple Image
• Script Not Loading in Block Theme
• Showing Deactivated Followers/Following
• Comment Reply Notification Not Sending
• FluentForms Integration Notification Issue
• Strikethrough Text Not Working in Post/Comment
• RTL Alignment Issue in Course Lesson List Options
```

:::

## FluentCommunity v2.1.0

*Released on Nov 17, 2025*

::: code-group

```markdown [✨ Newly Added]
• App Notification When User Follow
• Gutenberg Block Support in Course and Space Lockscreen
• Breakdance Theme Support in Theme Compatibility
• Auto Scroll Pagination in Bookmark Listing
• Student Last Seen in Course Student List
• Lesson Slug Edit Option
• Spaces & Courses Counts in Listings
• Hook for Default Profile Tab
• Mentioned Users in Create Comment Hook
```

```markdown [🚀 Improvements]
• Email Notifications
• Month Display in Mobile
• From Email Address Select
• Feed UI in RTL Mode
• UI/UX and Responsiveness
```

```markdown [🐞 Bug fixes]
• Multisite Compatibility in Manager and Course Student
• Link Update REST Policy Issue with improved security
• Default Order Ignored When User Can Change Order
• Document Delete Issue on Copy Course Section
• Max Topic Limit Per Space Not Working
• Edit Post Not Working from Profile Posts
• Post Topics Unable to Remove in Edit Post
• Recent Activity Not Updating on Post Move
• Topic Assigning Issue from Course Settings
• Issue on Course Description links
• Scheduled Course Delete Issue
• Issue with Feed Sort By
• Space Link Privacy Issue
• Deleted Comment Activity Not Removing
• Notification Preference Showing for Pending Users
• Allow Join Option Showing for Public Space
• Unlink URL Not Converting to Plain Text in Feed
```

:::

## FluentCommunity v2.0.0

*Released on Oct 29, 2025*

::: code-group

```markdown [✨ Newly Added]
• Introducing Native Monetization Features for courses and Spaces with FluentCart
• Support Multiple Pricing Plans for Courses and Spaces
• Copy Course Sections between courses
• Duplicate Course with all settings
• Badge Remove Action for FluentCRM
• Section Completed Trigger for FluentCRM
• Hashtags now works on all languages
• Underline Framework upgrade for future feature updates
```

```markdown [🚀 Improvements]
• Image Gallery Improvements
• Styling Improvements for Feeds and Courses
• BuddyBoss Migration Improvements
• Improvements on Bookmarks
```

```markdown [🐞 Bug fixes]
• Fixed Join Date Timezone issue
• Other Bug fixes and Improvements
```

:::

## FluentCommunity v1.8.1

*Released on Oct 10, 2025*

::: code-group

```markdown [🐞 Bug fixes]
• Video Player Issue Fixed
```

:::

## FluentCommunity v1.8.3

*Released on Oct 07, 2025*

::: code-group

```markdown [✨ Newly Added]
• Mentioned Users Hook
```

```markdown [🚀 Improvements]
• Post Alignment in RTL Mode
• Support All Languages in Profanity Filter
```

```markdown [🐞 Bug fixes]
• Mention Search Working Only by First Name
• Group Visibility Issue for Public Spaces
• Document Attachments not Saving in Post
• Media Disabling Issue on Post Update
• Post Titles Not Migrating from BuddyBoss
• Space Not Mapping in BuddyBoss Migration
```

:::

## FluentCommunity v1.8.2

*Released on Oct 02, 2025*

::: code-group

```markdown [✨ Newly Added]
• Added Remove from course or spaces from FluentCRM Profile
```

```markdown [🚀 Improvements]
• Improved Follow/Unfollow Users
```

```markdown [🐞 Bug fixes]
• Course Enrollment Actions Hooks Fixed
```

:::

## FluentCommunity v1.8.0

*Released on Oct 01, 2025*

::: code-group

```markdown [✨ Newly Added]
• User Follow/Block Module
• Course Email Notification
• Thumbnail Image for Quiz Lesson
• Image Upload Option with Poll Post
• Default Feed Layout Styling Option
• Default Logo and Footer in Invitation Email
• Media File Migration Support in BPMigration
• Max Media Per Post Customization Settings
• Default Course Section Collapse Hook
```

```markdown [🚀 Improvements]
• Feed Queries for Better Performance
• Handled Multiple Ajax Request
• Excluded Site Admins from Post Limit Check
• UI-UX and Responsiveness
```

```markdown [🐞 Bug fixes]
• Issue with Comment Permission
• Digest Email Notification Avatar Issue
• Course Slug Issue with Other Language
• iOS Home-screen Shortcut Icon
• Styling Issues with Email Notification
• Deactivated Members Filter Not Working
• Space Group Displaying for Logged-out Users
• Topic-based Courses Filtering from Sidebar Menu
• Add Topics for Orphaned (Not Assigned to Any Groups) Spaces
• Document Search Functionality by File’s Title
• Incoming Webhook Password Field Not Saving
• Section and Course Order Mismatch Issue
• Images Not Removing from Edit Post Modal
• Space Join Request Email Notification not Sending to Multiple Moderators
• Issue when Mentioning Multiple Users with Similar Usernames
• Send Notification to All Not Working in Document Feed
• Space Menu Links not Saving Visibility
• Lesson View Sidebar Not Scrolling
• Child Feed Overlapping with Header
• UI Issue with RTL Mode
```

:::

## FluentCommunity v1.7.72

*Released on July 08, 2025*

::: code-group

```markdown [✨ Newly Added]
• Imroved Course Index Searches (includes Course title and description)
• Translation Strings Updated
```

```markdown [🚀 Improvements]
• Course Schema Added for Public and Private Courses
• Improved Responsiveness
• Better handling Deactivated/Blocked Profiles
```

:::

## FluentCommunity v1.7.71

*Released on July 07, 2025*

::: code-group

```markdown [✨ Newly Added]
• Lesson Completed Trigger for FluentCRM
• Self Deactivation Option for Users
• Added Public Only Sidebar Link Option
• Added Dynamic URL for users profile
```

```markdown [🚀 Improvements]
• Improved Search for Course Indexes (Includes Categories for search)
• Improved BuddyBoss Migration for large communities
• Improved Email Notification Designs
• Improved Mobile Responsiveness
• Security improvement for inline CSS contents
```

:::

## FluentCommunity v1.7.6

*Released on June 19, 2025*

::: code-group

```markdown [✨ Newly Added]
• Option to Update Course Instructor
• Option to Hide Students from Instructor View
```

```markdown [🐞 Bug fixes]
• Lesson Duration Display
• Profile Badge Styling Issue
• Custom Link Icon Not Saving
• Migration Request Time Limit Issue
```

:::

## FluentCommunity v1.7.5

*Released on Jun 18, 2025*

::: code-group

```markdown [✨ Newly Added]
• Custom Link with Access Control
• Modern Course Overview Layout
• Space/Course Meta Settings API
• Data Sync Privacy Settings
• Free Lesson Preview
• Course Overview Page
• Access Message HTML for Locked Lessons
```

```markdown [🐞 Bug fixes]
• Course Completion Trigger
• Mailing Settings Not Applying
• Invitation Issue with FluentAuth
• Last Activity & Social Links Display
• Course Creator Access Permission Issues
```

:::

## FluentCommunity v1.7.1

*Released on June 05, 2025*

::: code-group

```markdown [🚀 Improvements]
• Improved Translation Strings
• Improvement on the WP Page Layouts
```

```markdown [🐞 Bug fixes]
• Fixed Full Screen Mode Issue in Course Lessons
• Fixed Styling issues in the auth pages
• Fixed Infinite Scroll Issues
```

:::

## FluentCommunity v1.7.0

*Released on June 04, 2025*

::: code-group

```markdown [✨ Newly Added]
• Introducing the Quiz Module in courses
• Course Completed Trigger with FluentCRM
• DateTime Smartcode on Post Content
• Course Lessons Collapse/Open for all Sections
• Missing Translations
• Topic Selection Option in Space Creation
```

```markdown [🚀 Improvements]
• Improvement on the Auth Module
• Improvements on Documents & File Uploading
• Content Moderation Improvements when updating content
• Improved Course and Lesson Delete Cleanup
```

```markdown [🐞 Bug fixes]
• S3 Cleanup Issue on File Deletion
• Unlisted Post Not Able to Publish
• Course Creator Permission
```

:::

## FluentCommunity v1.6.3

*Released on May 13, 2025*

::: code-group

```markdown [🐞 Bug fixes]
• timezone issue fixed on the post scheduling
• post edit issue
```

:::

## FluentCommunity v1.6.0

*Released on May 13, 2025*

::: code-group

```markdown [✨ Newly Added]
• Built-in SEO & Structured Data
• Added Post Preview Before Publishing
• Added Post Scheduling Feature
• Added Sorting Option for Posts
```

```markdown [🚀 Improvements]
• Improve UI UX
```

```markdown [🐞 Bug fixes]
• Fixed Digest Email Issue
• Fixed Issue with User Deletion
```

:::

## FluentCommunity v1.5.0

*Released on April 29, 2025*

::: code-group

```markdown [✨ Newly Added]
• Theme Compatibility feature
• Added custom redirect URL for public user
```

```markdown [🚀 Improvements]
• Improved UI/UX
```

```markdown [🐞 Bug fixes]
• Fixed mentioning user in comment but not getting email issue
• Fixed issue with deleted user
• Fixed community admin permissions
• Fixed selected space topics not displaying issue
• Fixed modal content invisible issue
```

:::

## FluentCommunity v1.3.1

*Released on April 09, 2025*

::: code-group

```markdown [✨ Newly Added]
• Gutenberg Block in Course Lesson Editor
• Delete Current Data from BuddyBoss Migration
• Move Lessons Between Sections
• One-to-One Messaging Settings
• Email Notification Settings for Messaging
• User Blocking Functionality for Messaging
• Poll Ended Date & Time
• Refresh Feed Option
• New Tab for Terms and Conditions Link
• Ungrouped Spaces in Space Groups
• Added 100% Public Course!
• Added Hook in Feeds Query
• Added Missing Translations
```

```markdown [🚀 Improvements]
• Improved UI-UX
```

```markdown [🐞 Bug fixes]
• Updated Framework library to fix data unserialization issue (props to patchstack)
• Added LightSpeed Caching issues
• Fixed Document Lists
• Fixed Issue with Privacy Url
• Fixed Moderation Email Not Sending Issue
• Fixed Course Not Deleting From Space Groups
• Fixed Notification for Mentioned User in Comment
• Fixed BuddyBoss Avatar and Cover Mismatch Issue
```

:::

## FluentCommunity v1.2.15

*Released on Mar 18, 2025*

::: code-group

```markdown [✨ Newly Added]
• Added Add Or Remove Verification Action for FluentCRM Integration (pro)
• Added Custom CSS and Javascript Snippet Options (pro)
• Added Custom Signup URL option for Auth Module
```

```markdown [🚀 Improvements]
• Improved BuddyBoss / BuddyPress migration for images
```

```markdown [🐞 Bug fixes]
• Fixed comment notification issues
• Fixed object caching for moderator settings
```

:::

## FluentCommunity v1.2.11

*Released on Mar 10, 2025*

::: code-group

```markdown [✨ Newly Added]
• BuddyBoss & BuddyPress Migration Support for Media
• Accessibility support for the top menu bar
```

```markdown [🚀 Improvements]
• Improved Moderation Module and Added new features
• Improved Database Queries for Feeds
```

:::

## FluentCommunity v1.2.0

*Released on Mar 06, 2025*

::: code-group

```markdown [✨ Newly Added]
• Introduced Content Moderation Feature
• Integrated BunnyCDN
• Added Incoming Webhook
• Added Social Links Customizations!
• Added Search and Sort Options in Space and Course List
• Added Profile Section To FluentCRM
• Added Last Seen as Privacy Settings!
```

```markdown [🐞 Bug fixes]
• Resolved Image Rotation Issues!
• Fixed File Upload Bug
• Fixed Welcome Banner Style Issue
• Fixed Avatar Not Generating for Other Language
• Fixed User Badge Border Color Inconsistency
• Fixed Create Space Group Showing Existing Group Data
• Fixed Profile Dropdown Icon Style Issue
• Fixed User Document Download Issue
• Fixed Issue with Daily Digest Email
```

:::

## FluentCommunity v1.1.22

*Released on Feb 04, 2025*

::: code-group

```markdown [✨ Newly Added]
• Reporting and Analytics Overview
• Integration with Paymattic
• Allow Users to Leave/Join Group Chat
• Added Pagination for Space and Course Lists
• Added Options to Edit and Delete Space in Space Group Settings
• Duplicate Post Validation Limited to Current Space
```

```markdown [🚀 Improvements]
• Multiple Media Upload Support in Post Comment
```

```markdown [🐞 Bug fixes]
• Video Embed Issue with Custom HTML
• Resolved Space Remove from Group Issue
• Login Button Label Not Updating Issue
• Group Space Menu Visibility for Public
• Space Permission Handling Issue
• Flags Emoji Saving Issue
• Fixed Slug Not Updating Issue
```

:::

## FluentCommunity v1.1.21

*Released on Jan 21, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• mention html fixed
```

:::

## FluentCommunity v1.1.20

*Released on Jan 21, 2024*

::: code-group

```markdown [✨ Newly Added]
• Migration support for BuddyPress
• Migration support for BuddyBoss
• Added ability to change the space for a post
• Terms and Conditions field customization option
• Added exclude users from leaderboard
• Added option to remove users from selected lists
• Added multisite compatibility for users
• Added space permission control
• Added missing translation strings
```

```markdown [🚀 Improvements]
• Improved loading style
• Improve UI/UX
```

```markdown [🐞 Bug fixes]
• Resolved posting without space selection issue
• Fixed login/signup background style not rendering
• Fixed permalink issue in course comments
• Fixed media storage issue with Amazon S3 region
• Fixed course document permission issue
• Fixed profile status update issue in CRM action
• Addressed numeric emoji saving issue
• Resolved invalid media image error
```

:::

## FluentCommunity v1.1.17

*Released on Dec 17, 2024*

::: code-group

```markdown [✨ Newly Added]
• Post Sharing Card when sharing community post on the feed
• Added Missing Translations
• Added Soundcloud support for oEmbed
• Added Fallback slug generation for non-latin characters
```

```markdown [🐞 Bug fixes]
• Fixed @everyone tag issues
• Fixed Styling issue for color customizations
• Fixed Open Graph Image issue
```

:::

## FluentCommunity v1.1.15

*Released on Dec 16, 2024*

::: code-group

```markdown [✨ Newly Added]
• Secure Documents Feature for Spaces
• Secure Documents Feature for Course Lesson
• Added new member list/grid layout
• Invitation Links for Spaces
• Robust Access Management with FluentCRM tags
• Improved Auth Pages UI & UX & better integration with FluentAuth
• FluentCRM triggers for Course / Space left
• Contextual Smartcode for FluentCRM Automation
```

```markdown [🚀 Improvements]
• i18n Improvements
```

```markdown [🐞 Bug fixes]
• Course Editor Mobile UI Issues Fixed
• Fixed Permission Issues with Moderators / Course Creators
• Fixed Gravatar API Issues
• everyone tag issues
```

:::

## FluentCommunity v1.1.12

*Released on Dec 02, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added Option to disable Gravatar Profile Image
• You can now add Multiple Badges to a User
• Notification Type Icons added
• [FluentCRM Automation] - Add or Remove Badge on FluentCRM Automation Action
• [FluentCRM Bulk Actions] - Add Or Remove Badge on FluentCRM Bulk Actions
• Disable Comments on courses globally
• Course Progress Bar added to lesson view
• Add Option to Hide Students Count from Course Listings
• You can now create Space without any group
```

```markdown [🚀 Improvements]
• Improved UX for Post Popup
• Improved Slug Generation for non-latin characters
• Space & Group menu management improved
```

```markdown [🐞 Bug fixes]
• Bug Fixes and Improvements suggested by community users
```

:::

## FluentCommunity v1.1.11

*Released on Nov 27, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added Modal View for each post (Configurable)
• Courses now can be added without any Menu Group
• Space and Course Slug can be edited now
• Added Topics as a required field for Posts (Configurable)
• Added Option to edit user email from profile
```

```markdown [🚀 Improvements]
• Single Post view is now blazing fast
• Login and Signup Page Customization Improved
• Improved UI & UX
```

```markdown [🐞 Bug fixes]
• Post Slug issue fixed for non-latins characters
• Fixed course URL issue when using custom slug
```

:::

## FluentCommunity v1.1.10

*Released on Nov 20, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Login issue
```

:::

## FluentCommunity v1.1.10

*Released on Nov 20, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Login issue
```

:::

## FluentCommunity v1.1.0

*Released on Nov 20, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added Direct Integration with Fluent Forms
• Added Login and Signup Page Customization
• Added Remove From Space Option from user profile
• Added MySQL Lite Support
```

```markdown [🚀 Improvements]
• Improved FluentCRM Integration
• Styling & UX Improvements
```

:::

## FluentCommunity v1.0.99

*Released on Nov 19, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• User Registration Issue Fixed
```

:::

## FluentCommunity v1.0.98

*Released on Nov 18, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added Color Schema Customization
• Added more privacy Settings
```

```markdown [🚀 Improvements]
• Improved UI & UX
• Improved FluentCRM Integration
• Translation Improvement
```

:::

## FluentCommunity v1.0.97

*Released on Nov 14, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Portal Slug Issue on activation
```

:::

## FluentCommunity v1.0.96

*Released on Nov 14, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added Option to hide members count from spaces
• Comments sorting is now present
• Added option to use custom Login/Signup URL
```

```markdown [🚀 Improvements]
• Improved Data Cleanup for old logs
• Improved UI & UX on various Pages
• Improved Feeds Edit Form – Now you can edit topics and media as well
• Email Digest & Notification Emails improvement
• Improved Roles and Permissions
• Translation and Different String Labels Improvements
```

```markdown [🐞 Bug fixes]
• Fixed Topics Edit Issues
• Fixed Badge Delete issues
```

:::

## FluentCommunity v1.0.95

*Released on Nov 12, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added Community Privacy Settings. Now you can disable global profile listing and restrict profile listing on specific spaces
```

```markdown [🚀 Improvements]
• Tagging users is now improved
• Improved UI across the Community Feed Interface
```

```markdown [🐞 Bug fixes]
• Fixed various Styling issues
• Fixed various issues with the Course UI
```

:::

## FluentCommunity v1.0.94

*Released on Nov 08, 2024*

::: code-group

```markdown [🐞 Bug fixes]
• Fixed Post Delete DB issue
```

:::

## FluentCommunity v1.0.93

*Released on Nov 08, 2024*

::: code-group

```markdown [🚀 Improvements]
• UI Improvements
```

```markdown [🐞 Bug fixes]
• Fixed Topics Delete Issue
• Fixed Bulk Delete Issues on background
• Course Content issues fixed
```

:::

## FluentCommunity v1.0.92

*Released on Nov 07, 2024*

::: code-group

```markdown [✨ Newly Added]
• Added RTL Support
```

```markdown [🐞 Bug fixes]
• Fixed Styling issues
• Fixed FluentCRM Integration Issues
```

:::

## FluentCommunity v1.0.90

*Released on Nov 07, 2024*

::: code-group

```markdown [✨ Newly Added]
• Init the all in one community plugin
```

:::

## FluentCommunity v1.0.90

*Released on Nov 07, 2024*

::: code-group

```markdown [✨ Newly Added]
• Init the all in one community plugin
```

:::

## FluentCommunity v1.0.90

*Released on Nov 07, 2024*

::: code-group

```markdown [✨ Newly Added]
• Init the all in one community plugin
```

:::
