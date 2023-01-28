// import React, { useEffect, useState } from "react";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
// import { positions } from "@mui/system";
// import Map from "./Map";
// import CategoryButtons from "../../components/Map/Category";
// import { Autocomplete } from "@mui/material";

// const containerStyle = {
//   width: "600px",
//   height: "600px",
// };

// const center = {
//   lat: 22.3707188,
//   lng: 114.1251818,
// };

// export default function Map2() {
//   ////////////////////////////////////   Load Data   /////////////////////////////////////
//   const [map, setMap] = useState<any>();

//   const [loadDbData, setLoadDbData] = useState<any>();

//   const [lat, setLat] = useState<any>();
//   const [lng, setLng] = useState<any>();
//   const [targetLat, setTargetLat] = useState<any>();
//   const [targetLng, settargetLng] = useState<any>();

//   const [isTriggered, setIsTriggered] = useState(false);
//   const [items, setItems] = useState<any[]>([]);
//   const [searchItems, setSearchItems] = useState<any[]>([]);

//   const [value, setValue] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/map`);
//       const json = await res.json();

//       setLoadDbData(json);
//     }
//     fetchData();
//   }, []);

//   console.log(loadDbData);

//   ////////////////////////////////////   Load Data   /////////////////////////////////////

//   navigator.geolocation.getCurrentPosition((position) => {
//     setLat(position.coords.latitude);
//     console.log("latitude: ", position.coords.latitude);
//     setLng(position.coords.longitude);
//     console.log("longitude: ", position.coords.longitude);
//   });

//   ////////////////////////////////////   Load Data   /////////////////////////////////////

//   /////////////////////////////////////   Category   /////////////////////////////////////
//   const filterItem = (category: string) => {
//     const newItems = loadDbData.filter((place: any) => {
//       const districtName = place.district.replaceAll("_", " ");
//       const mapType = place.mapType.engType.replaceAll("_", " ");

//       return districtName === category || mapType === category;
//     });
//     setItems(newItems);
//     setSearchItems(newItems);
//   };

//   console.log("item: ", items);

//   /////////////////////////////////////   Category   /////////////////////////////////////

//   ////////////////////////////////////   Search Bar   ////////////////////////////////////

//   const filterPlaceName = items.map((item) => {
//     return item.engName;
//   });

//   const getPlaceLocation = (category: string) => {
//     const newItems = loadDbData.filter((place: any) => {
//       const engName = place.engName;

//       return engName === category;
//     });

//     setSearchItems(newItems);
//     console.log("searchItems: ", searchItems);
//     setTargetLat(parseFloat(searchItems[0].latitude));
//     console.log("targetLocation: ", targetLat);
//     settargetLng(parseFloat(searchItems[0].longitude));
//     console.log("targetLocation: ", targetLng);
//   };
//   console.log("value: ", value);
//   console.log("searchItems: ", searchItems);
//   ////////////////////////////////////   Search Bar   ////////////////////////////////////

//   return (
//     <>
//       {isTriggered ? (
//         <div>
//           <div>
//             <button onClick={() => setIsTriggered(false)}>Back</button>
//             <CategoryButtons filterItem={filterItem} setItem={setItems} />
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div>
//             <Autocomplete value={value} onChange={setValue} data={filterPlaceName} />
//             <button onClick={() => getPlaceLocation(value)}>Search</button>
//           </div>

//           <div>
//             <button onClick={() => setIsTriggered(true)}>Category</button>
//           </div>

//           <div>
//             <LoadScript googleMapsApiKey="AIzaSyCD0Ddx6UPdWGsBUUBR711rCZQYRboSSrw">
//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={{ lat: lat, lng: lng }}
//                 zoom={13}
//                 onLoad={(map) => setMap(map)}
//                 options={{ disableDefaultUI: true }}
//               >
//                 <></>
//               </GoogleMap>
//             </LoadScript>
//           </div>

//           <div>
//             <button onClick={() => map.panTo(center)}>Jump</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import React from "react";

function Map2() {
  return <div>Map2</div>;
}

export default Map2;
