import { redirect } from "next/navigation";

/** FAQ lives on the About page */
export default function FaqRedirectPage() {
  redirect("/about#faq");
}
