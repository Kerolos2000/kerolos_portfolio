import { Masonry } from '@mui/lab';
import { alpha, useTheme } from '@mui/material';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Motion, Section, SectionHeader } from 'src/components';
import { Certificates } from 'src/config';
import { DEFAULT_MOTION_BODY, Sections } from 'src/constant';

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
							<Motion
								key={id}
								onClick={() => setSelectedId(id)}
								style={{
									borderRadius: theme.shape.borderRadius,
									cursor: 'pointer',
								}}
								whileInView={DEFAULT_MOTION_BODY}
							>
								<motion.img
									alt='certificate'
									loading='lazy'
									src={image}
									style={{
										borderRadius: theme.shape.borderRadius,
										height: '100%',
										objectFit: 'cover',
										width: '100%',
									}}
								/>
							</Motion>
						);
					})}
				</Masonry>

				<AnimatePresence>
					{selectedId && selectedCertificate && (
						<Motion
							onClick={() => setSelectedId(null)}
							style={{
								alignItems: 'center',
								backgroundColor: alpha(theme.palette.common.black, 0.5),
								display: 'flex',
								flexDirection: 'column',
								height: '100dvh',
								justifyContent: 'center',
								left: 0,
								position: 'fixed',
								top: 0,
								width: '100vw',
								zIndex: theme.zIndex.drawer + 1,
							}}
						>
							<motion.img
								alt='certificate'
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								initial={{ opacity: 0, scale: 0.8 }}
								src={selectedCertificate.image}
								style={{
									aspectRatio: '4/3',
									borderRadius: theme.shape.borderRadius,
									height: theme.spacing(50),
									objectFit: 'cover',
									zIndex: theme.zIndex.drawer + 1,
								}}
							/>
						</Motion>
					)}
				</AnimatePresence>
			</LayoutGroup>
		</Section>
	);
};
