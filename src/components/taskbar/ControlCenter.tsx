import { ForwardedRef, forwardRef, useState } from "react";
import useIcons, { isIconComponent } from "../../hooks/useIcons";

interface ControlItem {
  id: string;
  iconName: string;
  label: string;
}
interface ControlCenterProps {
  isOpen: boolean;
}

const ControlCenter = forwardRef<HTMLDivElement, ControlCenterProps>(
  ({ isOpen }, ref: ForwardedRef<HTMLDivElement>) => {
    const { getIcon } = useIcons();

    // Define control items with individual state keys
    const controlItems: ControlItem[] = [
      { id: "wifi", iconName: "controlWifi", label: "WiFi" },
      { id: "bluetooth", iconName: "controlBluetooth", label: "Bluetooth" },
      { id: "airplane", iconName: "controlAirplane", label: "Airplane Mode" },
      {
        id: "battery",
        iconName: "controlBatterySaver",
        label: "Battery Saver",
      },
      { id: "nightMode", iconName: "controlNightMode", label: "Night Mode" },
      {
        id: "accessibility",
        iconName: "controlAccessibility",
        label: "Accessibility",
      },
    ];

    // Define the type for control states
    type ControlStates = Record<string, boolean>;

    // Initialize state for each control button
    const [controlStates, setControlStates] = useState<ControlStates>(
      controlItems.reduce((acc, item) => {
        acc[item.id] = false; // Default state is 'off' (false)
        acc["wifi"] = true; // wifi turned on initially
        return acc;
      }, {} as ControlStates)
    );
    const [volume, setVolume] = useState<number>(80);
    const [brightness, setBrightness] = useState<number>(70);

    // Toggle function for control buttons
    const toggleControl = (id: string) => {
      setControlStates((prevState) => ({
        ...prevState,
        [id]: !prevState[id], // Toggle the state
      }));
    };

    const VolumeIcon = getIcon("controlVolume");
    const BrightnessIcon = getIcon("controlBrightness");
    const BatteryIcon = getIcon("controlBattery");
    const EditIcon = getIcon("controlEdit");
    const SettingsIcon = getIcon("controlSettings");

    return (
      <div
        ref={ref}
        style={{
          transform: `translateY(${isOpen ? "0" : "100px"})`,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          visibility: isOpen ? "visible" : "hidden",
        }}
        className="control__center absolute bottom-3 w-[360px] rounded-lg min-h-[200px] right-3"
      >
        <div className="control__center__layer__1">
          <div className="control__center__layer__2">
            <div className="px-5 py-5 pb-[32px] bg-white/[0.03]">
              <div className="grid grid-cols-3 gap-[13px]">
                {controlItems.map(({ id, iconName, label }) => {
                  const IconComponent = getIcon(iconName);
                  return (
                    <div key={id}>
                      <div
                        key={id}
                        style={{
                          background: controlStates[id]
                            ? "#60CDFF"
                            : "rgb(255 255 255 / .07)",
                        }}
                        className={`w-full bg-white/[.07] transition-all border-[1.3px] border-white/[.04] flex justify-center items-center h-[55px] rounded cursor-pointer`}
                        onClick={() => toggleControl(id)}
                      >
                        {isIconComponent(IconComponent) ? (
                          <IconComponent
                            height={20}
                            width={20}
                            fill={
                              controlStates[id] ? "rgba(0,0,0,.89)" : "white"
                            }
                          />
                        ) : null}
                      </div>
                      <p className=" text-xs mt-2 text-center text-nowrap text-white font-open-sans">
                        {label}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className=" mt-[30px] flex justify-between items-center pl-[8px] gap-[8px]">
                <div className=" w-max">
                  {isIconComponent(VolumeIcon) ? (
                    <VolumeIcon height={20} width={20} />
                  ) : null}
                </div>
                <div className=" w-full flex items-center">
                  <input
                    type="range"
                    value={volume}
                    onChange={(e) => setVolume(+e.target.value)}
                    name="volume"
                    id="volume"
                    style={{
                      background: `linear-gradient(90deg, #4cc2ff ${volume}%, #888888 ${volume}%)`,
                    }}
                    className=" w-full range"
                  />
                </div>
              </div>
              <div className=" mt-[30px] flex justify-between items-center pl-[8px] gap-[8px]">
                <div className=" w-max">
                  {isIconComponent(BrightnessIcon) ? (
                    <BrightnessIcon height={20} width={20} />
                  ) : null}
                </div>
                <div className=" w-full flex items-center">
                  <input
                    type="range"
                    value={brightness}
                    onChange={(e) => setBrightness(+e.target.value)}
                    name="volume"
                    id="volume"
                    style={{
                      background: `linear-gradient(90deg, #4cc2ff ${brightness}%, #888888 ${brightness}%)`,
                    }}
                    className=" w-full range"
                  />
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between p-[4px] border-t border-white/[.08]">
              <div>
                <div className=" flex items-center px-[12px] h-[40px] gap-[5px] hover:bg-white/[0.07] transition-all border border-transparent hover:border-white/[0.03] rounded">
                  <span>
                    {isIconComponent(BatteryIcon) ? (
                      <BatteryIcon width={20} height={20} />
                    ) : null}
                  </span>
                  <span className=" text-[12px] text-white font-open-sans">
                    92%
                  </span>
                </div>
              </div>
              <div className=" flex items-center px-[8px] gap-[8px]">
                <div className="hover:bg-white/[0.07] transition-all p-[10px] rounded border border-transparent hover:border-white/[0.03]">
                  {" "}
                  <span>
                    {isIconComponent(EditIcon) ? (
                      <EditIcon height={17} width={17} />
                    ) : null}
                  </span>
                </div>
                <div className="hover:bg-white/[0.07] transition-all p-[10px] rounded border border-transparent hover:border-white/[0.03]">
                  <span>
                    {isIconComponent(SettingsIcon) ? (
                      <SettingsIcon height={17} width={17} />
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ControlCenter;
