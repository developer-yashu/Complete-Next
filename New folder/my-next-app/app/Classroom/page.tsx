"use client";

import axios from "axios";
import { useState ,useEffect} from "react";

export default   function Home() {

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
  const data=await axios.get("https://dummyjson.com/products");
  console.log(data.data.products);
  setUsers(data.data.products);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (

    <>
    <h1>Classrom</h1>
   {users.map((title) => (
  <div key={title.id}>
    <p>Id {title.id}</p>
    <p>title {title.title}</p>
    <p>Price :{title.price}</p>
    <p>Discont {title.discountPercentage}</p>
    <p>Brand : {title.brand}</p>
    <p>Description {title.description}</p>
  </div>
))}
    </>
  );
}
