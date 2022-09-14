import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import CountrySearch from './CountrySearch';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'CountrySearch',
    component: CountrySearch,
    parameters: {
        actions: {
            handles: ['click'],
        },
    },
} as ComponentMeta<typeof CountrySearch>;

const Template: ComponentStory<typeof CountrySearch> = (args) => <CountrySearch />;

export const NewZealand = Template.bind({});

NewZealand.play = async () => {
    const emailInput = screen.getByLabelText('Enter a country', {
        selector: 'input',
    });

    await userEvent.type(emailInput, 'New Zealand', {
        delay: 100,
    });

    const searchButton = screen.getByRole('button');
    await userEvent.click(searchButton)
};

export const America = Template.bind({});

America.play = async () => {
    const emailInput = screen.getByLabelText('Enter a country', {
        selector: 'input',
    });

    await userEvent.type(emailInput, 'US', {
        delay: 200,
    });

    const searchButton = screen.getByRole('button');
    await userEvent.click(searchButton)
};