import { FC, useEffect, useState } from "react";
import useIcons, { isIconComponent } from "../../hooks/useIcons";

// Interface defining the props for the Taskbar component
interface TaskbarProps {
  onWindowsIconClick: (event: React.MouseEvent<HTMLElement>) => void; // Click handler for the Windows icon
  onControlCenterClick: (event: React.MouseEvent<HTMLElement>) => void;
}

/**
 * A Windows taskbar component for a clone of Windows 11.
 *
 * This component renders the taskbar with icons and widgets,
 * providing functionality to toggle the start menu and display
 * system information.
 *
 * @component
 * @author Abdullah Al Mridul
 * @date 2024-10-25
 */
const Taskbar: FC<TaskbarProps> = ({
  onWindowsIconClick,
  onControlCenterClick,
}) => {
  // Initialize the custom hook for icon management
  const { getIcon } = useIcons();

  // Retrieve various icons using the custom hook
  const WindowsIcon = getIcon("windows");
  const SearchIcon = getIcon("search");
  const DesktopMangerIcon = getIcon("desktopManger");
  const ChatIcon = getIcon("chat");
  const FileExplorerIcon = getIcon("fileExplorer");
  const MicrosoftEdgeIcon = getIcon("microsoftEdge");
  const CloudIcon = getIcon("cloud");
  const ArrowUp = getIcon("arrowUp");
  const Wifi = getIcon("wifi");
  const Volume = getIcon("volume");
  const Battery = getIcon("battery");

  // State for time and date
  const [currentTime, setCurrentTime] = useState<string>(
    new Date()
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(/(am|pm)/, (match) => match.toUpperCase())
  );
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toLocaleDateString()
  );

  //effect for update date and time every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date()
          .toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
          .replace(/(am|pm)/, (match) => match.toUpperCase())
      );
      setCurrentDate(new Date().toLocaleDateString());
    }, 60000); // Update every minute

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Render the JSX for the taskbar
  return (
    <>
      <div className="taskbar w-full bg-taskbar/75 h-taskbar">
        <div className="flex justify-between items-center h-full">
          <div className="widget__icon flex items-center gap-[11px] ml-[18px]">
            <div>
              {isIconComponent(CloudIcon) ? (
                <CloudIcon width={22} height={16} />
              ) : null}
            </div>
            <div className="font-roboto flex flex-col gap-[5px]">
              <p className="font-semibold text-[11px] text-white leading-[.9]">
                8 °C
              </p>
              <p className="text-[12px] text-white leading-[.9]">
                Partly sunny
              </p>
            </div>
          </div>
          <div>
            <ul className="taskbar__center__menu flex">
              <li onClick={onWindowsIconClick}>
                {isIconComponent(WindowsIcon) ? (
                  <WindowsIcon height={24} width={24} />
                ) : null}
              </li>
              <li>
                {isIconComponent(SearchIcon) ? (
                  <SearchIcon height={24} width={24} />
                ) : null}
              </li>
              <li>
                {isIconComponent(DesktopMangerIcon) ? (
                  <DesktopMangerIcon height={24} width={24} />
                ) : null}
              </li>
              <li>
                {isIconComponent(ChatIcon) ? (
                  <ChatIcon height={24} width={24} />
                ) : null}
              </li>
              <li>
                {isIconComponent(FileExplorerIcon) ? (
                  <FileExplorerIcon height={24} width={24} />
                ) : null}
              </li>
              <li>
                {isIconComponent(MicrosoftEdgeIcon) ? (
                  <MicrosoftEdgeIcon height={24} width={24} />
                ) : null}
              </li>
            </ul>
          </div>
          <div className="pr-[25px]">
            <div className="right__side__panel flex items-center h-full gap-[4px]">
              <div className="arrow__up h-taskbar flex items-center ">
                <div>{isIconComponent(ArrowUp) ? <ArrowUp /> : null}</div>
              </div>
              <div
                onClick={onControlCenterClick}
                className="control__panel__icons flex gap-[4px] py-[8px] px-[6px] rounded-[4px]"
              >
                <div>{isIconComponent(Wifi) ? <Wifi /> : null}</div>
                <div>{isIconComponent(Volume) ? <Volume /> : null}</div>
                <div>{isIconComponent(Battery) ? <Battery /> : null}</div>
              </div>
              <div className="time__panel font-open-sans text-white text-[10px] text-center px-[8px] py-[3px] rounded">
                <p>{currentTime}</p>
                <p>{currentDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
