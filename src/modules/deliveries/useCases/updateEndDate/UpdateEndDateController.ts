import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
    async handle(request: Request, response: Response) {
        const { id_deliveryman } = request;
        const { id_delivery } = request.params;

        const updateEndDate = new UpdateEndDateUseCase();

        const result = await updateEndDate.execute({
            id_deliveryman,
            id_delivery,
        });

        return response.json(result);
    }
}