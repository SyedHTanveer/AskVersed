import * as React from "react";
import Checkout from './Checkout';

class App extends React.Component {
  public render() {
    return (
          <Checkout
            name={'The Road to learn React'}
            description={'Only the Book'}
            amount={1}
          />
    );
  }
}

export default App;