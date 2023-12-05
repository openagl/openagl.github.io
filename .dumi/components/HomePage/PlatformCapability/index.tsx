import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { useIntl } from '../../../hooks/useIntl';

const { Title, Text } = Typography;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Flex)`
  flex-direction: column;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 4rem;

  @media (max-width: 900px), (max-width: 480px) {
    padding: 0 2rem;
  }
`;

// 标题
const PrimaryTitle = styled(Title)`
  text-align: center;
`;

const CardContainer = styled.div<{ minCardWidth?: number }>`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.minCardWidth ?? 100}px, 1fr)
  );
  justify-items: center;
  width: 100%;
`;

const Card = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 225px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    134deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border-radius: 16px;
  padding: 24px;

  @media (max-width: 900px), (max-width: 480px) {
    border-radius: 8px;
    height: 180px;
  }
`;

const ContentTitle = styled(Title)`
  margin-top: 1rem;
  text-align: center;
`;

const Description = styled(Text)`
  opacity: 0.45;
  color: var(--text-color);
  text-align: center;
  margin-top: 0.5rem;
`;

const PlatformCapability = React.memo(() => {
  const {
    Messages: {
      TECHNICAL_FEATURES_TITLE,
      TECHNICAL_FEATURES_DATA,
      TECHNICAL_FEATURES_STYLE,
    },
  } = useIntl();

  return (
    <Container>
      <Content>
        <PrimaryTitle level={3}>{TECHNICAL_FEATURES_TITLE}</PrimaryTitle>
        <CardContainer minCardWidth={TECHNICAL_FEATURES_STYLE?.minCardWidth}>
          {TECHNICAL_FEATURES_DATA.map((item) => (
            <Card key={item.title}>
              <IconContainer style={item.imgStyle}>
                <img
                  style={{ width: '100%', height: '100%' }}
                  src={item.imgUrl}
                />
              </IconContainer>
              <ContentTitle level={4}>{item.title}</ContentTitle>
              <Description>{item.description}</Description>
            </Card>
          ))}
        </CardContainer>
      </Content>
    </Container>
  );
});

export default PlatformCapability;
