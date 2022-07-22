import { Parallax } from "@/components/common/parrallax"
import { Footer, Header } from "@/components/landing"
import { ILayoutProps } from "@/models"
import { Container, Stack, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import * as React from "react"
import imageBgParallax from "@/assets/images/bg-parallax.jpg"
import imageTitleParallax from "@/assets/images/bg-camping-title.png"
import iconAwardParallax from "@/assets/images/award-label.svg"
import iconLineArrow from "@/assets/images/arrow-soft.svg"
import iconLineLocation from "@/assets/images/location-soft.svg"

import Image from "next/image"

const LIST_IMAGE = [
  {
    id: 1,
    title: "Cộng đồng hỗ trợ",
    subTitle:
      "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế. ",
    imageUrl: "/images/slider-img1.jpg",
  },
  {
    id: 2,
    title: "Cộng đồng hỗ trợ",
    subTitle:
      "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế. ",
    imageUrl: "/images/slider-img2.jpg",
  },
  {
    id: 3,
    title: "Cộng đồng hỗ trợ",
    subTitle:
      "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế. ",
    imageUrl: "/images/slider-img3.jpg",
  },
  {
    id: 4,
    title: "Cộng đồng hỗ trợ",
    subTitle:
      "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế. ",
    imageUrl: "/images/slider-img4.jpg",
  },
  // {
  //   id: 5,
  //   title: "Cộng đồng hỗ trợ",
  //   subTitle:
  //     "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế. ",
  //   imageUrl: "@/assets/images/slider-img1.jpg",
  // },
  // {
  //   id: 6,
  //   title: "Cộng đồng hỗ trợ",
  //   subTitle:
  //     "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế. ",
  //   imageUrl: "@/assets/images/slider-img1.jpg",
  // },
  // {
  //   id: 7,
  //   title: "Cộng đồng hỗ trợ",
  //   subTitle:
  //     "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế. ",
  //   imageUrl: "@/assets/images/slider-img1.jpg",
  // },
  // {
  //   id: 8,
  //   title: "Cộng đồng hỗ trợ",
  //   subTitle:
  //     "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế. ",
  //   imageUrl: "@/assets/images/slider-img1.jpg",
  // },
]

export interface ILandingLayoutProps {}

export function LandingLayout({ children }: ILayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header
        brand="NextJS Material Kit"
        rightLinks={null}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
      />

      <Parallax image={imageBgParallax}>
        <Container>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                // flexDirection: "row",
                // alignItems: "center",
                // justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Image src={imageTitleParallax} alt="camping plaining" />
              <Typography
                sx={{
                  width: "100%",
                  position: "absolute",
                  // textAlign: "center",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  fontFamily: "Caveat",
                  fontWeight: 700,
                  fontSize: "2.25rem",
                  letterSpacing: "2px",
                  color: "#ffffff",
                  zIndex: 1100,
                }}
              >
                Camping Plaining
              </Typography>
            </Box>
          </Box>
          <Box sx={{ px: 3 }}>
            <Typography
              sx={{
                fontFamily: "Livvic",
                fontWeight: 900,
                fontSize: "3rem",
                color: "#101426",
                zIndex: 1100,
              }}
            >
              Dã ngoại thông minh
            </Typography>
            <Typography
              sx={{
                fontFamily: "Livvic",
                fontWeight: 600,
                fontSize: "1.5rem",
                color: "#101426",
                zIndex: 1100,
              }}
            >
              Thu nhập không giới hạn cho các KOL
            </Typography>
          </Box>
        </Container>
      </Parallax>
      <Container>
        <Box component="main" sx={{ py: 0, position: "relative" }}>
          <Box sx={{ position: "absolute", pt: 3, width: "100%" }}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: " space-between",
              }}
            >
              <Image src={iconLineArrow} alt="arrow line icon" />
              <Image src={iconLineLocation} alt="location line icon" />
            </Stack>
          </Box>
          <Box
            sx={{
              // position: "absolute",
              // top: -24,
              // left: "50%",
              mt: -3,
              pb: 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                // position: "absolute",
                // left: "-50%",
                // maxWidth: "100%",
                borderRadius: "100px",
                overflow: "hidden",
                boxShadow: "0px 8px 32px rgba(165, 187, 230, 0.28)",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                py: 1,
                px: 2,
              }}
            >
              <Image src={iconAwardParallax} alt="award icon" />
              <Typography
                variant="subtitle1"
                sx={{
                  // whiteSpace: "nowrap",
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                  pl: 1.5,
                  fontSize: "15px",
                  letterSpacing: "0.5px",
                }}
              >
                Nền tảng trải nghiệm dã ngoại đầu tiên tại Việt Nam
              </Typography>
            </Box>
          </Box>
          <Container maxWidth="md">
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Livvic",
                  fontWeight: 900,
                  letterSpacing: "0.5px",
                  color: "#FF7836",
                }}
              >
                Camping Planning
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Livvic",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  color: "#101426",
                  pt: 0.5,
                  pb: 1.5,
                }}
              >
                Giải pháp dã ngoại thông minh từ A-Z
              </Typography>

              <Typography variant="body1">
                Camping Planning là nền tảng trải nghiệm dã ngoại thông minh đầu
                tiên tại Việt Nam do FPT Telecom nghiên cứu và phát triển. Nền
                tảng cung cấp các thông tin chi tiết vầ cắm trại, chia sẻ trải
                nghiệm dã ngoại, cung cấp dụng cụ Camping, Booking đặt chỗ các
                điểm Camping, Glamping, Farmstay,...
              </Typography>
            </Box>
          </Container>
          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {LIST_IMAGE.map(item => (
              <Box
                key={item.id}
                sx={{
                  width: {
                    xs: "100%",
                    lg: "25%",
                  },
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "66.67%",
                    backgroundImage: `url(${item?.imageUrl})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></Box>
                {/* <Image
                  src={item.imageUrl}
                  alt="image slide"
                  width={"100%"}
                  height={200}
                ></Image> */}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <Box component="main" flexGrow={1}>
        {/* <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/blog'}>
          <a>Blog</a>
        </Link>
        <Link href={'/works'}>
          <a>Works</a>
        </Link> */}
        {children}
      </Box>

      <Footer />
    </Stack>
  )
}
