import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashbaoard from './Dashboard/dashboard';
import Footer from './Dashboard/footer'

export default function App() {
  return (
    <div id="wrapper">
         <Sidebar></Sidebar>
         <div id="content-wrapper" class="d-flex flex-column">
         <div id="content">
           <Topbar></Topbar>
           <div class="container-fluid">
             <Dashbaoard></Dashbaoard>
              <Footer></Footer>
           </div>
         </div>
         </div>
    </div>
  )
}


