import {z} from "zod";

export const contactFormSchema = z.object({
    email : z.string().email("Invalid email address"),
    name : z.string().min(2, "Name should be at least 2 characters long")
            .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
    message : z.string().min(10, "Message should be at least 10 characters long")
});