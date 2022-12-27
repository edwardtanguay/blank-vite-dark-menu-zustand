import { useEffect } from 'react';
import create from 'zustand';
import axios from 'axios';

const jobsUrl = 'https://edwardtanguay.vercel.app/share/jobs.json';

interface IStore {
	appTitle: string;
	loadJobs: () => void;
	jobs: [];
}

export const useStore = create<IStore>(
	(set): IStore => ({
		appTitle: 'Info Site',
		jobs: [],
		loadJobs: async () => {
			const _jobs = (await axios.get(jobsUrl)).data;
			set((state) => {
				const _state = { ...state };
				_state.jobs = _jobs;
				return _state;
			});
		},
	})
);
