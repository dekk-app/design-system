import { Avatars, AvatarsProps, Person } from "@dekk-ui/avatars";
import { range } from "@dekk-ui/utils/range";
import { take } from "@dekk-ui/utils/take";
import { Story } from "@storybook/react";
import faker from "faker";
import React from "react";

const people: Person[] = range(10).map(() => {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	return {
		id: `${firstName}_${lastName}`,
		name: faker.name.findName(firstName, lastName),
		avatar: faker.image.avatar(),
	};
});

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
