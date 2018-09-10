import React, { Component } from 'react';
import Axios from 'axios';

class AdminPage extends Component {

    constructor() {
        super();

        this.state = {
            feedback = [],
        }
    }//end constructor

    getFeedBack() {
        console.log('in getFeedback');

        Axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log('back from server with: ', response.data);
            this.setState({
                feedback: response.data
            });
        }).catch((error) => {
            console.log('error', error);
            alert('there was an error getting the feedback data.')
        })
     console.log(this.state.feedback);
    }//end getFeedback

    componentDidMount() {
      this.getFeedback();
    }

  render() {
    return (
      <div>
        {/* <table>
          <thead>
              <th>Name</th>
              <th>Time Order Placed</th>
              <th>Type</th>
              <th>Cost</th>
          </thead>
            <tbody>
                {this.state.orders.map((order, i) => {
                    return (
                        <tr key={i}>
                            <td>{order.customer.name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.order_total}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table> */}
      </div>
    )//end return
  }//end render
}//end class AdminPage
export default AdminPage;