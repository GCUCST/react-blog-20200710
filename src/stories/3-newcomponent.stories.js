import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hhhh from './hhhh'

storiesOf('TTTTTTTTTTTTT', module)
  .add('测试', () => <Hhhh/>)
  .addDecorator(storyFn => 
  <div style={{border:"1px solid",textAlign:"center"}}>{storyFn()}</div>)
//   .add('with some emoji', () => (
//     <button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </button>
//   ));