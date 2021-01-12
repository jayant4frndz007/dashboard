import './navbar.css';
import avatar from '../../assets/avatar.svg';


const Navbar =({sidebarOpen,openSidebar})=>{
    return(
        <nav className='navbar'>
                <div className="nav_icon" onClick={()=> openSidebar()}>
                        <i className="fa fa-bars"></i>
                </div>
                <div className="navbar__left">
                    <a className="active_link" href="#">Admin</a>
                   
                    <a  href="#">User</a>

                </div>
                <div className="navbar__right">
                    <a href="#">
                        <i className="fa fa-search"></i>
                    </a>
                    <a href="#">
                        <i  className="fa fa-clock-o"></i>
                    </a>
                    <a href="#" >
                            <img width="30" src={avatar} alt="avatr"/>
                    </a>
                </div>
        </nav>

    )
}

export default Navbar;