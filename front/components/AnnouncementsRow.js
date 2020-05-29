import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const AnnouncementsRow = ({ announcements }) => {
  const { announcementsList, isLoadingAnnouncements, isLoadedAnnouncements, announcementsLoadErrorReason } = useSelector(state => state.service);
  const onChangeClick = useCallback((e) => {

  }, []);

  return (
      <tr>
        {/* <td>{announcements.id}</td> */}
        <td align="left">{announcements.subject}</td>
        <td>{announcements.regDate}</td>
        {/* <td>{announcements.hit}</td> */}
      </tr>
  );
};

AnnouncementsRow.propTypes = {
  announcements: PropTypes.shape({
    id: PropTypes.number,
    subject: PropTypes.string,
    content: PropTypes.string,
    hit: PropTypes.number,
    regDate: PropTypes.object,
  }),
};

export default AnnouncementsRow;
