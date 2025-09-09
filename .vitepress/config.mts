import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FluentCommunity",
  description: "The official documentation for the FluentCommunity WordPress plugin.",

  // Theme related configurations
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/logo.svg', // Make sure to place your logo in the public directory
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/Getting Started/introduction-fluentcommunity.md' },
      { text: 'FluentCommunity', link: 'https://fluentcommunity.co/' },
      { text: 'Support', link: '/docs/Help & Resources/how-to-contact-support.md' },
      { text: 'FAQ', link: '/docs/Help & Resources/frequently-asked-questions.md' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/docs/Getting Started/introduction-fluentcommunity.md' },
          { text: 'Installation & Activation', link: '/docs/Getting Started/installation-&-activation.md' },
          { text: 'The Setup Wizard', link: '/docs/Getting Started/the-setup-wizard.md' },
          { text: 'Admin Dashboard', link: '/docs/Getting Started/admin-dashboard.md' },
          { text: 'Global Feed', link: '/docs/Getting Started/global-feed.md' },
        ]
      },
      {
        text: 'The Community Hub',
        items: [
          {
            text: 'Spaces & Group Chat',
            collapsed: true,
            items: [
              { text: 'Creating a New Space', link: '/docs/The Community Hub/creating-a-new-space.md' },
              { text: 'Space Settings & Privacy', link: '/docs/The Community Hub/space-settings-&-privacy.md' },
              { text: 'Customizing the Lockscreen', link: '/docs/The Community Hub/customizing-the-lockscreen.md' },
              { text: 'Using Group Chat (Pro)', link: '/docs/The Community Hub/using-group-chat-(pro).md' },
            ]
          },
          {
            text: 'Posts & Discussions',
            collapsed: true,
            items: [
              { text: 'Creating & Editing Posts', link: '/docs/The Community Hub/creating-&-editing-posts.md' },
              { text: 'Using Comments & Replies', link: '/docs/The Community Hub/using-comments-&-replies.md' },
              { text: 'Post Reactions & Mentions', link: '/docs/The Community Hub/post-reactions-&-mentions.md' },
              { text: 'Using Emojis & GIFs (Pro)', link: '/docs/The Community Hub/using-emojis-&-gifs-(pro).md' },
              { text: 'Content Moderation', link: '/docs/The Community Hub/content-moderation.md' },
            ]
          },
          {
            text: 'Members & Profiles',
            collapsed: true,
            items: [
              { text: 'The Member Directory', link: '/docs/The Community Hub/the-member-directory.md' },
              { text: 'Managing User Profiles', link: '/docs/The Community Hub/managing-user-profiles.md' },
              { text: 'Assigning User Roles', link: '/docs/The Community Hub/assigning-user-roles.md' },
              { text: 'Direct Messaging (Pro)', link: '/docs/The Community Hub/direct-messaging-(pro).md' },
              { text: 'Moderating Chat Users (Pro)', link: '/docs/The Community Hub/moderating-chat-users-(pro).md' },
            ]
          },
        ]
      },
      {
        text: 'Gamification (Pro)',
        items: [
          { text: 'Configuring the Points System', link: '/docs/Gamification (Pro)/configuring-the-points-system.md' },
          { text: 'Setting Up Leaderboards', link: '/docs/Gamification (Pro)/setting-up-leaderboards.md' },
          { text: 'Creating & Assigning Badges', link: '/docs/Gamification (Pro)/creating-&-assigning-badges.md' },
          { text: 'Automating Level-Ups', link: '/docs/Gamification (Pro)/automating-level-ups.md' },
        ]
      },
      {
        text: 'Courses & Learning (Pro)',
        items: [
          {
            text: 'Course Management',
            collapsed: true,
            items: [
              { text: 'Creating Your First Course', link: '/docs/Courses & Learning (Pro)/creating-your-first-course.md' },
              { text: 'Structuring Lessons & Modules', link: '/docs/Courses & Learning (Pro)/structuring-lessons-&-modules.md' },
              { text: 'Course Layouts & Enrollment', link: '/docs/Courses & Learning (Pro)/course-layouts-&-enrollment.md' },
              { text: 'Adding Videos & Attachments', link: '/docs/Courses & Learning (Pro)/adding-videos-&-attachments.md' },
            ]
          },
          {
            text: 'Student Tools',
            collapsed: true,
            items: [
              { text: 'Enabling Lesson Previews', link: '/docs/Courses & Learning (Pro)/enabling-lesson-previews.md' },
              { text: 'Using the Quiz Module', link: '/docs/Courses & Learning (Pro)/using-the-quiz-module.md' },
            ]
          },
        ]
      },
      {
        text: 'Files & Media Storage',
        items: [
          { text: 'The File & Document Library (Pro)', link: '/docs/Files & Media Storage/the-file-&-document-library-(pro).md' },
          {
            text: 'Storage Configuration',
            collapsed: true,
            items: [
              { text: 'Using the Local Server', link: '/docs/Files & Media Storage/using-the-local-server.md' },
              { text: 'Connecting Amazon S3 (Pro)', link: '/docs/Files & Media Storage/connecting-amazon-s3-(pro).md' },
              { text: 'Connecting Cloudflare R2 (Pro)', link: '/docs/Files & Media Storage/connecting-cloudflare-r2-(pro).md' },
              { text: 'CDN & Image Proxy Setup (Pro)', link: '/docs/Files & Media Storage/cdn-&-image-proxy-setup-(pro).md' },
              { text: 'Secure File URLs (Pro)', link: '/docs/Files & Media Storage/secure-file-urls-(pro).md' },
            ]
          },
        ]
      },
      {
        text: 'Platform Settings',
        items: [
          {
            text: 'Layout & Appearance',
            collapsed: true,
            items: [
              { text: 'Adding Custom Sidebar Links', link: '/docs/Platform Settings/adding-custom-sidebar-links.md' },
            ]
          },
          {
            text: 'Communication',
            collapsed: true,
            items: [
              { text: 'In-App Notification Settings', link: '/docs/Platform Settings/in-app-notification-settings.md' },
              { text: 'Customizing Email Templates (Pro)', link: '/docs/Platform Settings/customizing-email-templates-(pro).md' },
            ]
          },
          {
            text: 'Analytics (Pro)',
            collapsed: true,
            items: [
              { text: 'The Analytics Dashboard', link: '/docs/Platform Settings/the-analytics-dashboard.md' },
              { text: 'Tracking Community Growth', link: '/docs/Platform Settings/tracking-community-growth.md' },
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
              { text: 'Uncanny Automator & FlowMattic', link: '/docs/Integrations/uncanny-automator-&-flowmattic.md' },
            ]
          },
          {
            text: 'Other Integrations',
            collapsed: true,
            items: [
              { text: 'GamiPress', link: '/docs/Integrations/gamipress.md' },
              { text: 'Better Messages', link: '/docs/Integrations/better-messages.md' },
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
          { text: 'Frequently Asked Questions', link: '/docs/Help & Resources/frequently-asked-questions.md' },
          { text: 'Troubleshooting Common Issues', link: '/docs/Help & Resources/troubleshooting-common-issues.md' },
          { text: 'How to Contact Support', link: '/docs/Help & Resources/how-to-contact-support.md' },
        ]
      },
      {
        text: 'For Developers',
        items: [
          { text: 'Using the REST API', link: '/docs/For Developers/using-the-rest-api.md' },
          { text: 'Hooks & Filters Reference', link: '/docs/For Developers/hooks-&-filters-reference.md' },
          { text: 'Adding Custom CSS', link: '/docs/For Developers/adding-custom-css.md' },
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