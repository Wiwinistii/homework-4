import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
<<<<<<< HEAD:homework-week2-ses1/my-app/src/Use.js
  const [dataSlice, setDataSlice] = useState([]);
=======
>>>>>>> 036202cb11c4a65cd9053764b509f0dbf19ee304:homework-week2-ses1/my-app/src/hooks/Use.js
  const accessToken = useSelector((state) => state.auth.token.token);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const onSearch = (event) => {
    console.log(accessToken);
    if (accessToken !== "") {
      axios
        .get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: `${searchQuery}`,
            type: "track",
          },
        })
        .then((response) => {
          const data = response.data.tracks.items;
          console.log(data);
          setSearchResult(data);
          setDataSlice(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Login first");
    }
    event.preventDefault();
  };

  return {
    searchResult,
    dataSlice,
    handleChange,
    onSearch,
  };
}