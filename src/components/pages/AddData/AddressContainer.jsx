import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function AddressContainer({ onInputChange, buttonOnClick }) {
    const [flock, setFlock] = useState({
        address: {
            province: '',
            regency: '',
            subdistrict: '',
            ward: '',
            linkGmaps: '',
            details: ''
        }
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFlock((prevFlock) => ({
            address: {
                ...prevFlock.address,
                [name]: value
            }
        }))
    }

    useEffect(() => {
        onInputChange(flock)
    }, [buttonOnClick, flock, onInputChange])

    useEffect(() => {
        if (buttonOnClick) {
            setFlock({
                address: {
                    province: '',
                    regency: '',
                    subdistrict: '',
                    ward: '',
                    linkGmaps: '',
                    details: ''
                }
            })
        }
    }, [buttonOnClick])

    return (
        <div className='text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey'>
            <p className='text-sm font-medium text-basic-blue mb-5'>Alamat Tinggal</p>
            <form className='flex flex-col gap-y-2'>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="province">Provinsi</label>
                    <select
                        name="province"
                        id="province"
                        value={flock.address.province}
                        onChange={handleInputChange}
                        className='rounded text-xs border-gray-400'>
                        <option value=""></option>
                    </select>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="regency">Kabupaten</label>
                    <select 
                        name="regency"
                        id="regency"
                        value={flock.address.regency}
                        onChange={handleInputChange}
                        className='rounded text-xs border-gray-400'>
                        <option value=""></option>
                    </select>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="subdistrict">Kecamatan</label>
                    <select
                        name="subdistrict"
                        id="subdistrict"
                        value={flock.address.subdistrict}
                        onChange={handleInputChange}
                        className='rounded text-xs border-gray-400'>
                        <option value=""></option>
                    </select>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="ward">Kelurahan</label>
                    <select
                        name=""
                        id="ward"
                        value={flock.address.ward}
                        onChange={handleInputChange}
                        className='rounded text-xs border-gray-400'>
                        <option value=""></option>
                    </select>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="linkGmaps">Link Gmaps</label>
                    <input
                        type="text"
                        id='linkGmaps'
                        name='linkGmaps'
                        value={flock.address.linkGmaps}
                        onChange={handleInputChange}
                        placeholder='https://goo.gl/maps/wpPE26qCqUTqTS6S7'
                        className='rounded text-xs border-gray-400' />
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="details">Detail alamat</label>
                    <input
                        type="text"
                        id='details'
                        name='details'
                        value={flock.address.details}
                        onChange={handleInputChange}
                        placeholder='Jln. Kenangan No. 24 '
                        className='rounded text-xs border-gray-400' />
                </div>
            </form>
        </div>
    )
}

AddressContainer.propTypes = {
    addFlock: PropTypes.func.isRequired
}

export default AddressContainer
