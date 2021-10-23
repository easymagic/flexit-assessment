import { CategoryButton } from "./CategoryButton";

export const Categories = ()=>{
  
    return (<>
         <div className="flex flex-row rounded border border-1 px-2 bg-white shadow">
            
 
            <CategoryButton text="World" />

            <CategoryButton text="Following" />

            <CategoryButton text="Popular" />



            <CategoryButton text="Post" />

<CategoryButton text="Gender" />
<CategoryButton text="Location" />
<CategoryButton text="Profession" last={true} />


         </div>
    </>);
};