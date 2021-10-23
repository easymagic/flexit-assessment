export const PhotoCard = ({src,name,location})=>{

    return (<>
       
       <div className="w-1/5  p-3 relative">

           <div className="h-60 rounded" style={{
           backgroundImage:`url(${src})`,
           backgroundSize:'cover'
       }}>

           </div>

           {/* relative -top-20 bg-transparent w-full p-2 rounded-bl rounded-br border-b border-l border-r */}
           <div className=" -top-20 bg-transparent relative text-white hover:text-black hover:bg-white w-full p-2 rounded-bl rounded-br border-b border-l border-r">

               <div className="mb-1">
                  {name}  
               </div>
               <div className="flex flex-row mb-1">
                  <div className="text-gray-300 mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
</svg>
                  </div>
                  <div className="break-normal truncate overflow-ellipsis">
                  {location == null? 'Global' : location}
                  </div>
                   
               </div>
               <div className="grid grid-cols-2 text-xl" >
                   <button className="bg-red-600 text-white mr-1 px-5 rounded">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
                   </button>
                   <button className="bg-purple-800  text-white px-5 py-1 rounded">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
</svg>                   
                    </button>
               </div>
  
           </div>

       {/* <img src={src} className="w-full" /> */}
{/* {src} */}
       </div>
      
    </>);
}