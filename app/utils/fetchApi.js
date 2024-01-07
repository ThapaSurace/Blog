import { BASE_URL } from "@/libs/BaseUrl";

  export const getData = async () => {
    const res = await fetch(`${BASE_URL}/post`,{cache:"no-store"});
    return res.json();
  };

  export const getSinglePost = async (id) => {
    const res =  await fetch(`${BASE_URL}/post/${id}`)
    return res.json()
  }
  
  
