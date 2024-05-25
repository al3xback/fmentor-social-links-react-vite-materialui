import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function Footer() {
	return (
		<Stack
			component='footer'
			sx={{
				position: 'absolute',
				left: 0,
				bottom: 0,
				width: '100%',
				padding: '0.75rem 0',
				textAlign: 'center'
			}}
		>
			<Stack sx={{ padding: '0 1rem' }}>
				<Typography sx={{ fontSize: '0.75rem' }}>
					Challenge by{' '}
					<Link
						href='https://www.frontendmentor.io?ref=challenge'
						underline='none'
						rel='noopener'
						target='_blank'
						sx={{
							color: 'custom.green',
							':hover': {
								color: 'custom.greenDark'
							}
						}}
					>
						Frontend Mentor
					</Link>
					. Coded by{' '}
					<Link
						href='https://github.com/al3xback'
						underline='none'
						rel='noopener'
						target='_blank'
						sx={{
							color: 'custom.green',
							':hover': {
								color: 'custom.greenDark'
							}
						}}
					>
						al3xback
					</Link>
					.
				</Typography>
			</Stack>
		</Stack>
	);
}
