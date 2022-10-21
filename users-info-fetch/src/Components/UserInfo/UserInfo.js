const UserInfo = (props) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {props.onUsersListChaange.map((usersDet) => (
        <div key={usersDet.id}>
          <div className="col">
            <div className="card">
              <img
                src={usersDet.imageURL}
                className="card-img-top"
                alt={usersDet.imageURL}
              />
              <div className="card-body">
                <h3 className="card-title">{usersDet.fullName}</h3>
                <p>First Name : {usersDet.firstName}</p>
                <p>Last Name : {usersDet.lastName}</p>
                <p>Email : {usersDet.emailId}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
