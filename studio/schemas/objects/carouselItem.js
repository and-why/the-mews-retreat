import { GrNav } from 'react-icons/gr';

export default {
  name: 'carouselItem',
  type: 'object',
  title: 'Carousel Item',
  icon: GrNav,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading Text',
    },
    {
      name: 'subheading',
      type: 'string',
      title: 'Subheading Text',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image for carousel Item',
      options: { hotspot: true },
    },
  ],
};
