import { defineConfig } from 'vitepress'
import { zoomablePlugin } from './theme/plugin-zoomable'

// Canonical origin for this site. Stated once and reused by the sitemap, the
// canonical links, and the absolute og:/twitter: URLs below — changing the host
// should only ever mean editing this line.
const SITE_URL = 'https://docs.fluentcommunity.co'
const SITE_NAME = 'FluentCommunity Docs'
const SITE_DESCRIPTION =
  'Official documentation for FluentCommunity — the all-in-one community, courses, and membership platform for WordPress. Setup guides, feature walkthroughs, and developer reference.'
// Social share card. Must be an absolute URL — relative paths are ignored by
// Slack/X/LinkedIn/Facebook scrapers.
const OG_IMAGE = `${SITE_URL}/og-image.png`

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  srcDir: 'docs',
  cleanUrls: true,
  lang: 'en-US',

  // Surfaces a git-derived timestamp per page, which also gives every sitemap
  // entry a <lastmod> freshness signal.
  lastUpdated: true,

  // Generates /sitemap.xml at build time for search engines.
  sitemap: {
    hostname: SITE_URL
  },

  // Serve every article at the site root, hiding its category folder from the URL.
  // Files stay in their category folders; only the public URL is flattened
  // (e.g. docs/gamification-(pro)/configuring-the-points-system.md -> /configuring-the-points-system).
  // Using a function avoids path-to-regexp parsing of '&' and '()' in folder/file names.
  rewrites: (id: string) => id.replace(/^[^/]+\//, ''),

  // Wrap every markdown image in <ZoomableImage> so it can be clicked to zoom.
  markdown: {
    config: (md) => {
      md.use(zoomablePlugin)
    }
  },

  // Site-wide tags. Per-page tags (canonical, og:title/description/url, twitter:*)
  // are generated in transformPageData() below.
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/png', href: '/images/brand/fluentCommunity_primary_icon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/brand/fluentCommunity_primary_icon.png' }],
    ['meta', { name: 'theme-color', content: '#5145e6' }],

    // Open Graph / Twitter values that never vary per page.
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'FluentCommunity Documentation' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],

    // Add a Search Console verification tag here when the property is claimed:
    // ['meta', { name: 'google-site-verification', content: '<token>' }],

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

  // Per-page SEO tags: canonical URL plus the Open Graph / Twitter values that
  // differ per page. Without a canonical, cleanUrls + the `rewrites` flattening
  // leave the same content reachable at more than one path with nothing telling
  // search engines which one is authoritative.
  transformPageData(pageData) {
    // `relativePath` is already the REWRITTEN (flattened) path, so it matches the
    // public URL — see the `rewrites` option above.
    const slug = pageData.relativePath
      .replace(/(^|\/)index\.md$/, '$1')
      .replace(/\.md$/, '')
    const url = `${SITE_URL}/${slug}`

    const title = pageData.frontmatter.title || pageData.title || SITE_NAME
    const description =
      pageData.frontmatter.description || pageData.description || SITE_DESCRIPTION

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }]
    )
  },

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
      { text: 'User Docs', link: '/introduction-fluentcommunity' },
      { text: 'Website', link: 'https://fluentcommunity.co/' },
      { text: 'Support', link: '/how-to-contact-support' },
      { text: 'Changelog', link: '/changelog' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction-fluentcommunity' },
          { text: 'Installation & Activation', link: '/installation-&-activation' },
          { text: 'The Setup Wizard', link: '/the-setup-wizard' },
          { text: 'Admin Dashboard', link: '/admin-dashboard' },
          { text: 'Global Feed', link: '/global-feed' },
          { text: 'Glossary', link: '/glossary' },
        ]
      },
      {
        text: 'Community Hub',
        items: [
          {
            text: 'Spaces & Group Chat',
            link: '/spaces-&-group-chat',
            collapsed: true,
            items: [
              { text: 'Creating a New Space', link: '/creating-a-new-space' },
              { text: 'Space Settings & Privacy', link: '/space-settings-&-privacy' },
              { text: 'Space Groups', link: '/space-groups' },
              { text: 'Adding Members to a Space', link: '/adding-members-to-a-space' },
              { text: 'Space Links', link: '/space-links' },
              { text: 'Add Custom Links (Pro)', link: '/add-custom-links-(pro)' },
              { text: 'Customizing the Lockscreen', link: '/customizing-the-lockscreen' },
              { text: 'Using Group Chat (Pro)', link: '/using-group-chat-(pro)' },
              { text: 'Membership Invitations', link: '/membership-invitations' },
            ]
          },
          {
            text: 'Posts & Discussions',
            link: '/posts-&-discussions',
            collapsed: true,
            items: [
              { text: 'Creating & Editing Posts', link: '/creating-&-editing-posts' },
              { text: 'Using Comments & Replies', link: '/using-comments-&-replies' },
              { text: 'Post Reactions & Mentions', link: '/post-reactions-&-mentions' },
              { text: 'Using Emojis & GIFs (Pro)', link: '/using-emojis-&-gifs-(pro)' },
              { text: 'Content Moderation', link: '/content-moderation' },
              { text: 'Creating & Managing Polls', link: '/creating-&-managing-polls' },
              { text: 'Feed Views', link: '/feed-views' },
            ]
          },
          {
            text: 'Members & Profiles',
            link: '/members-&-profiles',
            collapsed: true,
            items: [
              { text: 'The Member Directory', link: '/the-member-directory' },
              { text: 'Managing User Profiles', link: '/managing-user-profiles' },
              { text: 'Social Links Customization', link: '/social-links-customization' },
              { text: 'Assigning User Roles', link: '/assigning-user-roles' },
              { text: 'Add Users to Spaces & Courses from a Profile', link: '/add-users-from-profile' },
              { text: 'Direct Messaging (Pro)', link: '/direct-messaging-(pro)' },
              { text: 'Moderating Chat Users (Pro)', link: '/moderating-chat-users-(pro)' },
              { text: 'Following & Blocking Members', link: '/following-&-blocking-members' },
              { text: 'Assigning Managers', link: '/assigning-managers' },
            ]
          },
        ]
      },
      {
        text: 'Gamification (Pro)',
        items: [
          { text: 'Configuring the Points System', link: '/configuring-the-points-system' },
          { text: 'Setting Up Leaderboards', link: '/setting-up-leaderboards' },
          { text: 'Creating & Assigning Badges', link: '/creating-&-assigning-badges' },
        ]
      },
      {
        text: 'Courses & Learning (Pro)',
        items: [
          {
            text: 'Course Management',
            link: '/course-management',
            collapsed: true,
            items: [
              { text: 'Creating Your First Course', link: '/creating-your-first-course' },
              { text: 'Structuring Lessons & Modules', link: '/structuring-lessons-&-modules' },
              { text: 'Course Layouts & Enrollment', link: '/course-layouts-&-enrollment' },
              { text: 'Adding Videos & Attachments', link: '/adding-videos-&-attachments' },
              { text: 'Course Privacy', link: '/course-privacy' },
              { text: 'Course Links', link: '/course-links' },
              { text: 'Course Welcome Banners', link: '/course-welcome-banners' },
            ]
          },
          {
            text: 'Student Tools',
            link: '/student-tools',
            collapsed: true,
            items: [
              { text: 'Enabling Lesson Previews', link: '/enabling-lesson-previews' },
              { text: 'Using the Quiz Module', link: '/using-the-quiz-module' },
            ]
          },
        ]
      },
      {
        text: 'Files & Media Storage',
        items: [
          { text: 'The File & Document Library (Pro)', link: '/the-file-&-document-library-(pro)' },
          { text: 'Space Media Gallery (Pro)', link: '/space-media-gallery-(pro)' },
          { text: 'The Media Module', link: '/the-media-module' },
          {
            text: 'Storage Configuration',
            link: '/storage-configuration',
            collapsed: true,
            items: [
              { text: 'Using the Local Server', link: '/using-the-local-server' },
              { text: 'Connecting Amazon S3 (Pro)', link: '/connecting-amazon-s3-(pro)' },
              { text: 'Connecting Cloudflare R2 (Pro)', link: '/connecting-cloudflare-r2-(pro)' },
              { text: 'CDN & Image Proxy Setup (Pro)', link: '/cdn-&-image-proxy-setup-(pro)' },
              { text: 'Secure File URLs (Pro)', link: '/secure-file-urls-(pro)' },
            ]
          },
        ]
      },
      {
        text: 'Portal Settings',
        items: [
          { text: 'General Settings', link: '/general-settings' },
          {
            text: 'Layout & Appearance',
            link: '/layout-&-appearance',
            collapsed: true,
            items: [
              { text: 'Menu Settings', link: '/menu-settings' },
              { text: 'Welcome Banner', link: '/welcome-banner' },
              { text: 'Feed Sorting', link: '/feed-sorting' },
              { text: 'Color Customization', link: '/color-customization' },
              { text: 'Theme Compatibility', link: '/theme-compatibility' },
              { text: 'Community as Homepage', link: '/community-as-homepage' },
              { text: 'Progressive Web App (PWA) (Pro)', link: '/progressive-web-app-(pro)' },
              { text: 'Sitemaps & SEO', link: '/sitemaps-&-seo' },
            ]
          },
          {
            text: 'Access & Registration',
            collapsed: true,
            items: [
              { text: 'Portal Access Settings', link: '/portal-access-settings' },
              { text: 'Privacy Settings', link: '/privacy-settings' },
              { text: 'Customizing the Login/Signup Form', link: '/customizing-the-login-signup-form' },
            ]
          },
          {
            text: 'Communication',
            link: '/communication',
            collapsed: true,
            items: [
              { text: 'In-App Notification Settings', link: '/in-app-notification-settings' },
              { text: 'Customizing Email Templates (Pro)', link: '/customizing-email-templates-(pro)' },
            ]
          },
          {
            text: 'Analytics (Pro)',
            collapsed: true,
            items: [
              { text: 'The Analytics Dashboard', link: '/the-analytics-dashboard' },
            ]
          },
        ]
      },
      {
        text: 'Monetization',
        items: [
          { text: 'Monetizing Your Spaces', link: '/monetizing-your-spaces' },
          { text: 'Monetizing Your Courses', link: '/monetizing-your-courses' },
          { text: 'Monetizing with Paymattic', link: '/monetizing-with-paymattic' },
          { text: 'Collecting Recurring Payments', link: '/collecting-recurring-payments' },
        ]
      },
      {
        text: 'Integrations',
        items: [
          {
            text: 'Fluent Ecosystem',
            link: '/fluent-ecosystem',
            collapsed: true,
            items: [
              { text: 'Connecting with FluentCRM', link: '/connecting-with-fluentcrm' },
              { text: 'Connecting with Fluent Forms', link: '/connecting-with-fluent-forms' },
              { text: 'Connecting with Fluent Support', link: '/connecting-with-fluent-support' },
              { text: 'Connecting with FluentPlayer', link: '/connecting-with-fluentplayer' },
              { text: 'Connecting with FluentSocket', link: '/connecting-with-fluentsocket' },
              { text: 'Connecting with FluentSMTP', link: '/connecting-with-fluentsmtp' },
              { text: 'Managing Access with FluentCRM Tags', link: '/managing-access-with-fluentcrm-tags' },
            ]
          },
          {
            text: 'Payments & Monetization',
            link: '/payments-&-monetization',
            collapsed: true,
            items: [
              { text: 'Connecting with FluentCart', link: '/connecting-with-fluentcart' },
              { text: 'Connecting with Paymattic', link: '/connecting-with-paymattic' },
            ]
          },
          {
            text: 'Automation Tools',
            link: '/automation-tools',
            collapsed: true,
            items: [
              { text: 'Incoming Webhook', link: '/incoming-webhook' },
            ]
          },
          {
            text: 'Other Integrations',
            link: '/other-integrations',
            collapsed: true,
            items: [
              { text: 'Connecting with Pusher', link: '/connecting-with-pusher' },
            ]
          },
        ]
      },
      {
        text: 'Migration',
        items: [
        { text: 'BuddyPress Migration', link: '/buddypress-migration' },
        { text: 'Buddyboss Migration', link: '/buddyboss-migration' },
        ]
      },
      {
        text: 'For Developers',
        items: [
          { text: 'Adding Custom CSS & JavaScript', link: '/adding-custom-css' },
        ]
      },
      {
        text: 'Help & Resources',
        items: [
          { text: 'Frequently Asked Questions', link: '/frequently-asked-questions' },
          { text: 'Troubleshooting Common Issues', link: '/troubleshooting-common-issues' },
          { text: 'How to Contact Support', link: '/how-to-contact-support' },
        ]
      },
      {
        text: 'Changelog',
        items: [
          { text: 'Changelog', link: '/changelog' },
        ]
      }
    ],

    footer: {
        copyright: 'Copyright © 2026 WPManageNinja'
    },
  }
})