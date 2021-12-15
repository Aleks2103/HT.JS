import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Pagination from '@mui/material/Pagination';
import ImgMediaCard from './card';
import TextField from '@mui/material/TextField';

export const api = {
  getContent: (query, page) =>`https://pixabay.com/api/?q=${query}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`,
}

function App() {

  const [page, setPage] = useState(1);
  const [listPhotos, setListPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(()=> {
    axios.get(api.getContent(query, page))
        .then(res=>setListPhotos(res.data.hits))
        .catch((error)=> error)
}, [query, page]);

const listJsx = listPhotos.map((item) =>
    <ImgMediaCard img={item.largeImageURL}/>
  )
const handleSubmit = (event) => {
  setQuery(event.target.value);
  event.preventDefault();
}
const handleChange = (event, value) => {
  setPage(value);
}

  return (
    <>
    <form onChange={handleSubmit} className="form">
        <TextField id="outlined-basic" label="Search" variant="outlined" name="search"/>
      </form>
    <ul className="list">
        {listJsx}
    </ul>
    <Pagination onChange={handleChange} count={25}/>
  </>
  )
}

export default App;


// Может не работать если не установать (npm install @emotion/react) и (npm install @emotion/styled)