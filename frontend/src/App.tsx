import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { SelectedPage } from './shared/types';


function App() {
  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage,setIsTopPage]=useState<boolean>(true);

  useEffect(()=>{
   const handleScroll=()=>{
    if(window.scrollY ===0){
      setIsTopPage(true);
      setSelectedPage(SelectedPage.Home)
    }
    if(window.scrollY!==0){
      setIsTopPage(false)
    }
    window.addEventListener("scroll",handleScroll);

    return ()=>window.removeEventListener('scroll',handleScroll)

   } 
  },[])
  return (
    <div className='App bg-gray-20'>
    <Navbar 
    isTopOfPage={isTopOfPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage} 
    />
    </div>
  );
}

export default App;