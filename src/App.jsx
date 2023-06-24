import { Outlet } from "react-router-dom";
import SideMenu from "./Shared/SideMenu";

const App = () => {
  return (
    <div className="flex gap-4 p-2">
      <div>
        <SideMenu />
      </div>
      <div className="rounded-xl bg-white h-[97.5vh] w-full p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
