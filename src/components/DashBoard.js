
import { Component } from 'react';

export default class DashBoard extends Component {
    //     componentDidMount(){
          
    //       $('[data-toggle="tooltip"]').tooltip();
    //       $(".side-nav .collapse").on("hide.bs.collapse", function() {                   
    //           $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
    //       });
    //       $('.side-nav .collapse').on("show.bs.collapse", function() {                        
    //           $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");        
    //       });
    //   }
    
  
  render(){

  
  return (
    <div >
     <div id="throbber" style={{display:'none', minHeight:'120px'}}></div>
    <div id="noty-holder"></div>
  <div id="wrapper">
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <div className="navbar-brand">PLATFORM</div> 
            </a>
        </div>
        <ul className="nav navbar-right top-nav">
            <li><a href="#" data-placement="bottom" data-toggle="tooltip" href="#" data-original-title="Stats"><i className="fa fa-bar-chart-o"></i>
                </a>
            </li>            
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Admin User <b className="fa fa-angle-down"></b></a>
                <ul className="dropdown-menu">
                    <li><a href="#"><i className="fa fa-fw fa-user"></i> Edit Profile</a></li>
                    <li><a href="#"><i className="fa fa-fw fa-cog"></i> Change Password</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="fa fa-fw fa-power-off"></i> Logout</a></li>
                </ul>
            </li>
        </ul>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav side-nav">
                <li>
                    <a href="#" data-toggle="collapse" data-target="#submenu-1"><i className="fa fa-fw fa-search"></i> MENU 1 <i className="fa fa-fw fa-angle-down pull-right"></i></a>
                    <ul id="submenu-1" className="collapse">
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> SUBMENU 1.1</a></li>
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> SUBMENU 1.2</a></li>
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> SUBMENU 1.3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" data-toggle="collapse" data-target="#submenu-2"><i className="fa fa-fw fa-star"></i>  MENU 2 <i className="fa fa-fw fa-angle-down pull-right"></i></a>
                    <ul id="submenu-2" className="collapse">
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> SUBMENU 2.1</a></li>
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> SUBMENU 2.2</a></li>
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> SUBMENU 2.3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="investigaciones/favoritas"><i className="fa fa-fw fa-user-plus"></i>  MENU 3</a>
                </li>
                <li>
                    <a href="sugerencias"><i className="fa fa-fw fa-paper-plane-o"></i> MENU 4</a>
                </li>
                <li>
                    <a href="faq"><i className="fa fa-fw fa fa-question-circle"></i> MENU 5</a>
                </li>
            </ul>
        </div>
    </nav>

    <div id="page-wrapper">
        <div className="container-fluid">
            <div className="row" id="main" >
                <div className="col-sm-12 col-md-12 well" id="content">
                    <h1>Welcome Admin!</h1>
                </div>
            </div>
           
        </div>
        
    </div>
   
    </div>
    </div>
  );
}
}


