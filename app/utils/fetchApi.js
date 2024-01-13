
//get all posts
  export const getData = async (cat) => {
    const res = await fetch(`${process.env.BASE_URL}/api/post?category=${cat || ""}`,{cache:"no-store"});
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json();
  };


  //get single post
  export const getSinglePost = async (id) => {
    const res =  await fetch(`${process.env.BASE_URL}/api/post/${id}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  
  export const getAllUsersData = async (cat) => {
    const res = await fetch(`${process.env.BASE_URL}/api/user`,{cache:"no-store"});
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json();
  };

