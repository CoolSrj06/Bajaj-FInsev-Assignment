import { Router } from "express";
import express from "express";
import { bfhlController } from '../controller/bfhl.contoller.js';

const app = express();
const router = Router();

app.use(express.static('../'));

router.route('/bfhl').post(bfhlController);

export default router;