import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';
import {QueryClientProvider} from '@tanstack/react-query';
import Home from './pages/Home';
import About from './pages/About';
import queryClient from './queryClient';

function App() {


  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
