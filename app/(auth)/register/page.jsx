import React from 'react'
import { Card } from '@nextui-org/react'
import RegisterForm from '@/app/components/AuthModal/RegisterForm/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='min-h-[calc(100vh-154.8px)] flex justify-center items-center px-4'>
    <Card className='max-w-md mx-auto w-full px-4'>
    <RegisterForm />
   </Card>
  </div>
  )
}

export default RegisterPage