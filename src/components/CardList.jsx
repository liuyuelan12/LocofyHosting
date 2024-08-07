import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "./ListingItem";
import { CardStateContext } from "../context/CardStateContext";
import PropTypes from "prop-types";
import "./CardList.css";

const CardList = ({ className = "" }) => {
  const navigate = useNavigate();
  const [cardState, setCardState] = useState([
    {
      listingImage: "http://localhost:5173/listing-image@2x.png",
      listingTitle: "Brightwoods Cabin",
      listingSubtitle: "Bridlepath, Ontario, Canada",
      rating: "4.9",
      price: "$658",
    },
    {
      listingImage: "http://localhost:5173/image-1@2x.png",
      listingTitle: "Urban Loft",
      listingSubtitle: "Georgina Bay, Ontario, Canada",
      rating: "4.5",
      price: "$410",
    },
    {
      listingImage: "http://localhost:5173/image-2@2x.png",
      listingTitle: "Forestville Cottages",
      listingSubtitle: "Simcoe, Ontario Canada",
      rating: "5.0",
      price: "$325",
    },
    {
      listingImage: "http://localhost:5173/image-3@2x.png",
      listingTitle: "Unionville Logde",
      listingSubtitle: "Markham, Ontario Canada",
      rating: "4.6",
      price: "$485",
    },
    {
      listingImage: "http://localhost:5173/image-4@2x.png",
      listingTitle: "Missisuaga Aistream",
      listingSubtitle: "Missisauga, Ontario, Canada",
      rating: "4.8",
      price: "$502",
    },
    {
      listingImage: "http://localhost:5173/image-5@2x.png",
      listingTitle: "Niagara Homes",
      listingSubtitle: "Niagara, Ontario, Canada",
      rating: "4.9",
      price: "$655",
    },
    {
      listingImage: "http://localhost:5173/image-6@2x.png",
      listingTitle: "Sunny Estate",
      listingSubtitle: "Barcort, Ontario Canada",
      rating: "5.0",
      price: "$320",
    },
    {
      listingImage: "http://localhost:5173/image-7@2x.png",
      listingTitle: "Lawrence Hills",
      listingSubtitle: "Lawrence, Ontario Canada",
      rating: "5.0",
      price: "$350",
    },
    {
      listingImage: "http://localhost:5173/image-8@2x.png",
      listingTitle: "Simcoe Lake Lodge",
      listingSubtitle: "Simcoe, Ontario, Canada",
      rating: "5.0",
      price: "$395",
    },
    {
      listingImage: "http://localhost:5173/image-9@2x.png",
      listingTitle: "Wasaga Beach Home",
      listingSubtitle: "Georgina Bay, Ontario, Canada",
      rating: "5.0",
      price: "$385",
    },
    {
      listingImage: "http://localhost:5173/image-10@2x.png",
      listingTitle: "Banff Hills",
      listingSubtitle: "Banff, Alberta, Canada",
      rating: "5.0",
      price: "$385",
    },
    {
      listingImage: "http://localhost:5173/image-11@2x.png",
      listingTitle: "Creemore Canada",
      listingSubtitle: "Creemore, Alberta, Canada",
      rating: "5.0",
      price: "$385",
    },
    {
      listingImage: "http://localhost:5173/image-12@2x.png",
      listingTitle: "Kawartha Lakes",
      listingSubtitle: "Kawartha, Alberta,  Canada",
      rating: "5.0",
      price: "$385",
    },
    {
      listingImage: "http://localhost:5173/image-13@2x.png",
      listingTitle: "Revelstoke Cabin",
      listingSubtitle: "Revelstoke, Alberta, Canada",
      rating: "5.0",
      price: "$385",
    },
    {
      listingImage: "http://localhost:5173/image-14@2x.png",
      listingTitle: "Brightwoods Estate",
      listingSubtitle: "Brightwoods Estate",
      rating: "5.0",
      price: "$385",
    },
    {
      listingImage: "http://localhost:5173/image-15@2x.png",
      listingTitle: "Brightwoods Estate",
      listingSubtitle: "Brightwoods Estate",
      rating: "5.0",
      price: "$385",
    },
  ]);

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <CardStateContext.Provider value={{ cardState, setCardState }}>
      <section className={`homes ${className}`}>
        {cardState.map((item, index) => (
          <ListingItem
            key={index}
            listingImage={item.listingImage}
            heartIcon="/heart-icon@2x.png"
            listingTitle={item.listingTitle}
            listingSubtitle={item.listingSubtitle}
            rating={item.rating}
            price={item.price}
            trendIcon="/trend-icon@2x.png"
            onListingItemContainerClick={onListingItemContainerClick}
          />
        ))}
      </section>
    </CardStateContext.Provider>
  );
};

CardList.propTypes = {
  className: PropTypes.string,
};

export default CardList;
