//Apa itu callback?
//

function doanload(callback) {
    setTimeout(() => {
        console.log("Download selesai");
        callback();
    }, 3000);
}
doanload(() => {
    console.log("lanjut ngerjain tugas lain");
});


function ambilData(callbacksukses, errorCallback) {
    setTimeout(() => {
        const sukses = true; //ubah menjadi true untuk melihat hasil sukses    

        if (sukses) {
            callbacksukses("Data berhasil");
        } else {
            errorCallback("Gagal");
        }


    }, 5000)
}

function sukses(data) {
    console.log(`sukses : ${data}`);
}

function error(error) {
    console.log(`error : ${error}`);
}

ambilData(sukses, error);


//contoh real case 

function getUser(callback, errCallback) {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then((res) => res.json())
        .then((data) => callback(data))
        .catch((err) => errCallback(err));
}

function tampilkanUser(data) {
    console.log(`nama User: ${data.name}`);
}

function handleError() {
    console.log(`Error boss: ${error}`);
}

getUser(tampilkanUser, handleError);


