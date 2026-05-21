import { z } from "zod";

export const trainingInterest = z.enum([
  "azure-linux-training",
  "devops-cloud-training",
]);

export const startupInterest = z.literal("startup-support");

export const leadSchema = z.object({
  name: z.string().min(2, "Enter your full name").max(120),
  email: z.string().email("Enter a valid email"),
  mobile: z
    .string()
    .min(8, "Enter a valid mobile number")
    .max(20)
    .regex(/^[\d\s+\-()]+$/, "Invalid mobile number"),
  company: z.string().max(120).optional().or(z.literal("")),
  interest: z.union([trainingInterest, startupInterest]),
  message: z.string().max(2000).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type TrainingInterest = z.infer<typeof trainingInterest>;
export type FormVariant = "training" | "startup-support";
