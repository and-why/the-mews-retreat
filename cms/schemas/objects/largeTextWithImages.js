import { BsLayoutWtf } from 'react-icons/bs';

export default {
  name: 'largeTextWithImages',
  title: 'Large Text with 2 images',
  type: 'object',
  icon: BsLayoutWtf,
  fields: [
    {
      name: 'text',
      title: 'Large Text',
      type: 'string',
    },
    {
      name: 'image1',
      title: 'Top Image',
      type: 'image',
    },
    {
      name: 'image2',
      title: 'Bottom Image',
      type: 'image',
    },
  ],
};
