import { OrbitProgress } from "react-loading-indicators";

const PreLoading = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center">
        <OrbitProgress
          variant="spokes"
          color="#000957"
          size="medium"
          text=""
          textColor=""
        />
      </div>
    </div>
  );
};

export default PreLoading;
