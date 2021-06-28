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
      name: 'subtitle',
      title: 'Page subtitle',
      type: 'string',
      description: "What's the subtitle of the hero image?",
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
        { type: 'carouselSideImage' },
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
