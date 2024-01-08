import { BASE_URL } from "@/libs/BaseUrl";

  export const getData = async () => {
    const res = await fetch("http://localhost:3000/api/post",{cache:"no-store"});
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json();
  };

  export const getSinglePost = async (id) => {
    const res =  await fetch(`http://localhost:3000/api/post/${id}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  
  
