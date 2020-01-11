import React from "react";

import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Library from "./Library";

const ExerciseList = () => {
	return (
		<MainLayout>
			<Menu />
			<Library />
		</MainLayout>
	);
};

export default ExerciseList;
