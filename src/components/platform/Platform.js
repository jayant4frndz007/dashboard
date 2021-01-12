import { Component } from "react";
import './platform.css';
import hello from '../../assets/hello.svg';
export default class Platform extends Component{
    constructor(props){
        super(props);
        this.state={
            services:[{
                project:'imedidata',
                mcc_link:['MCC-651293','https://jira.mdsol.com/browse/MCC-651293'],
                type:'Bug',
                description:'Caret (drop-down) for Language options looks different in different browsers',
                point:'3',
                status:'Completed',
                eng_name:'jayant'
            },
            {
                project:'imedidata',
                mcc_link:['MCC-682756','https://jira.mdsol.com/browse/MCC-682756'],
                type:'Sub-Task(House Keeping)',
                description:'Update Global Config to expect String and not number',
                point:'NA',
                status:'Completed',
                eng_name:'jayant'
            },
            {
                project:'imedidata',
                mcc_link:['MCC-647862','https://jira.mdsol.com/browse/MCC-647862'],
                type:'Bug',
                description:'Missing Character in Japanese Translation on Reset Password Page',
                point:'3',
                status:'Completed',
                eng_name:'Jayant'
            },
            
            {
                project:'imedidata',
                mcc_link:['MCC-647860','https://jira.mdsol.com/browse/MCC-647860'],
                type:'Bug',
                description:'Hyperlink for "Medidata Helpdesk Desk" in the email to reset password is misaligned in Japanese',
                point:'3',
                status:'Completed',
                eng_name:'Jayant'
            },
            
            
            
            {
                project:'imedidata',
                mcc_link:['MCC-660919','https://jira.mdsol.com/browse/MCC-660919'],
                type:'Story',
                description:'Tooltip for Online Help When Entering Email Address in Forgot Password Workflow',
                point:'3',
                status:'Completed',
                eng_name:'Jayant'
            },
            {
                project:'imedidata',
                mcc_link:['MCC-705490','https://jira.mdsol.com/browse/MCC-705490'],
                type:'Task',
                description:'Investigate why invitation status is not updated for a user invited to CDS or SE',
                point:'5',
                status:'pending',
                eng_name:'Jayant'
            },
            {
                project:'imedidata',
                mcc_link:['MCC-572349','https://jira.mdsol.com/browse/MCC-572349'],
                type:'Story',
                description:'When inviting a study user, after selecting a site, selecting an application disables the "Invite as Site Owner" checkbox',
                point:'5',
                status:'Completed',
                eng_name:'Nandan/Swapnil/ Ganesh/ Rahul/ Rajat'
            },
            {
                project:'imedidata',
                mcc_link:['MCC-608340','https://jira.mdsol.com/browse/MCC-705490'],
                type:'Story',
                description:'iMedidata Autoscaling -- Decouple Thresholds for Primary and Second DBs',
                point:'8',
                status:'pending',
                eng_name:'Ganesh/ Nandan/ Rajat'
            }
        ],
        pylon:[{
            project:'Pylon',
            mcc_link:['MCC-361128','https://jira.mdsol.com/browse/MCC-361128'],
            type:'Story',
            description:'Parallelize pylon build',
            point:'5',
            status:'Completed',
            eng_name:'Swapnil/ Nandan/ Rajat/ Rahul/ Ganesh '
        }
       ],
       plinth:[
           {
            project:'Plinth',
           mcc_link:['MCC-678553','https://jira.mdsol.com/browse/MCC-678553'],
           type:'Task',
           description:'Plinth CI: Implement auto cleanup for CI coverage artifacts',
           point:'5',
           status:'Completed',
           eng_name:'Swapnil/ Nandan/ Rajat/ Rahul/ Ganesh '
        },
        {
            project:'Plinth',
           mcc_link:['MCC-693355','https://jira.mdsol.com/browse/MCC-693355'],
           type:'Task',
           description:'Add code coverage tracking for Pylon after parallelize',
           point:'5',
           status:'Completed',
           eng_name:'Swapnil/ Nandan/ Rajat/ Rahul/ Ganesh '
        },
        {
            project:'Plinth',
           mcc_link:['MCC-508578','https://jira.mdsol.com/browse/MCC-508578'],
           type:'Story',
           description:'Delete unused Plinth SQS Subscriptions',
           point:'8',
           status:'pending',
           eng_name:'Swapnil/ Rahul'
        },{
            project:'Plinth',
           mcc_link:['MCC-678608','https://jira.mdsol.com/browse/MCC-678608'],
           type:'Story',
           description:'Add verbose/caching logging in Plinth/pylon ',
           point:'5',
           status:'Completed',
           eng_name:'Swapnil/ Nandan/ Rajat/ Rahul/ Ganesh '
        },
        {
            project:'Plinth',
           mcc_link:['MCC-644655','https://jira.mdsol.com/browse/MCC-644655'],
           type:'Task',
           description:'Setup Travis to use AWS keys not from an employee',
           point:'2',
           status:'pending',
           eng_name:'Nandan/ Rajat/ Ganesh'
        }
       ],
        subjects:[{
            project:'Subjects',
            mcc_link:['MCC-681806','https://jira.mdsol.com/browse/MCC-681806'],
            type:'Task',
            description:'Fetch Site PI Audit data to Get Some Answers - Repeat',
            point:'3',
            status:'Completed',
            eng_name:'Pooja'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-668407','https://jira.mdsol.com/browse/MCC-668407'],
            type:'Story',
            description:'Upgrade mAudit Client from 4.5.2 to 5.0 (For Subjects)',
            point:'3',
            status:'Completed',
            eng_name:'Pooja'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-687801','https://jira.mdsol.com/browse/MCC-687801'],
            type:'Story',
            description:'Update Rails minor version in Subjects ',
            point:'5',
            status:'Completed',
            eng_name:'Pooja'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-675163','https://jira.mdsol.com/browse/MCC-675163'],
            type:'story',
            description:'Fix travis tests for subjects ',
            point:'5',
            status:'Completed',
            eng_name:'Pooja'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-685654','https://jira.mdsol.com/browse/MCC-685654'],
            type:'Story',
            description:'Improve Performance for Subjects Controllers update method',
            point:'5',
            status:'Completed',
            eng_name:'Avinash'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-672453','https://jira.mdsol.com/browse/MCC-672453'],
            type:'task',
            description:'Onboarding',
            point:'3',
            status:'Completed',
            eng_name:'Avinash'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-670318','https://jira.mdsol.com/browse/MCC-670318'],
            type:'task',
            description:'Investigate non-standard language responses to patient cloud',
            point:'3',
            status:'Completed',
            eng_name:'Avinash'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-675161','https://jira.mdsol.com/browse/MCC-675161'],
            type:'task',
            description:'Investigate areas for performance improvement in subjects ',
            point:'5',
            status:'Completed',
            eng_name:'Avinash'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-697659','https://jira.mdsol.com/browse/MCC-697659'],
            type:'story',
            description:'Subjects Service - need unit tests and/or scenarios for authorization paths',
            point:'5',
            status:'pending',
            eng_name:'Avinash'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-694052','https://jira.mdsol.com/browse/MCC-694052'],
            type:'Story',
            description:'Fix un-translated strings in Delorean UI Filtering components',
            point:'3',
            status:'Completed',
            eng_name:'Pooja'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-699513','https://jira.mdsol.com/browse/MCC-699513'],
            type:'Story',
            description:'Audit view template for CD organizations in cloud admin ',
            point:'5',
            status:'intest',
            eng_name:'Pooja'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-705391','https://jira.mdsol.com/browse/MCC-705391'],
            type:'Story',
            description:'Audit link for CD Orgs ',
            point:'3',
            status:'Completed',
            eng_name:'Pooja'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-705398','https://jira.mdsol.com/browse/MCC-705398'],
            type:'Story',
            description:'Audit link for CD people ',
            point:'3',
            status:'pending',
            eng_name:'Avinash'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-705379','https://jira.mdsol.com/browse/MCC-705379'],
            type:'story',
            description:'Delorean ruby upgrade',
            point:'5',
            status:'Completed',
            eng_name:'Avinash'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-705380','https://jira.mdsol.com/browse/MCC-705380'],
            type:'Story',
            description:' mAudit Ruby upgrade',
            point:'5',
            status:'intest',
            eng_name:'Pooja'
        },
        {
            project:'Subjects',
            mcc_link:['MCC-509366','https://jira.mdsol.com/browse/MCC-509366'],
            type:'Story',
            description:'Hercules Upgrade MYSQL Version (before 2021-Feb-5)',
            point:'5',
            status:'pending',
            eng_name:'Pooja'
        }
    ],
        dalton:[{
            project:'dalton',
            mcc_link:['MCC-670300','https://jira.mdsol.com/browse/MCC-670300'],
            type:'Story',
            description:'Create AttributeCollection#delete API in Dalton',
            point:'5',
            status:'Completed',
            eng_name:'Kiran/ Anjana'
        },
        {
            project:'dalton',
            mcc_link:['MCC-673566','https://jira.mdsol.com/browse/MCC-673566'],
            type:'Story',
            description:'Update Dalton to not enqueue delayed jobs to load operables when the referenced resource doesnt exist',
            point:'8',
            status:'pending',
            eng_name:'Sayali/ Neelima'
        },
        
        {
            project:'dalton',
            mcc_link:['MCC-685867','https://jira.mdsol.com/browse/MCC-685867'],
            type:'Story',
            description:'Update Dalton to delete operables or structured attributes when the resources they reference are deleted',
            point:'8',
            status:'Pending',
            eng_name:'Sayali/ Neelima'
        },
        {
            project:'dalton',
            mcc_link:['MCC-696271','https://jira.mdsol.com/browse/MCC-696271'],
            type:'Story',
            description:'Use a lower priority when submitting delayed jobs from rake tasks',
            point:'8',
            status:'pending',
            eng_name:'Kiran/ Anjana'
        },
        {
            project:'dalton',
            mcc_link:['MCC-698919','https://jira.mdsol.com/browse/MCC-698919'],
            type:'Story',
            description:'Update Daltons operator level caching to have a default time to live (ttl)',
            point:'8',
            status:'pending',
            eng_name:'Sayali/ Neelima'
        },
        {
            project:'dalton',
            mcc_link:['MCC-698927','https://jira.mdsol.com/browse/MCC-698927'],
            type:'Story',
            description:'Update Daltons Role Assignments workflow to also update or destroy the grants using the destroyed role assignment',
            point:'8',
            status:'pending',
            eng_name:'Kiran/ Anjana'
        }],
        
        sre:[{
            project:'SRE',
            mcc_link:['MCC-681324','https://jira.mdsol.com/browse/MCC-681324'],
            type:'Story',
            description:'Create Sequence Diagrams for Assigning Access to a User for Sites & Countries at Study Level',
            point:'5',
            status:'Completed',
            eng_name:'Vamshi'
        },
        {
            project:'SRE',
            mcc_link:['MCC-693329','https://jira.mdsol.com/browse/MCC-693329'],
            type:'Sub task',
            description:'Sequence Diagram for Assign Roles in Access Panel',
            point:'NA',
            status:'Completed',
            eng_name:'Vamshi'
        },
        ,
        {
            project:'SRE',
            mcc_link:['MCC-693330','https://jira.mdsol.com/browse/MCC-693330'],
            type:'Sub task',
            description:'Sequence Diagram for Assign Link in Sites & Country Access pane',
            point:'NA',
            status:'Completed',
            eng_name:'Vamshi'
        },
        {
            project:'SRE',
            mcc_link:['MCC-692876','https://jira.mdsol.com/browse/MCC-692876'],
            type:'Sub task',
            description:'Set up Plinth and Dalton in local environment',
            point:'NA',
            status:'Completed',
            eng_name:'Vamshi'
        },
        {
            project:'SRE',
            mcc_link:['MCC-692876','https://jira.mdsol.com/browse/MCC-692876'],
            type:'Sub task',
            description:'Set up Plinth and Dalton in local environment',
            point:'NA',
            status:'Completed',
            eng_name:'Vamshi'
        },
        {
            project:'SRE',
            mcc_link:['MCC-660037','https://jira.mdsol.com/browse/MCC-660037'],
            type:'Task',
            description:'Determine and instrument appropriate SLOs for User role_studies route',
            point:'8',
            status:'Completed',
            eng_name:'Pooja/ Avinash/ Amol'
        },{
            project:'SRE',
            mcc_link:['MCC-664326','https://jira.mdsol.com/browse/MCC-664326'],
            type:'Task',
            description:'Determine and instrument appropriate SLOs for UserPreferences#show route',
            point:'5',
            status:'Completed',
            eng_name:'Pooja/ Avinash/ Amol'
        },{
            project:'SRE',
            mcc_link:['MCC-678531','https://jira.mdsol.com/browse/MCC-678531'],
            type:'Story',
            description:'Identifying SLIs for Assigning Access for Sites & Countries at Study Level',
            point:'8',
            status:'pending',
            eng_name:'Vamshi'
        }],
        ui:[{
            project:'UI',
            mcc_link:['MCC-651293','https://jira.mdsol.com/browse/MCC-651293'],
            type:'story',
            description:'',
            point:3,
            status:'Completed',
            eng_name:'ABC'
        }],
        aux:[{
            project:'AUX',
            mcc_link:['MCC-651293','https://jira.mdsol.com/browse/MCC-651293'],
            type:'story',
            description:'Caret (drop-down) for Language options looks different in different browsers',
            point:3,
            status:'Completed',
            eng_name:'ABC'
        }]
        }
    }


        render(){
           
            
    if(this.props.match.params.id == 'dalton'){
        
   
            return(<main>
       
                <div className="main__container">
                    <div className="main__title">
                        <h3>{this.props.match.params.id}</h3>
                        {/* <img src={hello} alt='hello' />
                        <div className="main__greeting">
                            <h1>Hello Platform Team Chutki</h1>
                            <p>Welcome to Platform Dashboard</p>
                        </div> */}
                    </div>
                    <div className="main__cards"> 
{
   
    this.state.dalton.map((data,i)=>{
        const color=data.status == 'Completed' ? '#d1ecd1': data.status == 'pending' ? '#f65a6f':'#ffff99';
        return (
           
                    <div className="card tooltip" style={{background:color}} title={data.description} >
                            <i className="fa fa-user fa-2x "><span style={{fontSize:'14px'}}>&nbsp; {data.eng_name}</span></i>
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
</div>                

                   
                </div>
    </main>)
    }else if(this.props.match.params.id == 'core_services'){

        
   
        return(<main>
       
            <div className="main__container">
            <h3>{this.props.match.params.id}</h3>
                <div className="main__title">
                    
                    {/* <img src={hello} alt='hello' />
                    <div className="main__greeting">
                        <h1>Hello Platform Team Chutki</h1>
                        <p>Welcome to Platform Dashboard</p>
                    </div> */}
                    
                    <h4>iMedidata</h4>
                </div>
                <div className="main__cards"> 
{

this.state.services.map((data,i)=>{
    const color=data.status == 'Completed' ? '#d1ecd1': data.status == 'pending' ? '#f65a6f':'#ffff99';
    return (
       
                <div className="card tooltip" style={{background:color}} title={data.description}>
                        <i className="fa fa-user fa-2x "><span style={{fontSize:'14px'}}>&nbsp; {data.eng_name}</span></i> 
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
</div>                

               
            </div>

{/**Subjexts*/}
<div className="main__container">
                <div className="main__title">
                    <h3>Subjects</h3>
                    {/* <img src={hello} alt='hello' />
                    <div className="main__greeting">
                        <h1>Hello Platform Team Chutki</h1>
                        <p>Welcome to Platform Dashboard</p>
                    </div> */}
                </div>
                <div className="main__cards"> 
{

this.state.subjects.map((data,i)=>{
    const color=data.status == 'Completed' ? '#d1ecd1': data.status == 'pending' ? '#f65a6f':'#ffff99';
    return (
       
                <div className="card tooltip" style={{background:color}} title={data.description}>
                        <i className="fa fa-user fa-2x "><span style={{fontSize:'14px'}}>&nbsp; {data.eng_name}</span></i>
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
</div>                

               
            </div>
            {/**Pylon */}

            <div className="main__container">
                <div className="main__title">
                    <h3>Pylon</h3>
                    {/* <img src={hello} alt='hello' />
                    <div className="main__greeting">
                        <h1>Hello Platform Team Chutki</h1>
                        <p>Welcome to Platform Dashboard</p>
                    </div> */}
                </div>
                <div className="main__cards"> 
{

this.state.pylon.map((data,i)=>{
    const color=data.status == 'Completed' ? '#d1ecd1': data.status == 'pending' ? '#f65a6f':'#ffff99';
    return (
       
                <div className="card tooltip" style={{background:color}} title={data.description}>
                        <i className="fa fa-user fa-2x "><span style={{fontSize:'14px'}}>&nbsp; {data.eng_name}</span></i>
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
</div>                

               
            </div>

{/**Plinth */}
<div className="main__container">
                <div className="main__title">
                    <h3>Plinth</h3>
                    {/* <img src={hello} alt='hello' />
                    <div className="main__greeting">
                        <h1>Hello Platform Team Chutki</h1>
                        <p>Welcome to Platform Dashboard</p>
                    </div> */}
                </div>
                <div className="main__cards"> 
{

this.state.plinth.map((data,i)=>{
    const color=data.status == 'Completed' ? '#d1ecd1': data.status == 'pending' ? '#f65a6f':'#ffff99';
    return (
       
                <div className="card tooltip" style={{background:color}} title={data.description}>
                        <i className="fa fa-user fa-2x "><span style={{fontSize:'14px'}}>&nbsp; {data.eng_name}</span></i>
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
</div>                

               
            </div>
</main>



)
    }else if(this.props.match.params.id == 'sre'){

        
   
        return(<main>
       
            <div className="main__container">
                <div className="main__title">
                    <h3>{this.props.match.params.id}</h3>
                    {/* <img src={hello} alt='hello' />
                    <div className="main__greeting">
                        <h1>Hello Platform Team Chutki</h1>
                        <p>Welcome to Platform Dashboard</p>
                    </div> */}
                </div>
                <div className="main__cards"> 
{

this.state.sre.map((data,i)=>{
    const color=data.status == 'Completed' ? '#d1ecd1': data.status == 'pending' ? '#f65a6f':'#ffff99';
    return (
       
                <div className="card tooltip" style={{background:color}} title={data.description}>
                        <i className="fa fa-user fa-2x "><span style={{fontSize:'14px'}}>&nbsp; {data.eng_name}</span></i>
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
</div>                

               
            </div>
</main>)
    }else if(this.props.match.params.id == 'ui'){

        
   
        return(<main>
       
            <div className="main__container">
                <div className="main__title">
                    <h3>{this.props.match.params.id}</h3>
                    {/* <img src={hello} alt='hello' />
                    <div className="main__greeting">
                        <h1>Hello Platform Team Chutki</h1>
                        <p>Welcome to Platform Dashboard</p>
                    </div> */}
                </div>
                <div className="main__cards"> 
{

this.state.ui.map((data,i)=>{
    const color=data.status == 'Completed' ? '#d1ecd1': data.status == 'pending' ? '#f65a6f':'#ffff99';
    return (
       <div>
                {/* <div className="card tooltip" style={{background:color}} title={data.description}>
                        <i className="fa fa-user fa-2x "><span style={{fontSize:'14px'}}>&nbsp; {data.eng_name}</span></i>
                                <div className="card_inner" >
                                     <p className="text-primary-p">{data.project}</p>
                                     <span className="font-bold text-title"><a href={data.mcc_link[1]} target="blank">{data.mcc_link[0]}</a></span>
                                </div>
                </div> */}
                <h2>Comming Soon...</h2>
       </div>
    )
})
}
</div>                

               
            </div>
</main>)
    }else if(this.props.match.params.id == 'aux_services'){

        
   
        return(<main>
       
            <div className="main__container">
                <div className="main__title">
                    <h3>{this.props.match.params.id}</h3>
                    {/* <img src={hello} alt='hello' />
                    <div className="main__greeting">
                        <h1>Hello Platform Team Chutki</h1>
                        <p>Welcome to Platform Dashboard</p>
                    </div> */}
                </div>
                <div className="main__cards"> 
{

this.state.aux.map((data,i)=>{
    const color=data.status == 'Completed' ? '#d1ecd1': data.status == 'pending' ? '#f65a6f':'#ffff99';
    return (<div>
       
                {/* <div className="card tooltip" style={{background:color}} title={data.description}>
                        <i className="fa fa-user fa-2x "><span style={{fontSize:'14px'}}>&nbsp; {data.eng_name}</span></i>
                                <div className="card_inner" >
                                     <p className="text-primary-p">{data.project}</p>
                                     <span className="font-bold text-title"><a href={data.mcc_link[1]} target="blank">{data.mcc_link[0]}</a></span>
                                </div> 
                               
                               
                </div> */}
                <h2> Comming Soon....</h2>
                </div>
       
    )
})
}
</div>                

               
            </div>
</main>)
    }
    else{
        return(<div>ELSE</div>)
    }
        }
}