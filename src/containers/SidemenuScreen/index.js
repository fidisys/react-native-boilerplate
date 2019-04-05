import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header,Content, Title, Body, Footer, Button, Text } from 'native-base';
import { View } from 'react-native';
import { styles } from './styles';
import { logOut } from '../AuthenticationScreen/actions';

class SidemenuScreen extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>React Boilerplate</Title>
					</Body>
				</Header>
				<Content>

				</Content>
				<Footer style={styles.footer}>
					<Button rounded danger
						onPress={() => { this.props.onUserLogOut() }}>
						<Text>LogOut</Text>
					</Button>
				</Footer>
			</Container>
		);
	}
}
const mapDispatchToProps = dispatch => {
  return {
    onUserLogOut: () => {
      dispatch(logOut())
    },
  };
};

export default connect(
	null,
	mapDispatchToProps
)(SidemenuScreen);