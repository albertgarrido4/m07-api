import './loadEnvironment.js';
import express, { Express, Request, Response } from 'express';

// Initialize express
const app: Express = express();
const port = process.env.HOST_PORT ?? '3000';

const alumnos = [
  'Angulo Caballero, Alan Matthew',
  'Argueta Navarrete, Nahomy Fernanda',
  'Bautista Martin, Brian',
  'Blay Estrada, Alex',
  'Condal García, Pol',
  'Cortes Comellas, Oriol',
  'Du Pre Peralta, Gerard',
  'Gàndara Sánchez, Jaume',
  'Garrido Pintado, Albert',
  'Herrerias Cuscullola, Rafel',
  'Higueras Rubiño, Jaime',
  'Linares Vigo, Joan',
  'Llamas Masdeu, Dídac',
  'Muñoz Valenzuela, Alejandro',
  'Najarro García, Marc',
  'Pallarés Sirvent, Quim',
  'Parra Raya, Óscar',
  'Pascual González, Alejandro',
  'Rodellar Martínez, Alberto',
  'Ros Puig, Manuel',
  'Sánchez Erazo, Luis Mario',
  'Sans Lleixà, Martí',
  'Sanz Sanchez, Oscar',
  'Simón Pérez, Kevin',
  'Soto Gómez, Eugeni',
  'Trujillo Albert, Pol',
  'Trujillo Guadiamos, Victor Manuel'
];

const totalAlumnosUF = alumnos.length;

app.get('/Alumnes', (req: Request, res: Response) => {
  return res.json({ alumnos, totalAlumnosUF });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});

export default app;
