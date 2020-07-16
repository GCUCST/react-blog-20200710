import React from 'react';
import { storiesOf ,addParameters } from '@storybook/react';
import Header from '../components/header';
import specialNotes from './sto.md';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import markdown from './sto.md';
addParameters({ notes: markdown });
storiesOf('Header', module)
  .add('with text', () => <Header />)
  .add('with some emoji', () => (
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
  ))
  .addParameters({ notes: specialNotes })
  .addDecorator(storyFn => <div style={{backgroundColor:'yellow', textAlign: 'center' }}>{storyFn()}</div>)
  // storiesOf（大标题，模块）
// .add('故事名称'，你的组件（故事）)
//addDecorator  方法在你的组件外面套一层div,装饰你的组件
//装饰器是一种使用一组通用组件包装故事的方法，例如，如果您想以某种格式包装故事，或为故事提供一些上下文。

storiesOf('Buttons234', module)
  .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button111</Button>
  ),{
    notes:{markdown}   // 将会渲染 markdown 内容
  }) 





//   新版写法
//   import MyComponent from './MyComponent';
//   export default {
//   title: 'Path/To/MyComponent', 
//   component: MyComponent,
//   decorators: [ ... ],   //添加装饰
//   parameters: { ... }    //添加参数
// }