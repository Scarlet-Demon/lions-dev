import { router } from "express";
import {
    store,
    index,
    show,
    showComplete,
    update,
    destroy,
} from "../controllers/scheduling-controller.js";

import check_token from "../middleware/check_token.js";
import check_role from "../middleware/check_role.js";

const router = Router();

router.post("/", check_token, check_role(["ADM", "REC"]), store);
router.get("/", check_token, check_role(["ADM", "REC"]), index);
router.get("/:id", check_token, check_role(["ADM", "REC"]), show);
router.get("/complete/:id", check_token, check_role(["ADM", "REC"]), showComplete);
router.put("/:id", check_token, check_role(["ADM", "REC"]), update);
router.delete("/:id", check_token, check_role(["ADM", "REC"]), destroy);

export default router;