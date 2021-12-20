import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Pagination from "@mui/material/Pagination";
import ImgMediaCard from "./card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const api = {
  getPhotos: (query, page = 1) =>
    `https://pixabay.com/api/?q=${query}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`,
};

function App() {
  const [page, setPage] = useState(1);
  const [listPhotos, setListPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(search);

  useEffect(() => {
    axios
      .get(api.getPhotos(query, page))
      .then((res) => setListPhotos(res.data.hits))
      .catch((error) => error);
  }, [query, page]);

  const listJsx = listPhotos.map((item, index) => (
    <ImgMediaCard key={index} img={item.largeImageURL} />
  ));

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const onSearch = (e) => {
    setQuery(search);
    setSearch('')
    setPage(1);
  };

  return (
    <>
        <TextField
          value={search}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          name="search"
          onChange={handleInputChange}
        />
        <Button variant="contained" type="submit" className="button" onClick={onSearch}>
          Search
        </Button>
      <ul className="list">{listJsx}</ul>
      <Pagination count={10} onChange={onPageChange} />
    </>
  );
}

export default App;
