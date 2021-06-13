import { Avatar } from "@dekk-ui/avatar";
import { take } from "@dekk-ui/utils/take";
import React, { FC } from "react";
import { StyledAvatars } from "./styled";
import { AvatarsProps } from "./types";

export const Avatars: FC<AvatarsProps> = ({ people, ...props }) => {
	const more = people.length > 4;
	const maxPeople = React.useMemo(() => (more ? take(people, 3) : people), [people, more]);
	return (
		<StyledAvatars {...props}>
			{maxPeople.map(user => {
				return <Avatar key={user.id} src={user.avatar} alt={user.name} />;
			})}
			{more && <Avatar>+5</Avatar>}
		</StyledAvatars>
	);
};
