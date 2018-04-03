import React from 'react'
import {Form} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addCoin} from '../actions/coins';

class CoinForm extends React.Component {
  state = {coin: ''}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value.toLowerCase().replace(' ', '')})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch} = this.props
    const {coin} = this.state
    dispatch(addCoin(coin))
    this.setState({coin: ''})
  }

  render() {
    const {coin} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='Watch Coin'
          value={coin}
          onChange={this.handleChange}
          name='coin'
          required
        />
        <Form.Button>Add Coin</Form.Button>
      </Form>
    )
  }
}

export default connect()(CoinForm);