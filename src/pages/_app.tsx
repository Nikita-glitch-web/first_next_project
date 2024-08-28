import { AppProps } from "next/app";
import "../styles/index.scss";
import { LandingBanner } from "@/components/LandingBanner/LandingBanner";
import { TeamMembers } from "@/components/Team-members/TeamMembers";
import { Header } from "@/components/Header/Header";
import { UploadImageForm } from "@/components/Form/Form";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
