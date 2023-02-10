// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-3.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Nalapod",
    image: logoCT,
    route: "/landing-page",
  },
  socials: [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/devon-gerber/",
    },
  ],
  menus: [
//    {
//      name: "company",
//      items: [
//        { name: "about us", href: "https://www.creative-tim.com/presentation" },
//        { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
//        { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
//        { name: "blog", href: "https://www.creative-tim.com/blog" },
//      ],
//    },
//    {
//      name: "resources",
//      items: [
//        { name: "illustrations", href: "https://iradesign.io/" },
//        { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
//        { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
//      ],
//    },
//    {
//      name: "help & support",
//      items: [
//        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
//        { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
//        { name: "custom development", href: "https://services.creative-tim.com/" },
//        { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
//      ],
//    },

  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Devon Gerber
      </MKTypography>
      .
    </MKTypography>
  ),
};
