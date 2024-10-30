import React, { forwardRef } from "react";
import useIcons, { isIconComponent } from "../../hooks/useIcons";
import AppListCard from "./AppListCard";
import RecommendedAppList from "./RecommendedAppList";

//initializing interface for props
interface StartMenuProps {
  open: boolean;
}

/**
 * Windows start menu component for clone of windows 11.
 *
 * @component
 * @author Abdullah Al Mridul
 * @date 2024-10-25
 */
const StartMenu = forwardRef<HTMLDivElement, StartMenuProps>(
  ({ open }, ref) => {
    //initializing icons custom hook
    const { getIcon } = useIcons();

    //getting icons
    const PowerIcon = getIcon("power");
    const ArrowRightIcon = getIcon("arrowRight");
    const MSEdgeIcon = getIcon("msEdge");
    const WordIcon = getIcon("word");
    const PowerPointIcon = getIcon("powerPoint");
    const OneNoteIcon = getIcon("oneNote");
    const MailIcon = getIcon("mail");
    const ToDoIcon = getIcon("toDo");
    const MSStoreIcon = getIcon("msStore");
    const PhotosIcon = getIcon("photos");
    const PhoneIcon = getIcon("phone");
    const SnippingToolIcon = getIcon("snippingTool");
    const NotepadIcon = getIcon("notepad");
    const XboxIcon = getIcon("xbox");
    const TwitterIcon = getIcon("twitter");
    const SettingsIcon = getIcon("settings");
    const NewsIcon = getIcon("news");
    const SpotifyIcon = getIcon("spotify");
    const CalculatorIcon = getIcon("calculator");
    const PaintIcon = getIcon("paint");
    const GetStartIcon = getIcon("getStart");
    const WordDocumentIcon = getIcon("wordDocument");
    const PhotoBannerIcon = getIcon("photoBanner");
    const PdfBannerIcon = getIcon("photoBanner");
    const ExelBannerIcon = getIcon("exelBanner");

    //check if start menu is open
    const isOpen = open;

    //initializing array for app list
    const appList = [
      {
        name: "Edge",
        icon: MSEdgeIcon,
      },
      {
        name: "Word",
        icon: WordIcon,
      },
      {
        name: "PowerPoint",
        icon: PowerPointIcon,
      },
      {
        name: "OneNote",
        icon: OneNoteIcon,
      },
      {
        name: "Mail",
        icon: MailIcon,
      },
      {
        name: "ToDo",
        icon: ToDoIcon,
      },
      {
        name: "Microsoft Store",
        icon: MSStoreIcon,
      },
      {
        name: "Photos",
        icon: PhotosIcon,
      },
      {
        name: "Your Phone",
        icon: PhoneIcon,
      },
      {
        name: "Snipping Tool",
        icon: SnippingToolIcon,
      },
      {
        name: "Notepad",
        icon: NotepadIcon,
      },
      {
        name: "Xbox",
        icon: XboxIcon,
      },
      {
        name: "Twitter",
        icon: TwitterIcon,
      },
      {
        name: "Settings",
        icon: SettingsIcon,
      },
      {
        name: "News",
        icon: NewsIcon,
      },
      {
        name: "Spotify",
        icon: SpotifyIcon,
      },
      {
        name: "Calculator",
        icon: CalculatorIcon,
      },
      {
        name: "Paint",
        icon: PaintIcon,
      },
    ];

    //initializing array for recommended app list
    const recommendedApps = [
      {
        name: "Get Started",
        desc: "Welcome to Windows",
        icon: GetStartIcon,
      },
      {
        name: "Syllabus",
        desc: "2h ago",
        icon: WordDocumentIcon,
      },
      {
        name: "Tournament Photos",
        desc: "Yesterday at 4:20 PM",
        icon: PhotoBannerIcon,
      },
      {
        name: "Rental Agreement",
        desc: "17m ago",
        icon: PdfBannerIcon,
      },
      {
        name: "Logo Ideas",
        desc: "12h ago",
        icon: PdfBannerIcon,
      },
      {
        name: "Timetable",
        desc: "Yesterday at 1:15 PM",
        icon: ExelBannerIcon,
      },
    ];

    //returning jsx for render ui
    return (
      <div
        ref={ref}
        style={{
          transform: `translate(-50%,${isOpen ? "0px" : "100px"})`,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          visibility: isOpen ? "visible" : "hidden",
        }}
        className="start__menu absolute"
      >
        <div className=" flex flex-col h-full">
          <div className=" flex-1 flex flex-col justify-between">
            <div className=" px-[40px] py-[32px]">
              <div className=" flex justify-between items-center px-[30px]">
                <div className=" text-white text-[14px] font-sans font-medium">
                  Pinned
                </div>
                <div>
                  <button className=" bg-white/10 text-[10.24px] text-white flex items-center gap-[3px] px-[8px] py-[2px] rounded-[3px]">
                    <span>All apps</span>
                    <span>
                      {isIconComponent(ArrowRightIcon) ? (
                        <ArrowRightIcon />
                      ) : null}
                    </span>
                  </button>
                </div>
              </div>
              <div className=" py-[20px]">
                <div className=" w-full flex flex-wrap">
                  {appList.map((app, idx) => {
                    const { name, icon } = app;
                    return isIconComponent(icon) ? (
                      <AppListCard
                        key={idx}
                        appName={name}
                        icon={React.createElement(icon, {
                          height: 32,
                          width: 32,
                        })}
                      />
                    ) : null;
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className=" px-[70px] pb-[12px]">
                <div className=" flex justify-between items-center">
                  <div className=" text-white text-[14px] font-sans font-medium">
                    Recommended
                  </div>
                  <div>
                    <button className=" bg-white/10 text-[10.24px] text-white flex items-center gap-[3px] px-[8px] py-[2px] rounded-[3px]">
                      <span>More</span>
                      <span>
                        {isIconComponent(ArrowRightIcon) ? (
                          <ArrowRightIcon />
                        ) : null}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-[60px]">
                <div className="flex pb-[7px] justify-between flex-wrap">
                  {recommendedApps.map((app, idx) => {
                    const { name, desc, icon } = app;
                    return isIconComponent(icon) ? (
                      <RecommendedAppList
                        key={idx}
                        appName={name}
                        addDesc={desc}
                        icon={React.createElement(icon, {
                          height: 32,
                          width: 32,
                        })}
                      />
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="account__power px-[48px] h-[64px]">
            <div className=" h-full w-full flex justify-between items-center">
              <div className=" flex items-center gap-[12px] transition-all duration-100 hover:bg-white/10 rounded px-[13px] py-[10px]">
                <div>
                  <img
                    className="h-[26px] w-[26px] rounded-full"
                    alt="profile"
                    src="/profile.jpg"
                  />
                </div>
                <div>
                  <p
                    className=" text-[11px] font-[500] font-open-sans"
                    style={{
                      color: "rgb(221, 221, 221)",
                    }}
                  >
                    Abdullah Al Mridul
                  </p>
                </div>
              </div>
              <div>
                <div className=" text-white h-[40px] w-[40px] flex items-center justify-center hover:bg-white/10 transition-all rounded">
                  {isIconComponent(PowerIcon) ? <PowerIcon /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default StartMenu;
