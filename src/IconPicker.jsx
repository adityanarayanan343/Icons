import  { useState } from 'react';
import PropTypes from 'prop-types';

// Import SVG icons dynamically
import icon1 from '../feather/activity.svg'
import icon2 from '../feather/airplay.svg'
import icon3 from '../feather/alert-circle.svg'
import icon4 from '../feather/activity.svg'
import icon5 from '../feather/airplay.svg'
import icon6 from '../feather/alert-circle.svg'
import icon7 from '../feather/activity.svg'
import icon8 from '../feather/airplay.svg'
import icon9 from '../feather/alert-circle.svg'
import icon10 from '../feather/activity.svg'
import icon11 from '../feather/airplay.svg'
import icon12 from '../feather/alert-circle.svg'
import icon13 from '../feather/activity.svg'
import icon14 from '../feather/airplay.svg'
import icon15 from '../feather/alert-circle.svg'

const icons =[icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,icon8,icon9,icon10,icon11,icon12,icon13,icon14,icon15];


const IconPicker = ({ rowsInOnePage, columnsInOnePage, iconHeight, iconWidth, pickerHeight = '500px', pickerWidth = '500px', onSelect }) => {
  // Validate props and icons array
  const validProps = () => {
    if (!Array.isArray(icons) || icons.length === 0) {
      console.error("The icons array is either not an array or is empty.");
      return false;
    }

    if (typeof rowsInOnePage !== 'number' || rowsInOnePage <= 0) {
      console.error("rowsInOnePage should be a positive number.");
      return false;
    }

    if (typeof columnsInOnePage !== 'number' || columnsInOnePage <= 0) {
      console.error("columnsInOnePage should be a positive number.");
      return false;
    }

    if (!iconHeight || typeof iconHeight !== 'string') {
      console.error("iconHeight should be a valid CSS value.");
      return false;
    }

    if (!iconWidth || typeof iconWidth !== 'string') {
      console.error("iconWidth should be a valid CSS value.");
      return false;
    }

    if (!pickerHeight || typeof pickerHeight !== 'string') {
      console.error("pickerHeight should be a valid CSS value.");
      return false;
    }

    if (!pickerWidth || typeof pickerWidth !== 'string') {
      console.error("pickerWidth should be a valid CSS value.");
      return false;
    }

    if (typeof onSelect !== 'function') {
      console.error("onSelect should be a function.");
      return false;
    }

    return true;
  };

  const [currentPage, setCurrentPage] = useState(0);

  if (!validProps()) {
    return null;
  }

  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const paginatedIcons = [];
  for (let i = 0; i < icons.length; i += iconsPerPage) {
    paginatedIcons.push(icons.slice(i, i + iconsPerPage));
  }

  const handleIconClick = (icon) => {
    onSelect(icon);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4" style={{ height: pickerHeight, width: pickerWidth }}>
        <div className="text-center text-lg font-semibold mb-4">Select App Icon</div>
        <div className="grid gap-4 items-center justify-center" style={{ gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight})`, gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth})` }}>
          {paginatedIcons[currentPage].map((icon, index) => (
            <div key={index} className="flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-200" onClick={() => handleIconClick(icon)}>
              <img src={icon} alt={`icon${index}`} style={{ height: iconHeight, width: iconWidth }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          {currentPage > 0 && <button className="text-blue-500" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>}
          <span>Page {currentPage + 1} of {paginatedIcons.length}</span>
          {currentPage < paginatedIcons.length - 1 && <button className="text-blue-500" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}
        </div>
      </div>
    </div>
  );
};

IconPicker.propTypes = {
  rowsInOnePage: PropTypes.number.isRequired,
  columnsInOnePage: PropTypes.number.isRequired,
  iconHeight: PropTypes.string.isRequired,
  iconWidth: PropTypes.string.isRequired,
  pickerHeight: PropTypes.string,
  pickerWidth: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default IconPicker;
