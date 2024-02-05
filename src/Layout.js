

import { Link,Outlet } from "react-router-dom";

const Layout=()=>
{
    return(

        <>
        <div className="manubar">
        
        <h1 className="h1">POEM MANAGEMENT SYSTEM </h1>

        <hr size="2" color="blue"/>
        
        <div style={{backgroundColor:"white"}}>
        <Link to="home" className="link" >Home</Link>
        <Link to="insert" className="link">Insert</Link>
        <Link to="display" className="link">Display</Link>
        <Link to="search" className="link">Search</Link>
        <Link to="update" className="link">Update</Link>
        <Link to="contact" className="link">Contact</Link>
        </div>
        <hr size="1" color="blue"/>
        </div>
        
        <div>

        <Outlet/>
        </div>
        
        
        <hr size="2" color="blue"/> <br/>
        <center>
        <h3>www.mycompany.com all right reserved.</h3>
        </center><br/><br/>
        
        </>




    );
}

export default Layout;