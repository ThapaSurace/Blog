import React from 'react'
import BlogForm from '../components/Blog Form/BlogForm'
import { auth } from '@/libs/auth'

const BlogPage = async () => {
  const session = await auth()
  return (
    <div>
      <BlogForm session={session} />
    </div>
  )
}

export default BlogPage