import React from 'react'
import './Content.css'

const Content = ({contents}) => {
  return (
    <div className='Content'>
        <ul>
            {contents?.map(content => (
                <li key={content.id}>{JSON.stringify(content)}</li>
            ))}
        </ul>
    </div>
  )
}

export default Content