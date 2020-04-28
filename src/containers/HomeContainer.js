import { connect } from 'react-redux';
import Home from '../components/pages/Home';
import { getProducts } from '../actions/index';

const mapStateToProps = ({ pro }) => ({
    products : pro.products
});

const mapDispatchToProps =  {
    getProducts
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
