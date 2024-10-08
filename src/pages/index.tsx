import Link from "next/link";
import { LandingBanner } from "../components/LandingBanner/LandingBanner";
import { TeamMembers } from "../components/Team-members/TeamMembers";
import { useAuthStore } from "@/store/auth";
import { UploadImageForm } from "@/components/SignUp-Form/signUp-form";

export default function Home() {
  const { user } = useAuthStore();
  return (
    <div>
      <h1>USER {user ? user.email : ""}</h1>
      <LandingBanner />
      <TeamMembers />
      <UploadImageForm/>
    </div>
  );
}
