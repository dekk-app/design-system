import { light } from "@dekk-ui/theme";
import { ThemeProvider } from "@storybook/theming";
import React from "react";
import { Story } from "@storybook/react";
import faker from "faker";
import { Avatar, AvatarProps } from "./";

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
