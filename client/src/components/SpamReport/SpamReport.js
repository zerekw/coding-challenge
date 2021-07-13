import React, { useState, useEffect } from 'react';
import appFetch from '../../util/fetch';

import './SpamReport.css';


const SpamReport = () => {
  const [ reports, setReports ] = useState({});

  useEffect(() => {
    appFetch('reports')
      .then((data) => {
        // console.log("data", data)
        setReports(data);
      });
  }, []);

  const handleBlock = (id) => {
    // console.log('blocking RESOURCE id => ', id)
    appFetch(`resource/${id}`, 'PUT', {
      resourceState: 'BLOCKED'
    });
  };

  const handleResolve = (id) => {
    // console.log('resolving REPORT id => ', id)
    appFetch(`reports/${id}`, 'PUT', {
      ticketState: 'CLOSED'
    });
  };

  return (
    <div className="SpamReport">
      <SpamReportItems
        handleResolve={handleResolve}
        handleBlock={handleBlock}
        reports={reports}
      />
    </div>
  )
};

const SpamReportItems = ({ reports, handleBlock, handleResolve }) => {
  const isLoaded = reports.size;
  if (isLoaded) {
    return reports.elements.map((item) => {
      return (
        <SpamReportItem
          key={item.id}
          data={item}
          handleResolve={handleResolve}
          handleBlock={handleBlock}
        />
      );
    })
  }
  return (<div>Loading...</div>);
};

const SpamReportItem = ({ data, handleBlock, handleResolve }) => {
  return (
    <div className="SpamReportItem">
        <div className="SpamReportItem__data">
          <ul>
            <li>Id: {data.id}</li>
            <li>State: {data.state}</li>
            <li>
              <button>Details</button>
            </li>
          </ul>
        </div>
        <div className="SpamReportItem__data">
          <ul>
            <li>Type: {data.payload.reportType}</li>
            <li>Message: {data.payload.message}</li>
          </ul>
        </div>
        <div className="SpamReportItem__actions">
          <ul>
            <li>
              <button onClick={() => handleBlock(data.payload.referenceResourceId)}>Block</button>
            </li>
            <li>
              <button onClick={() => handleResolve(data.id)}>Resolve</button>
            </li>
          </ul>
        </div>
      </div>
  )
};

export default SpamReport;