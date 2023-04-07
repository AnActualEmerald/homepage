import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "e083a343-dc33-46c8-a94e-d373424431f5", // Get this from tina.io
  token: "0674e73b657b7a05589860c7a0e38867a1ac1551", // Get this from tina.io

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
  schema: {
    collections: [
      {
        name: "story",
        label: "Stories",
        path: "content/stories",
        ui: {
          defaultItem: {
            author: 'Emerald',
            date: new Date().toISOString(),
            draft: true,
            showDate: false
          }
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
        ui: {
          defaultItem: {
            author: 'Emerald',
            date: new Date().toISOString(),
            draft: true,
            showDate: true
          }
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
