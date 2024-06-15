import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

import Header from './components/Header.jsx';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer.jsx';

const customColors = {
	green: '#c5f82a',
	greenDark: '#b1df26',
	grey: '#333',
	greyDark: '#1f1f1f',
	blackOff: '#141414',
	white: '#fff',
};

const customTheme = createTheme({
	palette: {
		custom: {
			...customColors,
		},
		primary: {
			main: '#c5f82a',
		},
		secondary: {
			main: '#fff',
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
		body1: {
			fontSize: '0.875rem',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					position: 'relative',
					display: 'flex',
					minHeight: '100vh',
					backgroundColor: customColors.blackOff,
					WebkitFontSmoothing: 'antialiased',
					textRendering: 'optimizeSpeed',
					color: customColors.white,
					lineHeight: 1.4,
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				h1: {},
			},
		},
	},
});

// const customTheme = extendTheme({
// 	colorSchemes: {
// 		light: {
// 			palette: {
// 				custom: {
// 					...customColors
// 				},
// 				background: {
// 					body: '#141414'
// 				},
// 				text: {
// 					primary: '#fff',
// 					secondary: '#fff'
// 				},
// 				primary: {
// 					solidBg: customColors.grey,
// 					solidHoverBg: customColors.green,
// 					solidActiveBg: customColors.greenDark
// 				}
// 			}
// 		}
// 	},
// 	components: {
// 		JoyTypography: {
// 			styleOverrides: {
// 				root: {
// 					fontSize: 'inherit'
// 				}
// 			}
// 		},
// 		JoyLink: {
// 			styleOverrides: {
// 				root: {
// 					marginInline: 0
// 				}
// 			}
// 		}
// 	}
// });

function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />

			<Header />
			<Stack component="main" direction="row" sx={{ flex: 'auto' }}>
				<Stack
					direction="row"
					sx={{
						flex: 'auto',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '0 1rem',
					}}
				>
					<Profile />
				</Stack>
			</Stack>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
