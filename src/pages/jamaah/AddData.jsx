import React, { useEffect, useState } from 'react'
import Header from '../../components/pages/AddData/Header'
import ConfirmAddData from '../../components/pages/AddData/ConfirmAddData'
import InputDataSection from '../../components/pages/AddData/InputDataSection'
import { getFunctionals, addFlock, addFunctional, updateFlock } from '../../utils/apiData'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddData() {
  // confirm data process
  const [selectedOptionFunctional, setSelectedOptionFunctional] = useState('')
  const [functionals, setfunctional] = useState({ error: false, data: [] })
  const [isAvailable, setIsAvailable] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nik: '',
    fathersName: ''
  });


  // add data process
  const [personalData, setPersonalData] = useState({
    name: '',
    nik: '',
    fathersName: ''
  })


  // confirm data process
  const handleOptionChange = (newValue) => {
    setSelectedOptionFunctional(newValue)
    setHasSubmitted(false)
  };

  const handleFormSubmit = (formData) => {
    setFormData({ ...formData })
    setHasSubmitted(true)
  };


  // add data process
  const handleAddFlock = async (flockData) => {
    try {
      const response = await addFlock(flockData)
      console.log('Data berhasil ditambahkan', response)
    } catch (error) {
      console.log('Gagal menambahkan data', error.message)
    }
  }

  const handleAddFunctional = async (functionalData) => {
    try {
      const response = await addFunctional(functionalData)
      console.log('Data fungsional berhasil ditambahkan', response)
    } catch (error) {
      console.log('Gagal menambahkan data fungsional', error.message)
    }
  }

  const updatePersonalData = (name, nik, fathersName) => {
    setPersonalData({
      name: name,
      nik: nik,
      fathersName: fathersName
    })
  }

  // confirm data process
  useEffect(() => {
    setSelectedOptionFunctional('')
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFunctionals()
        setfunctional(result)
        setIsLoading(false)
      } catch (error) {
        setfunctional({ error: false, data: [] })
        setIsLoading(false); 
      }
    };
    fetchData();
  }, []);

  const { data } = functionals
  const dataFunctional = data && data.functionals

  useEffect(() => {
    if (hasSubmitted) {
      const isDataAvailable = functionals.data && functionals.data.functionals && functionals.data.functionals.some(
        (item) =>
          item.nik === formData.nik && item.fathersName === formData.fathersName
      );
      setIsAvailable(isDataAvailable);
      notify(isDataAvailable)
    }
  }, [hasSubmitted, formData.nik, formData.fathersName, functionals.data, dataFunctional]);

  const notify = (isAvailable) => {
    let message = '';
    isAvailable
      ? (message = 'Data tersedia sebagai fungsional')
      : (message = 'Data tidak tersedia sebagai fungsional');

    toast.info(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    });
  };

  if (isLoading) {
    return <div>Waiting...</div>;
  }

  return (
    <>
      <div className='mt-4 mr-10'>
        <div>
          <Header />
        </div>
        <div>
          <ConfirmAddData
            onSubmit={handleFormSubmit}
            selectedOptionFunctional={selectedOptionFunctional}
            onOptionChangeFunctional={handleOptionChange}
          />
        </div>
        <div>
          <InputDataSection 
            isFunctional={selectedOptionFunctional} 
            isAvailable={isAvailable}
            addFlock={handleAddFlock}
            addFunctional={handleAddFunctional}
            updatePersonalData={updatePersonalData}
            personalData={personalData}
            putFlock={updateFlock} />
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </>
  );
}

export default AddData;

