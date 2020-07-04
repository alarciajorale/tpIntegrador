const fs = require('fs');
db:'./data/consecionarias.json';

const homeControler = {
    leerJSON:()=>{
        let consecionariasJSON=fs.readFileSync(this.db, 'utf-8');
        let consecionarias = JSON.parse(consecionariasJSON);
        return consecionarias;
    }
}