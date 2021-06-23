import { GrNav } from 'react-icons/gr';

export default {
  name: 'navigationItem',
  type: 'object',
  title: 'Navigation Item',
  icon: GrNav,
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Navigation Text',
    },
    {
      name: 'navigationItemUrl',
      type: 'link',
      title: 'Navigation Item URL',
    },
  ],
};
