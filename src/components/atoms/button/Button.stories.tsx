import React from "react";

import type { Meta } from "@storybook/react";

import { Button } from "./Button";

const meta = {
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

export const Primary = {
	render: () => <Button onClick={() => console.log("hello")}>Hello world</Button>,
};
