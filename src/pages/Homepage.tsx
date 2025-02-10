import { lazy, Suspense } from "react";
import LayoutPage from "../layouts";
import PreLoading from "../components/preload";

const HeroModule = lazy(() => import("../modules/hero"));
const AboutModule = lazy(() => import("../modules/about"));
const ExperienceModule = lazy(() => import("../modules/experience"));
const ContactModule = lazy(() => import("../modules/contact"));
const Homepage = () => {
  return (
    <LayoutPage>
      <Suspense fallback={<PreLoading />}>
        <HeroModule />
        <AboutModule />
        <ExperienceModule />
        <ContactModule />
      </Suspense>
    </LayoutPage>
  );
};

export default Homepage;
