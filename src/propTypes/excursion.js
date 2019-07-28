import PropTypes from "prop-types";
const {string, shape} = PropTypes;
// const {shape, number, bool, string, arrayOf} = PropTypes;

export const organizer = shape({
  test: string.isRequired,
})
