import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import Main from './components/Main';
import { UserProvider } from './contexts/UserContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Main />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
