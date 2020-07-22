# ![GA LOGO](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67) React ATM application

Let's make an ATM app! You will practice the dark art of manipulating components in real time.  You will create two componenåts of the same class which will work independently of each other.  

<img width="992" alt="atm" src="https://cloud.githubusercontent.com/assets/4304660/24376818/18c39a82-12f2-11e7-81e7-af618c22b3ed.png">


Clone this repo, and run `npm install` from inside it. The repo already includes a partial React app. To launch the app, run `npm start`.

### In `src/App.js`:
1. Pass a `name` property to each `Account` component, one for "Checking", the other for "Savings".  These will be used and accessed as `props`for our component.


### In `src/Account.js`

2. Use the property you set in `App.js` to add the name of the account to the `<h2>`.
    Save your work. You should see two components named Checking and Savings.  You're getting there!


3. Add a `balance` property to `state`, and set to 0 initially, in the Account component.


4. Create an event listener that stores the current value in the input to state. You will need two variables in state, one to store the current balance, one to store what is typed in the input box. (**Hint**: all input data is stored as a string, you will need to convert the data to an integer! Check out `parseInt()`)

5. When the `Deposit` button is clicked, you should add the amount entered in the text field to the balance



6. When the `Withdraw` button is clicked, you should deduct the amount entered in the text field to the balance.  **You should not be able to withdraw more than the current balance**


7. If the current balance is 0, you should add a class of `zero` to the `<div className="balance">`. You can complete these computations in the render method, but before the JSX portion is returned.

#### Bonus: 

- Handling an edge case
    - As it stands, our app breaks if we hit Deposit or Withdraw on an empty form. Or if we put letters in there! How can we update our functionality to avoid this problem?
    - **hint:** Don't assume NaN behaves as you might expect :)
- Refactor the common code out of handleWithdrawlClick and handleDepositClick into a helper function or two.
