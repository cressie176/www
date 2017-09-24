import React from 'react';
import PropTypes from 'prop-types';

import './Copyright.css';

class Copyright extends React.Component {

  render() {
    if (!this.props.id) {
      return (
        <div className='copyright gutter' />
      );
    } else {
      return (
        <div className='copyright gutter'>
          <div className='row'>
            <div className='col-sm-offset-1 col-sm-10'>
              <span className='text'><span className='text-nowrap'>&copy; {this.props.year} {this.props.owner}.</span> <span className='text-nowrap'>{this.props.rights}</span></span>
            </div>
          </div>
        </div>
      );
    }
  }
}

Copyright.propTypes = {
  id: PropTypes.string,
  year: PropTypes.number,
  owner: PropTypes.string,
  rights: PropTypes.string,
};

export default Copyright;
