

import {useState} from 'react';
import '../css/dashboard.css';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main';
import {BrowserRouter ,Switch, Route} from 'react-router-dom';
import Platform from '../components/platform/Platform';
import Learn from '../components/learn/Learn';

const  PlatformDashBoard =()=> {
  const [sidebarOpen,setSidebarOpen] = useState(false);

  const openSidebar =()=>{
    setSidebarOpen(true);
  }
  const closeSidebar =()=>{
    setSidebarOpen(false);
  }
  return (
    <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/> 
        <BrowserRouter>
               
                <Switch>
                    <Route component={Main} path="/" exact={true} />
                    <Route component={Learn} path="/learn" />
                    <Route component={Platform} path="/:id" />
                    
                </Switch>
               
            </BrowserRouter>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
}

export default PlatformDashBoard;
