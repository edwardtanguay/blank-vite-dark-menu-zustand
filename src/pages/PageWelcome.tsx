import { useStore } from '../store';
import { Helmet } from 'react-helmet';

export const PageWelcome = () => {
	const {appTitle, jobs, skills} = useStore((state) => state);

	return (
		<div className="pageWelcome">
			<Helmet>
				<title>{appTitle} - Welcome</title>
			</Helmet>
			<p>This site has <strong>{jobs.length}</strong> jobs and <strong>{skills.length}</strong> skills.</p>
		</div>
	);
};

