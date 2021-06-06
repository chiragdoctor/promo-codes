import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Copy from './Copy';

import './Service.css';
const Service = ({ service, handleActiveBonusClick, isBonusActivated }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className='service-container'>
      <div className='card card-container'>
        <div className='card-body'>
          <div className='d-flex flex-row justify-content-evenly'>
            <div className='d-flex flex-column' style={{ width: 800 }}>
              <div className='service-title'>{service?.name}</div>
              <div className='service-description'>{service?.description}</div>
            </div>
            <div className='d-flex flex-column'>
              <div className='title'>Promocode</div>
              <div className='input-group'>
                <input
                  type='text'
                  name='promocode'
                  id='promocode'
                  className='promo-input'
                  disabled
                  value={service?.promo_code}
                />
                <CopyToClipboard
                  text={service?.promo_code}
                  onCopy={() => setCopied(true)}
                >
                  <span>
                    <Copy />
                  </span>
                </CopyToClipboard>
              </div>
              {copied && <div>Copied!!</div>}
            </div>
            <div className='d-flex my-4 mx-4'>
              <button
                className={
                  isBonusActivated ? 'activated-bonus' : 'activate-bonus'
                }
                disabled={isBonusActivated}
                onClick={() => handleActiveBonusClick(service.id)}
              >
                {isBonusActivated ? 'Activated' : 'Activate bonus'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
