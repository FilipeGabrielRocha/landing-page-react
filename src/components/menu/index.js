import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Header>
      <Link to={"/"}>
        <H1>Agência XYZ</H1>
      </Link>
      <nav>
        <Ul>
          <li><Link to={"#about"}><A>About</A></Link></li>
          <li><Link to={"/"}><A>Services</A></Link></li>
          <li><Link to={"/"}><A>Projects</A></Link></li>
          <li><Link to={"/"}><A>Contact</A></Link></li>
        </Ul>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #fff;
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  transition: .3s ease-in-out;

  :hover {
    color: coral;
  }
`;

const Ul = styled.nav`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const A = styled.a`
  padding: 10px 30px;
  font-size: 2rem;
  font-weight: 500;
  border-radius: 50px;
  margin: 5px;
  transition: .3s ease-in-out;

:hover {
  color: #ffff;
  background-color: coral;
}
`;

export { Menu };
