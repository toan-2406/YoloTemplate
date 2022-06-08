import React from "react";
import { useLocation, Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { loadCurrentItem } from "../../../../redux/ecommerce/ecommerceActions";

import {
    Menu,
} from "antd";

import navigation from "../../../../navigation/vertical";

const { SubMenu } = Menu;

export default function MenuItem(props) {
    const { onClose } = props;

    // Redux
    const products = useSelector(state => state.ecommerce.products)
    const customise = useSelector(state => state.customise)
    const dispatch = useDispatch()

    // Location
    const location = useLocation();
    const { pathname } = location;

    const splitLocation = pathname.split("/")

    // Menu
    const splitLocationUrl =
        splitLocation[splitLocation.length - 2] +
        "/" +
        splitLocation[splitLocation.length - 1];

    const menuItem = navigation.map((item, index) => {
        if (item.header) {
            return <Menu.ItemGroup key={index} title={item.header}></Menu.ItemGroup>;
        }

        if (item.children) {
            return (
                <SubMenu key={item.id} icon={item.icon} title={item.title}>
                    {item.children.map((childrens, index) => {
                        if (!childrens.children) {
                            const childrenNavLink = childrens.navLink.split("/");

                            return (
                                // Level 2
                                <Menu.Item
                                    key={childrens.id}
                                    className={
                                        splitLocationUrl ===
                                            childrenNavLink[childrenNavLink.length - 2] +
                                            "/" +
                                            childrenNavLink[childrenNavLink.length - 1]
                                            ? "ant-menu-item-selected"
                                            : "ant-menu-item-selected-in-active"
                                    }
                                    onClick={onClose}
                                >
                                    {
                                        childrens.id === 'product-detail' ? (
                                            <Link
                                                to={childrens.navLink}
                                                onClick={() => dispatch(loadCurrentItem(products[0]))}
                                            >
                                                {childrens.title}
                                            </Link>
                                        ) : (
                                            (childrens.id.split("-")[0]) === 'email' ? (
                                                <a href={childrens.navLink} target="_blank">{childrens.title}</a>
                                            ) : (
                                                <Link to={childrens.navLink}>{childrens.title}</Link>
                                            )
                                        )
                                    }
                                </Menu.Item>
                            );
                        } else {
                            return (
                                // Level 3
                                <SubMenu key={childrens.id} title={childrens.title}>
                                    {childrens.children.map((childItem, index) => {
                                        const childrenItemLink = childItem.navLink.split("/");

                                        return (
                                            <Menu.Item
                                                key={childItem.id}
                                                className={
                                                    splitLocationUrl ===
                                                        childrenItemLink[childrenItemLink.length - 2] +
                                                        "/" +
                                                        childrenItemLink[childrenItemLink.length - 1]
                                                        ? "ant-menu-item-selected"
                                                        : "ant-menu-item-selected-in-active"
                                                }
                                                onClick={onClose}
                                            >
                                                <Link to={childItem.navLink}>{childItem.title}</Link>
                                            </Menu.Item>
                                        );
                                    })}
                                </SubMenu>
                            );
                        }
                    })}
                </SubMenu>
            );
        } else {
            const itemNavLink = item.navLink.split("/");

            return (
                // Level 1
                <Menu.Item
                    key={item.id}
                    icon={item.icon}
                    onClick={onClose}
                    className={
                        splitLocation[splitLocation.length - 2] +
                            "/" +
                            splitLocation[splitLocation.length - 1] ===
                            itemNavLink[itemNavLink.length - 2] +
                            "/" +
                            itemNavLink[itemNavLink.length - 1]
                            ? "ant-menu-item-selected"
                            : "ant-menu-item-selected-in-active"
                    }
                >
                    <Link to={item.navLink}>{item.title}</Link>
                </Menu.Item>
            );
        }
    })

    return (
        <Menu
            mode="inline"
            defaultOpenKeys={[
                splitLocation.length === 5
                    ? splitLocation[splitLocation.length - 3]
                    : null,
                splitLocation[splitLocation.length - 2],
            ]}
            theme={customise.theme == "light" ? "light" : "dark"}
        >
            {menuItem}
        </Menu>
    );
};