import UserTable from '@/app/components/Table/UserTable'
import { getAllUsersData } from '@/app/utils/fetchApi'
import React from 'react'

const UserLists = async() => {
  const data = await getAllUsersData()
  return (
    <div className="max-w-6xl mx-auto min-h-[calc(100vh-154.8px)] flex justify-center items-center">
      <div className="w-full">
        <h1 className="mb-6 text-center">User Lists</h1>
        <UserTable data={data} />
      </div>
    </div>
  )
}

export default UserLists