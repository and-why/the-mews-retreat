import { FaFeatherAlt } from 'react-icons/fa';

export default {
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  icon: FaFeatherAlt,
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Highlight', value: 'highlight' },
            ],
          },
        },
      ],
    },
  ],
};
