//Async Await
function getData() {
    return new Promise((resolve) => {
        console.log("Proses mengambil data....")
        setTimeout(() => {
            resolve("Data berhasil diambil")
        }, 5000)
    });
}

async function main() {
    const hasil = await getData();
    console.log(hasil)
}

main();

//Real case
async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error

    }
}

getUser();