import { Controller } from "../controllers/controller.js";

export interface View {
  interact(controller: Controller): Promise<void>;
}
