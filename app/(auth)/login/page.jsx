'use client'
import LoginForm from '@/app/components/AuthModal/LoginForm/LoginForm'
import { Card } from '@nextui-org/react'
import React from 'react'

const LoginPage = () => {
  return (
   <div className='min-h-[calc(100vh-154.8px)] flex justify-center items-center px-4'>
     <Card className='max-w-md mx-auto w-full px-4'>
      <LoginForm />
    </Card>
   </div>
  )
}

export default LoginPage