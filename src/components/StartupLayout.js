import React, { useState } from "react";

//import { u } from "react-auth-kit";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
  AiOutlineAccountBook,
  AiOutlineProfile,
} from "react-icons/ai";
import { useLocation } from "react-router";
import { Link, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import FooterProfile from "./FooterProfile";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB, FaWpforms } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;



const StartupLayout = () => {
 
  return (
     <>Hello!
     <Outlet />
     <FooterProfile />
     </>
  );
};

export default StartupLayout;
