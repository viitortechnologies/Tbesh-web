import type { LeadInput } from "./validation";

export const interestLabels: Record<LeadInput["interest"], string> = {
  "azure-linux-training": "Azure / Linux Administration Training",
  "devops-cloud-training": "DevOps / Cloud Training",
  "startup-support": "Startup Support Services",
};

export type FormSubmitResponse = {
  success?: string | boolean;
  message?: string;
};

export function isFormSubmitSuccess(data: FormSubmitResponse) {
  return data.success === true || data.success === "true";
}

/** Browser FormSubmit endpoint — not rendered in UI */
export const FORMSUBMIT_AJAX_URL = "https://formsubmit.co/ajax/manager@geteazy.in";
