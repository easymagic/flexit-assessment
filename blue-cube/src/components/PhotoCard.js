export const PhotoCard = ({src})=>{

    return (<>
       
       <div className="w-1/5  p-3">

           <div className="h-60 rounded" style={{
           backgroundImage:`url(${src})`,
           backgroundSize:'cover'
       }}>

           </div>

       {/* <img src={src} className="w-full" /> */}
{/* {src} */}
       </div>
      
    </>);
}