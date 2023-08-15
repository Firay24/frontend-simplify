/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Layout/Header';
import DetailContainer from './Layout/DetailContainer';
import { getNoteFlock } from '../../../../utils/apiData';

function DetailNotePage() {
  const { id } = useParams();
  const { idNote } = useParams();
  const [note, setNote] = useState({ error: false, data: [] });
  const [infoNote, setInfoNote] = useState({ error: false, data: [] });

  useEffect(() => {
    const fetchData = async (idParams) => {
      try {
        const result = await getNoteFlock(idParams);
        setNote(result);
      } catch (error) {
        setNote({ error: true, data: [] });
      }
    };
    fetchData(id);
  });
  const detailNote = note && note.data && note.data.note;

  useEffect(() => {
    const detailInfoNote = detailNote && detailNote.details.find((noteItem) => noteItem._id === idNote);
    if (detailInfoNote) {
      setInfoNote(detailInfoNote);
    }
  }, [idNote, detailNote]);

  return (
    <div className="mt-4 mr-10 mb-6">
      <div>
        <Header />
      </div>
      <div>
        <DetailContainer infoNote={infoNote} id={id} idNote={idNote} />
      </div>
    </div>
  );
}

export default DetailNotePage;
