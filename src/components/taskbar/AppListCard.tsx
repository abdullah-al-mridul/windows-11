import { FC, ReactElement } from "react";
import { isIconComponent } from "../../hooks/useIcons";

//initializing interface for app list component props
interface AppListCardProps {
  icon: ReactElement | null;
  appName: string;
}

/**
 * Start menu component for app list
 *
 * @component
 * @author Abdullah Al Mridul
 * @date 2024-10-26
 */
const AppListCard: FC<AppListCardProps> = ({ icon, appName }) => {
  //returning jsx for ui
  return (
    <div className=" w-[93.3px] h-[84px] hover:bg-white/10 transition-all font-open-sans duration-200 rounded-md">
      <div className=" h-full w-full flex flex-col items-center justify-center">
        <span>{isIconComponent(icon) ? icon : null}</span>
        <span>{icon ? icon : null}</span>
        <span className=" text-white whitespace-nowrap text-[12px] mt-[4px]">
          {appName ? appName : "app"}
        </span>
      </div>
    </div>
  );
};

export default AppListCard;
