import React from 'react'
import { DetailsBahar } from './DetailsBahar'
import { HistoryDetails } from './HistoryDetails'
import { NewDetail } from './NewDetail'


export const Details = () => {
    
  return (
    <>
    <div className='w-full'>
    <DetailsBahar />
    <HistoryDetails />
    <NewDetail />
    </div>

    </>
  )
}
