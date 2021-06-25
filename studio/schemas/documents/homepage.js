// sanity/schemas/homepage.js
export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Homepage Title',
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
        { type: 'carouselSideImageLeft' },
      ],
    },
  ],
};
