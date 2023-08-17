import React from 'react';
import PropTypes from 'prop-types';
import { BiBlock } from 'react-icons/bi';

function index({ text }) {
  return (
    <div className="flex flex-col my-3 items-center gap-y-2 text-grey-light">
      <div className="text-4xl">
        <BiBlock />
      </div>
      <div className="text-sm">
        <p>{text}</p>
      </div>
    </div>
  );
}

index.propTypes = {
  text: PropTypes.string.isRequired,
};

export default index;
