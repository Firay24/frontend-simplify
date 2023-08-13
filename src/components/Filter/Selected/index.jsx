import React from 'react'
import PropTypes from 'prop-types'

function Selected({optionOfSelect, text}) {
  return (
    <div>
        <select name="" id="" className='w-full rounded px-4 py-2 text-xs outline-none focus:border-blue-500 border-[1px] border-gray-400'>
            <option selected>{text}</option>
            {
                optionOfSelect.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))
            }
        </select>
    </div>
  )
}

Selected.propTypes = {
    optionOfSelect: PropTypes.arrayOf.isRequired
}

export default Selected
