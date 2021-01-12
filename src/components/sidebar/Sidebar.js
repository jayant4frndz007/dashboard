import './sidebar.css';
import logo from '../../assets/logo.png';
import imedidata from '../../assets/imedidata.png'


const Sidebar = ({sidebarOpen,closeSidebar})=>{
    return(
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
                <div className="sidebar__title">
                    <div className="sidebar__img">
                        <img src={imedidata} alt="imedidata" height="100px" width="100px"/>
                        <h1>Platform</h1>
                    </div>
                    <i className="fa fa-times" id="sidebarIcon" onClick={()=>closeSidebar()}></i>
                </div>
                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <i className="fa fa-home"> </i>
                        <a href="/">Dashboard</a>
                        
                    </div>
                    <h2>TEAMS</h2>
                        <div className="sidebar__link">
                            <i className="fa fa-user-secret"></i>
                            <a href="core_services"> Core Services</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-universal-access"></i>
                            <a href="dalton"> Dalton</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-wrench"></i>
                            <a href="aux_services"> Auxillary services</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-archive"></i>
                            <a href="sre"> SRE</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-simplybuilt"></i>
                            <a href="ui"> UI</a>
                        </div>
                        {/* <h2>Leave</h2>
                        <div className="sidebar__link">
                            <i className="fa fa-question"></i>
                            <a href="#">Requests</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-sign-out"></i>
                            <a href="#">Leave Policy</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-calendar-check-o"></i>
                            <a href="#">Special Days</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-files-o"></i>
                            <a href="#"> Apply for leave</a>
                        </div>
                        <h2>PAYROLL</h2>
                        <div className="sidebar__link">
                            <i className="fa fa-money"></i>
                            <a href="#"> Payroll</a>
                        </div>
                        <div className="sidebar__link">
                            <i className="fa fa-power-off"></i>
                            <a href="#"> Log out</a>
                        </div> */}
                    </div>
        </div>
    )

}

export default Sidebar;