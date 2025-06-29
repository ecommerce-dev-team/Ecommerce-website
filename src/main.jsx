import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
// import store from './Components/Store';
import { BrowserRouter } from 'react-router-dom'; // ✅ استيراد BrowserRouter
import Shopcontextprovider from './Components/Context/Context.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
   {/* <Provider store={store}> */}
      <QueryClientProvider client={queryClient}>
           <Shopcontextprovider>
            <BrowserRouter> {/* ✅ لف App هنا */}
              <App />
            </BrowserRouter>

           </Shopcontextprovider>
   
      </QueryClientProvider>
    {/* </Provider> */}


  
  </StrictMode>
);
