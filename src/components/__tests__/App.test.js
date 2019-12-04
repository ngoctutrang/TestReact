import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
	const div = document.createElement('div');

	ReactDom.render(<App />, div);

	// Look inside the div
	// and checks to see if the CommentBox is in there
	console.log(div.innerHTML);
	expect(div.innerHTML).toContain('Component Box');
	ReactDom.unmountComponentAtNode(div);
})