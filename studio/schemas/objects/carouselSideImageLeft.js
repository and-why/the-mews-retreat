import { BiCarousel } from 'react-icons/bi';

export default {
  name: 'carouselSideImageLeft',
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
      name: 'items',
      type: 'array',
      title: 'Carousel items',
      of: [{ type: 'carouselItem' }],
    },
  ],
};
