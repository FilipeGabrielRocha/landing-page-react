// import { Link } from "react-router-dom";
import styled from "styled-components";
import bolinha1 from '../../assets/image/bolinha1.png'
import bolinha2 from '../../assets/image/bolinha2.png'

const Services = () => {
  return (
    <Section>
      <div>
        <img src={bolinha1} alt="Bolinha 1" />
        <div>
          <h3>SEO</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta illo
            dignissimos distinctio nesciunt atque ratione?
          </p>
        </div>
      </div>
      <div>
        <img src={bolinha2} alt="Bolinha 2"></img>
        <div>
          <h3>Landing Pages</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta illo
            dignissimos distinctio nesciunt atque ratione?
          </p>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export { Services };
