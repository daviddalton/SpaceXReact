import React from 'react';
import './App.css';
import Dashboard from "./Dashboard";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
              <Dashboard/>
          </header>
        </div>
      </QueryClientProvider>
  );
}

export default App;
