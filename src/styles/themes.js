import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	body {
		background-color: ${(props) => props.theme.body};
        font-family: 'Roboto', sans-serif;
	}
`;
