import './loadEnvironment.js';
import express from 'express';
// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(process.env.HOST_PORT, () => {
    console.log(`⚡️[server]: Servers is running at http://localhost:${port}!`);
});
export default app;
//# sourceMappingURL=index.js.map