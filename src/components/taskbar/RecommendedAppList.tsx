import { FC, ReactElement } from "react";

//initializing interface for component props
interface RecommendedAppListProps {
  icon: ReactElement | null;
  appName: string;
  addDesc: string;
}

/**
 * Recommended app component for start menu.
 *
 * @component
 * @author Abdullah Al Mridul
 * @date 2024-10-26
 */
const RecommendedAppList: FC<RecommendedAppListProps> = ({
  appName,
  addDesc,
  icon,
}) => {
  return (
    <div className=" rounded hover:bg-white/10 w-[255px] transition-all duration-100">
      <div className="px-[10px] py-[13px] w-full flex  gap-[10px] items-center">
        <div>
          <span>{icon}</span>
        </div>
        <div className=" flex flex-col">
          <span className=" text-[12.8px] text-white font-open-sans ">
            {appName}
          </span>
          <span className=" text-[12px] text-white font-open-sans ">
            {addDesc}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecommendedAppList;
