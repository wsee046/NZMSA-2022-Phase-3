import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import LinksButton from './LinksButton';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'LinksButton',
    component: LinksButton,
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {
        actions: {
            handles: ['click'],
        },
    },
} as ComponentMeta<typeof LinksButton>;

const Template: ComponentStory<typeof LinksButton> = (args) => <LinksButton {...args} />;

export const testLink = Template.bind({});

testLink.args = {
    /*👇 The args you need here will depend on your component */
    label: "Test Button"
};