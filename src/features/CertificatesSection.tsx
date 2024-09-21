import { Masonry } from '@mui/lab';
import { alpha, Box, useTheme } from '@mui/material';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Motion, Section, SectionHeader } from 'src/components';
import { DEFAULT_MOTION_BODY, Sections } from 'src/constant';

import html from '../assets/html-certificate.webp';
import js from '../assets/js-crtificate.webp';
import route from '../assets/route.webp';
import web from '../assets/web-fund.webp';

const certificates = [
	{ id: '1', image: route },
	{ id: '2', image: web },
	{ id: '3', image: js },
	{ id: '4', image: html },
];

export interface CertificatesSectionProps {}

export const CertificatesSection: React.FC<CertificatesSectionProps> = () => {
	const theme = useTheme();
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const selectedCertificate = certificates.find(cert => cert.id === selectedId);

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
				>
					{certificates.map(certificate => {
						const { id, image } = certificate;
						return (
							<Motion
								key={id}
								layoutId={id}
								onClick={() => setSelectedId(id)}
								style={{
									borderRadius: theme.shape.borderRadius,
									cursor: 'pointer',
								}}
								transition={{
									mass: 1.5,
									stiffness: 150,
									type: selectedId ? 'tween' : 'spring',
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
						<>
							<Motion
								layoutId={selectedId}
								onClick={() => setSelectedId(null)}
								style={{
									alignItems: 'center',
									backgroundColor: alpha(theme.palette.common.black, 0.5),
									display: 'flex',
									flexDirection: 'column',
									height: '100vh',
									justifyContent: 'center',
									left: 0,
									position: 'fixed',
									top: 0,
									width: '100vw',
									zIndex: theme.zIndex.drawer + 1,
								}}
							>
								<Box
									alt='certificate'
									component='img'
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
						</>
					)}
				</AnimatePresence>
			</LayoutGroup>
		</Section>
	);
};
