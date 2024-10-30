import { FC, useCallback, useEffect, useRef } from "react";
import Taskbar from "../components/taskbar/Taskbar";
import StartMenu from "../components/taskbar/StartMenu";
import {
  toggleStartMenu,
  toggleControlCenter,
} from "../store/slices/taskbarSlice";
import type { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import ControlCenter from "../components/taskbar/ControlCenter";

/**
 * Main layout component for a Windows 11 clone application.
 *
 * This component manages the taskbar and other components,
 * handling click events to toggle the panels and detect
 * clicks outside the menu to close it.
 *
 * @component
 * @author Abdullah Al Mridul
 * @date 2024-10-25
 */
const MainLayout: FC = () => {
  // Initialize dispatch function from Redux to trigger actions
  const dispatch = useDispatch();

  // Select the current state of the start menu from the Redux store
  const { startMenu, controlCenter } = useSelector(
    (state: RootState) => state.taskbar
  );

  // Create a reference to the StartMenu component for DOM access
  const startMenuRef = useRef<HTMLDivElement>(null);
  const controlCenterRef = useRef<HTMLDivElement>(null);
  /**
   * Handles click events outside the start menu to toggle its visibility.
   *
   * @param event - The mouse event triggered by a click.
   */
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      // Check if the click occurred outside the start menu
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target as Node) &&
        startMenu
      ) {
        // Dispatch action to toggle start menu
        dispatch(toggleStartMenu());
      }
      if (
        controlCenterRef.current &&
        !controlCenterRef.current.contains(event.target as Node) &&
        controlCenter
      ) {
        dispatch(toggleControlCenter());
      }
    },
    [dispatch, startMenu, controlCenter]
  );

  // Effect hook for adding/removing event listener for clicks
  useEffect(() => {
    if (startMenu || controlCenter) {
      document.addEventListener("click", handleClickOutside);
    }
    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [startMenu, controlCenter, handleClickOutside]);

  /**
   * Toggles the start menu when the Windows icon is clicked.
   *
   * @param event - The mouse event triggered by a click.
   */
  const handleStartMenuToggle = (event: React.MouseEvent) => {
    // Prevent the event from bubbling up to the document
    event.stopPropagation();
    // Dispatch action to toggle start menu visibility
    dispatch(toggleStartMenu());
  };

  const controlCenterToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(toggleControlCenter());
  };
  // Render the main layout of the application
  return (
    <main className="main__bg">
      <div className="flex flex-col h-full">
        <div className="flex-1 relative">
          <StartMenu ref={startMenuRef} open={startMenu} />
          <ControlCenter ref={controlCenterRef} isOpen={controlCenter} />
        </div>
        <div>
          <Taskbar
            onWindowsIconClick={handleStartMenuToggle}
            onControlCenterClick={controlCenterToggle}
          />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
