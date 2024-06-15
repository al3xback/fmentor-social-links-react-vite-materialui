import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header() {
	return (
		<Box component="header">
			<Typography
				variant="h1"
				sx={{
					position: 'absolute',
					width: '1px',
					height: '1px',
					padding: 0,
					margin: '-1px',
					border: 0,
					overflow: 'hidden',
					clip: 'rect(0, 0, 0, 0)',
				}}
			>
				Social links profile
			</Typography>
		</Box>
	);
}
