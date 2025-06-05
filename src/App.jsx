import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { createContext, useContext, useState } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Products from './Pages/Products';
import UploadProduct from './Pages/Products/AddProduct';

// Full Scrren Pannel
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';




const MyContext = createContext();
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




function App() {
const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
  open: false,
  model:'',
});
  

  // const handleCloseFullScreenPanel = () => {
  //   setIsOpenFullScreenPanel(true);
  // };
  const handleCloseFullScreenPanel = () => {
  setIsOpenFullScreenPanel({ open: false, model: '' });
};
  

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);


  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <>
          <section className='main'>
            <Header />
            <div className="contentMain flex">
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[18%]' : 'w-[0%] opacity-0'} transition-all `}>
                <Sidebar />
              </div>
              <div className={`contentRight py-4 px-5 ${isSidebarOpen === false ? 'w-full' : 'w-[82%]'} transition-all`}>
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ,
    },
    {
      path: '/login',
      element:
        <>
          <Login />,
        </>
      ,
    },
    {
      path: '/sign-up',
      element:
        <>
          <SignUp />
        </>
      ,
    },

    {
      path: '/products',
      element:
        <>
          <section className='main'>
            <Header />
            <div className="contentMain flex">
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[18%]' : 'w-[0px] opacity-0'} transition-all `}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${isSidebarOpen === false ? 'w-full' : 'w-[82%]'} transition-all`}
              >
                <Products />
              </div>
            </div>
          </section>
        </>
      ,
    },
    {
      path: '/upload-products',
      element:
        <>
          <UploadProduct />
        </>
      ,
    },
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel
  };



  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />

         <Dialog
        fullScreen
        open={isOpenFullScreenPanel.open}
        onClose={handleCloseFullScreenPanel}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseFullScreenPanel}
              aria-label="close"
            >
              <IoClose  className='text-gray-800'/>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             <span className='text-gray-800'>{isOpenFullScreenPanel?.model}</span>
            </Typography>
            
          </Toolbar>
        </AppBar>
        {
          isOpenFullScreenPanel?.model === "Add Product" && <UploadProduct/>
        }
      </Dialog>
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
