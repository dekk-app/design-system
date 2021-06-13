import { createContext, useContext } from "react";

export const PopoutContext = createContext({
	open() {
		/**/
	},
	close() {
		/**/
	},
	toggle() {
		/**/
	},
});

export const usePopoutContext = () => useContext(PopoutContext);
