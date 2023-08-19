/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import convertToTitleCase from 'utils/convertToTitleCase';

function AddressSection({ flock }) {
  return (
    <div className="flex gap-x-6">
      <div className="h-full w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
      <div>
        <h3 className="text-sm text-grey-light font-normal">Alamat tinggal</h3>
        <div className="text-xs text-grey-light mt-3 mb-5">
          <div className="flex flex-col gap-y-1">
            <p>Negara</p>
            <p className="text-basic-grey text-sm font-medium">{flock.length === 0 ? '' : convertToTitleCase(flock.address.country)}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Provinsi</p>
            <p className="text-basic-grey text-sm font-medium">{flock.length === 0 ? '' : convertToTitleCase(flock.address.province)}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Kabupaten</p>
            <p className="text-basic-grey text-sm font-medium">{flock.length === 0 ? '' : convertToTitleCase(flock.address.regency)}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Kecamatan</p>
            <p className="text-basic-grey text-sm font-medium">{flock.length === 0 ? '' : convertToTitleCase(flock.address.subdistrict)}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Kelurahan</p>
            <p className="text-basic-grey text-sm font-medium">{flock.length === 0 ? '' : flock.address.ward}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Alamat detail</p>
            <p className="text-basic-grey text-sm font-medium">{flock.length === 0 ? '' : flock.address.details}</p>
          </div>
          <div className="flex flex-col gap-y-1 mt-3">
            <p>Link google maps</p>
            <p className="text-basic-grey text-sm font-medium">{flock.length === 0 ? '' : flock.address.linkGmaps}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

AddressSection.propTypes = {
  flock: PropTypes.object.isRequired,
};

export default AddressSection;
