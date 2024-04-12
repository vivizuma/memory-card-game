import "./Card.css";
// i can pass image urls to the img src

function Card(props) {
  return (
    <>
      <div className="card">
        {props.img}
        image here
        <img src="" alt="" />
        <p>
          {props.name}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam harum
          porro deserunt corporis necessitatibus sint quo minus iste vitae
          explicabo.
        </p>
      </div>
    </>
  );
}

export default Card;
