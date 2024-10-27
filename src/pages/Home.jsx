import Banner from "../components/Banner/Banner"
import Categories from "../components/Categories/Categories"
import CategoryCard from "../components/common/Category-Card/CategoryCard"
import Navbar from "../components/Navbar/Navbar"
import { BannersData } from "../utils/Banner"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        
       <div className="Card-parent">
        {BannersData.map((item , index) => {
            return(
                <CategoryCard data={item} key={index}/>
            )
        } ) }
       </div><br /><br />
       <Categories/>
      
    
      
    </div>
  )
}

export default Home