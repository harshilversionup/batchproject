import React from 'react'
import Table from 'react-bootstrap/Table'
const imgcart = {
    height :'100px',
    width:'100px'
};
export default function Cart() {
    return (
        <div className='container'>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Product Price</th>
      <th>Image</th>
      <th>Quantity</th>
      <th>Total</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Pizza</td>
      <td>400</td>
      <td ><img src='images/1.jpg' style={imgcart}></img></td>
      <td>
          <button>+</button> 2
          <button>+</button>

      </td>
      <td>340</td>
    </tr>
   
  </tbody>
</Table>
            
        </div>
    )
}
