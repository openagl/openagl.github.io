/**
 * @file 页脚内容
 */
import React from 'react';
import styled from 'styled-components';
import QRCode from './QRCode';
import { useIntl } from '../../../hooks/useIntl';
import { Flex, Button } from 'antd';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-position: center;

  /* 暗黑主题背景 */
  padding: 0 60px;

  /* 白色主题背景 */
  /* background: '#01132B'; */

  @media (max-width: 900px), (max-width: 480px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

// 放置关于我们联系方式的容器
const Content = styled.div`
  padding: 40px 0;
  max-width: 1200px;
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 900px), (max-width: 480px) {
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    align-items: start;
  }
`;

const ContentItem = styled.div`
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  color: var(--text-color);

  & > :first-child {
    font-size: 20px;
    opacity: 0.95;

    @media (max-width: 900px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  & > :last-child {
    color: rgba(255, 255, 255, 0.65);

    @media (max-width: 900px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const FooterPanel = React.memo(() => {
  const {
    Messages: { ABOUT_US_CONFIG, OR_CODE_CONFIG_TITLE, OR_CODE_CONFIG_URL },
  } = useIntl();

  return (
    <Container>
      {/* 关于我们 */}
      <Content>
        {ABOUT_US_CONFIG.map(
          (item) =>
            !item.hidden && (
              <ContentItem key={item.title}>
                <span>{item.title}</span>
                <a
                  onClick={() =>
                    window.open(
                      item?.linkUrl,
                      '_blank',
                      'noopener=yes,noreferrer=yes',
                    )
                  }
                >
                  <Flex gap={4} align="center">
                    <img src={item.imgUrl} />
                    <span>{item?.description}</span>
                  </Flex>
                </a>
              </ContentItem>
            ),
        )}
        <QRCode title={OR_CODE_CONFIG_TITLE} imgUrl={OR_CODE_CONFIG_URL} />
      </Content>
    </Container>
  );
});

export default FooterPanel;
