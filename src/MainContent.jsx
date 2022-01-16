import { Component } from "react";

export default class MainContent extends Component {

    state = {pageTitle: "Customers", customersCount: 5,

customers: [
    {id:1, name:"Scott", Phone:"123-456", 
    address: {city: "Lagos"}, photo: "https://picsum.photos/id/1010/60",},
    {id:2, name:"Mark", Phone:"123-456", 
    address: {city: "New York"}, photo: "https://picsum.photos/id/1011/60",},
    {id:3, name:"John", Phone:"123-456", 
    address: {city: "Abuja"}, photo: "https://picsum.photos/id/1012/60",},
    {id:4, name:"Park", Phone:null, 
    address: {city: "New Jersy"}, photo: "https://picsum.photos/id/1013/60",},
    {id:5, name:"Jason", Phone:null, 
    address: {city: "Berlin"}, photo: "https://picsum.photos/id/1014/60",},

],
};

    
    render() {
        return (
            <div>
              <h3 className=" m-1 p-1">{this.state.pageTitle}
        <span className="badge badge-secondary m-2 navbar-style">{this.state.customersCount}</span>
        <button className="btn btn-info" onClick={this.onRefreshClick} >Refresh</button></h3>
        <table className="table">
        <thead>
        <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
          {this.getCustomerRow()}
          </tbody>
        </table>
        </div>
        );
}

    // Executes when the user clicks on Refresh button
    onRefreshClick = () => {
this.setState({
    customersCount: 7,});
    }
    getPhoneToRender = (Phone) => {
        if (Phone) return Phone;
        else {
          return <div className="bg-warning p-2">No Phone</div>;
        }
      }
      getCustomerRow = () => {
          return this.state.customers.map((cust, index) => {
                return (
                  <tr key={cust.id}>
            <td>{cust.id}</td>
            <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
            <td>{cust.name}</td>
            <td>{this.getPhoneToRender(cust.Phone)}</td>
            <td>{cust.address.city}</td>
        </tr>  
                );
            });
        };
      
        //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);

    //get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";

    //update "customers" array in the state
    this.setState({ customers: custArr });
  };
}