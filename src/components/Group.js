import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import '../App.css';

function Group({ group }) {
  return (
    <>
      <div className="group">
        {group.map(btn => (
          <Button key={uuidv4()} name={btn} />
        ))}
      </div>
    </>
  );
}

Group.propTypes = {
  group: PropTypes.arrayOf(PropTypes.string),
};

Group.defaultProps = {
  group: 'no value',
};

export default Group;
