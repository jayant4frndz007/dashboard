import './main.css';
import hello from '../../assets/hello.svg';
import Chart from '../charts/Chart';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import  { calculate,servicecalculate} from '../calculation/Calculate';
import { generateURL } from '../../constants/constant';

const Main =(props)=>{
    const [production,setProduction] = useState(0);
    const [boarding,setBoarding] = useState(0);
    const [joining,setJoining] = useState(0);
    const [position,setPosition] = useState(0);

    const [iservice,setIservice] = useState([0,0,0]);
    const [idalton,setIdalton] = useState([0,0,0]);
    const [iaux,setIaux] = useState([0,0,0]);
    const [isre,setIsre] = useState([0,0,0]);
    const [iui,setIui] = useState([0,0,0]);

    
    useEffect(()=>{
        $.get(generateURL(1),function(data){
                console.log(calculate(data))
                let res=calculate(data);
                setProduction(res[1] ? res[1].value : 0);
                setBoarding(res[2] ? res[2].value : 0);
                setJoining(res[3] ? res[3].value : 0);
                setPosition(res[4] ? res[4].value : 0);
        })
    },[])
    useEffect(()=>{
        $.get(generateURL(2),function(data){
                console.log(servicecalculate(data));
                let res=servicecalculate(data);
                setIservice(res.length>=3 ? [res[1].value,res[2].value,res[3].value]:[0,0,0])
        })
        $.get(generateURL(3),function(data){
            console.log(servicecalculate(data))
            let res=servicecalculate(data);
                setIdalton(res.length>=3 ? [res[1].value,res[2].value,res[3].value]:[0,0,0])
    })
    $.get(generateURL(4),function(data){
        console.log(servicecalculate(data))
        let res=servicecalculate(data);
                setIaux(res.length>=3 ? [res[1].value,res[2].value,res[3].value]:[0,0,0])
})
$.get(generateURL(5),function(data){
    console.log(servicecalculate(data))
    let res=servicecalculate(data);
                setIsre(res.length>=3 ? [res[1].value,res[2].value,res[3].value]:[0,0,0])
})
$.get(generateURL(6),function(data){
    console.log(servicecalculate(data))
    let res=servicecalculate(data);
                setIui(res.length>=3 ? [res[1].value,res[2].value,res[3].value]:[0,0,0])
})
    },[])

    const callService=(arg)=>{
            window.location.href=arg;
    }
    return(<main>
       
                <div className="main__container">
                    <div className="main__title">
                        <img src={hello} alt='hello' />
                        <div className="main__greeting">
                            
                            <p>Welcome to Platform Dashboard</p>
                        </div>
                    </div>
                    <div className="main__cards"> 
                                <div className="card">
                                <i className="fa fa-user-o fa-1x text-lightblue"></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">In Production</p>
                                    <span className="font-bold text-title">{production}</span>
                                </div>
                                </div>

                                <div className="card">
                                <i className="fa fa-calendar fa-1x text-red"></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">On Boarding</p>
                                    <span className="font-bold text-title">{boarding}</span>
                                </div>
                                </div>
                                <div className="card">
                                <i className="fa fa-lock fa-1x text-yellow"></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">Joining</p>
                                    <span className="font-bold text-title">{joining}</span>
                                </div>
                                </div>

                                <div className="card">
                                <i className="fa fa-envelope-open fa-1x text-lightblue"></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">Open Positions</p>
                                    <span className="font-bold text-title">{position}</span>
                                </div>
                                </div>
                    </div>

                    <div className="charts">
                        <div className="charts__left">
                                <div className="charts__left__title">
                                    <div>
                                        <h1>Daily Reports</h1>
                                        <p>Pune,India</p>
                                    </div>
                                    <i className="fa fa-check"></i>
                                </div>
                                <Chart/>
                        </div>

                        <div className="charts__right">
                                <div className="charts__right__title">
                                    <div>
                                        <h1>Platform Services</h1>
                                        <p>Pune,India</p>
                                    </div>
                                    <i className="fa fa-check"></i>
                                </div>
                               <div className="charts__right__cards">
                                    <div className="card1" onClick={()=> callService('core_services')}>
                                            <h4>Core-Services</h4>
                                            {/* <p>Pending : {iservice[0]}</p>
                                            <p>In-Test : {iservice[1]}</p>
                                            <p>Completed : {iservice[2]}</p> */}
                                    </div>
                                    <div className="card2" onClick={()=> callService('dalton')}>
                                            <h4>Dalton</h4>
                                           
                                    </div>
                                    <div className="card3" onClick={()=> callService('aux_services')}>
                                            <h4>Aux-Services</h4>
                                           
                                    </div>
                                    <div className="card4" onClick={()=> callService('sre')}>
                                            <h4>SRE</h4>
                                           
                                    </div>
                                    <div className="card2" onClick={()=> callService('ui')}>
                                            <h4>UI</h4>
                                            
                                    </div>
                               </div>
                        </div>
                    </div>
                </div>
    </main>)
}

export default Main;