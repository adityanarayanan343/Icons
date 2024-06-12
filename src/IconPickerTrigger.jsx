import IconPicker from "./IconPicker";
import { useState } from "react";

const IconPickerTrigger = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setIsPickerOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="w-50 h-50 px-6 py-6 flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
        onClick={() => setIsPickerOpen(!isPickerOpen)}
      >
        {selectedIcon ? (
          <div className="w-100 h-100 p-10 border-gray-300 rounded cursor-pointer hover:bg-gray-200">
            <h1 className="text-xl underline justify-center items-center">Selected Icon</h1>
            <h3 className="font-bold justify-center items-center">To Reselect Click the Icon Itself</h3>
            <img src={selectedIcon} alt="Selected Icon" className="w-80 h-80 justify-center items-center" />
          </div>
        ) : (
          "Click to select an icon"
        )}
      </div>
      {isPickerOpen && (
        <IconPicker
          rowsInOnePage={2}
          columnsInOnePage={3}
          iconHeight={'70px'}
          iconWidth={'70px'}
          onSelect={handleIconSelect}
        />
      )}
    </div>
  );
};

export default IconPickerTrigger;
