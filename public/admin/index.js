console.log(CMS)
// Register the collection for the Index data
CMS.registerPreviewStyle("/admin/cms.css");
CMS.registerCollection({
  name: "index",
  label: "Index",
  files: [
    {
      label: "Index",
      name: "index",
      file: "../../data/index.yml",
      fields: [
        {
          label: "Heading",
          name: "heading",
          widget: "string",
        },
        {
          label: "Subheading",
          name: "subheading",
          widget: "markdown",
        },
        {
          label: "Background Image",
          name: "background_image",
          widget: "image",
        },
      ],
    },
  ],
});

// Initialize the CMS
CMS.init();
