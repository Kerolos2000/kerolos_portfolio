import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress, Grid2, TextField } from '@mui/material';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Motion, Section, SectionHeader } from 'src/components';
import {
	DEFAULT_ICON_SIZE,
	DEFAULT_MOTION_BODY,
	DEFAULT_MOTION_SCALE,
	EMAIL_SERVICE_ID,
	EMAIL_TEMPLATE_ID,
	EMAIL_USER_ID,
	Sections,
} from 'src/constant';
import { useNotify } from 'src/hooks';
import { contactSchema } from 'src/validation';
import { z } from 'zod';

type DataValues = z.infer<typeof contactSchema>;

export interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = () => {
	const { notify } = useNotify();
	const [loading, setLoading] = useState(false);
	const {
		formState: { errors },
		handleSubmit,
		register,
		reset,
	} = useForm<DataValues>({
		resolver: zodResolver(contactSchema),
	});

	const FormFields = [
		{
			error: !!errors.name,
			helperText: errors.name?.message,
			id: 'Name',
			label: 'Your Name',
			register: 'name',
			size: { md: 6, xs: 12 },
			type: 'text',
		},
		{
			error: !!errors.email,
			helperText: errors.email?.message,
			id: 'Email',
			label: 'Your Email',
			register: 'email',
			size: { md: 6, xs: 12 },
			type: 'email',
		},
		{
			error: !!errors.subject,
			helperText: errors.subject?.message,
			id: 'Subject',
			label: 'Subject',
			register: 'subject',
			size: { md: 12, xs: 12 },
			type: 'text',
		},
		{
			error: !!errors.message,
			helperText: errors.message?.message,
			id: 'Message',
			label: 'Message For Me',
			multiline: true,
			register: 'message',
			rows: 4,
			size: { md: 12, xs: 12 },
			type: 'text',
		},
	];

	const onSubmit = async (data: DataValues) => {
		setLoading(true);
		try {
			await emailjs.send(
				EMAIL_SERVICE_ID,
				EMAIL_TEMPLATE_ID,
				data as Record<string, unknown>,
				EMAIL_USER_ID,
			);
			notify('Message sent successfully!', { type: 'success' });
			reset();
		} catch {
			notify('Something went wrong. Please try again.', { type: 'error' });
		}
		setLoading(false);
	};

	return (
		<Section id={Sections.Contact}>
			<SectionHeader
				description='Feel free to contact me if you have any questions or want to work together.'
				title='Contact'
			/>
			<Box
				component='form'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Grid2
					container
					spacing={2}
				>
					{FormFields.map(field => {
						const {
							error,
							helperText,
							id,
							label,
							multiline,
							register: registerField,
							rows,
							size,
							type,
						} = field;

						return (
							<Grid2
								key={id}
								size={size}
							>
								<Motion whileInView={DEFAULT_MOTION_BODY}>
									<TextField
										fullWidth
										id={id}
										label={label}
										type={type}
										variant='outlined'
										{...register(registerField as never)}
										error={error}
										helperText={helperText}
										multiline={multiline}
										rows={rows}
									/>
								</Motion>
							</Grid2>
						);
					})}

					<Grid2 size={12}>
						<Motion
							style={{ width: 'fit-content' }}
							whileHover={DEFAULT_MOTION_SCALE}
						>
							<Button
								color='primary'
								disabled={loading}
								size='large'
								startIcon={
									loading ? (
										<CircularProgress
											color='inherit'
											size={DEFAULT_ICON_SIZE / 2}
										/>
									) : null
								}
								type='submit'
								variant='contained'
							>
								{loading ? 'Sending...' : 'Send Message'}
							</Button>
						</Motion>
					</Grid2>
				</Grid2>
			</Box>
		</Section>
	);
};
