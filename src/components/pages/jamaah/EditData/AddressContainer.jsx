import React, { useEffect } from 'react'
import { useState } from 'react'
import convertToTitleCase from '../../../../utils/convertToTitleCase'

function AddressContainer({ onInputChange, buttonOnClick, prevFlock, province, regency, selectedProvince, selectedRegency, subdistrict, selectedSubdistrict, ward }) {
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

    useEffect(() => {
        if (prevFlock !== null && prevFlock.address !== null) {
            setFlock({
                address: {
                    province: prevFlock.address.province,
                    regency: prevFlock.address.regency,
                    subdistrict: prevFlock.address.subdistrict,
                    ward: prevFlock.address.ward,
                    linkGmaps: prevFlock.address.linkGmaps,
                    details: prevFlock.address.details
                }
            })
        }
    }, [prevFlock])

    useEffect(() => {
        selectedProvince(flock.address.province)
    }, [prevFlock, selectedProvince, flock])

    useEffect(() => {
        selectedRegency(flock.address.regency)
    }, [prevFlock, selectedRegency, flock])

    useEffect(() => {
        selectedSubdistrict(flock.address.subdistrict)
    }, [prevFlock, selectedSubdistrict, flock])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFlock((prevState) => ({
            address: {
                ...prevState.address,
                [name] : value
            }
        }))
    }

    useEffect(() => {
        onInputChange(flock)
    }, [buttonOnClick, flock, onInputChange])

    return (
        <div className='text-xs bg-white p-6 rounded drop-shadow-sm h-full text-basic-grey'>
            <p className='text-sm font-medium text-basic-blue mb-5'>Alamat Tinggal</p>
            <form className='flex flex-col gap-y-2'>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="province">Provinsi</label>
                    <select
                        name="province"
                        id="province"
                        onChange={handleInputChange}
                        className='rounded text-xs border-gray-400'>
                            <option value={prevFlock && prevFlock.address.province} selected>{prevFlock && prevFlock.address.province}</option>
                            {
                                province && province.data.map((item, index) => (
                                    <option key={index} value={item.name}>{item.name}</option>
                                ))
                            }
                    </select>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="regency">Kabupaten</label>
                    <select 
                        name="regency"
                        id="regency"
                        onChange={handleInputChange}
                        className='rounded text-xs border-gray-400'>
                        <option value={prevFlock && prevFlock.address.regency} selected>{prevFlock && prevFlock.address.regency}</option>
                        {
                            regency && regency.data.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="subdistrict">Kecamatan</label>
                    <select
                        name="subdistrict"
                        id="subdistrict"
                        onChange={handleInputChange}
                        className='rounded text-xs border-gray-400'>
                        <option value={prevFlock && prevFlock.address.subdistrict} selected>{prevFlock && prevFlock.address.subdistrict}</option>
                        {
                            subdistrict && subdistrict.data.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="ward">Kelurahan</label>
                    <select
                        name="ward"
                        id="ward"
                        onChange={handleInputChange}
                        className='rounded text-xs border-gray-400'>
                        <option value={prevFlock && prevFlock.address.ward} selected>{prevFlock && prevFlock.address.ward}</option>
                        {
                            ward && ward.data.map((item, index) => (
                                <option key={index} value={item.name}>{convertToTitleCase(item.name)}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <label htmlFor="linkGmaps">Link Gmaps</label>
                    <input
                        type="url"
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

export default AddressContainer
