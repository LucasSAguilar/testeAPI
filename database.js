import mysql from 'mysql2';



function coletarDados(options) {

    const connection = mysql.createConnection(options)

    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM pessoas', (err, resultados, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultados);
            }
        });
    })
}


export default coletarDados;
