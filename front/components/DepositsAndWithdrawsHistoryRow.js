import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const DepositsAndWithdrawsHistoryRow = ({ history }) => {
  return (
      <tr>
        <td>{history.id}</td>
        <td>{history.time}</td>
        <td>{history.type}</td>
        <td>{history.amount}</td>
        <td>{history.result}</td>
      </tr>
  );
};

DepositsAndWithdrawsHistoryRow.propTypes = {
  history: PropTypes.shape({
    id: PropTypes.number,
    time: PropTypes.object,
    type: PropTypes.string,
    amount: PropTypes.string,
    result: PropTypes.string,
  }),
};

export default DepositsAndWithdrawsHistoryRow;
