import { Suspense, useEffect } from "react";
// Router
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
    useHistory,
} from "react-router-dom";

// Routes
import { Routes } from "./routes";

// Layouts
import HorizontalLayout from "../layout/HorizontalLayout";
import FullLayout from "../layout/FullLayout";

// Components
import Analytics from "../view/main/dashboard/analytics";
import Error404 from "../view/pages/errors/404";

//axios
import {funcLogin} from "../axiosClient/login";

export default function Router() {
    // Location
    const location = useHistory()
      //localStorage Login
  const userInfo = JSON.parse(localStorage.getItem("UserName"));


    // Url Check
    useEffect(() => {
        funcLogin("ADMIN", "123456");
        document.querySelector("html").setAttribute("dir", "ltr");
    }, [])

    // Default Layout
    const DefaultLayout = "FullLayout"; // FullLayout or VerticalLayout

    // All of the available layouts
    const Layouts = {  HorizontalLayout, FullLayout };

    // Return Filtered Array of Routes & Paths
    const LayoutRoutesAndPaths = (layout) => {
        const LayoutRoutes = [];
        const LayoutPaths = [];
        if (Routes) {
            // Checks if Route layout or Default layout matches current layout
            Routes.filter(route => (route.layout === layout) && (
                LayoutRoutes.push(route),
                LayoutPaths.push(route.path)
            ));
        }

        return { LayoutRoutes, LayoutPaths };
    };

    // Return Route to Render
    const ResolveRoutes = () => {
        return Object.keys(Layouts).map((layout, index) => {
            const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);

            let LayoutTag;
            if (DefaultLayout == "HorizontalLayout") {
                    LayoutTag = Layouts[layout];
            } else {
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
                {
                    userInfo === "ADMIN" ? (
                        <Route
                    exact
                    path={'/'}
                    render={() => {
                        return (
                            DefaultLayout == "FullLayout" && (
                                <Layouts.HorizontalLayout>
                                    <Analytics />
                                </Layouts.HorizontalLayout>
                            ) 
                        )
                    }}
                />
                    ) : (
                        <Redirect to="/login" />
                    )
                }

                {/* NotFound */}
                <Route path='*'>
                    <Error404 />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};