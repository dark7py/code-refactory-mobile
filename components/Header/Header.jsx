import { StyleSheet, View } from "react-native";

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
// import useStore from "@/store/store";
import { HomeIcon, TimeIcon, IconWrapper } from "../../icons";
// import styles from "./styles.module.css";
import { LogoutIcon } from "../../icons/LogoutIcon";
import RegisterIcon from "../../icons/RegisterIcon";

const tabs = [
  {
    path: "/main",
    icon: <HomeIcon />,
    title: "Главная",
    id: "1",
  },
  {
    path: "/history",
    icon: <TimeIcon />,
    title: "История",
    id: "2",
  },
];

export const Header = () => {
  // const { modal, setModal, setNotificationMessage } = useStore();
  // const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("/main");

  useEffect(() => {
    setSelectedTab(location.pathname);
    // setNotificationMessage(messageApi);
  }, [location]);

  const handleOnTabClick = (tab) => {
    return () => {
      navigate(tab);
    };
  };
  // function handleOnLoginClick(): void {
  //   setModal(<LoginModalComponent />);
  // }

  // function handleOnRegisterClick(): void {
  //   setModal(<RegistrationModalComponent />);
  // }

  function handleLogoutClick() {
    localStorage.removeItem("token");
    navigate("/main");
  }

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerItems}>
          {tabs.map((tab) => {
            const isTabSelected = selectedTab === tab.path;

            return (
              <div
                // className={`cursor-pointer font-bold ${
                //   isTabSelected ? "" : ` ${styles.tabSelected}`
                // }`}
                key={tab.id}
                onClick={handleOnTabClick(tab.path)}
              >
                <IconWrapper>
                  {tab.icon} <div className="sm:hidden">{tab.title}</div>
                </IconWrapper>
              </div>
            );
          })}
        </View>
      </View>
      <Outlet />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerItems: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
