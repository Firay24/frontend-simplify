import React, { useState, useCallback, useEffect } from 'react'
import AddressContainer from './AddressContainer'
import InformationMZ from './InformationMZ'
import BiodataContainer from './BiodataContainer'
import SubmitButton from '../../shared/Button/submitButton'
import FunctionalContainer from './FunctionalContainer'
import AnotherBiodata from './AnotherBiodata'

function InputDataSection({ 
  isFunctional, 
  isAvailable, 
  addFlock, 
  putFlock, 
  addFunctional, 
  updatePersonalData, 
  personalData, 
  flockData, 
  province, 
  selectedProvince, 
  regency, 
  selectedRegency,
  subdistrict,
  selectedSubdistrict,
  ward }) {
    
  const [dataComponent, setDataComponent] = useState({})
  const [buttonOnClick, setButtonOnClik] = useState(false)
  const [selectedGender, setSelectedGender] = useState('')

  const handleInputChange = useCallback((data) => {
    setDataComponent((prevState) => ({
      ...prevState,
      ...data
    }));
  }, []);

  const handlerSelectedGender = (value) => {
    setSelectedGender(value)
  }

  const handleSubmit = () => {
    addFlock(dataComponent)
    setButtonOnClik(true)
  }

  useEffect(() => {
    setButtonOnClik(false)
  },[dataComponent])
 
  return (
    <div>
      {
        isFunctional === '' ? (
          <div></div>
        ) :
        isFunctional === 'non-functional' ? (
          <div>
            <div className='grid grid-cols-2 gap-x-5 mt-5'>
              <div>
                  <BiodataContainer updatePersonalData={updatePersonalData} onInputChange={handleInputChange} buttonOnClick={buttonOnClick} sendGender={handlerSelectedGender} />
              </div>
              <div>
                  <AddressContainer 
                    onInputChange={handleInputChange} 
                    buttonOnClick={buttonOnClick} 
                    province={province}
                    selectedProvince={selectedProvince} 
                    regency={regency}
                    selectedRegency={selectedRegency}
                    subdistrict={subdistrict}
                    selectedSubdistrict={selectedSubdistrict}
                    ward={ward} />
              </div>
            </div>
            <div className='mt-5'>
              <InformationMZ onInputChange={handleInputChange} buttonOnClick={buttonOnClick} receiveGender={selectedGender} />
            </div>
            <div className='mt-8 mb-8 flex justify-end'>
                <SubmitButton onClick={handleSubmit} bgColor='bg-basic-blue hover:bg-blue-dark text-white text-sm' />
                {/* <button type='submit' onClick={handleSubmit} >Submit</button> */}
            </div>
          </div>
        ) : isFunctional === 'functional' && isAvailable ? 
          (
            <div>
              <div className='mt-5'>
                    <AnotherBiodata putFlock={putFlock} id={flockData?._id} />
              </div>
              <hr className='border-1 border-gray-200 my-10' />
              <div>
                <FunctionalContainer addFunctional={addFunctional} personalData={personalData} />
              </div>
              <div className='mt-8 mb-8 flex justify-end'>
                  <SubmitButton bgColor='bg-basic-blue hover:bg-blue-dark text-white text-sm' />
              </div>
            </div>
          ) :
           isFunctional === 'functional' && isAvailable === '' ? 
           (
            <div></div>
           ) :
           (
            <div>
              <div className='grid grid-cols-2 gap-x-5 mt-5'>
                <div>
                    <BiodataContainer addFlock={addFlock} updatePersonalData={updatePersonalData} />
                </div>
                <div>
                    <AddressContainer addFlock={addFlock} />
                </div>
              </div>
              <div className='mt-5'>
                <InformationMZ addFlock={addFlock} />
              </div>
              <hr className='border-1 border-gray-200 my-10' />
              <div>
                <FunctionalContainer addFunctional={addFunctional} personalData={personalData} />
              </div>
              <div className='mt-8 mb-8 flex justify-end'>
                  <SubmitButton bgColor='bg-basic-blue hover:bg-blue-dark text-white text-sm' />
              </div>
            </div>
          )
      }
    </div>
  )
}

export default InputDataSection
