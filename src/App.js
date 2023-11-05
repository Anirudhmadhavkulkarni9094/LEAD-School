import React, { useEffect, useState } from 'react';
import LocationData from './Components/LocationData';
import axios from 'axios';

function App() {
  const [pincode, setPincode] = useState("");
  const [locationData, setLocationData] = useState({
    'post code': '',
    country: '',
    'country abbreviation': '',
    places: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (pincode) {
      setIsLoading(true); // Set loading to true when fetching data
      axios.get(`https://api.zippopotam.us/IN/${pincode}`)
        .then((res) => {
          const data = res.data;
          if (data && data['post code'] && data.country && data['country abbreviation'] && data.places.length > 0) {
            setLocationData(data);
          } else {
            setLocationData({
              'post code': 'Not Found',
              country: 'Not Found',
              'country abbreviation': 'Not Found',
              places: []
            });
          }
        })
        .catch((err) => {
          setLocationData({
            'post code': 'Not a valid pin code',
            country: 'Not Found',
            'country abbreviation': 'Not Found',
            places: []
          });
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false); // Set loading to false after data is fetched
        });
    }
  }, [pincode]);

  return (
    <div className='bg-gradient-to-r from-blue-400 to-purple-500 p-5 sm:p-10  flex flex-col items-center justify-center'>
      <h1 className='text-center font-bold text-3xl'>FindMyPlace.com</h1>
      <input
        type="number"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        placeholder="Enter Pincode"
        className="p-2 rounded-md m-4"
      />
      {isLoading ? (
        <img src={require("./Components/Assets/loading.gif")} alt='loading' className=""></img>
      ) : (
        <LocationData
          postCode={locationData['post code']}
          country={locationData.country}
          countryAbbreviation={locationData['country abbreviation']}
          places={locationData.places}
        />
      )}
    </div>
  );
}

export default App;
