import React, {useState, useEffect, } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Icon, Input} from "semantic-ui-react";
import {axiosNowWEather, setNowCity, setGeoLoca, axiosStartWeather} from "../../store/slices/day5hour3/day5hour3";
export default function SearchWeather() {
  const namelineAdjustment = (str) => str[0].toUpperCase() + str.slice(1);
  const [now, setNow] = useState("");
  const [loc, setLoc] = useState({lat: "", lon: ""})
  const dispatch = useDispatch();
  const {nowCity} = useSelector(state => state.day5hour3)
  const setDase = () => {
    if (now !== "") {
      const n = namelineAdjustment(now)
      dispatch(setNowCity({n}));
      setNow("");
    };
  };

  useEffect(() => {
    if (nowCity !== "") dispatch(axiosNowWEather(nowCity));
    else {
      dispatch(setGeoLoca(loc))
    }
  }, [nowCity, loc.lat, dispatch]);
  useEffect(() => {
    const geoLoca = (position) => {
      setLoc({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
    }
    navigator.geolocation.getCurrentPosition(geoLoca)
    if (loc.lat) {
      dispatch(axiosStartWeather(nowCity))
    }
  }, [loc.lat])
  return (
    <Input
      value={now}
      onChange={(e) => setNow(e.target.value)}
      icon={<Icon name='search' inverted circular link onClick={setDase} />}
      placeholder='Search...'
    />
  );
};