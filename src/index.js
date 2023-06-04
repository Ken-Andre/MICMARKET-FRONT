import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM  from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

// ReactDOM.render(
//     <React.StrictMode>
//         <AuthProvider>
//             <App />
//         </AuthProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
