import { Avatar, AvatarProps } from "@dekk-ui/avatar";
import { Story } from "@storybook/react";
import React from "react";
import { people } from "../../../../resources/data/people";

const [user] = people;

const Template: Story<AvatarProps> = args => {
	return (
		<>
			<Avatar {...args} />
			<Avatar>Foo</Avatar>
		</>
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
