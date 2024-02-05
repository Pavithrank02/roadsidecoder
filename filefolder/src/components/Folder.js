import React from 'react'
import explorer from '../data/folderDate'

const Folder = ({explorer}) => {
  return (
    <div style={{ marginTop: '5px' }}>
      <div>
        <span>
          📂{explorer.name}
        </span>
      </div>
    </div>
  )
}

export default Folder