import './main.css';
import hello from '../../assets/hello.svg';
import Chart from '../charts/Chart';

const Main =(props)=>{
    return(<main>
       
                <div className="main__container">
                    <div className="main__title">
                        <img src={hello} alt='hello' />
                        <div className="main__greeting">
                            <h1>Hello Platform Team</h1>
                            <p>Welcome to Platform Dashboard</p>
                        </div>
                    </div>
                    <div className="main__cards"> 
                                <div className="card">
                                <i className="fa fa-user-o fa-2x text-lightblue"></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">In Production</p>
                                    <span className="font-bold text-title">250</span>
                                </div>
                                </div>

                                <div className="card">
                                <i className="fa fa-calendar fa-2x text-red"></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">On Boarding</p>
                                    <span className="font-bold text-title">20</span>
                                </div>
                                </div>
                                <div className="card">
                                <i className="fa fa-lock fa-2x text-yellow"></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">Joining</p>
                                    <span className="font-bold text-title">20</span>
                                </div>
                                </div>

                                <div className="card">
                                <i className="fa fa-envelope-open fa-2x text-lightblue"></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">Open Positions</p>
                                    <span className="font-bold text-title">21</span>
                                </div>
                                </div>
                    </div>

                    <div className="charts">
                        <div className="charts__left">
                                <div className="charts__left__title">
                                    <div>
                                        <h1>Daily Reports</h1>
                                        <p>pune,India</p>
                                    </div>
                                    <i className="fa fa-check"></i>
                                </div>
                                <Chart/>
                        </div>

                        <div className="charts__right">
                                <div className="charts__right__title">
                                    <div>
                                        <h1>Platform Services</h1>
                                        <p>pune,India</p>
                                    </div>
                                    <i className="fa fa-check"></i>
                                </div>
                               <div className="charts__right__cards">
                                    <div className="card1">
                                            <h3>Core-Services</h3>
                                            <p>Pending : 20</p>
                                            <p>In-Test : 20</p>
                                            <p>Completed : 20</p>
                                    </div>
                                    <div className="card2">
                                            <h3>Dalton</h3>
                                            <p>Pending : 20</p>
                                            <p>In-Test : 20</p>
                                            <p>Completed : 20</p>
                                    </div>
                                    <div className="card3">
                                            <h3>Aux-Services</h3>
                                            <p>Pending : 20</p>
                                            <p>In-Test : 20</p>
                                            <p>Completed : 20</p>
                                    </div>
                                    <div className="card4">
                                            <h3>SRE</h3>
                                            <p>Pending : 20</p>
                                            <p>In-Test : 20</p>
                                            <p>Completed : 20</p>
                                    </div>
                                    <div className="card2">
                                            <h3>UI</h3>
                                            <p>Pending : 20</p>
                                            <p>In-Test : 20</p>
                                            <p>Completed : 20</p>
                                    </div>
                               </div>
                        </div>
                    </div>
                </div>
    </main>)
}

export default Main;