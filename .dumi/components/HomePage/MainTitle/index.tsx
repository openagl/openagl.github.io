import React from 'react';
import styled from 'styled-components';
import { useIntl } from '../../../hooks/useIntl';
import { Flex } from 'antd';

const TitleContainer = styled(Flex)`
  font-size: 50px;
  color: var(--text-color);
  text-align: center;
  font-weight: 500;
  align-items: center;

  @media (max-width: 900px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-top: 16px;
  }
`;

const PrefixText = styled.div`
  color: rgba(67, 155, 255, 1);
`;

const Text = styled.div`
  color: var(--text-color);
`;

const Description = styled.div`
  font-size: 18px;
  opacity: 0.45;
  color: var(--text-color);
  text-align: center;

  @media (max-width: 900px), (max-width: 480px) {
    margin-top: 8px;
  }
`;

const MainTitle = React.memo(() => {
  const {
    Messages: { PRIMARY_KEY, PRIMARY_TITLE, PRIMARY_DESCRIPTION },
  } = useIntl();
  return (
    <>
      <Flex justify="center">
        <TitleContainer justify="center">
          <PrefixText>{PRIMARY_KEY}</PrefixText>
          <Text>{`·`}</Text>
          <Text style={{ textAlign: 'left' }}>{PRIMARY_TITLE}</Text>
        </TitleContainer>
      </Flex>
      <Description>{PRIMARY_DESCRIPTION}</Description>
    </>
  );
});

export default MainTitle;
