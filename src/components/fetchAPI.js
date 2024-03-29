async function fetchAPI(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err)
    }
}

export {fetchAPI};