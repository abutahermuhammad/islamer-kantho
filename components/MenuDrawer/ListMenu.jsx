import { Box, Typography, Link } from "@mui/material";
import { IconContext } from "react-icons";
import { ImBook } from "react-icons/im";
import { memo } from "react";

const ListMenu = ({ title, list, color, ...rest }) => {
  return (
    <>
      <Box
        {...rest}
        sx={{
          marginBottom: "10px",
        }}
      >
        {/* Section Heading */}
        <Box
          sx={{
            padding: "16px 0 10px 16px",
          }}
        >
          <Typography
            sx={{
              paddingBottom: "8px",
              color: color ? color : "#111",
              fontSize: "16px",
              lineHeight: "16px",
              fontWeight: 700,
              borderBottom: `1px solid ${color ? `${color}38` : "#eee"}`,
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Categories*/}
        <Box>
          <Box
            component="ul"
            sx={{
              width: "100%",
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "inline-block",
              float: "left",
            }}
          >
            {list.map((e, i) => (
              <Box
                key={i}
                component="li"
                sx={{
                  width: "50%",
                  display: "inline-block",
                  float: "left",
                }}
              >
                <Link
                  href={e.slug ? `/category/${e.slug}` : e.url}
                  // component={Link}
                  sx={{
                    padding: "7px 0 7px 16px",
                    color: "#111",
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontSize: "14px",
                    lineHeight: "36px",
                    textDecoration: "none",
                    transform: "translate3d(0, 0, 0)",
                    borderRight: "1px solid #eee",
                    overflow: "hidden",
                  }}
                >
                  {/* Menu Icon */}
                  <Box
                    component="span"
                    sx={{
                      width: "36px",
                      height: "36px",
                      marginRight: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#E8E8E8",
                      borderRadius: "50%",
                    }}
                  >
                    <IconContext.Provider
                      value={{
                        color: color ? color : "#333",
                        style: {
                          width: "16px",
                          height: "16px",
                        },
                      }}
                    >
                      <ImBook />
                    </IconContext.Provider>
                  </Box>

                  {/* Menu Title */}
                  {e.title}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default memo(ListMenu);
