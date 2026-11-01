import { Suspense } from "react";
import JoinForm from "@/components/landing/JoinForm";

export default function RegisterPage() {
  return (
    <Suspense>
      <JoinForm />
    </Suspense>
  );
}
