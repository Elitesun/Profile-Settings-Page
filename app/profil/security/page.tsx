import React from 'react'
import PasswordInfo from '@/components/securityInfo/PasswordInfo'
import AccessLevelInfo from '@/components/securityInfo/AccessLevelInfo'

const page = () => {
  return (
    <div>
      <PasswordInfo />
      <AccessLevelInfo/>
    </div>
  )
}

export default page