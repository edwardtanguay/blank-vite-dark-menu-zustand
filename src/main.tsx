import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { LoadStore } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<AppProvider>
		<BrowserRouter>
			<>
			<LoadStore/>
			<App />
			</>
		</BrowserRouter>
	</AppProvider>
);
