const fs = require('fs');
//membuat folder
if(!fs.existsSync('./data')){
    fs.mkdir('./data');
}
//create file json
const dataPath = './data/Karyawan.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const dataKaryawan = () => {
    const File = fs.readFileSync('data/Karyawan.json');
    const data = JSON.parse(File);
    return data;
}
//karyawan dengan id

const FindKaryawan = (nama) => {
    const Karyawan = dataKaryawan();
    const Karys = Karyawan.find((data) =>  data.nama === nama)
    return Karys;
}
module.exports = {dataKaryawan, FindKaryawan};