import { BsCardImage } from 'react-icons/bs';

export default {
  name: 'fullWidthImage',
  title: 'Image that is Full Width',
  type: 'object',
  icon: BsCardImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'image',
      title: 'Full Width Image',
      type: 'image',
    },
  ],
};
