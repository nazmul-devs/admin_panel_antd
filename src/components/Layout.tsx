import {
  LogoutOutlined,
  PlusCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { ConfigProvider, Dropdown, Input, message, theme } from 'antd';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { webRoutes } from '../route/RouteLinks';
import sidebarLinks from '../route/SidebarLinks';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const SearchInput = () => {
    const { token } = theme.useToken();
    return (
      <div
        key='SearchOutlined'
        aria-hidden
        style={{
          display: 'flex',
          alignItems: 'center',
          marginInlineEnd: 24,
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <Input
          style={{
            borderRadius: 4,
            marginInlineEnd: 12,
            backgroundColor: token.colorBgTextHover,
          }}
          prefix={
            <SearchOutlined
              style={{
                color: token.colorTextLightSolid,
              }}
            />
          }
          placeholder='Search plan'
          bordered={false}
        />
        <PlusCircleFilled
          style={{
            color: token.colorPrimary,
            fontSize: 24,
          }}
        />
      </div>
    );
  };

  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: false,
  });

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
  //   const [num, setNum] = useState(10);
  if (typeof document === 'undefined') {
    return <div />;
  }
  return (
    <div
      id='test-pro-layout'
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('test-pro-layout') || document.body;
          }}
        >
          <ProLayout
            prefixCls='my-prefix'
            {...sidebarLinks}
            // location={{
            //   pathname,
            // }}
            location={location}
            onMenuHeaderClick={() => navigate(webRoutes.dashboard)}
            menuItemRender={(item, dom) => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  item.path && navigate(item.path);
                }}
                href={item.path}
              >
                {dom}
              </a>
            )}
            token={{
              header: {
                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
              },
            }}
            siderMenuType='sub'
            menu={{
              collapsedShowGroupTitle: true,
            }}
            menuFooterRender={(props) => {
              if (props?.collapsed) return undefined;
              return (
                <div
                  style={{
                    textAlign: 'center',
                    paddingBlockStart: 12,
                  }}
                >
                  <div>TRABILL OTA</div>
                  <div>M360ICT</div>
                </div>
              );
            }}
            // _______________________________Header Setting_______________________________

            avatarProps={{
              src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: 'Name',
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: 'logout',
                          icon: <LogoutOutlined />,
                          label: 'sign out',
                          onClick: () => {
                            message.info('LOG OUT');
                          },
                        },
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}
            actionsRender={(props) => {
              if (props.isMobile) return [];
              if (typeof window === 'undefined') return [];
              return [
                props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                  <SearchInput />
                ) : undefined,
              ];
            }}
            headerTitleRender={(logo, title, _) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (typeof window === 'undefined') return defaultDom;
              if (document.body.clientWidth < 1400) {
                return defaultDom;
              }
              if (_.isMobile) return defaultDom;
              return <>{defaultDom}</>;
            }}
            {...settings}
          >
            <Outlet />

            <SettingDrawer
              pathname={pathname}
              hideCopyButton
              hideHintAlert
              enableDarkTheme
              getContainer={(e: any) => {
                if (typeof window === 'undefined') return e;
                return document.getElementById('test-pro-layout');
              }}
              settings={settings}
              onSettingChange={(changeSetting) => {
                setSetting(changeSetting);
              }}
              disableUrlParams={false}
            />
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};

export default Layout;
