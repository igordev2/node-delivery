import { Router } from 'express';
import { AuthenticateClientController } from './modules/accounts/authenticateUser/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();

const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();

routes.post('/clients/', createClientController.handle);

routes.post('/authenticate/', authenticateClientController.handle);

routes.post('/deliveryman/', createDeliverymanController.handle);

export { routes };
