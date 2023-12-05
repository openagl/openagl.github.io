import React from 'react';
import styled from 'styled-components';
import GitHub from './GitHub';
import MainTitle from './MainTitle';
import PanelButton from './PanelButton';
import Announcement from './Announcement';
import PlatformCapability from './PlatformCapability';
import BusinessApplicationWithCooperativePartner from './BusinessApplicationWithCooperativePartner';
import FooterPanel from './FooterPanel';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const ContentPadding = styled.div`
  padding: 0 60px;

  @media (max-width: 900px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const TopContent = styled(ContentPadding)`
  background: url('https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*ZWMARpRH9yIAAAAAAAAAAAAADtmcAQ/original')
    no-repeat;
  background-size: cover;
  background-position: bottom;
`;

const BottomContent = styled(ContentPadding)`
  background: url('https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*xVhwR6ie-YIAAAAAAAAAAAAADtmcAQ/original')
    no-repeat;
  background-size: cover;
`;

const HomePage = React.memo(() => {
  return (
    <Container>
      <TopContent>
        <GitHub />
        <MainTitle />
        <PanelButton />
        <Announcement />

        {/* 技术特性 */}
        <PlatformCapability />
      </TopContent>

      <BottomContent>
        {/* 业务应用 & 合作伙伴 */}
        <BusinessApplicationWithCooperativePartner />

        {/* 关于我们 & 站点备案信息 */}
        <FooterPanel />
      </BottomContent>
    </Container>
  );
});

export default HomePage;
