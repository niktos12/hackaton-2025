import { Charts } from "./components/Charts";
import { Header } from "./components/Header";
import { Dedication } from "./components/Dedication";
import { Main } from "./components/Main";
import { MarryTree } from "./components/MarryTree";
import { MemoryTree } from "./components/MemoryTree";
import { Events } from "./components/Events";
import { PastLandings } from "./components/PastLandings";
import { VideoSection } from "./components/Video";
import { Reviews } from "./components/Reviews";
import { Registration } from "./components/Registration";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Events />
      <PastLandings />
      <VideoSection />
      <Reviews />
      <Dedication />
      <MarryTree />
      <MemoryTree />
      <Charts />
      <Registration />
      <Footer />
    </>
  );
}
