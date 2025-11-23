import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
 
  const data=useLoaderData()//used to store value of loader


  //For method:-1
  //comment it when you study method2
  // const [data,setData]=useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/harshpatel3411')

  //   .then((response)=>{
  //     return response.json()
  //   })
  //   .then((data)=>{
  //       setData(data)
      
  //   })
  // }, [])
  
  return (

    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img   src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github
//For method :-2
  //comment it when you study method1



export const githubInfoLoader=async ()=>{
  const respose= await fetch('https://api.github.com/users/harshpatel3411')
  return respose.json()

}