import { styled } from "@mui/material"
import { Box, BoxProps } from "@mui/system"
import React, { ReactNode } from "react"

interface IFadeInSectionProps extends BoxProps {
  open?: boolean
  children?: ReactNode
  fadeType?: "fade-down" | "fade-up" | "fade-left" | "fade-right" | "default"
}

const StyledBox = styled(Box)<IFadeInSectionProps>(
  ({ open, fadeType, theme }) => {
    let transform = ""
    switch (fadeType) {
      case "fade-down":
        transform = "translateY(-20vh)"
        break
      case "fade-up":
        transform = "translateY(20vh)"
        break
      case "fade-left":
        transform = "translateX(-20vh)"
        break
      case "fade-right":
        transform = "translateX(20vh)"
        break
      default:
        transform = "translateY(0)"
        break
    }
    return {
      transform,
      animationDelay: "0.5s",
    }
  },
)

export function FadeInSection(props: IFadeInSectionProps) {
  const [isVisible, setVisible] = React.useState<boolean>(false)
  const domRef = React.useRef<any>()
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true)

        // No need to keep observing:
        observer.unobserve(domRef.current)
      }
    })

    observer.observe(domRef.current)

    return () => observer.unobserve(domRef.current)
  }, [])
  return (
    <StyledBox
      {...props}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </StyledBox>
  )
}
