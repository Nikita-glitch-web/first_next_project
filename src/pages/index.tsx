import Link from "next/link";
import { LandingBanner } from "../components/LandingBanner/LandingBanner";
import { TeamMembers } from "../components/TeamMembers/TeamMembers";
import { useAuthStore } from "@/Store/Auth";
import { UploadImageForm } from "@/components/SignUpForm/signUp-form";

export default function Home() {
  const { user } = useAuthStore();
  return (
    <div>
      <h1>USER {user ? user.email : ""}</h1>
      <LandingBanner />
      <TeamMembers />
      <UploadImageForm />
    </div>
  );
}
