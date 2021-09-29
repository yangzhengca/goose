/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import { Link as Linka } from "components/link";
import data from "./footer.data";
import FooterLogo from "assets/logo.png";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Linka path="/">
            <Image src={FooterLogo} alt="logo" sx={styles.footer.image} />
          </Linka>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link
                  // path={item.path}
                  to={item.path}
                  key={i}
                  label={item.label}
                  sx={styles.footer.link}

                  // activeClass="active"
                  // to={menuItem.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  // key={i}
                >
                  {item.label}
                </Link>
              ))}

            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by <strong>Goose Software</strong> {new Date().getFullYear()} 
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },
    image:{
      height:'50px',
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",      
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
};
