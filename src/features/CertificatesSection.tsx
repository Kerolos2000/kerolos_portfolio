import { Masonry } from '@mui/lab';
import { alpha, Box, useTheme } from '@mui/material';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Motion, Section, SectionHeader } from 'src/components';
import { Certificates } from 'src/config';
import { Sections } from 'src/constant';

export interface CertificatesSectionProps {}

export const CertificatesSection: React.FC<CertificatesSectionProps> = () => {
	const theme = useTheme();
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const selectedCertificate = Certificates.find(cert => cert.id === selectedId);

	return (
		<Section id={Sections.Certificates}>
			<SectionHeader
				description='Here are some of the certificates I have earned'
				title='Certificates'
			/>
			<LayoutGroup>
				<Masonry
					columns={{ lg: 4, md: 3, sm: 2, xs: 1 }}
					spacing={2}
					sx={{ margin: { xs: '0' } }}
				>
					{Certificates.map(certificate => {
						const { id, image } = certificate;
						return (
							<Box
								component={Motion}
								key={id}
								onClick={() => setSelectedId(id)}
								sx={{
									borderRadius: 1,
									boxShadow: theme.shadows[3],
									cursor: 'pointer',
								}}
								whileHover={{
									boxShadow: theme.shadows[10],
								}}
							>
								<Box
									alt='certificate'
									component={motion.img}
									loading='lazy'
									src={image}
									sx={{
										borderRadius: 1,
										height: '100%',
										objectFit: 'cover',
										width: '100%',
									}}
									viewport={{ once: true }}
								/>
							</Box>
						);
					})}
				</Masonry>

				<AnimatePresence>
					{selectedId && selectedCertificate && (
						<Box
							onClick={() => setSelectedId(null)}
							sx={{
								alignItems: 'center',
								backgroundColor: alpha(theme.palette.common.black, 0.5),
								display: 'flex',
								flexDirection: 'column',
								height: '100dvh',
								justifyContent: 'center',
								left: 0,
								padding: 2,
								position: 'fixed',
								top: 0,
								width: '100vw',
								zIndex: theme.zIndex.drawer + 1,
							}}
						>
							<Box
								alt='certificate'
								animate={{ opacity: 1, scale: 1 }}
								component={motion.img}
								exit={{ opacity: 0, scale: 0.8 }}
								initial={{ opacity: 0, scale: 0.8 }}
								src={selectedCertificate.image}
								sx={{
									aspectRatio: '4/3',
									borderRadius: 1,
									objectFit: 'cover',
									width: { md: '50%', xs: '100%' },
									zIndex: theme.zIndex.drawer + 1,
								}}
							/>
						</Box>
					)}
				</AnimatePresence>
			</LayoutGroup>
		</Section>
	);
};
