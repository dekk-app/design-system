import { Avatar, AvatarProps } from "@dekk-ui/avatar";
import { light } from "@dekk-ui/theme";
import { Story } from "@storybook/react";
import { ThemeProvider } from "@storybook/theming";
import faker from "faker";
import React from "react";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const user = {
	name: faker.name.findName(firstName, lastName),
	avatar: faker.image.avatar(),
};

const Template: Story<AvatarProps> = args => {
	return (
		<ThemeProvider theme={light}>
			<Avatar {...args} />
			<Avatar>Foo</Avatar>
		</ThemeProvider>
	);
};

export const Simple = Template.bind({});

Simple.args = {
	src: user.avatar,
	alt: user.name,
};

const story = {
	component: Avatar,
	title: "Design System/Atoms/Avatar",
};

export default story;
