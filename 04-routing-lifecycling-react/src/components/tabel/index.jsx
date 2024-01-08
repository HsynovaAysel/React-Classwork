import React from "react";
import'./index.scss'
const SuppliersTable = ({data}) => {
  return (
    <table>
      <thead>
        <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Contact Title</th>
            <th>Street</th>
            <th>City,Country</th>
            <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item=>{
            return <tr key={item.id}>
            <th>{item.id}</th>
            <th>{item.companyName}</th>
            <th>{item.contactTitle}</th>
            <th>{item.address.street}</th>
            <th>{item.address.city} {item.address.country}</th>
            <th>{item.address.phone}</th>
        </tr>
        })}
      </tbody>
    </table>
  );
};

export default SuppliersTable;
