import React from 'react';
import { Component } from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    LayoutAnimation,
    UIManager
} from 'react-native';

import { CardSection } from './common';
import { connect } from 'react-redux';

import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        //console.log(this.props);
        const { textStyle } = styles;
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={textStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    };
};

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}


const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}


export default connect(mapStateToProps, actions)(ListItem); 