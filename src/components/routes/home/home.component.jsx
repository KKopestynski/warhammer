import Directory from "../../directory/directory-component";
import { Outlet } from "react-router-dom";
const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    subtitle: "Shop Now",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    subtitle: "Shop Now",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    subtitle: "Shop Now",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    subtitle: "Shop Now",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    subtitle: "Shop Now",
  },
];

const Home = () => {
  return (
    <div>
      <Directory categories={categories} />
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
