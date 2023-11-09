import PropTypes from 'prop-types';
import './GlobalStyes.scss';
function GlobalStyes({ children }) {
    return children;
}
GlobalStyes.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyes;
