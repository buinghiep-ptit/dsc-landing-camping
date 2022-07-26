import { Box } from "@mui/system"
import React, { ReactElement, ReactNode } from "react"
import { styled } from "@mui/material"

export interface IParallaxProps {
  children?: ReactElement
  image:
    | {
        src: string
        height?: number
        width?: number
        blurDataURL?: string
      }
    | any
}

const StyledBoxContainer = styled(Box)({
  // height: "90vh",
  maxHeight: "1000px",
  overflow: "hidden",
  position: "relative",
  backgroundPosition: "center top",
  // backgroundSize: "cover",
  // backgroundSize: "100% 100%",

  margin: 0,
  padding: 0,
  border: 0,
  display: "flex",
  alignItems: "center",
})

export function Parallax({ children, image }: IParallaxProps) {
  return (
    <StyledBoxContainer
      sx={{
        backgroundImage: `url(${image?.src || image})`,
        height: {
          // xs: "472px",
          md: "90vh",
        },
        backgroundSize: {
          xs: "100% 100%",
          md: "cover",
        },
      }}
    >
      {children}
    </StyledBoxContainer>
  )
}
