import Link from "next/link";
import UploadImageForm from "../components/Form/SignUp-Form/signUp-form";
import { LandingBanner } from "../components/LandingBanner/LandingBanner";
import { TeamMembers } from "../components/Team-members/TeamMembers";
import { useAuthStore } from "@/store/auth";

export default function Home() {
  const { user } = useAuthStore();
  return (
    <div>
      <h1>USER {user ? user.email : ""}</h1>
      <LandingBanner />
      <TeamMembers />
    </div>
  );
}
