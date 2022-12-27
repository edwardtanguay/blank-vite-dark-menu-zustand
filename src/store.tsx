import create from 'zustand';

interface IStore {
	appTitle: string;
}

export const useStore = create<IStore>(
	(set): IStore => ({
		appTitle: 'Info Site'
	})
);
