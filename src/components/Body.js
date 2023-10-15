import RestaurantCard, {withPromtedLabel} from "./RestaurantCard"
import restaurantList from "../utils/mockData"
import { useEffect, useState } from "react"
import {RESTAU_URL} from "../utils/constants"
import { Link } from "react-router-dom"
import Shimmer from "./Shimmer";


const Body = () => {

    const [searchText,setSearchText] = useState("")
    const [restaurants,setRestaurants] = useState(restaurantList)
    const [filteredRestaurant,setFilteredRestaurant] = useState(restaurantList)


    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch(RESTAU_URL)
        const json = await data.json()

        setRestaurants(
           json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    }

    return restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
            <div className="filter flex ">
                <div className="m-4 p-4">
                    <input type="text" data-testid="searchInput"
                    className="border border-solid border-black" placeholder="Search a restaurant you want..."
                    value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => { const filteredRestaurant = restaurants.filter((res) => res?.data?.name.toLowerCase().includes(searchText)); 
                        setFilteredRestaurant(filteredRestaurant) }} > Search
                    </button>
                
                    <button className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredList = restaurants.filter(
                                (res) => res.data.avgRating > 4
                            );
                        setFilteredRestaurant(filteredList);
                        }}
                    >Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) =>
                   <Link
                   to={"/restaurant/" + restaurant?.data?.id}
                   key={restaurant?.data?.id}>
                   <RestaurantCard {...restaurant?.data} />
                 </Link>
                )}
            </div>           
        </div>
    );
}
export default Body