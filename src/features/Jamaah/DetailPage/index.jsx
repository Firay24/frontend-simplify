import React, { useEffect, useState } from 'react'
import Header from '../../../components/pages/jamaah/DetailData/Header'
import DetailsContainer from '../../../components/pages/jamaah/DetailData/DetailsContainer'
import { getFlock, getSuluks, getClasses, getFunctionals } from '../../../utils/apiData'
import { useParams } from 'react-router-dom'
import TableListSuluk from '../../../components/pages/jamaah/DetailData/TableListSuluk'
import TableListClass from '../../../components/pages/jamaah/DetailData/TableListClass'

function DetailPage() {
    const [flock, setFlock] = useState({ error: false, data: [] })
    const [suluk, setSuluk] = useState({ error: false, data: [] })
    const [functionals, setFunctionals] = useState({ error: false, data: [] })
    const [functional, setFunctional] = useState({ error: false, data: [] })
    const [detailSuluk, setDetailSuluk] = useState(null)
    const [classes, setClasses] = useState({ error: false, data: [] })
    const [detailClass, setDetailClass] = useState(null)
    const { id } =  useParams()

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const result = await getFlock(id)
                setFlock(result)
            } catch (error) {
                setFlock({ error: true, data: null})
            }
        }

        fetchData(id)
    },[id])
    const detailFlock = flock && flock.data && flock.data.flock

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getSuluks()
                setSuluk(result)
            } catch (error) {
                setSuluk({ error: true, data: [] })
            }
        }

        fetchData()
    },[])
    const dataSuluk = suluk && suluk.data && suluk.data.suluks

    useEffect(() => {
        const detailValue = dataSuluk && detailFlock && dataSuluk.find((item) => item.nik && item.nik === detailFlock.nik && item.fathersName === detailFlock.fathersName)
        setDetailSuluk(detailValue)
    }, [detailSuluk, dataSuluk, detailFlock])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getClasses()
                setClasses(result)
            } catch (error) {
                setClasses({ error: true, data: [] })
            }
        }

        fetchData()
    }, [])

    const dataClass = classes && classes.data && classes.data.classes

    useEffect(() => {
        const detailValue = dataClass && dataClass.find((item) => item.nik === detailFlock.nik && item.fathersName === detailFlock.fathersName)
        setDetailClass(detailValue)
    }, [detailClass, dataClass, detailFlock])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getFunctionals()
                setFunctionals(result)
            } catch (error) {
                setFunctionals({ error: true, data: [] })
            }
        }
        fetchData()
    }, [])
    const dataFunctional = functionals && functionals.data && functionals.data.functionals

    useEffect(() => {
        const detailFunctional = detailFlock && dataFunctional && dataFunctional.find((functional) => functional.nik === detailFlock.nik && functional.fathersName.toLowerCase() === detailFlock.fathersName.toLowerCase())
        if (detailFunctional) {
            setFunctional(detailFunctional)
        }
    }, [dataFunctional, detailFlock])

    return (
        <div className='mt-4 mr-10 mb-6'>
            <div>
                <Header />
            </div>
            <div>
                <DetailsContainer id={id} flock={detailFlock && detailFlock} functional={functional} />
            </div>
            <div>
                <h2 className='text-base text-basic-blue font-medium'>Informasi suluk</h2>
                <TableListSuluk suluks={detailSuluk && detailSuluk} />
            </div>
            <div className='mt-8'>
                <h2 className='text-base text-basic-blue font-medium'>Informasi kelas</h2>
                <TableListClass classes={detailClass && detailClass} />
            </div>
        </div>
    )
}

export default DetailPage
