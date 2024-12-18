import React from 'react'

const searchPage =async ({searchParams,}:{
    searchParams:{
        query: string
    }
}) => {
    const {query} = await searchParams
    
  return (
    <div>search for {query}</div>
  )
}

export default searchPage