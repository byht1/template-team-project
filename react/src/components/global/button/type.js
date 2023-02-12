import { marginType, paddingType, widthType } from 'helpers';
import PropTypes from 'prop-types';

export const propTypeButton = {
  width: widthType,
  mt: marginType,
  mb: marginType,
  ml: marginType,
  mr: marginType,
  m: PropTypes.string,
  pt: paddingType,
  pb: paddingType,
  pl: paddingType,
  pr: paddingType,
  p: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};