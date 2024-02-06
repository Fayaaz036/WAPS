
fetch('https://github.com/Fayaaz036/WAPS/blob/master/data.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response;
    })
    .then((response) => {
        console.log(response);
    });