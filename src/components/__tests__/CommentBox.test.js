import React, { Component } from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a texterea that user can type in', () => {
    //event: change
    //mock: event => event.target.value
    wrapped.find('textarea').simulate('change', {
        target:{
            value: 'New Comment'
        }
    });

    // Force component update
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('New Comment');
})