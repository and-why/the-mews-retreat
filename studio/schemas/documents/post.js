// sanity/schemas/homepage.js
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "What's the title of the homepage hero?",
    },
    {
      name: 'subtitle',
      title: 'Homepage subtitle',
      type: 'string',
      description: "What's the subtitle of the homepage hero?",
    },
    {
      name: 'image',
      title: 'Homepage image',
      type: 'image',
    },
    {
      name: 'cta_name',
      title: 'CTA Name',
      type: 'string',
      description: "What's the text for the CTA link?",
    },
    {
      name: 'cta',
      description: "What's URL for the homepage CTA?",
      title: 'CTA',
      type: 'slug',
      options: {
        maxLength: 200,
      },
      validation: (Rule) => [Rule.required().error('Field cannot be empty')],
    },
  ],
};
