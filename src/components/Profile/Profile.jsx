import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import avatarImg from '../../assets/avatar.jpeg';
import styles from './Profile.module.css';

export default function Profile() {
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				maxWidth: '20.625rem',
				bgcolor: 'custom.greyDark',
				margin: '2.5rem 0 3.75rem',
				borderRadius: '12px',
				'@media (min-width: 48em)': {
					maxWidth: '22.125rem'
				},
				color: 'inherit'
			}}
		>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1.5rem',
					padding: '1.5rem !important',
					'@media (min-width: 48em)': {
						padding: '2.25rem !important'
					}
				}}
			>
				<img
					src={avatarImg}
					className={styles.image}
					width={80}
					height={80}
					alt='Jessica Randall'
				/>
				<Stack spacing='0.375rem' sx={{ textAlign: 'center' }}>
					<Typography
						variant='h2'
						sx={{
							fontSize: '1.5rem',
							fontWeight: 600,
							letterSpacing: 'normal'
						}}
					>
						Jessica Randall
					</Typography>
					<Typography
						sx={{
							fontWeight: 700,
							color: 'custom.green'
						}}
					>
						London, United Kingdom
					</Typography>
				</Stack>
				<Typography>
					&Prime;Front-end developer and avid reader.&Prime;
				</Typography>
				<List
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignSelf: 'normal',
						gap: '1rem',
						padding: 0
					}}
				>
					{[
						'GitHub',
						'Frontend Mentor',
						'LinkedIn',
						'Twitter',
						'Instagram'
					].map((item) => (
						<ListItem
							key={item}
							sx={{
								flexDirection: 'column',
								alignItems: 'normal',
								padding: 0
							}}
						>
							<Link
								href='#'
								underline='none'
								sx={{
									p: '0.75rem',
									bgcolor: 'custom.grey',
									borderRadius: '8px',
									fontWeight: 600,
									color: 'custom.white',
									textAlign: 'center',
									':hover': {
										bgcolor: 'custom.green',
										color: 'custom.blackOff'
									},
									':active': {
										bgcolor: 'custom.greenDark'
									}
								}}
							>
								{item}
							</Link>
						</ListItem>
					))}
				</List>
			</CardContent>
		</Card>
	);
}
