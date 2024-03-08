require("dotenv").config();

function ApiCall() {
  const [cards, setCards] = useState(null);
  // example url
  //https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://www.google.com",
      headers: {
        url: "https://api.artic.edu/api/v1/artworks/129884",
      },
    };
  });

  console.log(process);
  console.log(process.env);
  console.log(process.env.PVT_VARIABLE);
  console.log(process.env.API_KEY);

  return <div> api called</div>;
}

export default ApiCall;
