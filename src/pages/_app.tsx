import { AppProps } from "next/app";
import "../styles/index.scss";
import { Header } from "../components/Header/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
        <Header />
        <Component {...pageProps} />
    </div>
  );
}
