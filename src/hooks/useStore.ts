import { Mode } from 'src/constant';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
	mode: Mode;
	setMode: (mode: Mode) => void;
};

export const useStore = create<Store>()(
	persist(
		set => ({
			mode: Mode.Light,
			setMode: mode => set(() => ({ mode })),
		}),
		{
			name: 'store',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
