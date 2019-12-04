import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';
import ComponentList from '../CommentList';


it('shows a comment box', () => {
	const wrapped = shallow(<App />);
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a ComponentList', () => {
	const wrapped = shallow(<App />);
	expect(wrapped.find(ComponentList).length).toEqual(1);
})