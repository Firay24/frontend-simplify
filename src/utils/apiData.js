const BASE_URL = process.env.REACT_APP_API_DATA

// FLOCKS
async function getFlocks() {
    const response = await fetch(`${BASE_URL}/flocks/getFlocks`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true, data: []}
    }

    return {error: false, data: responseJson.data}
}

async function addFlock({ name, placesBirth, datesBirth, nik, fathersName, gender, job, numberPhone, mzOrigin, yearEnteredTN, kaji, suluk, address }) {
    const response = await fetch(`${BASE_URL}/flocks/addFlock`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, placesBirth, datesBirth, nik, fathersName, gender, job, numberPhone, mzOrigin, yearEnteredTN, kaji, suluk, address })
    })

    const responseJson = await response.json()
    
    if (!responseJson.data) {
        console.log('Data tidak tersedia di responseJson');
        return { error: true, data: [] };
      }

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return { error: true, data: [] }
    }

    return {error: false, data: responseJson.data.flock}
}

async function updateFlock({ id, gender, job, yearEnteredTN, suluk, kaji }) {
    const response = await fetch(`${BASE_URL}/flocks/updateFlock/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ gender, job, yearEnteredTN, suluk, kaji })
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return { error: false, data: responseJson.data }
    }
}

// FUNCTIONAL
async function getFunctionals() {
    const response = await fetch(`${BASE_URL}/functionals/getFunctionals`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return { error: true, data: [] }
    }

    return { error: false, data: responseJson.data }
}

async function addFunctional({ name, nik, fathersName, petoto, pentawajuh, pentarekat, pz }) {
    const response = await fetch(`${BASE_URL}/functionals/addFunctional`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, nik, fathersName, petoto, pentawajuh, pentarekat, pz })
    })

    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return { error: false, data: responseJson.data }
    }
}

export {
    getFlocks,
    addFlock,
    updateFlock,

    getFunctionals,
    addFunctional
}