/**
 * @file 主面板上的按钮
 */
import React from 'react';
import styled from 'styled-components';
import { GithubOutlined } from '@ant-design/icons';
import Icon from '../../SvgIcon';
import { Flex, Button } from 'antd';
import { useIntl } from '../../../hooks/useIntl';

const Container = styled(Flex)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
`;

const CommonButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 176px;
  height: 54px;
  color: var(--text-color);
  font-size: 1rem;

  @media (max-width: 900px) {
    width: 140px;
    height: 46px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 40px;
  }
`;

const IconCommonProps = {
  width: 20,
  height: 20,
  fill: 'var(--text-color)',
};

const PanelButton = React.memo(() => {
  const {
    Messages: { GITHUB, HELP_DOCUMENT, GITHUB_URL, HELP_URL },
  } = useIntl();

  const handleOpenLink = (linkUrl: string) => {
    if (!linkUrl) return;
    window.open(linkUrl, '_blank', 'noopener=yes,noreferrer=yes');
  };

  return (
    <Container>
      <CommonButton
        icon={<GithubOutlined />}
        type="primary"
        onClick={() => handleOpenLink(GITHUB_URL)}
      >
        {GITHUB}
      </CommonButton>
      <CommonButton
        icon={<Icon iconType="HelpDocumentSvg" {...IconCommonProps} />}
        onClick={() => handleOpenLink(HELP_URL)}
      >
        {HELP_DOCUMENT}
      </CommonButton>
    </Container>
  );
});

export default PanelButton;
