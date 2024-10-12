import Link from "next/link";
import { LandingBanner } from "../components/LandingBanner/LandingBanner";
import { TeamMembers } from "../components/TeamMembers/TeamMembers";
import { useAuthStore } from "@/store/auth";
import { JoinUsForm } from "../components/JoinUsForm/JoinUsForm";

export default function Home() {
  return (
    <div>
      <LandingBanner />
      <TeamMembers />
      <JoinUsForm />
    </div>
  );
}
