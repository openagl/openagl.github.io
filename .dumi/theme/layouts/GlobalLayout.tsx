import { ConfigProvider, Result, theme, Modal } from 'antd';
import { useOutlet, usePrefersColor } from 'dumi';
import React, { useState, useEffect } from 'react';
import { useIntl } from '../../hooks/useIntl';
import { useMobile } from '../../hooks/useMobile';

const GlobalLayout: React.FC = () => {
  const { intl } = useIntl();
  const [color] = usePrefersColor();
  const { isMobile } = useMobile();
  const [isBtnVisible, setIsBtnVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const outlet = useOutlet();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsBtnVisible(true);
          } else {
            setIsBtnVisible(false);
          }
        });
      },
      { threshold: 0.5 },
    );

    const element = document.getElementsByClassName(
      'dumi-default-header-menu-btn',
    )?.[0];
    if (element) {
      setTimeout(() => {
        observer.observe(element);
      }, 1000);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isMobile) setShowModal(!isBtnVisible);
  }, [isMobile, isBtnVisible]);

  return (
    <ConfigProvider
      prefixCls="openagl"
      theme={{
        algorithm:
          color === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        components: {
          Button: {
            colorBgContainer: color === 'dark' ? '#0f1730' : '#fff',
            colorBorder: color === 'dark' ? '#4b5264' : '#fff',
          },
        },
      }}
    >
      <Modal
        open={showModal}
        footer={null}
        onCancel={() => setShowModal(false)}
      >
        <Result
          status="warning"
          title={intl('兼容性报告', 'Compatibility report')}
          subTitle={intl(
            '你的浏览器可能无法完整显示内容，请尝试更换浏览器访问。你仍可在关闭此窗口后继续访问，但可能会影响阅读体验。',
            'Your browser may not be able to display the full content. Please try to change your browser. You can still continue to access after closing this window, but it may affect the reading experience.',
          )}
        />
      </Modal>
      {outlet}
    </ConfigProvider>
  );
};

export default GlobalLayout;
