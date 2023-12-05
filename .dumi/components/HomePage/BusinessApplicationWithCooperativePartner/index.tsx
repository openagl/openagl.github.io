import React, { useState } from 'react';
import styled from 'styled-components';
import { Tabs, Typography } from 'antd';
import { useIntl } from '../../../hooks/useIntl';
import { Flex } from 'antd';

const { Text, Title, Paragraph } = Typography;

const FlexStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

const Circle = styled.div`
  display: inline-block;
  margin: 0 0.3rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  border: 0.15rem solid var(--color-circle);
  flex-shrink: 0;
`;

// 标题
const PrimaryTitle = styled(Title)`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 4rem;

  @media (max-width: 900px), (max-width: 480px) {
    margin-top: 2rem;
  }
`;

const BusinessContent = styled.div`
  position: relative;

  .openagl-tabs {
    background-image: linear-gradient(
      113deg,
      rgba(255, 255, 255, 0.06) 0%,
      rgba(255, 255, 255, 0.04) 100%
    );
    border-radius: 16px;
    margin: 0 auto;

    @media (max-width: 900px) {
      width: calc(100% - 40px);
    }

    @media (max-width: 480px) {
      width: calc(100% - 20px);
    }
  }

  &:after {
    position: absolute;
    top: -20px;
    right: -15px;
    z-index: 999;
    width: 86px;
    height: 63px;
    content: '';
    background: url('https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*vAHuSbAD7jQAAAAAAAAAAAAADtmcAQ/original')
      no-repeat;
    background-size: 100%;

    @media (max-width: 900px) {
      right: 5px;
    }

    @media (max-width: 480px) {
      right: -5px;
    }
  }

  @media (max-width: 900px), (max-width: 480px) {
    margin: 12px 0;
  }
`;

const ItemContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  padding: 24px 12px;
  gap: 40px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 10px;
    height: auto;
  }
`;

const CaseLabel = styled.div`
  font-size: 1rem;
  opacity: 0.95;
`;

const ImgContainer = styled(Flex)`
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  padding: 12px;
  align-items: center;
  min-height: 346px;
  @media (max-width: 900px), (max-width: 480px) {
    min-height: auto;
  }
`;

const TextContainer = styled(FlexStyles)`
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  color: var(--text-color);
  text-align: left;

  & > h2 {
    font-weight: 500;
    font-size: 1rem;
    opacity: 0.95;
  }

  & > ul {
    overflow: auto;
  }

  & > ul > li {
    opacity: 0.8;
    font-size: 14px;

    @media (max-width: 900px), (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const Content = styled.div`
  color: #fff;
  padding: 0 60px;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.95;
  font-size: 1rem;
  color: var(--text-color);
`;

const LogoImgContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  padding: 2px;
  background-color: var(--text-color);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BusinessApplicationWithCooperativePartner = React.memo(() => {
  const {
    Messages: {
      BUSINESS_APPLICATION_TITLE,
      BUSINESS_APPLICATION_DATA,
      COOPERATOR_TITLE,
      COOPERATOR_DATA,
    },
  } = useIntl();

  const [activeKey, setActiveKey] = useState('tab0');

  const items = BUSINESS_APPLICATION_DATA.map((item, index) => ({
    key: `tab${index}`,
    label: <CaseLabel>{item.title}</CaseLabel>,
    children: (
      <ItemContent>
        <ImgContainer>
          <img style={{ width: '100%' }} src={item.imgUrl} />
        </ImgContainer>
        <Description>
          {item?.children?.map((cItem) => (
            <TextContainer key={cItem.title}>
              <Title level={5}>
                <Circle />
                {cItem.title}
              </Title>
              {/* <ul> */}
              {cItem?.children?.map((textItem) => (
                <Text key={textItem}>• {textItem}</Text>
              ))}
              {/* </ul> */}
            </TextContainer>
          ))}
        </Description>
      </ItemContent>
    ),
  }));

  return (
    <Container>
      {/* 业务应用 */}
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <PrimaryTitle level={3}>{BUSINESS_APPLICATION_TITLE}</PrimaryTitle>
        <BusinessContent>
          <Tabs
            centered
            activeKey={activeKey}
            items={items}
            onChange={(key) => setActiveKey(key)}
          />
        </BusinessContent>

        {/* 合作伙伴 */}
        <PrimaryTitle level={3}>{COOPERATOR_TITLE}</PrimaryTitle>
        <Content>
          {COOPERATOR_DATA.map((item) => (
            <Item>
              {!item.imgHidden && item.imgUrl && (
                <LogoImgContainer>
                  <img
                    style={{ width: '100%', height: '100%' }}
                    src={item.imgUrl}
                  />
                </LogoImgContainer>
              )}
              <Text>{item.title}</Text>
            </Item>
          ))}
        </Content>
      </div>
    </Container>
  );
});

export default BusinessApplicationWithCooperativePartner;
