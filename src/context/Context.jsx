import React, { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../fakeFetch";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [profileData, setProfileData] = useState({});
  const [favData,setFavData]=useState([])

  const getData = async () => {
    try {
      const {
        status,
        data: { books, user },
      } = await fakeFetch("https://example.com/api/books");
      if (status === 200) {
        setBookData(books);
        setProfileData(user);
      }
    } catch (error) {
      setErrMsg(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    getData()
  },[])

const favHandler=(data)=>{
  setFavData([...favData,data])
}
console.log(favData)
  return (
    <Context.Provider value={{ bookData, profileData,favHandler,favData }}>
  
    </Context.Provider>
  );
};

export const ContextState = () => {
  return useContext(Context);
};
