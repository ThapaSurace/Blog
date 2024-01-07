'use client'

import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
  // Create a client
const queryClient = new QueryClient()
const OueryProvider = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default OueryProvider