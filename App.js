import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import SplashScreen from "./containers/Splashscreen";
import RestaurantsScreen from "./containers/RestaurantsScreen";
import RestaurantScreen from "./containers/RestaurantScreen";
import MapScreen from "./containers/MapScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import FavoritesMapScreen from "./containers/FavoritesMapScreen";
import SearchScreen from "./containers/SearchScreen";
import LoginScreen from "./containers/LoginScreen";
import SignupScreen from "./containers/SignupScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [coords, setCoords] = useState({});
  const [favorites, setFavorites] = useState([]);

  const storeFavorites = async (favs) => {
    if (favs) {
      AsyncStorage.setItem("favorites", JSON.stringify(favs));
    } else {
      AsyncStorage.removeItem("favorites");
    }
    setFavorites(favs);
  };

  const setToken = async (token) => {
    if (token) {
      AsyncStorage.setItem("userToken", token);
    } else {
      AsyncStorage.removeItem("userToken");
    }
    setUserToken(token);
  };

  useEffect(() => {
    const askPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});

        const obj = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setCoords(obj);
        setIsLoading(false);
      } else {
        setError(true);
      }
    };

    const getFavorites = async () => {
      if (AsyncStorage.getItem("favorites")) {
        setFavorites(JSON.parse(await AsyncStorage.getItem("favorites")));
      }
    };

    const bootstrapAsync = async () => {
      if (AsyncStorage.getItem("userToken")) {
        setUserToken(await AsyncStorage.getItem("userToken"));
      }
    };

    askPermission();
    getFavorites();
    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : userToken === null ? (
        <Stack.Navigator>
          <Stack.Screen name="LogIn" options={{ headerShown: false }}>
            {() => <LoginScreen setToken={setToken} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp" options={{ headerShown: false }}>
            {() => <SignupScreen setToken={setToken} />}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Tab" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: "#6E3FAC",
                  tabBarStyle: [
                    {
                      display: "flex",
                    },
                    null,
                  ],
                }}
              >
                <Tab.Screen
                  name="Explore"
                  options={{
                    tabBarLabel: "Explorer",
                    tabBarIcon: ({ color }) => (
                      <Ionicons name="search" size={24} color={color} />
                    ),
                    headerShown: false,
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Restaurants"
                        options={{ headerShown: false }}
                      >
                        {() => (
                          <RestaurantsScreen
                            coords={coords}
                            setToken={setToken}
                          />
                        )}
                      </Stack.Screen>
                      <Stack.Screen
                        name="Search"
                        options={{ headerShown: false }}
                      >
                        {() => <SearchScreen />}
                      </Stack.Screen>
                      <Stack.Screen
                        name="Restaurant"
                        options={{ headerShown: false }}
                      >
                        {() => (
                          <RestaurantScreen
                            coords={coords}
                            favorites={favorites}
                            storeFavorites={storeFavorites}
                          />
                        )}
                      </Stack.Screen>
                      <Stack.Screen name="Map" options={{ headerShown: false }}>
                        {() => (
                          <MapScreen coords={coords} setToken={setToken} />
                        )}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="Favs"
                  options={{
                    tabBarLabel: "Favoris",
                    tabBarIcon: ({ color }) => (
                      <Feather name="heart" size={24} color={color} />
                    ),
                    headerShown: false,
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Favorites"
                        options={{ headerShown: false }}
                      >
                        {() => (
                          <FavoritesScreen
                            favorites={favorites}
                            coords={coords}
                          />
                        )}
                      </Stack.Screen>
                      <Stack.Screen
                        name="FavoritesMap"
                        options={{ headerShown: false }}
                      >
                        {() => (
                          <FavoritesMapScreen
                            coords={coords}
                            favorites={favorites}
                          />
                        )}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
