import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import ComponentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />);
})

it('shows a comment box', () => {
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a ComponentList', () => {
	expect(wrapped.find(ComponentList).length).toEqual(1);
})