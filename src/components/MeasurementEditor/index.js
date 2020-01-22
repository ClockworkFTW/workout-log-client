import React from "react";

import Menu from "./Menu";
import Editor from "./Editor";
import MainLayout from "../common/MainLayout";

const Measurements = () => (
	<MainLayout>
		<Menu />
		<Editor />
	</MainLayout>
);

export default Measurements;
