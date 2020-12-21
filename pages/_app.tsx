import { ResetCSS } from "../styles/reset.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import Metadata from "../components/Metadata";

function App({ Component, pageProps }: any) {
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
