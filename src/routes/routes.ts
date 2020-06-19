import { Router } from 'express';
import { StudentsController } from 'StudentsController';

router.post('/student', StudentsController.store);
router.get('/students', StudentsController.list);

export default router;
