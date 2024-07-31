// pages/Home.js
import React, { useEffect, useState } from 'react';
import PropertyList from '../components/PropertyList';
import Filter from '../components/Filter';
import { getProperties } from '../services/api';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    getProperties().then(response => {
      setProperties(response.data);
      setFilteredProperties(response.data);
    });
  }, []);

  const handleFilter = (filterCriteria) => {
    // Implement filtering logic here
  };

  return (
    <div>
      <Filter onFilter={handleFilter} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Home;
