import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./component/Header";
import "./styles.css";
import { Profile } from "./pages/Profile";
import { Favorites } from "./pages/Favorites";
// Create a books app in React. It should have the following routes:
// a. Home page - This renders all the books coming from the API. Fake fetch has been provided below.
// b. Favorites Page - There would be a button along with each of the book of Add to Fav. On clicking that, the book should be added to favorites. Do this using context. And if the book already exists in favorites, the button should be texted Go to Fav - The navbar item should show the count of books in favorites.
// c. Profile page - It should display the user details coming from the result of the api
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorites />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

      </Routes>
    </div>
  );
};

export default App;
