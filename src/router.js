import { Router} from "express";
import multer from 'multer'
import CreateUserController  from "./controllers/user/CreateUserController.js";
import AuthUserController from "./controllers/user/AuthUserController.js"
import DetailUserController from "./controllers/user/DetailUserController.js";
import isAuthenticated  from "./middlewares/isAuthenticated.js";
import CreateCategoryController from "./controllers/category/CreateCategoryController.js";
import ListCategoryController from './controllers/category/ListCategoryController.js';
import CreateProductController from "./controllers/product/CreateProductController.js";
import UploadConfig from './config/multer.js'
import ListByCategoryController from "./controllers/product/ListByCategoryController.js";
import CreateOrderController from "./controllers/order/CreateOrderController.js";
import RemoveOrderController from "./controllers/order/RemoveOrderController.js";
import AddItemController from "./controllers/order/AddItemController.js";
import RemoveItemController from "./controllers/order/RemoveItemController.js";
import SendOrderController from "./controllers/order/SendOrderController.js";
import ListOrdersController from "./controllers/order/ListOrdersController.js";
import DetailsOrderController from "./controllers/order/DetailsOrderController.js";
import FinishOrderController from "./controllers/order/FinishOrderController.js";

const router = Router();

const Upload = multer(UploadConfig.upload("../imagens")) //rota de imagens


//Rotas para criar usuário
router.post('/users', new CreateUserController().handle) // POST acionando o método handle() da classe (a classe poderia ter vários métodos)

router.post('/session', new AuthUserController().handle) //Rota de login

router.get('/me', isAuthenticated, new DetailUserController().handle ) //rota com middleware de verificação.


//rotas de categoria

router.post ('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)


// rota de produto


router.post('/createproduct', isAuthenticated, Upload.single('file'), new CreateProductController().handle); //criar produtos no BD com foto

router.get("/category/product", isAuthenticated, new ListByCategoryController().handle)

// rotas de pedidos

router.post('/order', isAuthenticated, new CreateOrderController().handle); // criar pedido

router.delete('/order', isAuthenticated, new RemoveOrderController().handle); // deletar pedido

router.post('/order/add', isAuthenticated, new AddItemController().handle) // adicionar Item ao pedido (mesa)

router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)  // remover item do pedido (mesa)

router.put('/order/send', isAuthenticated, new SendOrderController().handle) //atualizando Rascunho (DRAFT)

router.get('/orders', isAuthenticated, new ListOrdersController().handle) //listar pedidos não prontos

router.get('/order/details', isAuthenticated, new DetailsOrderController().handle)

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)



export default router;


 