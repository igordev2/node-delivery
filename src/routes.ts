import { Router } from 'express';
import { AuthenticateDeliverymanController } from './modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController';
import { AuthenticateClientController } from './modules/accounts/authenticateUser/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

routes.post('/clients/', createClientController.handle);
routes.post('/client/authenticate/', authenticateClientController.handle);

routes.post('/deliveryman/', createDeliverymanController.handle);
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);

export { routes };
