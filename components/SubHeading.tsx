import React from 'react'

const SubHeading = ({title, text}: {title: string, text: string}) => {
  return (
    <>
        <h3 className='text-2xl font-extralight mb-2 text-blue-950'>{title}</h3>
        <h4 className='text-4xl font-bold mb-20 text-blue-950'>{text}</h4>
    </>
  )
}

export default SubHeading