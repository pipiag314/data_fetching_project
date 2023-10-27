import React from 'react'

const Content = ({contents}) => {
    console.log(contents)
  return (
    <div className='content'>
        <ul>
            {contents?.map(content => (
                <li key={content.id}>{content.id}</li>
            ))}
        </ul>
    </div>
  )
}

export default Content