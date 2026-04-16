function ambilData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const sukses = false; //ubah menjadi true untuk melihat hasil sukses
            if (sukses) {
                resolve("Data berhasil disimpan");
            } else {
                reject("Gagal ambil data");
            }

        }, 3000);
    });
}

ambilData().then((hasil) => {
    console.log(`hasil: ${hasil}`);
}).catch((error) => {
    console.error(`error: ${error}`);
});


function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
}

getUser()
.then(data => {
    console.log(`${data.name}`);
})
.catch(err => {
    console.error(`${err}`);
})

