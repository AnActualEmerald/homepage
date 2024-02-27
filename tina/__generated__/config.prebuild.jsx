// tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: "e083a343-dc33-46c8-a94e-d373424431f5",
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        name: "story",
        label: "Stories",
        path: "content/stories",
        ui: {
          defaultItem: {
            author: "Emerald",
            draft: true,
            series: "",
            series_order: 0
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            label: "Series",
            name: "series",
            type: "string"
          },
          {
            label: "Series Order",
            name: "series_order",
            type: "number"
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true
          },
          {
            name: "author",
            label: "Author",
            type: "string"
          },
          {
            name: "draft",
            label: "Draft",
            type: "boolean"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        ui: {
          defaultItem: {
            author: "Emerald",
            date: (/* @__PURE__ */ new Date()).toISOString(),
            draft: true,
            showDate: true,
            showDateUpdated: true
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true
          },
          {
            label: "Categories",
            name: "categories",
            type: "string",
            list: true,
            options: [
              {
                value: "announcements",
                label: "Announcements"
              },
              {
                value: "reviews",
                label: "Reviews"
              },
              {
                value: "fluff",
                label: "Fluff"
              },
              {
                value: "tech",
                label: "Tech"
              },
              {
                value: "programming",
                label: "Programming"
              }
            ]
          },
          {
            name: "author",
            label: "Author",
            type: "string"
          },
          {
            label: "Date",
            name: "date",
            type: "datetime"
          },
          {
            label: "Show Date",
            name: "showDate",
            type: "boolean"
          },
          {
            label: "Date Updated",
            name: "dateUpdated",
            type: "datetime"
          },
          {
            label: "Show Date Updated",
            name: "showDateUpdated",
            type: "boolean"
          },
          {
            name: "draft",
            label: "Draft",
            type: "boolean"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
