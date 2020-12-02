import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import '../App.css';

function Group({ group }) {
  return (
    <React.Fragment>
      <div className="group">
        {group.map(btn => (
          <Button key={uuidv4()} name={btn} />
        ))}
      </div>
    </React.Fragment>
  );
}

Group.propTypes = {
  group: PropTypes.array,
};

Group.defaultProps = {
  group: 'no value',
};

export default Group;
