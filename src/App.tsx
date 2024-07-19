import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./store/index";
import List from "./List";

const App: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<div style={{ padding: "20px" }}>
			<button onClick={() => dispatch(addItem())}>Добавить</button>
			<button onClick={() => dispatch(removeItem())}>Удалить</button>
			<List />
		</div>
	);
};

export default App;
