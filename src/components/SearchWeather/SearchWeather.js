import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {axiosNow, setDaseWeather} from "../../store/slices/mainReducer/mainReducer";
import {Icon, Input} from "semantic-ui-react";
export default function SearchWeather() {
  const [now, setNow] = useState("");
  const dispatch = useDispatch();
  const city = useSelector(state => state.now.now)
  const setDase = () => {
    if (now !== "") {
      dispatch(setDaseWeather({now}));
      setNow("");
    };
  };
  useEffect(() => {
    if (city !== "") {
      dispatch(axiosNow(city));
    };
  }, [city]);
  return (
    <Input
      value={now}
      onChange={(e) => setNow(e.target.value)}
      icon={<Icon name='search' inverted circular link onClick={setDase} />}
      placeholder='Search...'
    />
  );
};

