import * as express from 'express';
import { createObjectCsvWriter } from 'csv-writer';

const app = express();
const port = 3000;

app.get('/generate-csv', (req, res) => {
  // Datos que quieres escribir en el CSV
  const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    // Agrega más datos según tus necesidades
  ];

  // Configuración del escritor CSV
  const csvWriter = createObjectCsvWriter({
    path: 'output.csv',
    header: [
      { id: 'name', title: 'Name' },
      { id: 'age', title: 'Age' },
      { id: 'city', title: 'City' },
      // Agrega más encabezados según tus necesidades
    ],
  });

  // Escribe los datos en el archivo CSV
  csvWriter.writeRecords(data).then(() => {
    // Envía el archivo CSV como respuesta
    res.download('output.csv', 'output.csv', (err) => {
      if (err) {
        console.error('Error al descargar el archivo CSV:', err);
        res.status(500).send('Error interno del servidor');
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
