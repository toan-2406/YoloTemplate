import { Suspense, useEffect, useState } from "react";
// Redux
import { useDispatch } from "react-redux";
// Router
import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom";
//axios Client
import { funcLogin } from "../axiosClient/login";
// Routes
import { Routes } from "./routes";

// Layouts
import VerticalLayout from "../layout/VerticalLayout";
import FullLayout from "../layout/FullLayout";

// Components
import Analytics from "../view/main/dashboard/analytics";
import Error404 from "../view/pages/errors/404";
import Login from "../view/pages/login";

export default function Router() {
  const dispatch = useDispatch();

  //localStorage Login
  const userInfo = JSON.parse(localStorage.getItem("UserName"));

  console.log(userInfo);

  // Location
  const location = useHistory();

  // ltr direction

  useEffect(() => {
    document.querySelector("html").setAttribute("dir", "ltr");
  }, []);
  // Login
  useEffect(() => {
    funcLogin("ADMN", "123456");
  }, []);
  // Default Layout
  const DefaultLayout = "VerticalLayout"; // FullLayout or VerticalLayout
  // All of the available layouts
  const Layouts = { VerticalLayout, FullLayout };
  // Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = (layout) => {
    const LayoutRoutes = [];
    const LayoutPaths = [];
    if (Routes) {
      // Checks if Route layout or Default layout matches current layout
      Routes.filter(
        (route) =>
          route.layout === layout &&
          (LayoutRoutes.push(route), LayoutPaths.push(route.path))
      );
    }

    return { LayoutRoutes, LayoutPaths };
  };

  // Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);
      let LayoutTag;
      if (DefaultLayout == "VerticalLayout") {
        LayoutTag = Layouts[layout];
      }
      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag>
            <Switch>
              {LayoutRoutes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    render={(props) => {
                      return (
                        <Suspense fallback={null}>
                          <route.component {...props} />
                        </Suspense>
                      );
                    }}
                  />
                );
              })}
            </Switch>
          </LayoutTag>
        </Route>
      );
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        {ResolveRoutes()}
        {/* Home Page */}
        {userInfo === "ADMIN" ? (
          <Route
            exact
            path={"/"}
            render={() => {
              return (
                DefaultLayout == "VerticalLayout" && (
                  <Layouts.VerticalLayout>
                    <Analytics />
                  </Layouts.VerticalLayout>
                )
              );
            }}
          />
        ) : (
            <Redirect to={"/login"} />
        )}

        {/* NotFound */}
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
