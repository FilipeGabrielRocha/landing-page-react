import styled from "styled-components";
import { Link } from "react-router-dom";
import imagemRight from "../../assets/image/bridge.jpg";
import imagemLeft from "../../assets/image/sky.jpg";
import bolinha1 from "../../assets/image/bolinha1.png";
import bolinha2 from "../../assets/image/bolinha2.png";
import tomatoes from "../../assets/image/tomatoes.jpg";
import landscape from "../../assets/image/landscape.jpg";
import plants from "../../assets/image/plants.jpg";
import flowers from "../../assets/image/flowers.jpg";

const About = () => {
  return (
    <Section>
      <Itens>
        <Iten>
          <H3>Title</H3>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eos
            quidem, praesentium, mollitia ipsum deleniti rerum fugit error saepe
            cum, perspiciatis natus. Fuga, iste veniam!
          </P>
          <Link>
            <A>Saiba mais</A>
          </Link>
        </Iten>
        <ImagemRight></ImagemRight>
      </Itens>
      <Itens>
        <ImagemLeft></ImagemLeft>
        <Iten>
          <H3>Title</H3>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eos
            quidem, praesentium, mollitia ipsum deleniti rerum fugit error saepe
            cum, perspiciatis natus. Fuga, iste veniam!
          </P>
          <Link>
            <A>Saiba mais</A>
          </Link>
        </Iten>
      </Itens>
      <ContainerBolinhas>
        <Servico>
          <Img src={bolinha1} alt="Bolinha 1" />
          <div>
            <Hh3>SEO</Hh3>
            <Paragrafo>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              illo dignissimos distinctio nesciunt atque ratione?
            </Paragrafo>
          </div>
        </Servico>
        <Servico>
          <Img src={bolinha2} alt="Bolinha 2" />
          <div>
            <Hh3>Landing Pages</Hh3>
            <Paragrafo>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              illo dignissimos distinctio nesciunt atque ratione?
            </Paragrafo>
          </div>
        </Servico>
      </ContainerBolinhas>
      <ContainerProjetos>
        <div>
          <Link to={"/"}>
            <Projetos src={tomatoes} alt="tomatoes"></Projetos>
          </Link>
        </div>
        <div>
          <Link to={"/"}>
            <Projetos src={landscape} alt="landscape"></Projetos>
          </Link>
        </div>
        <div>
          <Link to={"/"}>
            <Projetos src={plants} alt="plants"></Projetos>
          </Link>
        </div>
        <div>
          <Link to={"/"}>
            <Projetos src={flowers} alt="flowers"></Projetos>
          </Link>
        </div>
      </ContainerProjetos>
    </Section>
  );
};

// ABOUT

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const ImagemRight = styled.div`
  background: url(${imagemRight}) center center no-repeat;
  background-size: cover;
  width: 50%;
  height: 100%;
`;
const ImagemLeft = styled.div`
  background: url(${imagemLeft}) center center no-repeat;
  background-size: cover;
  width: 50%;
  height: 100%;
`;
const Itens = styled.div`
  display: flex;
`;
const Iten = styled.div`
  width: 50%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const H3 = styled.h3`
  font-weight: 700;
  font-size: 4rem;
`;
const P = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 30px 0px;
  text-align: justify;
`;
const A = styled.a`
  font-size: 1.6rem;
  align-self: flex-start;
  :hover {
    font-weight: 700;
  }
`;

// SERVICES

const ContainerBolinhas = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Servico = styled.div`
  padding: 70px 20px;
  width: 100%;

  :nth-child(1) {
    background-color: lightskyblue;
  }

  :nth-child(2) {
    background-color: lightpink;
  }
`;
const Img = styled.img`
  width: 250px;
  margin-bottom: 30px;
`;
const Hh3 = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
`;
const Paragrafo = styled.p`
  font-size: 2rem;
  font-weight: 400;
  max-width: 400px;
  margin: 20px auto 0px;
  line-height: 25px;
  text-align: justify;
`;

// PROJECTS

const ContainerProjetos = styled.div`
  display: flex;
`;
const Projetos = styled.img`
  width: 100%;
  height: 100%;
`;

export { About };
