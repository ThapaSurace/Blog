import axios from 'axios'
import React from 'react'

const getPosts = async () => {
   const {data} =  await axios.get("http://localhost:3000/api/post")
   return data
}

const TestPage = async () => {
    const posts = await getPosts()
    console.log(posts)
  return (
    <div>
        {
            posts.map(post=>(
                <div>
                   <h1> {post.title}</h1>
                   <div dangerouslySetInnerHTML={{ __html: `${post.desc}` }} />
                </div>
            ))
        }
    </div>
  )
}

export default TestPage