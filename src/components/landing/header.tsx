import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { Container, styled } from "@mui/material"
import { useEffect, useState } from "react"
import Image from "next/image"
import logo from "@/assets/images/logo-fpt-telecom.svg"
import { CustomizedNavTabs } from "../common/custom-nav-tabs"

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  brand?: string
  rightLinks?: React.ReactElement | null
  fixed?: boolean
  color: "transparent" | "white" | "dark"
  changeColorOnScroll: {
    height: number
    color: "white" | "dark"
  }
}

const drawerWidth = 240
const navItems = ["Trang chủ", "Giới thiệu", "Quyền lợi", "Hợp tác"]

interface StyledAppBarProps {
  open?: boolean
}

const StyledAppBar = styled(AppBar)<StyledAppBarProps>(({ open, theme }) => {
  console.log(open)
  // if (!open) return null
  return {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: open ? "transparent !important" : "#fff",
    boxShadow: open
      ? "none"
      : "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    // alignItems: "center",
    // flexFlow: "row nowrap",
    // justifyContent: "flex-start",
    position: "fixed",
    zIndex: "1100",
    // backgroundColor: "transparent !important",
    // boxShadow: "none",
    // paddingTop: "25px",
    // color: "#FFFFFF",
  }
})
const StyledButton = styled(Button)({
  boxShadow: "none",
  "&:hover": {
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
})

export function Header(props: Props) {
  const { color, changeColorOnScroll } = props
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(true)

  useEffect(() => {
    if (changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange)
    }
    return function cleanup() {
      if (changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange)
      }
    }
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > changeColorOnScroll.height) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <Typography variant="h6" color="#ff6f00">
                    {item}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = undefined

  return (
    <Box component="header" sx={{ display: "flex" }}>
      <StyledAppBar open={open}>
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                textAlign: { xs: "center", sm: "left" },
                // display: { xs: "none", sm: "block" },
              }}
            >
              <Image src={logo} alt="logo" width={"100%"} />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <CustomizedNavTabs navItems={navItems} />
            </Box>

            <StyledButton variant="contained">Đăng ký</StyledButton>
          </Toolbar>
        </Container>
      </StyledAppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
