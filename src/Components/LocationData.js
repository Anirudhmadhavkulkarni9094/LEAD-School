import React from 'react';

function LocationData(props) {
  const { postCode, country, countryAbbreviation, places } = props;

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-gray-200 rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Location Information</h2>
      <p><strong>Post Code:</strong> {postCode}</p>
      <p><strong>Country:</strong> {country}</p>
      <p><strong>Country Abbreviation:</strong> {countryAbbreviation}</p>

      <h3 className="text-2xl sm:text-3xl font-bold mt-4 text-center">Places</h3>
      <ul className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full m-auto">
        {places.map((place, index) => (
          <div key={index} className="mb-2 bg-white shadow-2xl rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 m-5">
            <p><strong>Place Name:</strong> {place['place name']}</p>
            <p><strong>State:</strong> {place.state}</p>
            <p><strong>State Abbreviation:</strong> {place['state abbreviation']}</p>
            <p><strong>Longitude:</strong> {place.longitude}</p>
            <p><strong>Latitude:</strong> {place.latitude}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default LocationData;
