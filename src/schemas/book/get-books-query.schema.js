import Joi from "joi";

const allowedLimmits = [5, 10, 15, 20];
const allowedSortFields = [
    "createdAt",
    "rating",
    "quantity",
    "-createdAt",
    "-rating",
    "-quantity",
];

export const GetBooksQuerySchema = Joi.object({
    
}).requiredI();