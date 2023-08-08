/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
// bg-basic-blue hover:bg-blue-dark text-white

function index({
  onClick, text, bgColor, addButton = false, goBack = false, guideFileButton = false,
}) {
  const navigation = useNavigate();
  const goBackFunc = () => {
    navigation(-1);
  };

  return (
    <button type="submit" onClick={goBack ? goBackFunc : onClick} className={`flex items-center justify-center ${guideFileButton ? 'text-base' : 'text-xs'} p-2 rounded gap-x-1 ${bgColor}`}>
      { addButton ? <AiOutlinePlus /> : guideFileButton ? <BsFillFileEarmarkTextFill /> : null }
      { text }
    </button>
  );
}

index.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  addButton: PropTypes.bool.isRequired,
  goBack: PropTypes.bool.isRequired,
  guideFileButton: PropTypes.bool.isRequired,
};

export default index;
