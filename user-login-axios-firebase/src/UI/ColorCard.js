const ColorCard = (props) => {
  return (
    <div className="row justify-content-center" style={{marginTop:"10%"}}>
      <div className="card text-center  w-50 text-bg-dark">
        <div className="card-header"><h2>{props.title}</h2></div>
        <div className="card-body">
          <h5 className="card-title">{props.children}</h5>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
