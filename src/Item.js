import React from 'react';
import PropTypes from 'prop-types';

// create the item item component
const Item = props => {
    return <li>{props.item}</li>;
};

Item.prototype = {
    item: PropTypes.string.isRequired,
};

export default Item;