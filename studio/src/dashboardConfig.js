export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f036f79dffb8400232ed0d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-7kp5f9qm",
                  apiId: "e6c23095-65b3-40fe-8596-c664dda38578",
                },
                {
                  buildHookId: "60f036f87965b2382e8344aa",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ed7nx4fk",
                  apiId: "c78b6a0b-a3b4-4bbb-bd09-e8e357fc6ea6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/NickFormatC/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ed7nx4fk.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
