import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FluentCommunity",
  description: "The official documentation for the FluentCommunity WordPress plugin.",
  srcDir: 'docs',
  cleanUrls: true,

  head: [
    ['link', { rel: 'shortcut icon', type: 'image/png', href: '/images/brand/main_icon.png' }],
    ['style', {}, `
      .VPHomeHero {
        text-align: center !important;
      }
      .VPHomeHero .name,
      .VPHomeHero .text,
      .VPHomeHero .tagline,
      .VPHomeHero .clip {
        text-align: center !important;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .VPHomeHero .actions {
        justify-content: center !important;
        display: flex !important;
      }
      .VPHomeHero .container {
        text-align: center !important;
      }
    `],
  ],

  // Theme related configurations
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    siteTitle: false,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search docs...',
            buttonAriaLabel: 'Search documentation'
          },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Clear search',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },
    logo: {
      light: '/images/brand/main_logo.png',
      dark: '/images/brand/main_logo_inverted.png',
      alt: 'FluentCommunity'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Docs', link: '/getting-started/introduction-fluentcommunity' },
      { text: 'Website', link: 'https://fluentcommunity.co/' },
      { text: 'Support', link: '/help-&-resources/how-to-contact-support' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction-fluentcommunity' },
          { text: 'Installation & Activation', link: '/getting-started/installation-&-activation' },
          { text: 'The Setup Wizard', link: '/getting-started/the-setup-wizard' },
          { text: 'Admin Dashboard', link: '/getting-started/admin-dashboard' },
          { text: 'Global Feed', link: '/getting-started/global-feed' },
          { text: 'Understanding the Module System', link: '/getting-started/understanding-the-module-system' },
          { text: 'Glossary', link: '/getting-started/glossary' },
        ]
      },
      {
        text: 'Community Hub',
        items: [
          {
            text: 'Spaces & Group Chat',
            collapsed: true,
            items: [
              { text: 'Creating a New Space', link: '/community-hub/creating-a-new-space' },
              { text: 'Space Settings & Privacy', link: '/community-hub/space-settings-&-privacy' },
              { text: 'Space Links', link: '/community-hub/space-links' },
              { text: 'Add Custom Links (Pro)', link: '/community-hub/add-custom-links-(pro)' },
              { text: 'Customizing the Lockscreen', link: '/community-hub/customizing-the-lockscreen' },
              { text: 'Using Group Chat (Pro)', link: '/community-hub/using-group-chat-(pro)' },
            ]
          },
          {
            text: 'Posts & Discussions',
            collapsed: true,
            items: [
              { text: 'Creating & Editing Posts', link: '/community-hub/creating-&-editing-posts' },
              { text: 'Using Comments & Replies', link: '/community-hub/using-comments-&-replies' },
              { text: 'Post Reactions & Mentions', link: '/community-hub/post-reactions-&-mentions' },
              { text: 'Using Emojis & GIFs (Pro)', link: '/community-hub/using-emojis-&-gifs-(pro)' },
              { text: 'Content Moderation', link: '/community-hub/content-moderation' },
            ]
          },
          {
            text: 'Members & Profiles',
            collapsed: true,
            items: [
              { text: 'The Member Directory', link: '/community-hub/the-member-directory' },
              { text: 'Managing User Profiles', link: '/community-hub/managing-user-profiles' },
              { text: 'Assigning User Roles', link: '/community-hub/assigning-user-roles' },
              { text: 'Direct Messaging (Pro)', link: '/community-hub/direct-messaging-(pro)' },
              { text: 'Moderating Chat Users (Pro)', link: '/community-hub/moderating-chat-users-(pro)' },
            ]
          },
        ]
      },
      {
        text: 'Gamification (Pro)',
        items: [
          { text: 'Configuring the Points System', link: '/gamification-(pro)/configuring-the-points-system' },
          { text: 'Setting Up Leaderboards', link: '/gamification-(pro)/setting-up-leaderboards' },
          { text: 'Creating & Assigning Badges', link: '/gamification-(pro)/creating-&-assigning-badges' },
        ]
      },
      {
        text: 'Courses & Learning (Pro)',
        items: [
          {
            text: 'Course Management',
            collapsed: true,
            items: [
              { text: 'Creating Your First Course', link: '/courses-&-learning-(pro)/creating-your-first-course' },
              { text: 'Structuring Lessons & Modules', link: '/courses-&-learning-(pro)/structuring-lessons-&-modules' },
              { text: 'Course Layouts & Enrollment', link: '/courses-&-learning-(pro)/course-layouts-&-enrollment' },
              { text: 'Adding Videos & Attachments', link: '/courses-&-learning-(pro)/adding-videos-&-attachments' },
            ]
          },
          {
            text: 'Student Tools',
            collapsed: true,
            items: [
              { text: 'Enabling Lesson Previews', link: '/courses-&-learning-(pro)/enabling-lesson-previews' },
              { text: 'Using the Quiz Module', link: '/courses-&-learning-(pro)/using-the-quiz-module' },
            ]
          },
        ]
      },
      {
        text: 'Files & Media Storage',
        items: [
          { text: 'The File & Document Library (Pro)', link: '/files-&-media-storage/the-file-&-document-library-(pro)' },
          {
            text: 'Storage Configuration',
            collapsed: true,
            items: [
              { text: 'Using the Local Server', link: '/files-&-media-storage/using-the-local-server' },
              { text: 'Connecting Amazon S3 (Pro)', link: '/files-&-media-storage/connecting-amazon-s3-(pro)' },
              { text: 'Connecting Cloudflare R2 (Pro)', link: '/files-&-media-storage/connecting-cloudflare-r2-(pro)' },
              { text: 'CDN & Image Proxy Setup (Pro)', link: '/files-&-media-storage/cdn-&-image-proxy-setup-(pro)' },
              { text: 'Secure File URLs (Pro)', link: '/files-&-media-storage/secure-file-urls-(pro)' },
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
              { text: 'Adding Custom Sidebar Links', link: '/portal-settings/adding-custom-sidebar-links' },
            ]
          },
          {
            text: 'Communication',
            collapsed: true,
            items: [
              { text: 'In-App Notification Settings', link: '/portal-settings/in-app-notification-settings' },
              { text: 'Customizing Email Templates (Pro)', link: '/portal-settings/customizing-email-templates-(pro)' },
            ]
          },
          {
            text: 'Analytics (Pro)',
            collapsed: true,
            items: [
              { text: 'The Analytics Dashboard', link: '/portal-settings/the-analytics-dashboard' },
              { text: 'Tracking Community Growth', link: '/portal-settings/tracking-community-growth' },
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
              { text: 'Connecting with FluentCRM', link: '/integrations/connecting-with-fluentcrm' },
              { text: 'Connecting with Fluent Forms', link: '/integrations/connecting-with-fluent-forms' },
              { text: 'Connecting with Fluent Support', link: '/integrations/connecting-with-fluent-support' },
            ]
          },
          {
            text: 'Payments & Monetization',
            collapsed: true,
            items: [
              { text: 'Connecting with FluentCart', link: '/integrations/connecting-with-fluentcart' },
              { text: 'Connecting with Paymattic', link: '/integrations/connecting-with-paymattic' },
            ]
          },
          {
            text: 'Automation Tools',
            collapsed: true,
            items: [
              { text: 'Using Webhooks (Pro)', link: '/integrations/using-webhooks-(pro)' },
            ]
          },
          {
            text: 'Other Integrations',
            collapsed: true,
            items: [
              { text: 'GamiPress', link: '/integrations/gamipress' },
              { text: 'Better Messages', link: '/integrations/better-messages' },
              { text: 'Uncanny Automator & Flowmattic', link: '/integrations/uncanny-automator-&-flowmattic' },
            ]
          },
        ]
      },
      {
        text: 'Migration',
        items: [
        { text: 'BuddyPress Migration', link: '/migration/buddypress-migration' },
        { text: 'Buddyboss Migration', link: '/migration/buddyboss-migration' },
        ]
      },
      {
        text: 'Help & Resources',
        items: [
          { text: 'Frequently Asked Questions', link: '/help-&-resources/frequently-asked-questions' },
          { text: 'Troubleshooting Common Issues', link: '/help-&-resources/troubleshooting-common-issues' },
          { text: 'How to Contact Support', link: '/help-&-resources/how-to-contact-support' },
        ]
      },
      {
        text: 'For Developers',
        items: [
          { text: 'Using the REST API', link: '/for-developers/using-the-rest-api' },
          { text: 'Hooks & Filters Reference', link: '/for-developers/hooks-&-filters-reference' },
          { text: 'Adding Custom CSS', link: '/for-developers/adding-custom-css' },
        ]
      }
    ],

    footer: {
        copyright: 'Copyright © 2025-present WPManageNinja'
    },
  }
})