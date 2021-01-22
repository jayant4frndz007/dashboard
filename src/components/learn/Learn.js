import './learn.css';
import { useState, useEffect, Component } from 'react';
import { claculateLearn } from '../calculation/Calculate';
import { generateURL } from '../../constants/constant';
import $ from 'jquery';
import { render } from 'react-dom';

export default class Learn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            learn: []
        }
    }

    async componentDidMount() {
        try {
            let result = undefined
            console.log('Continue');
            result = await $.get(generateURL(15), function (data) {
                return data;
            });

            let myres = await claculateLearn(result);
            console.log(myres)
            this.setState({ learn: myres })
        } catch (err) {
            console.log(err)
        }

    }

    render() {


        return (<main>
            <div className="learn__container">
                <div className="learn__title">
                    <h2>Learning Docs available</h2>

                </div>
                {this.state.learn.length <= 1 && <div className="learn_loading">Loading learning content......</div>}
                <div className="learn__cards">


                    {
                        this.state.learn.map((data, i) => {
                            return (<div className="learn_card" key={i}>

                                <div className="inner_learn">
                                    <a href={data.link} target="blank">
                                        {data.title}
                                    </a>
                                </div>

                                <div className="card_learn" >
                                    <div className="short_desc">
                                        {data.short_desc}
                                    </div>
                                    <div className="big_desc">
                                        {data.long_desc}
                                    </div>
                                </div>

                            </div>)
                        })
                    }




                </div>

            </div>
        </main>)
    }
}


