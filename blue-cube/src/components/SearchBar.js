import searchIcon from '../search.svg';
export const SearchBar = ()=>{

    return (<>
    <div className="flex w-4/6">
       
       <div className="p-3 shadow bg-white w-full rounded flex flex-row">

     <div className="pl-3 relative">
     <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
     </svg>
     
     </div>

     <input placeholder="Find Something..." className="ml-7 outline-none w-5/6" />

     <button className="bg-purple-800 text-white px-3 py-1 rounded shadow">
         Search
     </button>
        
       </div>

    </div>
    </>);
}