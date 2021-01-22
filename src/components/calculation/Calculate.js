export const calculate =(data)=>{
    console.log('calculate',data.feed.entry);
    let dataCal=data.feed.entry;
    
    let arr=[];
    let col=2;
    let row = data.length/2;

    
        for(let j=0;j<dataCal.length;j++){

               console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t)
               let keydata=dataCal[j].gs$cell.$t;
               j++;
               console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t)
               let valueData=dataCal[j].gs$cell.$t;
               let objectData={
                   'key':keydata,
                   'value':valueData
               };
               arr.push(objectData);
        }
        console.log('\n')


    return arr;
}
export const servicecalculate =(data)=>{
    console.log('calculate',data.feed.entry);
    let dataCal=data.feed.entry;
    
    let arr=[];

    
        for(let j=0;j<dataCal.length;j++){

               console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t)
               let keydata=dataCal[j].gs$cell.$t;
               j++;
               console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t)
               let valueData=dataCal[j].gs$cell.$t;
               let objectData={
                   'key':keydata,
                   'value':valueData
               };
               arr.push(objectData);
        }
        console.log('\n')


    return arr;
}


export const claculateServeice =(data)=>{
    console.log('calculate',data.feed.entry);
    if(data.feed.entry == undefined){
        return ['no data']
    }
    let dataCal=data.feed.entry;
    
    let arr=[];

    let c=0;
        for(let j=0;j<dataCal.length;j++){

               //console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t);
               let mcc_link=dataCal[j].gs$cell.$t.split('/');
               let mcc_linka=mcc_link[mcc_link.length-1];
               let mcc_linkb=mcc_link ? mcc_link.join('/') :'#';
               j++;
               //console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t);
               let type=dataCal[j].gs$cell.$t;
               j++;
               //console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t);
               let description=dataCal[j].gs$cell.$t;
               j++;
               //console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t);
               let point=dataCal[j].gs$cell.$t != undefined ? dataCal[j].gs$cell.$t :'NA';
               j++;
               //console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t);
               let status=dataCal[j].gs$cell.$t;
               j++;
               //console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t);
               let eng_name=dataCal[j].gs$cell.$t;

                if(c != 0){
                    let objectData={
                        project:'iMedidata',
                        mcc_link:[mcc_linka,mcc_linkb],
                        type:type,
                        description:description,
                        point:point ? point : 'NA',
                        status:status,
                        eng_name:eng_name
                       }
                       arr.push(objectData);
                }           
              c++;
        }
        console.log('\n')


    return arr;
}


export const claculateLearn =(data)=>{
    console.log('calculate',data.feed.entry);
    if(data.feed.entry == undefined){
        return ['no data']
    }
    let dataCal=data.feed.entry;
    
    let arr=[];

    let c=0;
        for(let j=0;j<dataCal.length;j++){

            //    console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t);
               let title=dataCal[j].gs$cell.$t
               j++;
            //    console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t);
               let short_desc=dataCal[j].gs$cell.$t
               j++;
            //    console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t);
               let long_desc=dataCal[j].gs$cell.$t
               j++;
            //    console.log(dataCal[j].gs$cell.row+','+dataCal[j].gs$cell.col+'=',dataCal[j].gs$cell.$t);
               let link=dataCal[j].gs$cell.$t
              
               if(c>0){
                   let objectData={
                       title:title,
                       short_desc:short_desc,
                       long_desc:long_desc,
                       link:link
                   }

                   arr.push(objectData);
               }
                      
              c++;
        }
        console.log('\n')


    return arr;
}