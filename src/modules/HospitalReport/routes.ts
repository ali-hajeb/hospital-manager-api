import { Router } from "express";
import * as reportActions from './controllers';

const router = Router();

router.get('/', reportActions.getReports);
router.put('/', reportActions.createReport);
router.patch('/', reportActions.updateReport);
router.delete('/:id', reportActions.deleteReport);

export default router;

