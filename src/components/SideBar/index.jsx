import React from 'react'
// import PropTypes from 'prop-types'
import LogoBar from './LogoBar'
import MenuBar from './MenuBar'
import ProfilBar from './ProfilBar'

function index({ user }) {
  const pages = [
    {
      path: 'jamaah',
      headline: 'Data jamaah'
    },
    {
      path: 'mz',
      headline: 'Data MZ'
    },
    {
      path: 'fungsional',
      headline: 'Data fungsional'
    }
  ]
  
  return (
    <div>
        <div className='h-screen flex flex-col justify-between'>
            <div>
              <LogoBar />
              <div>
                {
                  pages.map((page, index) => (
                    <div key={index}>
                      <MenuBar data={page.headline} pathRead={`/${page.path}/listData`} pathAdd={`/${page.path}/addData`} />
                      {index < 2 ? (
                        <div key={index} className='border-t-[1px] border-gray-200 mb-3'></div>
                      ) : null}
                    </div>
                  ))
                }
              </div>
            </div>
            <div>
              <ProfilBar user={user} />
            </div>
        </div>
    </div>
  )
}

// index.propTypes = {}

export default index
