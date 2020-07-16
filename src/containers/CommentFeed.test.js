import React from 'react';
import { render } from '@testing-library/react';
import CommentFeed from './CommentFeed';
import { wrap } from 'module';

test('renders learn react link', () => {
  const { getByText } = render(<CommentFeed />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('our first react test case', ()=>{
  const wrapper = render(<button key="abc">Hello</button>)
  const el = wrapper.queryByText('Hello')
  expect(el).toBeTruthy()
})