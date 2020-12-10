import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import '../App.css';

function Group({ group, btnPress }) {
  return (
    <>
      <div className="group">
        {group.map(btn => (
          <Button key={uuidv4()} name={btn} btnPress={btnPress} />
        ))}
      </div>
    </>
  );
}

Group.propTypes = {
  group: PropTypes.arrayOf(PropTypes.string),
  btnPress: PropTypes.func,
};

Group.defaultProps = {
  group: 'no value',
  btnPress(name) { return name; },
};

export default Group;
