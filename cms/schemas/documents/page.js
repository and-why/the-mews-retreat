export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'image',
      title: 'Header image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'blurDataURL',
      title: 'Create a tiny version of the image above for blur loading',
      type: 'image',
      validation: (Rule) => [Rule.required().error('Field cannot be empty')],
    },
    {
      name: 'items',
      type: 'array',
      title: 'Block Items',
      of: [
        { type: 'textBlock' },
        { type: 'standardImageBlock' },
        { type: 'fullWidthImage' },
        { type: 'largeTextWithImages' },
        { type: 'sideContent' },
        { type: 'largeText' },
      ],
    },
    // {
    //   name: 'textBlock',
    //   type: 'array',
    //   title: 'Content',
    // },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
