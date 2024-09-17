import { Stack, styled, Typography } from '@mui/material';

export const TypographyWithBorder = styled(Typography)(({ theme }) => ({
	'::before': {
		backgroundColor: theme.palette.primary.main,
		borderRadius: theme.shape.borderRadius,
		content: '""',
		height: '100%',
		left: 0,
		position: 'absolute',
		top: 0,
		width: theme.spacing(0.5),
	},
	alignItems: 'center',
	display: 'flex',
	paddingInlineStart: theme.spacing(2),
	position: 'relative',
}));

export const HStack = styled(Stack)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	gap: theme.spacing(1),
}));

export const VStack = styled(Stack)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(1),
}));
