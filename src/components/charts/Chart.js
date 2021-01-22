import "../../../node_modules/react-vis/dist/style.css";
import {XYPlot,LineSeries,XAxis,YAxis,VerticalGridLines,HorizontalGridLines,MarkSeries,VerticalBarSeries} from 'react-vis';

const Chart =()=>{
    const data =[
        {x:0,y:9},
        {x:1,y:5},
        {x:2,y:2},
        {x:3,y:8},
        {x:4,y:3},
        {x:5,y:4},
        {x:7,y:3},
        {x:8,y:2},
        {x:9,y:0}
        

]
const data1 =[
    {x:0,y:7.5},
    {x:1,y:5},
    {x:2,y:2},
    {x:3,y:6},
    {x:4,y:3},
    {x:5,y:2},
    {x:6,y:3},
    {x:7,y:2},
    {x:8,y:0}
    

]
        return(<div style={{marginTop:'10px'}}>
                {/* <XYPlot height={300} width={300}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis title="time"/>
                    <YAxis title="efforts"/>
                    
                    <LineSeries data={data1} animation color="red"/> 
                    <LineSeries data={data} animation color="yellow"/>                    
                </XYPlot> */}
                <XYPlot height={200} width={350}>
                <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis/>
                    <YAxis/>
                    <VerticalBarSeries data={data} />
                </XYPlot>

        </div>)
}

export default Chart;