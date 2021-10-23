export const NavButton =({children,text="button",selected=false})=>{
 

    return (<>
    <div className={'flex flex-row mb-5 p-1 ' + (selected? 'border  border-gray-300 rounded':'')}>
       
       <div>
          {children}
       </div>
       <div className="pl-3">
           {text}
       </div>
       
    </div>
    </>);
};