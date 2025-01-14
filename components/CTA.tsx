import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <div className="mt-16 text-center bg-white rounded-md shadow-lg p-8">
        <h2 className="text-4xl font-bold text-blue-950">Start your project now.</h2>
        <p className="text-lg text-gray-600 mt-4 mb-8">Fill out our quick form to get started on your project today.</p>
        <Link href="/quote" className="bg-blue-950 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-800">FREE QUOTE</Link>
    </div>
  )
}

export default CTA