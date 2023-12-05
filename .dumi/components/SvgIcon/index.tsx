import React from 'react';
import BranchSvg from './BranchSvg';
import CollectSvg from './CollectSvg';
import HelpDocumentSvg from './HelpDocumentSvg';
import LatestActivity from './LatestActivity';
import LatestRelease from './LatestRelease';
import OpenPublishSvg from './OpenPublishSvg';
import LanguageSwitchSvg from './LanguageSwitchSvg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const svgIconMapCfg = {
  BranchSvg,
  CollectSvg,
  HelpDocumentSvg,
  LatestActivity,
  LatestRelease,
  OpenPublishSvg,
  LanguageSwitchSvg,
};

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  iconType?: keyof typeof svgIconMapCfg;
  cursor?: React.CSSProperties['cursor'];
}

const SvgIcon = (props: SvgIconProps) => {
  const { iconType = '', ...restSvgProps } = props;
  if (!iconType) return '-';
  const SvgComponent = svgIconMapCfg[iconType];
  return (
    <Container>
      <SvgComponent {...restSvgProps} />
    </Container>
  );
};

export default SvgIcon;
