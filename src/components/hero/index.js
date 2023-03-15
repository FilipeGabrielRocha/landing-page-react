import styled from "styled-components";
import backgroundLemons from '../../assets/image/lemons.jpg'

const Hero = () => {
  return (
    <Section>
      <H2>We make cool things</H2>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 89vh;
  background: url(${backgroundLemons}) center center no-repeat;
  background-size: cover;
`;

const H2 = styled.h2`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 4rem;
`;

export { Hero };
