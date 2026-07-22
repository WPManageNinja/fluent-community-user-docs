import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FluentCommunity",
  description: "The official documentation for the FluentCommunity WordPress plugin.",
  srcDir: 'docs',
  cleanUrls: true,

  head: [
    ['link', { rel: 'shortcut icon', type: 'image/png', href: '/images/brand/fluentCommunity_primary_icon.png' }],
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
      light: '/images/brand/fluentCommunity_primary_logo.png',
      dark: '/images/brand/fluentCommunity_secondary_logo.png',
      alt: 'FluentCommunity'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Docs', link: '/getting-started/introduction-fluentcommunity' },
      { text: 'Website', link: 'https://fluentcommunity.co/' },
      { text: 'Support', link: '/help-&-resources/how-to-contact-support' },
      { text: 'Changelog', link: '/changelog/changelog' }
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
              { text: 'Space Groups', link: '/community-hub/space-groups' },
              { text: 'Adding Members to a Space', link: '/community-hub/adding-members-to-a-space' },
              { text: 'Space Links', link: '/community-hub/space-links' },
              { text: 'Add Custom Links (Pro)', link: '/community-hub/add-custom-links-(pro)' },
              { text: 'Customizing the Lockscreen', link: '/community-hub/customizing-the-lockscreen' },
              { text: 'Using Group Chat (Pro)', link: '/community-hub/using-group-chat-(pro)' },
              { text: 'Membership Invitations', link: '/community-hub/membership-invitations' },
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
              { text: 'Creating & Managing Polls', link: '/community-hub/creating-&-managing-polls' },
              { text: 'Feed Views', link: '/community-hub/feed-views' },
            ]
          },
          {
            text: 'Members & Profiles',
            collapsed: true,
            items: [
              { text: 'The Member Directory', link: '/community-hub/the-member-directory' },
              { text: 'Managing User Profiles', link: '/community-hub/managing-user-profiles' },
              { text: 'Social Links Customization', link: '/community-hub/social-links-customization' },
              { text: 'Assigning User Roles', link: '/community-hub/assigning-user-roles' },
              { text: 'Add Users to Spaces & Courses from a Profile', link: '/community-hub/add-users-from-profile' },
              { text: 'Direct Messaging (Pro)', link: '/community-hub/direct-messaging-(pro)' },
              { text: 'Moderating Chat Users (Pro)', link: '/community-hub/moderating-chat-users-(pro)' },
              { text: 'Following & Blocking Members', link: '/community-hub/following-&-blocking-members' },
              { text: 'Assigning Managers', link: '/community-hub/assigning-managers' },
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
              { text: 'Course Privacy', link: '/courses-&-learning-(pro)/course-privacy' },
              { text: 'Course Links', link: '/courses-&-learning-(pro)/course-links' },
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
          { text: 'The Media Module', link: '/files-&-media-storage/the-media-module' },
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
          { text: 'General Settings', link: '/portal-settings/general-settings' },
          {
            text: 'Layout & Appearance',
            collapsed: true,
            items: [
              { text: 'Menu Settings', link: '/portal-settings/menu-settings' },
              { text: 'Welcome Banner', link: '/portal-settings/welcome-banner' },
              { text: 'Feed Sorting', link: '/portal-settings/feed-sorting' },
              { text: 'Color Customization', link: '/portal-settings/color-customization' },
              { text: 'Theme Compatibility', link: '/portal-settings/theme-compatibility' },
              { text: 'Community as Homepage', link: '/portal-settings/community-as-homepage' },
              { text: 'Sitemaps & SEO', link: '/portal-settings/sitemaps-&-seo' },
            ]
          },
          {
            text: 'Access & Registration',
            collapsed: true,
            items: [
              { text: 'Portal Access Settings', link: '/portal-settings/portal-access-settings' },
              { text: 'Privacy Settings', link: '/portal-settings/privacy-settings' },
              { text: 'Customizing the Login/Signup Form', link: '/portal-settings/customizing-the-login-signup-form' },
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
            ]
          },
        ]
      },
      {
        text: 'Monetization',
        items: [
          { text: 'Monetizing Your Spaces', link: '/monetization/monetizing-your-spaces' },
          { text: 'Monetizing Your Courses', link: '/monetization/monetizing-your-courses' },
          { text: 'Monetizing with Paymattic', link: '/monetization/monetizing-with-paymattic' },
          { text: 'Collecting Recurring Payments', link: '/monetization/collecting-recurring-payments' },
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
              { text: 'Connecting with FluentPlayer', link: '/integrations/connecting-with-fluentplayer' },
              { text: 'Connecting with FluentSocket', link: '/integrations/connecting-with-fluentsocket' },
              { text: 'Managing Access with FluentCRM Tags', link: '/integrations/managing-access-with-fluentcrm-tags' },
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
              { text: 'Incoming Webhook', link: '/integrations/incoming-webhook' },
            ]
          },
          {
            text: 'Other Integrations',
            collapsed: true,
            items: [
              { text: 'Connecting with Pusher', link: '/integrations/connecting-with-pusher' },
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
          { text: 'Adding Custom CSS & JavaScript', link: '/for-developers/adding-custom-css' },
        ]
      },
      {
        text: 'Changelog',
        items: [
          { text: 'Changelog', link: '/changelog/changelog' },
        ]
      }
    ],

    footer: {
        copyright: 'Copyright © 2026 WPManageNinja'
    },
  }
})