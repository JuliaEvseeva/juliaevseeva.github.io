module.exports = {
  collections_config: {
    careers: {
      url: (filePath, parsed, { filters }) => {
        const year = new Date(parsed.date).getFullYear();
        const slug = filters.slugify(parsed.title || '');
        return `/careers/${year}/${slug}/`;
      },
      output: true,
      add_options: [
        {
          name: 'Add Post',
          editor: 'content'
        },
        {
          name: 'Add Draft',
          editor: 'content',
          schema: draft
        },
      ],
      schemas: {
        draft: {
          path: 'schemas/test.md',
        }
      }
    }
  }
}