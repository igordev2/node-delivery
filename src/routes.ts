import { Router } from 'express';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { AuthenticateDeliverymanController } from './modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController';
import { AuthenticateClientController } from './modules/accounts/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymamController';
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController';
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const deliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();

const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();

const updateEndDateController = new UpdateEndDateController();

routes.post('/clients/', createClientController.handle);
routes.post('/client/authenticate/', authenticateClientController.handle);

routes.post('/deliveryman/', createDeliverymanController.handle);
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle);

routes.post('/delivery', ensureAuthenticateClient, deliveryController.handle);
routes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle);
routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);

routes.get('/clients/deliveries', ensureAuthenticateClient, findAllDeliveriesController.handle);
routes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);
routes.put('/delivery/updateEndDate/:id', ensureAuthenticateDeliveryman, updateEndDateController.handle);

export { routes };
