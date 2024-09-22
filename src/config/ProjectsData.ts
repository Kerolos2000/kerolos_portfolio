import eCommerce from '../assets/e-commerce.webp';
import innova from '../assets/innova.webp';
import noxe from '../assets/noxe.webp';
import portfolio from '../assets/sara-portfolio.webp';

interface Project {
	title: string;
	image: string;
	link: string;
}

export const Projects: Project[] = [
	{
		image: innova,
		link: 'https://innova.com.eg/',
		title: 'Innova',
	},
	{
		image: portfolio,
		link: 'https://sara-portfolio-sigma.vercel.app/',
		title: 'Sara Portfolio',
	},
	{
		image: noxe,
		link: 'https://movies-app-react-lime.vercel.app/',
		title: 'noxe Movie App',
	},
	{
		image: eCommerce,
		link: 'https://e-commerce-react-pied-ten.vercel.app/',
		title: 'E-Commerce Store',
	},
];
