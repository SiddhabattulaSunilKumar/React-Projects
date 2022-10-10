const Card = (props) => {
  return (
    <div className="row justify-content-center">    
      <div className="card text-center  text-bg-light w-75 ">
      <div className="card-header">{props.title}</div>
        <div className="card-body">
          <h5 className="card-title">{props.children}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
