import { Avatars, AvatarsProps } from "@dekk-ui/avatars";
import { take } from "@dekk-ui/utils/take";
import { Story } from "@storybook/react";
import React from "react";
import { people } from "../../../../resources/data/people";

const Template: Story<AvatarsProps> = args => {
	return <Avatars {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
	people: take(people, 2),
};

export const Four = Template.bind({});

Four.args = {
	people: take(people, 4),
};

export const MoreThanFour = Template.bind({});

MoreThanFour.args = {
	people,
};

const story = {
	component: Avatars,
	title: "Design System/Molecules/Avatars",
};

export default story;
