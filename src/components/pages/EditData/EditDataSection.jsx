import React, { useCallback, useEffect, useState } from 'react'
import BiodataContainer from './BiodataContainer'
import AddressContainer from './AddressContainer'
import InformationMZ from './InformationMZ'
import SubmitButton from '../../shared/Button/submitButton'

function EditDataSection({ flock, functional, classes, suluk, updateFlock, updateFunctional, updateClass, updateSuluk, province, selectedProvince, regency, selectedRegency, subdistrict, selectedSubdistrict, ward }) {
  const [dataComponent, setDataComponent] = useState({})
  const [dataFunctional, setDataFunctional] = useState({})
  const [dataClass, setDataClass] = useState({})
  const [dataSuluk, setDataSuluk] = useState({})
  const [buttonOnClick, setButtonOnClik] = useState(false)
  const [selectedGender, setSelectedGender] = useState('')

  const handleInputChange = useCallback((data) => {
    setDataComponent((prevState) => ({
      ...prevState,
      ...data
    }))
  }, [])

  const handleSubmitButton = () => {
    updateFlock(dataComponent)
    updateFunctional(dataFunctional)
    updateClass(dataClass && dataClass)
    updateSuluk(dataSuluk && dataSuluk)
    setButtonOnClik(true)
  }

  const handlerSelectedGender = (value) => {
    setSelectedGender(value)
  }

  useEffect(() => {
    setButtonOnClik(false)
  }, [dataComponent])

  useEffect(() => {
    const updatedAt = new Date();
    setDataFunctional(() => {
      return {
        ...functional, // Keep other attributes from functional
        fathersName: dataComponent.fathersName,
        nik: dataComponent.nik,
        updatedAt: updatedAt,
      };
    });
  }, [functional, dataComponent])

  useEffect(() => {
    const updatedAt = new Date()
    if (classes !== undefined) {
      setDataClass(() => {
        return {
          ...classes,
          fathersName: dataComponent.fathersName,
          nik: dataComponent.nik,
          updatedAt: updatedAt,
        }
      })
    }
  }, [classes, dataComponent])

  useEffect(() => {
    const updatedAt = new Date()
    if (suluk !== undefined) {
      setDataSuluk(() => {
        return {
          ...suluk,
          fathersName: dataComponent.fathersName,
          nik: dataComponent.nik,
          updatedAt: updatedAt
        }
      })
    }
  }, [suluk, dataComponent])

  return (
    <div>
        <div className='grid grid-cols-2 gap-x-5 mt-5'>
            <div>
              <BiodataContainer 
                prevFlock={flock && flock} 
                onInputChange={handleInputChange}
                buttonOnClick={buttonOnClick}
                sendGender={handlerSelectedGender} />
            </div>
            <div>
                <AddressContainer
                  onInputChange={handleInputChange} 
                  prevFlock={flock && flock} 
                  province={province && province}
                  selectedProvince={selectedProvince}
                  regency={regency && regency}
                  selectedRegency={selectedRegency}
                  subdistrict={subdistrict}
                  selectedSubdistrict={selectedSubdistrict}
                  ward={ward} />
            </div>
        </div>
        <div className='mt-5'>
          <InformationMZ 
            prevFlock={flock && flock}
            receiveGender={selectedGender}
            onInputChange={handleInputChange}
            buttonOnClick={buttonOnClick} />
        </div>
        <div className='mt-8 mb-8 flex justify-end'>
            <SubmitButton onClick={handleSubmitButton} bgColor='bg-basic-blue hover:bg-blue-dark text-white text-sm' />
        </div>
    </div>
  )
}

export default EditDataSection
