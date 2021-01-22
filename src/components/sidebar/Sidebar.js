import './sidebar.css';
import imedidata from '../../assets/logoi.png'


const Sidebar = ({sidebarOpen,closeSidebar})=>{
    return(
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
                <div className="sidebar__title">
                    <div  className="sidebar__img">
                        <img src={imedidata} alt="imedidata" height="auto" width="100px"/>
                        
                    </div>
                    <i className="fa fa-times" id="sidebarIcon" onClick={()=>closeSidebar()}></i>
                </div>
                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <i className="fa fa-home"> </i>
                        <a href="/">Dashboard</a>
                        
                    </div>
                    <h2>Teams</h2>
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
                         <h2>Learn</h2>
                        <div className="sidebar__link">
                            <i className="fa fa-book"></i>
                            <a href="learn">Docs</a>
                        </div>
                        
                        {/*
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