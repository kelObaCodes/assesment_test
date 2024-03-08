import React from 'react';
import styled from 'styled-components';
import Image from "next/image";

import Deskptop from "../../public/images/desktop.png";
import Mobile from "../../public/images/mobile.png";
import background from "../../public/images/background.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
    border-radius: 90px;
    padding: 80px 0 20px 10px;
    overflow: hidden;
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
position: relative;
  .mobile-device {
    position: absolute;
    left: -88px;
    top: 200px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  padding: 30px;
  font-weight: 300;
  width: 300px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  .material-symbols-outlined{
    font-size: 15px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: white;
  margin-bottom: 10px;
  width: 230px;
  border: 1px solid #f2f2f2;
height: 57px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const ButtonText = styled.span`
  margin-right: auto;
  font-weight: 200;
`;

const PlusIcon = styled.span`
  margin-left: auto;
  background: #F2F2F2;
  padding: 10px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  font-weight: 100;
  justify-content: center;

`;

const SecondSection = styled.div`
  width: 100%;
  padding: 20px;
  background-image: url(${background.src});
  background-position-x: -19px;
    background-repeat: repeat;
  text-align: center;
`;

const BigText = styled.h1`
  font-size: 156px;
  color: #FE4A22;
`;

const MyComponent: React.FC = () => {
  return (
    <Container>
      <Section>
        <Column>
          <Title>Turning data into real actions and ideas.</Title>
          <ButtonContainer>
            <Button>
              <ButtonText>Instant insights</ButtonText>
              <PlusIcon><span className="material-symbols-outlined">
add
</span></PlusIcon>
            </Button>
            <Button>
              <ButtonText>AI technology</ButtonText>
              <PlusIcon><span className="material-symbols-outlined">
add
</span></PlusIcon>
            </Button>
            <Button>
              <ButtonText>Easy integration</ButtonText>
              <PlusIcon><span className="material-symbols-outlined">
add
</span></PlusIcon>
            </Button>
          </ButtonContainer>
        </Column>
        <Column>
        <Image src={Deskptop} alt="Bar code" width={590} />
        <Image src={Mobile} alt="Bar code"
        className='mobile-device'
        width={190} />

        </Column>
      </Section>
      <SecondSection>
        <BigText>Moniepoint</BigText>
      </SecondSection>
    </Container>
  );
};

export default MyComponent;
