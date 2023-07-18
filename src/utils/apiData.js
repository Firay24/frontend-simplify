const BASE_URL = 'http://localhost:5000'

async function getFlocks() {
    const response = await fetch(`${BASE_URL}/flocks/getFlocks`)
    const responseJson = await response.json()

    if (responseJson.status !== 'success') {
        alert(responseJson.message)
        return {error: true, data: []}
    }

    return {error: false, data: responseJson.data}
}

export {
    getFlocks
}