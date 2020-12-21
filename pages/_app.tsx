import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import Metadata from "../components/Metadata";
import { useMount } from "react-use";

function App({ Component, pageProps }: any) {
  useMount(() => {
    document.documentElement.lang = "no";
  });

  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <Metadata />
      <Component {...pageProps} />
    </>
  );
}

export default App;
