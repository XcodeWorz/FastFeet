import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.send('mah oe'));

export default routes;
