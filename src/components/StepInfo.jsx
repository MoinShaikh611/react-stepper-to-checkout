import React from 'react'

function StepInfo({data = [],index=1}) {
  const ActiveComponent = data[index].Component;
  return (
    <ActiveComponent/>
  )
}

export default StepInfo