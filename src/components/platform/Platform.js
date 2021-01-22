import { Component } from "react";
import './platform.css';
import hello from '../../assets/hello.svg';
import $ from 'jquery';
import { claculateServeice } from '../calculation/Calculate';
import { generateURL } from '../../constants/constant';
export default class Platform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: this.props.match.params.id ? this.props.match.params.id.split('_').join(' ').toUpperCase() : '',
            data: [0],
            services: [],
            pylon: [],
            plinth: [],
            subjects: [],
            dalton: [],
            sre: [],
            ui: [],
            aux: [],
            load: 'Loading.......',
            myData: [],
            active_imedidata: 'active',
            active_subject: undefined,
            active_pylon: undefined,
            active_plinth: undefined,

        }
    }


    async componentDidMount() {

        if (this.props.match.params.id == 'dalton') {
            let result = undefined
            console.log('Continue dalton');
            result = await $.get(generateURL(11), function (data) {
                console.log('calculate', claculateServeice(data));

                return data;
            });

            let myres = await claculateServeice(result);
            this.setState({ data: myres });

        } else if (this.props.match.params.id == 'core_services') {
            console.log('***********************************************iMedidata*************');
            let result = undefined
            console.log('Continue');
            result = await $.get(generateURL(7), function (data) {
                console.log('calculate', claculateServeice(data));

                return data;
            });

            let myres = await claculateServeice(result);
            this.setState({ services: myres, myData: myres })

            console.log('***********************************************Subject*************');
            result = undefined
            console.log('Continue');
            result = await $.get(generateURL(8), function (data) {
                console.log('calculate', claculateServeice(data));

                return data;
            });

            myres = await claculateServeice(result);
            this.setState({ subjects: myres })
            console.log('myvalue is', myres);

            console.log('***********************************************Pylon*************');
            result = undefined
            console.log('Continue');
            result = await $.get(generateURL(9), function (data) {
                console.log('calculate', claculateServeice(data));

                return data;
            });

            myres = await claculateServeice(result);
            this.setState({ pylon: myres })
            console.log('myvalue is', myres);

            console.log('***********************************************Plinth*************');
            result = undefined
            console.log('Continue');
            result = await $.get(generateURL(10), function (data) {
                console.log('calculate', claculateServeice(data));

                return data;
            });

            myres = await claculateServeice(result);
            this.setState({ plinth: myres })
            console.log('myvalue is', myres);

        } else if (this.props.match.params.id == 'sre') {
            let result = undefined
            console.log('Continue SRE');
            result = await $.get(generateURL(12), function (data) {
                console.log('calculate', claculateServeice(data));

                return data;
            });

            let myres = await claculateServeice(result);
            this.setState({ data: myres });
        } else if (this.props.match.params.id == 'ui') {
            let result = undefined
            console.log('Continue Ui');
            result = await $.get(generateURL(13), function (data) {
                console.log('calculate', claculateServeice(data));

                return data;
            });

            let myres = await claculateServeice(result);
            this.setState({ data: myres });
        } else if (this.props.match.params.id == 'aux_services') {
            let result = undefined
            console.log('Continue aux');
            result = await $.get(generateURL(14), function (data) {
                console.log('calculate', claculateServeice(data));

                return data;
            });
            let myres = await claculateServeice(result);
            this.setState({ data: myres });
        } else {

        }

    }

    selectService = (val) => {
        this.setState({ myData: [] })
        if (val == 'Imedidata') {
            this.setState({
                myData: this.state.services, active_imedidata: 'active', active_subject: undefined,
                active_pylon: undefined,
                active_plinth: undefined,
            });
        } else if (val == 'Subject') {
            this.setState({
                myData: this.state.subjects, active_imedidata: undefined, active_subject: 'active',
                active_pylon: undefined,
                active_plinth: undefined,
            });
        } else if (val == 'Pylon') {
            this.setState({
                myData: this.state.pylon, active_imedidata: undefined, active_subject: undefined,
                active_pylon: 'active',
                active_plinth: undefined,
            });
        } else if (val == 'Plinth') {
            this.setState({
                myData: this.state.plinth, active_imedidata: undefined, active_subject: undefined,
                active_pylon: undefined,
                active_plinth: 'active',
            });
        }
    }
    render() {
        const { active_imedidata, active_subject, active_pylon, active_plinth } = this.state;
        if (this.props.match.params.id == 'core_services') {
            return (
                <main>

                    <div className="main__container">


                        <div className="tab">
                            <ul>
                                <li><a className={active_imedidata ? 'active' : ''} href="#" onClick={this.selectService.bind(this, 'Imedidata')}>iMedidata</a></li>
                                <li><a className={active_subject ? 'active' : ''} href="#" onClick={this.selectService.bind(this, 'Subject')}>Subjects</a></li>
                                <li><a className={active_pylon ? 'active' : ''} href="#" onClick={this.selectService.bind(this, 'Pylon')}>Pylon</a></li>
                                <li><a className={active_plinth ? 'active' : ''} href="#" onClick={this.selectService.bind(this, 'Plinth')}>Plinth</a></li>
                            </ul>

                        </div>


                        {this.state.myData.length <= 0 && <div className="main__greeting">

                            <h1>Loading.......</h1>
                            <p>wait for sec..... or click once more.</p>
                        </div>}

                        {this.state.myData.length > 0 && <div className="cover-data">
                            <div className="scroll-data">
                                <table border="1" >
                                    <thead>
                                        <tr >
                                            <th>Link</th>
                                            <th>Story/Bug</th>
                                            <th>description</th>
                                            <th>Point</th>
                                            <th>Status</th>
                                            <th>Engineer Name</th>
                                        </tr>
                                    </thead>

                                    <tbody >
                                        {

                                            this.state.myData.map((data, i) => {
                                                const color = data.status == 'Completed' ? '#d1ecd1' : data.status == 'In Progress' ? '#f65a6f' : '#ffff99';
                                                return (

                                                    <tr style={{ background: color }} >
                                                        <td style={{ width: '60px', fontWeight: 'bold' }}>
                                                            <a href={data.mcc_link[1]} target="blank"> {data.mcc_link[0]}</a>
                                                        </td>
                                                        <td>
                                                            {data.type}
                                                        </td>
                                                        <td>
                                                            {data.description}
                                                        </td>
                                                        <td>
                                                            {data.point}
                                                        </td>
                                                        <td>
                                                            {data.status}
                                                        </td>
                                                        <td>
                                                            {data.eng_name}
                                                        </td>
                                                    </tr>

                                                )
                                            })
                                        }

                                    </tbody>

                                </table>
                            </div>
                        </div>
                        }
                    </div>
                </main>
            )
        } else {
            return (
                <main>

                    <div className="main__container">

                        <div className="tab">
                            <ul>
                                <li><a className={active_imedidata ? 'active' : ''} href="#" >{this.state.label}</a></li>
                            </ul>

                        </div>
                        {/* <div className="main__cards">
                            {


                                this.state.data.map((data, i) => {
                                    const color = data.status == 'Completed' ? '#d1ecd1' : data.status == 'In Progress' ? '#f65a6f' : '#ffff99';
                                    return (

                                        <div className="card tooltip" style={{ background: color }} title={data.description}>
                                            <i className="fa fa-user fa-2x "><span style={{ fontSize: '14px' }}>&nbsp; {data.eng_name}</span></i>
                                            <div className="card_inner" >
                                                <p className="text-primary-p">{data.project}</p>
                                                <span className="font-bold text-title"><a href={data.mcc_link[1]} target="blank">{data.mcc_link[0]}</a></span>

                                            </div>
                                            <div className="status">
                                                <p>Status : {data.status}</p>
                                                <span>Point : {data.point}</span>
                                            </div>

                                        </div>

                                    )
                                })
                            }
                        </div> */}
                        {this.state.data[0] == 'no data' && <div className="main__greeting">
                            <h1>No Data.</h1>
                            <p>Might be new Services will formed.</p>
                        </div>}
                        {this.state.data[0] == 0 && <div className="main__greeting">
                            <h1>Loading.......</h1>
                            <p>wait for sec.....</p>
                        </div>}


                        {this.state.data.length > 1 && <div className="cover-data"> <div className="scroll-data">  <table border="1">
                            <thead>
                                <tr >
                                    <th>Link</th>
                                    <th>Story/Bug</th>
                                    <th>description</th>
                                    <th>Point</th>
                                    <th>Status</th>
                                    <th>Engineer Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    this.state.data.map((data, i) => {
                                        const color = data.status == 'Completed' ? '#d1ecd1' : data.status == 'In Progress' ? '#f65a6f' : '#ffff99';
                                        return (

                                            <tr style={{ background: color }} >
                                                <td style={{ width: '60px', fontWeight: 'bold' }}>
                                                    <a href={data.mcc_link[1]} target="blank"> {data.mcc_link[0]}</a>
                                                </td>
                                                <td>
                                                    {data.type}
                                                </td>
                                                <td>
                                                    {data.description}
                                                </td>
                                                <td>
                                                    {data.point}
                                                </td>
                                                <td>
                                                    {data.status}
                                                </td>
                                                <td>
                                                    {data.eng_name}
                                                </td>
                                            </tr>

                                        )
                                    })
                                }
                            </tbody>

                        </table> </div>
                        </div>

                        }
                    </div>
                </main>
            )
        }
    }
}