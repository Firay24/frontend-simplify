/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BiodataContainer from '../../../../components/Form/Biodata';
import AddressContainer from '../../../../components/Form/Address';
import InformationMZ from '../../../../components/Form/InformationMZ';
import SubmitButton from '../../../../components/Button/ButtonOnClick';

function EditDataSection({
  flock, functional, classes, suluk, updateFlock, updateFunctional, updateClass, updateSuluk, updatePersonalData, province, selectedProvince, regency, selectedRegency, subdistrict, selectedSubdistrict, ward,
}) {
  const [dataComponent, setDataComponent] = useState({});
  const [dataFunctional, setDataFunctional] = useState({});
  const [dataClass, setDataClass] = useState({});
  const [dataSuluk, setDataSuluk] = useState({});
  const [buttonOnClick, setButtonOnClik] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  const handleInputChange = useCallback((data) => {
    setDataComponent((prevState) => ({
      ...prevState,
      ...data,
    }));
  }, []);

  const handleSubmitButton = () => {
    updateFlock(dataComponent);
    updateFunctional(dataFunctional);
    updateClass(dataClass && dataClass);
    updateSuluk(dataSuluk && dataSuluk);
    setButtonOnClik(true);
  };

  const handlerSelectedGender = (value) => {
    setSelectedGender(value);
  };

  useEffect(() => {
    setButtonOnClik(false);
  }, [dataComponent]);

  useEffect(() => {
    const updatedAt = new Date();
    setDataFunctional(() => ({
      ...functional, // Keep other attributes from functional
      fathersName: dataComponent.fathersName,
      nik: dataComponent.nik,
      updatedAt,
    }));
  }, [functional, dataComponent]);

  useEffect(() => {
    const updatedAt = new Date();
    if (classes !== undefined) {
      setDataClass(() => ({
        ...classes,
        fathersName: dataComponent.fathersName,
        nik: dataComponent.nik,
        updatedAt,
      }));
    }
  }, [classes, dataComponent]);

  useEffect(() => {
    const updatedAt = new Date();
    if (suluk !== undefined) {
      setDataSuluk(() => ({
        ...suluk,
        fathersName: dataComponent.fathersName,
        nik: dataComponent.nik,
        updatedAt,
      }));
    }
  }, [suluk, dataComponent]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-5 mt-5">
        <div>
          <BiodataContainer
            prevFlock={flock && flock}
            onInputChange={handleInputChange}
            buttonOnClick={buttonOnClick}
            sendGender={handlerSelectedGender}
            updatePersonalData={updatePersonalData}
          />
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
            ward={ward}
          />
        </div>
      </div>
      <div className="mt-5">
        <InformationMZ
          prevFlock={flock && flock}
          receiveGender={selectedGender}
          onInputChange={handleInputChange}
          buttonOnClick={buttonOnClick}
        />
      </div>
      <div className="mt-8 mb-8 flex justify-end">
        <SubmitButton text="Submit" onClick={handleSubmitButton} bgColor="w-1/6 bg-basic-blue hover:bg-blue-dark text-white text-sm" />
      </div>
    </div>
  );
}

EditDataSection.propTypes = {
  flock: PropTypes.object,
  functional: PropTypes.object,
  classes: PropTypes.object,
  suluk: PropTypes.object,
  updateFlock: PropTypes.func,
  updateFunctional: PropTypes.func,
  updateClass: PropTypes.func,
  updateSuluk: PropTypes.func,
  updatePersonalData: PropTypes.func,
  province: PropTypes.string,
  selectedProvince: PropTypes.string,
  regency: PropTypes.string,
  selectedRegency: PropTypes.string,
  subdistrict: PropTypes.string,
  selectedSubdistrict: PropTypes.string,
  ward: PropTypes.string,
};

export default EditDataSection;
