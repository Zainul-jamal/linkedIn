import React from 'react';
import "./ZAbutton.css";
import { Button } from 'antd';

const ZAbutton = ({name , company , img}) => {
  return (
    <>
      <div>
        <div className='flex p-2'>
          <img 
            className="h-12 w-16 ml-0 mr-4 rounded-full " 
            src={img}
            alt="Profile" 
          />
          <div>
            <h5>{name}</h5>
            <p>{company}</p>
            <span className="p-0 m-0">
              <Button className="h-6 w-16" type="primary" ghost>
                Follow
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZAbutton;
