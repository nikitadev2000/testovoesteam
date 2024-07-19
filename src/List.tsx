import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/index";
import { motion, AnimatePresence } from "framer-motion";
import "./style/style.css";

const List: React.FC = () => {
	const items = useSelector((state: RootState) => state.list.items); // массив с квадратами
	const exit = { x: "100%", opacity: 0 }; // анимация удаления
	const initial = { x: "-100%" }; // анимация добавления

	return (
		<div className="list">
			<AnimatePresence initial={false}>
				{items.map(
					(
						{ id, color } // рисую список квадратов и на каждого вешаю анимацию
					) => (
						<motion.div
							key={id}
							className="item-list"
							initial={initial}
							animate={{ x: 0 }}
							exit={exit}
							transition={{ duration: 0.5 }}
							style={{
								backgroundColor: color,
							}}
						></motion.div>
					)
				)}
			</AnimatePresence>
		</div>
	);
};

export default List;
