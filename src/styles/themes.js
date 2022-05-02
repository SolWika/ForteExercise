import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

	body {
		min-height: 100vh;
		width:100vw;
		background-color: ${(props) => props.theme.body};
        font-family: 'Roboto', sans-serif;
	}
`;
