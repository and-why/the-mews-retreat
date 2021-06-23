import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';

export default {
  name: 'sideContent',
  title: 'Title on left, content on right',
  type: 'object',
  icon: BsReverseLayoutTextSidebarReverse,
  fields: [
    {
      name: 'text',
      title: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Top image or icon',
      type: 'image',
    },
    {
      name: 'content',
      title: 'Text Block',
      type: 'textBlock',
    },
  ],
};
