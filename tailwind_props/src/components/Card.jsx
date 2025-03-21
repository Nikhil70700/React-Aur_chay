import React from 'react'

function Card({username,btnText="Visit me",imgUrl,userProfile}) {
    console.log(username)
  return (
    <>
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img className="size-48 shadow-xl rounded-md" alt={username} src={imgUrl} />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-medium">{username}</span>
          <span className="font-medium text-sky-500">{userProfile}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
          <button className='p-2 bg-green-400 rounded-md text-white'>{btnText} → </button>
        </div>
      </div>
    </>
  )
}

export default Card