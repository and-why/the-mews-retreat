import { BiImageAlt } from 'react-icons/bi';

export default {
  name: 'standardImageBlock',
  title: 'Standard Image Block',
  type: 'object',
  icon: BiImageAlt,
  fields: [
    {
      name: 'image',
      title: 'Standard Image',
      type: 'image',
    },
  ],
};
