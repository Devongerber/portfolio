/**
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  All of the routes for the Material Kit 2 PRO React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import CoworkingPage from "layouts/pages/landing-pages/coworking";
import Rental from "layouts/pages/landing-pages/rental";


// Account

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import PricingSection from "layouts/sections/page-sections/pricing";
import FaqSection from "layouts/sections/page-sections/faq";
import BlogPosts from "layouts/sections/page-sections/blog-posts";
import Testimonials from "layouts/sections/page-sections/testimonials";
import Teams from "layouts/sections/page-sections/teams";
import Stats from "layouts/sections/page-sections/stats";
import Cta from "layouts/sections/page-sections/cta";
import Applications from "layouts/sections/page-sections/applications";
import LogoAreas from "layouts/sections/page-sections/logo-areas";
import Footers from "layouts/sections/page-sections/footers";
import GeneralCards from "layouts/sections/page-sections/general-cards";
import ContentSections from "layouts/sections/page-sections/content-sections";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import BlogPost1 from "pages/Blogs/blog-post-1";
import BlogPost2 from "pages/Blogs/blog-post-2";
import BlogPost3 from "pages/Blogs/blog-post-3";


const routes = [
  {
    name: "Product",
    icon: <Icon>dashboard</Icon>,
//    columns: 1,
//    rowsPerColumn: 2,
    collapse: [
      {
            name: "coworking",
            route: "/pages/landing-pages/coworking",
            component: <CoworkingPage />,
          },
          {
            name: "rental",
            route: "/pages/landing-pages/rental",
            component: <Rental />,
          },
        ],
      },
  {
    name: "Learn More",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "page sections",
        description: "See all 55 sections",
        dropdown: true,
        collapse: [
          {
            name: "page headers",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "blog article",
            route: "/pages/Blogs/blog-post-1",
            component: <BlogPost1 />,
          },
          {
            name: "blog article",
            route: "/pages/Blogs/blog-post-2",
            component: <BlogPost2 />,
          },
          {
            name: "blog article",
            route: "/pages/Blogs/blog-post-3",
            component: <BlogPost3 />,
          },
          {
            name: "features",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "pricing",
            route: "/sections/page-sections/pricing",
            component: <PricingSection />,
          },
          {
            name: "faq",
            route: "/sections/page-sections/faq",
            component: <FaqSection />,
          },
          {
            name: "blog posts",
            route: "/sections/page-sections/blog-posts",
            component: <BlogPosts />,
          },
          {
            name: "testimonials",
            route: "/sections/page-sections/testimonials",
            component: <Testimonials />,
          },
          {
            name: "teams",
            route: "/sections/page-sections/teams",
            component: <Teams />,
          },
          {
            name: "stats",
            route: "/sections/page-sections/stats",
            component: <Stats />,
          },
          {
            name: "call to actions",
            route: "/sections/page-sections/cta",
            component: <Cta />,
          },
          {
            name: "applications",
            route: "/sections/page-sections/applications",
            component: <Applications />,
          },
          {
            name: "logo areas",
            route: "/sections/page-sections/logo-areas",
            component: <LogoAreas />,
          },
          {
            name: "footers",
            route: "/sections/page-sections/footers",
            component: <Footers />,
          },
          {
            name: "general cards",
            route: "/sections/page-sections/general-cards",
            component: <GeneralCards />,
          },
          {
            name: "content sections",
            route: "/sections/page-sections/content-sections",
            component: <ContentSections />,
          },
        ],
      },
      {
        name: "navigation",
        description: "See all 3 navigations",
        dropdown: true,
        collapse: [
          {
            name: "navbars",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "nav tabs",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "pagination",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
      },
    ],
  },
];

export default routes;
