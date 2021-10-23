import { AccountMenuTopRight } from './AccountMenuTopRight';
import { Categories } from './Categories';
import { ContentFeed } from './ContentFeed';
import { FirstRow } from './FirstRow';
import { LeftSideBar } from './LeftSideBar';
import { SearchBar } from './SearchBar';
import { SecondRow } from './SecondRow';
import { ThirdRow } from './ThirdRow';
import { UserNotification } from './UserNotification';
export const Layout = ({children})=>{
  

    return (<>
    
    <div className="bg-gray-100 h-screen">
      <div className="container flex mx-auto">
        {/* left side bar */}
        <LeftSideBar />
        <ContentFeed>
            <FirstRow>
                <SearchBar />
                <UserNotification />
                <AccountMenuTopRight />
            </FirstRow>
            <SecondRow>
               <Categories />
            </SecondRow>
            <ThirdRow>
              {children}
            </ThirdRow>
        </ContentFeed>

        {/* <div className="p-2 w-5/6 h-screen flex flex-col">



          <div className="w-full flex flex-row mt-3">

            <div className="w-5/6 p-3">
              
              <div className="p-3 shadow rounded bg-white flex">
                <img alt="search" src={searchIcon} className="flex-shrink w-12 h-7 top-1 relative left-1" />
                <input placeholder="Find Something" className="outline-none w-10 w-4/6" />
                <button className="w-1/6 p-2 bg-purple-600 text-white shadow rounded">Search</button>
              </div>
            </div>
            <div className="w-1/6 mt-5">
              Account/notification
            </div>

          </div>
          content
        </div> */}
      </div>
    
    </div>    
    </>);


};