import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card title="Users List">
      <ul className="list-group">
        {props.usersList.map((user) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={user.id}>
            {user.userName}
            <span className="badge bg-primary rounded-pill">
              {user.userAge}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
