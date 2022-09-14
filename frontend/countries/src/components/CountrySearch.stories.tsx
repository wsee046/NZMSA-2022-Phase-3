import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, within, userEvent } from '@storybook/testing-library';
import CountrySearch from './CountrySearch';
import CountryCard from './CountryCard';

import { expect } from '@storybook/jest';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'CountrySearch',
    component: CountrySearch,
    subcomponents: { CountryCard },
    parameters: {
        actions: {
            handles: ['click'],
        },
    },
} as ComponentMeta<typeof CountrySearch>;

const Template: ComponentStory<typeof CountrySearch> = (args) => <CountrySearch />;

export const NewZealand = Template.bind({});

NewZealand.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const countryInput = screen.getByLabelText('Enter a country', {
        selector: 'input',
    });

    await userEvent.type(countryInput, 'New Zealand', {
        delay: 100,
    });

    const searchButton = screen.getByRole('button');
    await userEvent.click(searchButton)

    await expect(
        canvas.getByText("Showing information for: New Zealand")
    ).toBeInTheDocument();
};

export const America = Template.bind({});

America.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const countryInput = screen.getByLabelText('Enter a country', {
        selector: 'input',
    });

    await userEvent.type(countryInput, 'US');

    const searchButton = screen.getByRole('button');
    await userEvent.click(searchButton)
    await expect(
        canvas.getByText("Showing information for: US")
    ).toBeInTheDocument();
};