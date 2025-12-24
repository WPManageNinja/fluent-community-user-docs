import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FluentCommunity",
  description: "The official documentation for the FluentCommunity WordPress plugin.",
  srcDir: 'docs',

  head: [
    ['link', { rel: 'shortcut icon', type: 'image/png', href: '/images/brand/main_icon.png' }],
  ],

  // Theme related configurations
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/images/brand/main_logo.png',
      dark: '/images/brand/main_logo_inverted.png',
      alt: 'FluentCommunity'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/getting-started/introduction-fluentcommunity.md' },
      { text: 'FluentCommunity', link: 'https://fluentcommunity.co/' },
      { text: 'Support', link: '/docs/help-&-resources/how-to-contact-support.md' },
      { text: 'FAQ', link: '/docs/help-&-resources/frequently-asked-questions.md' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/docs/getting-started/introduction-fluentcommunity.md' },
          { text: 'Installation & Activation', link: '/docs/getting-started/installation-&-activation.md' },
          { text: 'The Setup Wizard', link: '/docs/getting-started/the-setup-wizard.md' },
          { text: 'Admin Dashboard', link: '/docs/getting-started/admin-dashboard.md' },
          { text: 'Global Feed', link: '/docs/getting-started/global-feed.md' },
        ]
      },
      {
        text: 'Community Hub',
        items: [
          {
            text: 'Spaces & Group Chat',
            collapsed: true,
            items: [
              { text: 'Creating a New Space', link: '/docs/community-hub/creating-a-new-space.md' },
              { text: 'Space Settings & Privacy', link: '/docs/community-hub/space-settings-&-privacy.md' },
              { text: 'Customizing the Lockscreen', link: '/docs/community-hub/customizing-the-lockscreen.md' },
              { text: 'Using Group Chat (Pro)', link: '/docs/community-hub/using-group-chat-(pro).md' },
            ]
          },
          {
            text: 'Posts & Discussions',
            collapsed: true,
            items: [
              { text: 'Creating & Editing Posts', link: '/docs/community-hub/creating-&-editing-posts.md' },
              { text: 'Using Comments & Replies', link: '/docs/community-hub/using-comments-&-replies.md' },
              { text: 'Post Reactions & Mentions', link: '/docs/community-hub/post-reactions-&-mentions.md' },
              { text: 'Using Emojis & GIFs (Pro)', link: '/docs/community-hub/using-emojis-&-gifs-(pro).md' },
              { text: 'Content Moderation', link: '/docs/community-hub/content-moderation.md' },
            ]
          },
          {
            text: 'Members & Profiles',
            collapsed: true,
            items: [
              { text: 'The Member Directory', link: '/docs/community-hub/the-member-directory.md' },
              { text: 'Managing User Profiles', link: '/docs/community-hub/managing-user-profiles.md' },
              { text: 'Assigning User Roles', link: '/docs/community-hub/assigning-user-roles.md' },
              { text: 'Direct Messaging (Pro)', link: '/docs/community-hub/direct-messaging-(pro).md' },
              { text: 'Moderating Chat Users (Pro)', link: '/docs/community-hub/moderating-chat-users-(pro).md' },
            ]
          },
        ]
      },
      {
        text: 'Gamification (Pro)',
        items: [
          { text: 'Configuring the Points System', link: '/docs/gamification-(pro)/configuring-the-points-system.md' },
          { text: 'Setting Up Leaderboards', link: '/docs/gamification-(pro)/setting-up-leaderboards.md' },
          { text: 'Creating & Assigning Badges', link: '/docs/gamification-(pro)/creating-&-assigning-badges.md' },
          { text: 'Automating Level-Ups', link: '/docs/gamification-(pro)/automating-level-ups.md' },
        ]
      },
      {
        text: 'Courses & Learning (Pro)',
        items: [
          {
            text: 'Course Management',
            collapsed: true,
            items: [
              { text: 'Creating Your First Course', link: '/docs/courses-&-learning-(pro)/creating-your-first-course.md' },
              { text: 'Structuring Lessons & Modules', link: '/docs/courses-&-learning-(pro)/structuring-lessons-&-modules.md' },
              { text: 'Course Layouts & Enrollment', link: '/docs/courses-&-learning-(pro)/course-layouts-&-enrollment.md' },
              { text: 'Adding Videos & Attachments', link: '/docs/courses-&-learning-(pro)/adding-videos-&-attachments.md' },
            ]
          },
          {
            text: 'Student Tools',
            collapsed: true,
            items: [
              { text: 'Enabling Lesson Previews', link: '/docs/courses-&-learning-(pro)/enabling-lesson-previews.md' },
              { text: 'Using the Quiz Module', link: '/docs/courses-&-learning-(pro)/using-the-quiz-module.md' },
            ]
          },
        ]
      },
      {
        text: 'Files & Media Storage',
        items: [
          { text: 'The File & Document Library (Pro)', link: '/docs/files-&-media-storage/the-file-&-document-library-(pro).md' },
          {
            text: 'Storage Configuration',
            collapsed: true,
            items: [
              { text: 'Using the Local Server', link: '/docs/files-&-media-storage/using-the-local-server.md' },
              { text: 'Connecting Amazon S3 (Pro)', link: '/docs/files-&-media-storage/connecting-amazon-s3-(pro).md' },
              { text: 'Connecting Cloudflare R2 (Pro)', link: '/docs/files-&-media-storage/connecting-cloudflare-r2-(pro).md' },
              { text: 'CDN & Image Proxy Setup (Pro)', link: '/docs/files-&-media-storage/cdn-&-image-proxy-setup-(pro).md' },
              { text: 'Secure File URLs (Pro)', link: '/docs/files-&-media-storage/secure-file-urls-(pro).md' },
            ]
          },
        ]
      },
      {
        text: 'Portal Settings',
        items: [
          {
            text: 'Layout & Appearance',
            collapsed: true,
            items: [
              { text: 'Adding Custom Sidebar Links', link: '/docs/portal-settings/adding-custom-sidebar-links.md' },
            ]
          },
          {
            text: 'Communication',
            collapsed: true,
            items: [
              { text: 'In-App Notification Settings', link: '/docs/portal-settings/in-app-notification-settings.md' },
              { text: 'Customizing Email Templates (Pro)', link: '/docs/portal-settings/customizing-email-templates-(pro).md' },
            ]
          },
          {
            text: 'Analytics (Pro)',
            collapsed: true,
            items: [
              { text: 'The Analytics Dashboard', link: '/docs/portal-settings/the-analytics-dashboard.md' },
              { text: 'Tracking Community Growth', link: '/docs/portal-settings/tracking-community-growth.md' },
            ]
          },
        ]
      },
      {
        text: 'Integrations',
        items: [
          {
            text: 'Fluent Ecosystem',
            collapsed: true,
            items: [
              { text: 'Connecting with FluentCRM', link: '/docs/Integrations/connecting-with-fluentcrm.md' },
              { text: 'Connecting with Fluent Forms', link: '/docs/Integrations/connecting-with-fluent-forms.md' },
              { text: 'Connecting with Fluent Support', link: '/docs/Integrations/connecting-with-fluent-support.md' },
            ]
          },
          {
            text: 'Payments & Monetization',
            collapsed: true,
            items: [
              { text: 'Connecting with Paymattic', link: '/docs/Integrations/connecting-with-paymattic.md' },
            ]
          },
          {
            text: 'Automation Tools',
            collapsed: true,
            items: [
              { text: 'Using Webhooks (Pro)', link: '/docs/Integrations/using-webhooks-(pro).md' },
            ]
          },
          {
            text: 'Other Integrations',
            collapsed: true,
            items: [
              
            ]
          },
        ]
      },
      {
        text: 'Migration',
        items: [
        { text: 'BuddyPress Migration', link: '/docs/migration/buddypress-migration.md' },
        { text: 'Buddyboss Migration', link: '/docs/migration/buddyboss-migration.md' },
        ]
      },
      {
        text: 'Help & Resources',
        items: [
          { text: 'Frequently Asked Questions', link: '/docs/help-&-resources/frequently-asked-questions.md' },
          { text: 'Troubleshooting Common Issues', link: '/docs/help-&-resources/troubleshooting-common-issues.md' },
          { text: 'How to Contact Support', link: '/docs/help-&-resources/how-to-contact-support.md' },
        ]
      },
      {
        text: 'For Developers',
        items: [
          { text: 'Using the REST API', link: '/docs/for-developers/using-the-rest-api.md' },
          { text: 'Hooks & Filters Reference', link: '/docs/for-developers/hooks-&-filters-reference.md' },
          { text: 'Adding Custom CSS', link: '/docs/for-developers/adding-custom-css.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wpmanageninja' },
      { icon: 'twitter', link: 'https://twitter.com/wpmanageninja' },
      { icon: 'facebook', link: 'https://facebook.com/wpmanageninja' }
    ],

    footer: {
        message: 'Released under the GPL-2.0 License.',
        copyright: 'Copyright © 2024-present WPManageNinja'
    },
    
    editLink: {
      pattern: 'https://github.com/your-repo/your-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})