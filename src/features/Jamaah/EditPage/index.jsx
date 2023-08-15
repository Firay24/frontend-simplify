/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from './Layout/Header';
import EditDataSection from './Layout/EditDataSection';
import {
  getFlock, getClasses, getSuluks, updateFlock, updateFunctional, updateClass, updateSuluk,
} from '../../../utils/apiData';
import {
  getProvince, getRegency, getSubdistrict, getWard,
} from '../../../utils/apiLocation';

import 'react-toastify/dist/ReactToastify.css';

function EditPage() {
  const [flock, setFlock] = useState({ error: false, data: null });
  const [classes, setClasses] = useState({ error: false, data: [] });
  const [classItem, setClassItem] = useState({ error: false, data: null });
  const [suluks, setSuluks] = useState({ error: false, data: [] });
  const [suluk, setSuluk] = useState({ error: false, data: null });

  const [province, setProvince] = useState({ data: [] });
  const [selectedProvince, setSelectedProvince] = useState('');
  const [regency, setRegency] = useState({ data: [] });
  const [selectedRegency, setSelectedRegency] = useState('');
  const [subdistrict, setSubdistrict] = useState({ data: [] });
  const [selectedSubdistrict, setSelectedSubdistrict] = useState('');
  const [ward, setWard] = useState({ data: [] });

  const { id } = useParams();

  const notifySuccessAddData = () => {
    const message = 'Data berhasil diperbarui';

    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const notifyErrordAddData = () => {
    const message = 'Data gagal diperbarui';

    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleSelectedProvince = (value) => {
    if (value !== undefined && value !== '') {
      const idSelectedProvince = province && province.data.find((itemProvince) => itemProvince.name === value);
      setSelectedProvince(idSelectedProvince && idSelectedProvince.id);
    }
  };

  const handleSelectedRegency = (value) => {
    if (value !== undefined && value !== '') {
      const idSelectedRegency = regency.data.find((itemRegency) => itemRegency.name === value);
      setSelectedRegency(idSelectedRegency && idSelectedRegency.id);
    }
  };

  const handleSelectedSubdistrict = (value) => {
    if (value !== undefined && value !== '') {
      const idSelectedSubdistrict = subdistrict.data.find((itemSubdistrict) => itemSubdistrict.name === value);
      setSelectedSubdistrict(idSelectedSubdistrict && idSelectedSubdistrict.id);
    }
  };

  const handleUpdateFlock = async (value) => {
    try {
      const response = await updateFlock(value);
      notifySuccessAddData();
      console.log('Data biodata berhasil diperbarui', response);
    } catch (error) {
      notifyErrordAddData();
      console.log('Gagal memperbarui data biodata lainnya', error.message);
    }
  };

  const handleUpdateFunctional = async (value) => {
    try {
      const response = await updateFunctional(value);
      console.log('Data fungsional berhasil diperbarui', response);
    } catch (error) {
      console.log('Gagal memperbarui data fungsional', error.message);
    }
  };

  const handleUpdateClasses = async (value) => {
    try {
      const response = await updateClass(value);
      console.log('Data kelas berhasil diperbarui', response);
    } catch (error) {
      console.log('Gagal memperbarui data kelas', error.message);
    }
  };

  const handleUpdateSuluk = async (value) => {
    try {
      const response = await updateSuluk(value);
      console.log('Data suluk berhasil diperbarui', response);
    } catch (error) {
      console.log('Data suluk gagal diperbarui', error.message);
    }
  };

  useEffect(() => {
    const fetchData = async (idParams) => {
      try {
        const result = await getFlock(idParams);
        setFlock(result);
      } catch (error) {
        setFlock({ error: true, data: null });
      }
    };

    fetchData(id);
  }, [id]);
  const detailFlock = flock && flock.data && flock.data.flock;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getClasses();
        setClasses(result);
      } catch (error) {
        setClasses({ error: true, data: [] });
      }
    };

    fetchData();
  }, []);
  const dataClasses = classes && classes.data && classes.data.classes;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSuluks();
        setSuluks(result);
      } catch (error) {
        setSuluks({ error: true, data: [] });
      }
    };
    fetchData();
  });
  const dataSuluk = suluks && suluks.data && suluks.data.suluks;

  useEffect(() => {
    const detailClass = detailFlock && dataClasses && dataClasses.find((item) => item.nik === detailFlock.nik && classItem.fathersName.toLowerCase() === detailFlock.fathersName.toLowerCase());
    if (detailClass) {
      setClassItem(detailClass);
    }
  }, [dataClasses, detailFlock]);

  useEffect(() => {
    const detailSuluk = detailFlock && dataSuluk && dataSuluk.find((sulukItem) => sulukItem.nik === detailFlock.nik && sulukItem.fathersName.toLowerCase() === detailFlock.fathersName.toLowerCase());
    if (detailSuluk) {
      setSuluk(detailSuluk);
    }
  }, [dataSuluk, detailFlock]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProvince();
        setProvince(result);
      } catch (error) {
        setProvince({ data: [] });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRegency(selectedProvince);
        setRegency(result);
      } catch (error) {
        setRegency({ data: [] });
      }
    };
    fetchData();
  }, [selectedProvince]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSubdistrict(selectedRegency);
        setSubdistrict(result);
      } catch (error) {
        setSubdistrict({ data: [] });
      }
    };
    fetchData();
  }, [selectedRegency]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getWard(selectedSubdistrict);
        setWard(result);
      } catch (error) {
        setWard({ data: [] });
      }
    };
    fetchData();
  }, [selectedSubdistrict]);

  return (
    <div className="mt-4 mr-10 mb-6">
      <div>
        <Header />
      </div>
      <div>
        <EditDataSection
          flock={detailFlock && detailFlock}
          classes={classItem && classItem}
          suluk={suluk && suluk}
          updateFlock={handleUpdateFlock}
          updateFunctional={handleUpdateFunctional}
          updateClass={handleUpdateClasses}
          updateSuluk={handleUpdateSuluk}
          province={province && province}
          selectedProvince={handleSelectedProvince}
          regency={regency && regency}
          selectedRegency={handleSelectedRegency}
          subdistrict={subdistrict && subdistrict}
          selectedSubdistrict={handleSelectedSubdistrict}
          ward={ward}
        />
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
        theme="light"
      />
    </div>
  );
}

export default EditPage;
