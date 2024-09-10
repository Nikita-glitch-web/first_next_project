import Link from "next/link";
import { UploadImageForm } from "../components/Form/Form";
import { LandingBanner } from "../components/LandingBanner/LandingBanner";
import { TeamMembers } from "../components/Team-members/TeamMembers";

export default function SignUp() {
  return (
    <div>
      <LandingBanner />
      <TeamMembers />
      <UploadImageForm />
    </div>
  );
}
