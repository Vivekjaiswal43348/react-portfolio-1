// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'

// ReactDOM.createRoot (<App />, document.getElementById('root'));
const rootElem =document.getElementById('root');
const root = createRoot(rootElem);
root.render(<App />);