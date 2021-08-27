import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";
import Statusbar from "../components/Statusbar";
import Filters from "../components/Filters";

export default function RestaurantsScreen({ coords, keyword, setToken }) {
  const [filters, setFilters] = useState({});
  const [displayAll, setDisplayAll] = useState(true);

  const handleFilters = (filter) => {
    setFilters({
      ...filters,
      [filter]: !filters[filter],
    });
  };

  useEffect(() => {
    if (Object.values(filters).every((x) => x === false)) {
      setDisplayAll(true);
    } else {
      setDisplayAll(false);
    }
  }, [filters]);

  return (
    <View>
      <Statusbar style={{ backgroundColor: "#523383" }} />
      <Header btn="map" setToken={setToken} />
      <SearchBar />
      <Filters filters={filters} handleFilters={handleFilters} />
      <RestaurantsList
        coords={coords}
        filters={filters}
        displayAll={displayAll}
        keyword={keyword}
      />
    </View>
  );
}
