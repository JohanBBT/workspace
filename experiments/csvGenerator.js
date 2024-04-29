"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var csv_writer_1 = require("csv-writer");
var app = express();
var port = 3000;
app.get('/generate-csv', function (req, res) {
    // Datos que quieres escribir en el CSV
    var data = [
        { name: 'John', age: 30, city: 'New York' },
        { name: 'Jane', age: 25, city: 'Los Angeles' },
        // Agrega más datos según tus necesidades
    ];
    // Configuración del escritor CSV
    var csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
        path: 'output.csv',
        header: [
            { id: 'name', title: 'Name' },
            { id: 'age', title: 'Age' },
            { id: 'city', title: 'City' },
            // Agrega más encabezados según tus necesidades
        ],
    });
    // Escribe los datos en el archivo CSV
    csvWriter.writeRecords(data).then(function () {
        // Envía el archivo CSV como respuesta
        res.download('output.csv', 'output.csv', function (err) {
            if (err) {
                console.error('Error al descargar el archivo CSV:', err);
                res.status(500).send('Error interno del servidor');
            }
        });
    });
});
app.listen(port, function () {
    console.log("Servidor escuchando en http://localhost:".concat(port));
});
