// import NxWelcome from './nx-welcome';

// export function App() {
//   return (
//     <div>
//       <NxWelcome title="my-mono-repo-1" />
//     </div>
//   );
// }

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Products } from '@my-nx-monorepo/products';
import NxWelcome from './nx-welcome';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/nx" element={<NxWelcome title="my-mono-repo-1" />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

export default App;
