import { BiCarousel } from 'react-icons/bi';

export default {
  name: 'carouselSideImage',
  title: 'Carousel with image on left',
  type: 'object',
  icon: BiCarousel,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'carouselId',
      type: 'slug',
      title: 'Carousel Id',
    },
    {
      name: 'direction',
      type: 'string',
      title: 'Image on which side?',
      options: {
        list: [
          { title: 'Image Left', value: 'left' },
          { title: 'Image Right', value: 'right' },
        ],
      },
    },
    {
      name: 'items',
      type: 'array',
      title: 'Carousel items',
      of: [{ type: 'carouselItem' }],
    },
  ],
};
