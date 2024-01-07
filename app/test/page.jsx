import axios from 'axios'
import React from 'react'
import { BASE_URL } from '@/libs/BaseUrl'

const getPosts = async () => {
   const {data} =  await axios.get(`${BASE_URL}/post`)
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
                   <div dangerouslySetInnerHTML={{ __html: `${post.longDesc}` }} />
                </div>
            ))
        }
    </div>
  )
}

export default TestPage