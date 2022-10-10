import Card from "../UI/Card";

const ApplicantList = (props) => {

  const newUserDetails=props.NewUserDetalsSubmit;
 

  return (
    <Card title="Applicants Deatils">
    <table className="table table-success table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Country</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Sunil</th>
      <td>32</td>
      <td>siddhabattula.sunil@gmail.com</td>
      <td>UK</td>
      <td>07880227892</td>
    </tr>
    <tr>
      <th>Sowjanya</th>
      <td>32</td>
      <td>manugulasowjanya@gmail.com</td>
      <td>UK</td>
      <td>07880227892</td>
    </tr>
   {newUserDetails.map((user)=>(
      <tr key ={user.id}>
      <th>{user.userName}</th>
      <td>{user.userAge}</td>
      <td>{user.userEmail}</td>      
      <td>{user.selectCountry}</td>
      <td>{user.userPhoneNo}</td>
    </tr>
    ))}
  </tbody>
</table>
    </Card>
  );
};
export default ApplicantList;
