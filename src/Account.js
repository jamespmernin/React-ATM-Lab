import React, { Component } from 'react';

export default class Account extends Component {
  // The initial balance is set here
  state = {
    balance: 0
  };

  // This module is able to deposit any amount into the bank
  deposit = (e) => {
    // Prevent default from occurring
    e.preventDefault();
    // Get the amount entered and parse it as an int
    const amount = parseInt(this.inputBox.value);
    // Add the amount to the current balance
    const newBalance = this.state.balance + amount;
    // Update the balance using the new amount given above
    this.setState({
      balance: newBalance
    })
    // Clear out the text box
    this.inputBox.value = '';
  }

  // This does essentially the same thing as deposit, except it withdraws with a condition
  withdraw = (e) => {
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);
    // Check to make sure that the amount to withdraw is not more than what is in the account
    if (this.state.balance - amount >= 0) {
      // Reduce the amount to withdraw from the current balance
      const newBalance = this.state.balance - amount;
      this.setState({
        balance: newBalance
      })
      this.inputBox.value = '';
    }
  }

  render() {
    let balanceClass = ' balance';

    // Set the class to zero when the balance in an account is zero
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }
    // Return the module to the page
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.deposit} />
        <input type="button" value="Withdraw" onClick={this.withdraw} />
      </div>
    )
  }
}