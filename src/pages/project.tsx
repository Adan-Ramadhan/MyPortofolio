import { lazy, Suspense } from "react";
import LayoutPage from "../layouts";
import PreLoading from "../components/preload";

const ProjectModule = lazy(() => import("../modules/project"));

const ProjectPage = () => {
  return (
    <LayoutPage>
      <Suspense fallback={<PreLoading />}>
        <ProjectModule />
      </Suspense>
    </LayoutPage>
  );
};

export default ProjectPage;
