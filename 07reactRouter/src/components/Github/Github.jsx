import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {console.log(data)
    //     setData(data)
    // })
        
    // },[])
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>Github Followers : {data.followers} 
    <img src={data.avatar_url} alt="image github" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async  () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
}