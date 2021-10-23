// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { BaseContext } from './components/BaseContext';
import { Layout } from './components/Layout';
import { PhotoFeeds } from './components/PhotoFeeds';



function App() {
  const [searchText,setSearchText] = useState('');
  return (
    <BaseContext.Provider value={{searchText,setSearchText}}>
    <Layout>
      <PhotoFeeds />
    </Layout>
    </BaseContext.Provider>
  );
}

export default App;
