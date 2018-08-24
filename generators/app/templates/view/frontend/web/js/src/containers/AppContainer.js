
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Driver } from '../components/Driver';
import * as actions from '../actions';

const mapStateToProps = state => ({
    items: state.items,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

class AppContainer extends React.Component {
    render() {
        return (
            <Driver items={this.props.items}
                actions={this.props.actions} />
        );
    }
}

AppContainer.propTypes = {
    actions: PropTypes.object,
    items: PropTypes.array
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
