export const PhotoCard = ({src})=>{

    return (<>
       
       <div className="w-1/5  p-3 relative">

           <div className="h-60 rounded" style={{
           backgroundImage:`url(${src})`,
           backgroundSize:'cover'
       }}>

           </div>

           <div className="relative -top-12 bg-white w-full p-2 rounded-bl rounded-br border-b border-l border-r">

               <div>
                   Name
               </div>
               <div>
                   Location
               </div>
               <div>
                   Actions
               </div>
  
           </div>

       {/* <img src={src} className="w-full" /> */}
{/* {src} */}
       </div>
      
    </>);
}