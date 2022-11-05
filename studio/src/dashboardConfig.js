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
                    "63661d77018cc13dad53b77c",
                  title: "Sanity Studio",
                  name: "sammy-mini-blog-studio",
                  apiId: "e7ae05d0-3e22-4134-8336-830ea710bfb6",
                },
                {
                  buildHookId: "63661d76aaf1f33dada1210d",
                  title: "Blog Website",
                  name: "sammy-mini-blog",
                  apiId: "5683b262-dde8-48d8-8923-5909e4e89783",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Umoren/sammy-mini-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sammy-mini-blog.netlify.app",
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
