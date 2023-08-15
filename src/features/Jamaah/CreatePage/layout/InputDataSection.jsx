import React, { useState, useCallback, useEffect } from 'react';
import AddressContainer from '../../../../components/Form/Address';
import InformationMZ from '../../../../components/Form/InformationMZ';
import BiodataContainer from '../../../../components/Form/Biodata';
import SubmitButton from '../../../../components/Button/ButtonOnClick';
import FunctionalContainer from '../../../../components/Form/Fungsional';
import AnotherBiodata from '../../../../components/Form/AnotherBiodata';

function InputDataSection({
  isFunctional,
  isAvailable,
  addFlock,
  addFunctional,
  putFlock,
  updatePersonalData,
  personalData,
  province,
  selectedProvince,
  regency,
  selectedRegency,
  subdistrict,
  selectedSubdistrict,
  ward,
  anotherBio,
}) {
  const [dataComponent, setDataComponent] = useState({});
  const [dataFunctional, setDataFunctional] = useState({});
  const [buttonOnClick, setButtonOnClik] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const [dataAnotherBio, setDataAnotherBio] = useState({});

  const handleInputChangeFlock = useCallback((data) => {
    setDataComponent((prevState) => ({
      ...prevState,
      ...data,
    }));
  }, []);

  const handleInputChangeFunc = useCallback((data) => {
    setDataFunctional(data);
  }, []);

  const handlerInputChangeAnotherBio = useCallback((data) => {
    setDataAnotherBio(data);
  }, []);

  const handlerSelectedGender = (value) => {
    setSelectedGender(value);
  };

  const handleSubmitFlock = () => {
    addFlock(dataComponent);
    setButtonOnClik(true);
  };

  const handleSubmitFunc = () => {
    addFlock(dataComponent);
    addFunctional(dataFunctional);
    setButtonOnClik(true);
  };

  const handleSubmitAnotherBio = () => {
    const addDataFlock = {
      id: anotherBio._id,
      ...dataAnotherBio,
    };
    putFlock(addDataFlock);
    setButtonOnClik(true);
  };

  useEffect(() => {
    setButtonOnClik(false);
  }, [dataComponent, dataFunctional]);

  return (
    <div>
      {
        isFunctional === '' ? (
          <div />
        )
          : isFunctional === 'non-functional' ? (
            <div>
              <div className="grid grid-cols-2 gap-x-5 mt-5">
                <div>
                  <BiodataContainer
                    updatePersonalData={updatePersonalData}
                    onInputChange={handleInputChangeFlock}
                    buttonOnClick={buttonOnClick}
                    sendGender={handlerSelectedGender}
                  />
                </div>
                <div>
                  <AddressContainer
                    onInputChange={handleInputChangeFlock}
                    buttonOnClick={buttonOnClick}
                    province={province}
                    selectedProvince={selectedProvince}
                    regency={regency}
                    selectedRegency={selectedRegency}
                    subdistrict={subdistrict}
                    selectedSubdistrict={selectedSubdistrict}
                    ward={ward}
                  />
                </div>
              </div>
              <div className="mt-5">
                <InformationMZ onInputChange={handleInputChangeFlock} buttonOnClick={buttonOnClick} receiveGender={selectedGender} />
              </div>
              <div className="mt-8 mb-8 flex justify-end">
                <SubmitButton text="Submit" onClick={handleSubmitFlock} bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
              </div>
            </div>
          ) : isFunctional === 'functional' && isAvailable
            ? (
              <div>
                <div className="mt-5">
                  <AnotherBiodata onInputChange={handlerInputChangeAnotherBio} buttonOnClick={buttonOnClick} />
                </div>
                <div className="mt-8 mb-8 flex justify-end">
                  <SubmitButton text="Submit" onClick={handleSubmitAnotherBio} bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
                </div>
              </div>
            )
            : isFunctional === 'functional' && isAvailable === ''
              ? (
                <div />
              )
              : (
                <div>
                  <div className="grid grid-cols-2 gap-x-5 mt-5">
                    <div>
                      <BiodataContainer
                        updatePersonalData={updatePersonalData}
                        onInputChange={handleInputChangeFlock}
                        buttonOnClick={buttonOnClick}
                        sendGender={handlerSelectedGender}
                      />
                    </div>
                    <div>
                      <AddressContainer
                        onInputChange={handleInputChangeFlock}
                        buttonOnClick={buttonOnClick}
                        province={province}
                        selectedProvince={selectedProvince}
                        regency={regency}
                        selectedRegency={selectedRegency}
                        subdistrict={subdistrict}
                        selectedSubdistrict={selectedSubdistrict}
                        ward={ward}
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <InformationMZ onInputChange={handleInputChangeFlock} buttonOnClick={buttonOnClick} receiveGender={selectedGender} />
                  </div>
                  <hr className="border-1 border-gray-200 my-10" />
                  <div>
                    <FunctionalContainer personalData={personalData} onInputChange={handleInputChangeFunc} buttonOnClick={buttonOnClick} />
                  </div>
                  <div className="mt-8 mb-8 flex justify-end">
                    <SubmitButton text="Submit" onClick={handleSubmitFunc} bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
                  </div>
                </div>
              )
      }
    </div>
  );
}

export default InputDataSection;
