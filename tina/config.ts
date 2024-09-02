import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "story",
        label: "Stories",
        path: "content/stories",
        defaultItem: {
          author: 'Emerald',
          showAuthor: false,
          draft: true,
          series: [],
          series_order: 0,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Series',
            name: 'series',
            type: 'string',
            list: true,
          },
          {
            label: 'Series Order',
            name: 'series_order',
            type: 'number',
          },
          {
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true
          },
          {
            name: 'author',
            label: 'Author',
            type: 'string',
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean'
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        
        ]
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        defaultItem: {
          author: 'Emerald',
          date: new Date().toISOString(),
          draft: true,
          showDate: true,
          showDateUpdated: true
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true
          },
          {
            label: 'Categories',
            name: 'categories',
            type: 'string',
            list: true,
            options: [
              {
                value: 'announcements',
                label: 'Announcements'
              },
              {
                value: 'reviews',
                label: 'Reviews'
              },
              {
                value: 'fluff',
                label: 'Fluff'
              },
              {
                value: 'tech',
                label: 'Tech'
              },
              {
                value: 'programming',
                label: 'Programming',
              }
            ]
          },
          {
            name: 'author',
            label: 'Author',
            type: 'string',
          },
          {
            label: 'Date',
            name: 'date',
            type: 'datetime'
          },
          {
            label: 'Show Date',
            name: 'showDate',
            type: 'boolean'
          },
          {
            label: 'Date Updated',
            name: 'dateUpdated',
            type: 'datetime'
          },
          {
            label: 'Show Date Updated',
            name: 'showDateUpdated',
            type: 'boolean'
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean'
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
