import React from 'react'

import WebsiteLayout from '@/components/website/website-layout'

export default function home() {
  return (
    <WebsiteLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="text-gray-600">Welcome to the home page!</p>
      </div>
    </WebsiteLayout>
  )
}
