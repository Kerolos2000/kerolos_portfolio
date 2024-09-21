import { ArrowDropDown } from '@mui/icons-material';

export const VITE_API_URL = import.meta.env.VITE_API_URL;
export const VITE_APP_NAME = import.meta.env.VITE_APP_NAME;

export const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
export const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
export const EMAIL_USER_ID = import.meta.env.VITE_EMAIL_USER_ID;

export const MAX_Z_INDEX = 10000;
export const APP_BAR_HEIGHT = 64;
export const DEFAULT_ICON_SIZE = 32;
export const DEFAULT_ICON = ArrowDropDown;
export const DEFAULT_TRANSITION = 'all 0.5s ease';
export const DEFAULT_MOTION_BODY = { rotate: [-5, 0], scale: [1.1, 1] };
export const DEFAULT_MOTION_LEFT = { x: [-100, 0] };
export const DEFAULT_MOTION_RIGHT = { x: [100, 0] };
