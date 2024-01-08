

  export const getData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/post`,{cache:"no-store"});
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json();
  };

  export const getSinglePost = async (id) => {
    const res =  await fetch(`${process.env.BASE_URL}/api/post/${id}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  
  
