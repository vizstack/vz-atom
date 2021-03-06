import * as React from 'react';
import classNames from 'classnames';
import Immutable from 'seamless-immutable';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

/**
 * This [pure dumb / stateful dumb / smart] component ___.
 */
type ExampleProps = {
    /** CSS-in-JS styling object. */
    classes: {},

    /** React components within opening & closing tags. */
    children: React.Node,
};

type ExampleState = {
    // Optional
};

class Example extends React.Component<ExampleProps, ExampleState> {
    /** Prop default values. */
    static defaultProps = {
        // key: value,
    };

    /**
     * Constructor.
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = Immutable({});
    }

    /**
     * Renderer.
     */
    render() {
        const { classes } = this.props;
        return (
            <div
                className={classNames({
                    [classes.container]: true,
                })}
            />
        );
    }
}

// To inject styles into component
// -------------------------------

/** CSS-in-JS styling function. */
const styles = (theme) => ({
    // css-key: value,
});

export default withStyles(styles)(Example);

// TODO: For dumb components, just use the code above. Delete the code below and `connect`,
// `bindActionCreators` `createSelector` imports. For smart components, use the code below.

// To inject application state into component
// ------------------------------------------

/** Connects application state objects to component props. */
function mapStateToProps() {
    // By returning function, it is possible to customize for each instance of a component depending
    // on its state and props. Also it creates a different selector for each instance so they don't
    // clash.
    return (state, props) => ({
        // propName1: state.subslice,
        // propName2: createSelector(
        //     (state) => state.subslice,
        //     (state, props) => props.value,
        //     (subslice, value) => subslice[0] + value,
        // )(state, props),
    });
}

/** Connects bound action creator functions to component props. */
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            // propName: doSomethingAction,
        },
        dispatch,
    );
}

// export default connect(mapStateToProps, mapDispatchToProps)(
//     withStyles(styles)(Example)
// );
