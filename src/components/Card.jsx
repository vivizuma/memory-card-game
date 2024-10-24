import "./Card.css";
// i can pass image urls to the img src

function Card(props) {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          props.onClick(props.name);
        }}
      >
        <div>
          <img src={props.img} alt={props.name} />
        </div>
        <div>{props.name}</div>
      </div>
    </>
  );
}

export default Card;
