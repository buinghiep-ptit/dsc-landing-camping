import iconLineArrow from "@/assets/images/arrow-soft.svg"
import iconAwardParallax from "@/assets/images/award-label.svg"
import imageTitleParallax from "@/assets/images/bg-camping-title.png"
import imageBgParallax from "@/assets/images/bg-parallax.jpg"
import iconLineLocation from "@/assets/images/location-soft.svg"
import { Parallax } from "@/components/common/parrallax"
import { Footer, Header } from "@/components/landing"
import { ILayoutProps } from "@/models"
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import { Box } from "@mui/system"
import iconMountain from "../../public/images/svg/mountain-icon.svg"

import Image from "next/image"
import { theme } from "@/utils"
import { FadeInSection } from "@/components/common/fadein-section"
import { Bubble } from "@/components/common/bubble"
import { MobileStepper } from "@mui/material"
import { useState } from "react"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
})

const LIST_IMAGE = [
  {
    id: 1,
    title: "Cộng đồng hỗ trợ",
    subTitle:
      "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế.",
    imageUrl: "/images/slider-img1.jpg",
  },
  {
    id: 2,
    title: "Thông tin chính xác",
    subTitle:
      "Thông tin chi tiết (địa điểm cắm trại, dụng cụ dã ngoại, tuyến đường, thời tiết,..)",
    imageUrl: null,
  },
  {
    id: 3,
    title: "Cộng đồng hỗ trợ",
    subTitle:
      "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế.",
    imageUrl: "/images/slider-img2.jpg",
  },
  {
    id: 4,
    title: "Cộng đồng hỗ trợ",
    subTitle:
      "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế.",
    imageUrl: null,
  },
  {
    id: 5,
    title: "Thông tin chính xác",
    subTitle:
      "Thông tin chi tiết (địa điểm cắm trại, dụng cụ dã ngoại, tuyến đường, thời tiết,..)",
    imageUrl: "/images/slider-img3.jpg",
  },
  {
    id: 6,
    title: "Lộ trình thông minh",
    subTitle:
      "Thiết kế lộ trình thông minh “CHỈ 30 GIÂY” cho kế hoạch dã ngoại hoàn hảo!",
    imageUrl: null,
  },
  {
    id: 7,
    title: "Lộ trình thông minh",
    subTitle:
      "Thiết kế lộ trình thông minh “CHỈ 30 GIÂY” cho kế hoạch dã ngoại hoàn hảo!",
    imageUrl: "/images/slider-img4.jpg",
  },
  {
    id: 8,
    title: "Trợ lý ảo",
    subTitle:
      "Trợ lí ảo duy nhất thị trường hỗ trợ tối đa cho trải nghiệm dã ngoại tuyệt vời",
    imageUrl: null,
  },
]

const LIST_QUOTE = [
  {
    content:
      "Camping Planing là nền tảng tuyệt vời dành cho những người đam mê cắm trại. Ngoài ra mình còn có thể tạo thêm thu nhập bằng việc viết review và những cảm nhận, trải nghiệm về những chuyến đi của mình!",
    author: "Nguyễn Hà Linh",
    major: "MC Viettravel",
    avatar: "/images/avatar1.png",
    opacity: false,
  },
  {
    content:
      "Camping Planing là nền tảng tuyệt vời dành cho những người đam mê cắm trại. Ngoài ra mình còn có thể tạo thêm thu nhập bằng việc viết review và những cảm nhận, trải nghiệm về những chuyến đi của mình!",
    author: "Thuỳ anh",
    major: "Blogger",
    avatar: "/images/avatar2.png",
    opacity: true,
  },
  {
    content:
      "Camping Planing là nền tảng tuyệt vời dành cho những người đam mê cắm trại. Ngoài ra mình còn có thể tạo thêm thu nhập bằng việc viết review và những cảm nhận, trải nghiệm về những chuyến đi của mình!",
    author: "Huy Hoàng Samba",
    major: "Blogger, Youtuber",
    avatar: "/images/avatar2.png",
    opacity: true,
  },
  {
    content:
      "Camping Planing là nền tảng tuyệt vời dành cho những người đam mê cắm trại. Ngoài ra mình còn có thể tạo thêm thu nhập bằng việc viết review và những cảm nhận, trải nghiệm về những chuyến đi của mình!",
    author: "Quốc Bảo",
    major: "Youtuber",
    avatar: "/images/avatar1.png",
    opacity: false,
  },
]

const LIST_JOURNEY = [
  {
    icon: "/images/svg/add-icon.svg",
    title: "Bước 1: Đăng ký",
    description: "Đăng ký thành viên trên Camping Planning",
  },
  {
    icon: "/images/svg/write-icon.svg",
    title: "Bước 2: Sáng tạo nội dung",
    description:
      "Sáng tạo và đăng tải nội dung về Trải nghiệm dã ngoại của bản thân lên nền tảng Camping Planning",
  },
  {
    icon: "/images/svg/gift-icon.svg",
    title: "Bước 3: Nhận hoa hồng",
    description:
      "Nhận mức hoa hồng cực hấp dẫn (Dựa trên lượt tương tác bài viết)",
  },
]

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

export interface ILandingMobileLayoutProps {}

export function LandingMobileLayout({ children }: ILayoutProps) {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = LIST_QUOTE.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <Box
      minHeight="100vh"
      sx={{ overflowX: "hidden" }}
      display={{ xs: "block", md: "none" }}
    >
      <Box position={"relative"}>
        <Bubble />
      </Box>
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
      <FadeInSection>
        <Parallax image={"/images/mobile/bg-parallax-mobile.jpg"}>
          <Container>
            <Stack height={"58vh"}>
              <Box
                flexGrow={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      textAlign: "center",
                    }}
                  >
                    <Image
                      src={imageTitleParallax}
                      alt="camping plaining"
                      width={280}
                      height={75}
                    />
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
                        fontSize: "1.5rem",
                        lineHeight: 2.25,
                        letterSpacing: "2px",
                        color: "#ffffff",
                        zIndex: 1,
                      }}
                    >
                      Camping Plaining
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Stack direction={"row"} mt={-0.5}>
                    <Typography
                      sx={{
                        fontFamily: "Livvic",
                        fontWeight: 900,
                        lineHeight: 1.43,
                        fontSize: "1.75rem",
                        color: "#101426",
                      }}
                    >
                      Dã ngoại thông minh
                    </Typography>
                    <Box mt={-1.5} px={0.5}>
                      <Image
                        src={"/images/svg/tree-talent-icon.svg"}
                        alt="award icon"
                        width={32}
                        height={40}
                      />
                    </Box>
                  </Stack>

                  <Typography
                    sx={{
                      fontFamily: "Livvic",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      lineHeight: 2,
                      color: "#101426",
                    }}
                  >
                    Thu nhập không giới hạn cho các KOL
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  justifyContent: "center",
                  py: 2,
                }}
              >
                <Box
                  sx={{
                    borderRadius: "100px",
                    background: " rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: " blur(12px)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    py: 1,
                    px: 1.25,
                  }}
                >
                  <Image
                    src={iconAwardParallax}
                    width={19}
                    height={24}
                    alt="award icon"
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      whiteSpace: "nowrap",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      pl: 1,
                      lineHeight: 1.67,
                      fontSize: "0.75rem",
                      letterSpacing: "0.2px",
                      color: "white",
                    }}
                  >
                    Nền tảng trải nghiệm dã ngoại đầu tiên tại Việt Nam
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Container>
        </Parallax>
      </FadeInSection>

      <Container>
        <Box sx={{ py: 0, position: "relative" }}>
          <Box sx={{ position: "relative", width: "100%" }}>
            <Stack
              sx={{
                position: "absolute",
                width: "100%",
                top: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: " space-between",
              }}
            >
              <Box sx={{ mt: 0, ml: -1 }}>
                <Image
                  src={"/images/svg/mobile/arrow-line.svg"}
                  width={92}
                  height={60}
                  alt="arrow line icon"
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Image
                  src={"/images/svg/mobile/location-line.svg"}
                  width={48}
                  height={46}
                  alt="location line icon"
                />
              </Box>
            </Stack>
          </Box>
          <FadeInSection
            fadeType="fade-down"
            sx={{ textAlign: "center", pt: 4 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Livvic",
                fontWeight: 900,
                fontSize: "1.375rem",
                lineHeight: 1.6,
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
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                letterSpacing: "0.5px",
                color: "#101426",
                pt: 0.25,
                pb: 1,
              }}
            >
              Giải pháp dã ngoại thông minh từ A-Z
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
              }}
            >
              Camping Planning là nền tảng trải nghiệm dã ngoại thông minh đầu
              tiên tại Việt Nam do FPT Telecom nghiên cứu và phát triển. Nền
              tảng cung cấp các thông tin chi tiết vầ cắm trại, chia sẻ trải
              nghiệm dã ngoại, cung cấp dụng cụ Camping, Booking đặt chỗ các
              điểm Camping, Glamping, Farmstay,...
            </Typography>
          </FadeInSection>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              mt: 3,
            }}
          >
            {LIST_IMAGE.map(item => (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                {item.imageUrl ? (
                  <FadeInSection fadeType="fade-right">
                    <Box
                      sx={{
                        position: "relative",
                        paddingTop: "66.67%",
                        backgroundImage: `url(${item?.imageUrl})`,
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    ></Box>
                  </FadeInSection>
                ) : (
                  <FadeInSection
                    fadeType="fade-left"
                    sx={{
                      //   height: "100%",
                      backgroundColor: "#FDF8F2",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      px: 3,
                      py: {
                        xs: 2,
                        lg: 0,
                      },
                      gap: "6px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.5,
                        display: "block",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.875rem",
                        lineHeight: 1.71,
                        display: "block",
                      }}
                    >
                      {item.subTitle}
                    </Typography>
                  </FadeInSection>
                )}
              </Box>
            ))}
          </Box>

          <Box mt={1}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              // justifyContent="space-between"
              sx={{
                "& > div": {
                  width: {
                    xs: "100%",
                    md: "50%",
                  },
                },
              }}
            >
              <FadeInSection
                fadeType="fade-right"
                pr={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Stack direction={"row"}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "Livvic",
                        fontWeight: 900,
                        fontSize: "1.375rem",
                        lineHeight: 1.6,
                        letterSpacing: "0.5px",
                        color: "#FF7836",
                        pt: 3,
                      }}
                    >
                      Tận dụng tài năng
                    </Typography>
                    <Image
                      src={"/images/svg/tree-talent-icon.svg"}
                      alt="award icon"
                      width={32}
                      height={40}
                      //   style={{
                      //     marginTop
                      //   }}
                    />
                  </Stack>

                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Livvic",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      color: "#101426",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      pt: 0.25,
                      pb: 1,
                    }}
                  >
                    Gia tăng thu nhập cùng Camping Planning
                  </Typography>

                  <Typography variant="body1">
                    Camping Planning là Nền tảng trải nghiệm dã ngoại đầu tiên
                    tại Việt Nam với mức hoa hồng tốt nhất dành cho Thành viên
                    lên tới 20% với những chính sách hỗ trợ đặc biệt. Đơn giản
                    chỉ cần đăng ký thành viên, chia sẻ về trải nghiệm dã ngoại
                    thực tế của bản thân bạn đã có cơ hội gia tăng thu nhập và
                    nhận các phần quà, đãi ngộ tuyệt vời từ nền tảng như : tài
                    trợ 100% chi phí dã ngoại,...
                  </Typography>
                </Box>
              </FadeInSection>

              <FadeInSection fadeType="fade-left">
                <Box
                  mt={2}
                  sx={{
                    backgroundColor: "#EDFDEF",
                    padding: "16px 16px 20px",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Livvic",
                      fontWeight: 700,
                      lineHeight: 1.56,
                      color: "#101426",
                    }}
                  >
                    Quyền lợi thành viên
                  </Typography>
                  <Stack direction={"row"} alignItems={"flex-start"}>
                    {/* <Box> */}
                    <Image
                      src={"/images/svg/tick-circle.svg"}
                      alt="award icon"
                      width={24}
                      height={24}
                    />
                    {/* </Box> */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        lineHeight: 1.71,
                        ml: 1,
                      }}
                    >
                      Thu nhập không giới hạn 20M+++/tháng
                    </Typography>
                  </Stack>

                  <Stack direction={"row"} alignItems={"flex-start"}>
                    {/* <Box> */}
                    <Image
                      src={"/images/svg/tick-circle.svg"}
                      alt="award icon"
                      width={24}
                      height={24}
                    />
                    {/* </Box> */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        lineHeight: 1.71,
                        ml: 1,
                      }}
                    >
                      Chính sách bonus, hoa hồng lên tới 20%
                    </Typography>
                  </Stack>

                  <Stack direction={"row"} alignItems={"flex-start"}>
                    {/* <Box> */}
                    <Image
                      src={"/images/svg/tick-circle.svg"}
                      alt="award icon"
                      width={24}
                      height={24}
                    />
                    {/* </Box> */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        lineHeight: 1.71,
                        ml: 1,
                      }}
                    >
                      Hỗ trợ xây dựng thương hiệu cá nhân
                    </Typography>
                  </Stack>

                  <Stack direction={"row"} alignItems={"flex-start"}>
                    {/* <Box> */}
                    <Image
                      src={"/images/svg/tick-circle.svg"}
                      alt="award icon"
                      width={24}
                      height={24}
                    />
                    {/* </Box> */}

                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        lineHeight: 1.71,
                        ml: 1,
                      }}
                    >
                      Tài trợ voucher, chi phí dã ngoại lên tới 100%
                    </Typography>
                  </Stack>
                  <StyledButton variant="contained">
                    Đăng ký tham gia ngay
                  </StyledButton>
                </Box>
              </FadeInSection>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Box bgcolor={"#00182C"} mt={3}>
        <FadeInSection>
          <Container>
            <Box position={"relative"} pb={1} pt={1}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end ",
                }}
              >
                <Stack direction={"row"}>
                  <Image
                    src={"/images/svg/tree-talent-reverse-icon.svg"}
                    alt="icon"
                    width={32}
                    height={40}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Livvic",
                      fontWeight: 900,
                      letterSpacing: "0.5px",
                      fontSize: "1.375rem",
                      lineHeight: 1.6,
                      color: "#FF7836",
                      pt: 3,
                      pl: 1,
                    }}
                  >
                    Hành trình hợp tác
                  </Typography>
                </Stack>

                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Livvic",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "#ffffff",
                    pt: 0.5,
                  }}
                >
                  Camping Planning và thành viên
                </Typography>
              </Box>

              <Image
                src={iconMountain}
                alt="icon"
                style={{
                  marginTop: "-8px",
                }}
              />

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  //   py: 3.5,
                  //   px: 17,
                  //   gap: "97px",
                  mt: -11,
                }}
              >
                {LIST_JOURNEY.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <Box
                      sx={{
                        position: "relative",
                        paddingTop: "100%",
                        backgroundImage: `url('/images/bg-erase.png')`,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                      }}
                    ></Box> */}
                    <Image
                      src={"/images/bg-erase.png"}
                      alt="icon"
                      width={236}
                      height={212}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        height: "100%",
                        px: 2,
                      }}
                    >
                      <Stack
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                          gap: "8px",
                          textAlign: "center",
                        }}
                      >
                        <Image
                          src={item.icon}
                          alt="award icon"
                          width={28}
                          height={28}
                        />

                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            fontSize: "1rem",
                            color: "#ffffff",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 400,
                            fontSize: "0.875rem",
                            color: "#AEBAD5",
                            lineHeight: 1.71,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Container>
        </FadeInSection>
      </Box>

      <Box mt={0.5}>
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"center"}
            >
              <Image
                src={"/images/svg/tree-talent-reverse-icon.svg"}
                alt="award icon"
                width={32}
                height={40}
              />
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Livvic",
                  fontWeight: 900,
                  letterSpacing: "0.5px",
                  fontSize: "1.375rem",
                  lineHeight: 1.6,
                  color: "#FF7836",
                  pt: 3.5,
                  px: 1.5,
                }}
              >
                Cảm nhận KOL
              </Typography>
              <Image
                src={"/images/svg/tree-talent-icon.svg"}
                alt="award icon"
                width={32}
                height={40}
              />
            </Stack>

            <Typography
              variant="h5"
              sx={{
                fontFamily: "Livvic",
                fontWeight: 700,
                letterSpacing: "0.5px",
                color: "#101426",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
              }}
            >
              Camping Planing - Dã ngoại thông minh
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              mt: 2,
            }}
          ></Box>

          <Box>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {LIST_QUOTE.map((item, index) => (
                // <div key={item.author}>
                //   {Math.abs(activeStep - index) <= 2 ? (
                //     <Box
                //       component="img"
                //       sx={{
                //         height: 255,
                //         display: "block",
                //         maxWidth: 400,
                //         overflow: "hidden",
                //         width: "100%",
                //       }}
                //       src={item.avatar}
                //       alt={item.major}
                //     />
                //   ) : null}
                // </div>
                <Box
                  key={item.author}
                  sx={{
                    width: "100%",
                    backgroundColor: "#EFF4FB",
                    px: 2,
                    py: 3,
                    borderRadius: "1rem",
                  }}
                >
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Stack
                      direction={"row"}
                      sx={{
                        height: "100%",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box minWidth={32} minHeight={20}>
                        <Image
                          src={"/images/svg/double-quote-icon.svg"}
                          alt="award icon"
                          width={32}
                          height={20}
                          objectFit="contain"
                        />
                      </Box>

                      <Stack
                        direction={"column"}
                        sx={{
                          pl: 2,
                          gap: "12px",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "0.9375rem",
                            fontWeight: 400,
                            lineHeight: 1.6,
                          }}
                        >
                          {item.content}
                        </Typography>
                        <Stack direction={"row"} alignItems="center">
                          <Image
                            src={item.avatar}
                            alt="award icon"
                            width={44}
                            height={44}
                            objectFit="contain"
                          />
                          <Stack direction={"column"} px={1.5} gap={"2px"}>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 600,
                                fontSize: "0.9375rem",
                                lineHeight: 1.375,
                              }}
                            >
                              {item.author}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontSize: "0.8125rem",
                                lineHeight: 1.375,
                              }}
                            >
                              {item.major}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  ) : null}
                </Box>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Container>
      </Box>

      <Box mt={1.5} px={2} bgcolor={"#FCF5ED"}>
        {/* <Container> */}
        <Stack direction={{ xs: "column", md: "row" }}>
          <FadeInSection
            fadeType="fade-left"
            component="form"
            sx={{
              backgroundColor: "#181D33",
              borderRadius: "24px",
              p: 2,
              mt: 3,
              zIndex: 2,
            }}
          >
            <Stack direction={"column"} gap={"16px"} pb={2}>
              <Stack direction={"row"} pl={2.5} justifyContent="center">
                <Typography
                  // variant="h5"
                  sx={{
                    fontFamily: "Livvic",
                    fontWeight: 900,
                    letterSpacing: "0.5px",
                    fontSize: "1.375rem",
                    lineHeight: "1.45",
                    color: theme.palette.primary.main,
                    pr: 1,
                    pt: 2,
                  }}
                >
                  Đăng ký thành viên
                </Typography>
                <Box>
                  <Image
                    src={"/images/svg/tree-talent-icon.svg"}
                    alt="award icon"
                    width={24}
                    height={32}
                  />
                </Box>
              </Stack>

              <FormControl sx={{ width: "100%" }}>
                <Stack>
                  <InputLabel
                    variant="standard"
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontSize: "1.125rem" }}
                  >
                    Họ và tên
                  </InputLabel>
                  <CssTextField
                    name="dark"
                    variant="outlined"
                    placeholder="Nhập họ và tên"
                    helperText=""
                    sx={{ mt: 3.5 }}
                  />
                </Stack>
              </FormControl>
              <FormControl sx={{ width: "100%" }}>
                <Stack>
                  <InputLabel
                    variant="standard"
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontSize: "1.125rem" }}
                  >
                    Số điện thoại
                  </InputLabel>
                  <CssTextField
                    name="dark"
                    variant="outlined"
                    placeholder="Nhập số điện thoại"
                    sx={{
                      mt: 3.5,
                      "& .MuiOutlinedInput-root": {
                        // color: "red",
                      },
                    }}
                    inputProps={{
                      sx: {
                        "&::placeholder": {
                          // color: "green",
                        },
                      },
                    }}
                    helperText=""
                  />
                </Stack>
              </FormControl>
              <FormControl sx={{ width: "100%" }}>
                <Stack>
                  <InputLabel
                    variant="standard"
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{ fontSize: "1.125rem" }}
                  >
                    Ghi chú
                  </InputLabel>
                  <CssTextField
                    fullWidth
                    name="dark"
                    multiline
                    InputProps={{
                      rows: 3,
                    }}
                    sx={{ mt: 3.5 }}
                    placeholder="Nhập ghi chú"
                  />
                </Stack>
              </FormControl>
              <StyledButton variant="contained" sx={{ width: "100%", mt: 1 }}>
                Đăng ký tham gia ngay
              </StyledButton>
            </Stack>
          </FadeInSection>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Image
              src={imageTitleParallax}
              alt="camping plaining"
              width={216}
              height={56}
            />
            <Typography
              sx={{
                width: "100%",
                position: "absolute",
                // textAlign: "center",
                top: 4,
                left: 0,
                right: 0,
                bottom: 0,
                fontFamily: "Caveat",
                fontWeight: 700,
                fontSize: "1.375rem",
                lineHeight: 1.45,
                letterSpacing: "1px",
                color: "#ffffff",
                zIndex: 1,
              }}
            >
              Camping Plaining
            </Typography>
          </Box>

          <FadeInSection
            fadeType="fade-right"
            sx={{
              paddingTop: "100%",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundImage: `url("/images/bg-signup-location.png")`,
              zIndex: 1,
              mt: -4,
            }}
          ></FadeInSection>
        </Stack>
        {/* </Container> */}
      </Box>

      <Box
        component="footer"
        sx={{
          backgroundColor: "#101426",
        }}
        py={4}
      >
        <Container>
          <Image
            src={"/images/svg/logo-fpt-telecom-default.svg"}
            alt="camping plaining"
            width={120}
            height={40}
          />
          <Grid container spacing={4} pt={3}>
            <Grid item xs={12} md={6}>
              <Stack direction={"column"} alignItems="flex-start">
                <Stack direction={"row"} alignItems="flex-start">
                  <Image
                    src={"/images/svg/building.svg"}
                    alt="camping plaining"
                    width={20}
                    height={20}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      fontSize: "1rem",
                      color: "#AEBAD5",
                      lineHeight: 1.5,
                      px: 1.5,
                    }}
                  >
                    Tên đơn vị: CÔNG TY CỔ PHẦN VIỄN THÔNG FPT
                  </Typography>
                </Stack>

                <Stack direction={"row"} alignItems="flex-start" pt={2.5}>
                  <Image
                    src={"/images/svg/location.svg"}
                    alt="camping plaining"
                    width={48}
                    height={48}
                  />

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      fontSize: "1rem",
                      color: "#AEBAD5",
                      lineHeight: 1.5,
                      px: 1.5,
                    }}
                  >
                    Địa chỉ liên lạc: Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số
                    10 Phạm Văn Bạch, quận Cầu Giấy, TP. Hà Nội
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction={"column"} alignItems="flex-start">
                <Stack direction={"row"} alignItems="center">
                  <Image
                    src={"/images/svg/call.svg"}
                    alt="camping plaining"
                    width={20}
                    height={20}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      fontSize: "1rem",
                      color: "#AEBAD5",
                      lineHeight: 1.5,
                      px: 1.5,
                    }}
                  >
                    Hotline: 024 7300 2222
                  </Typography>
                </Stack>

                <Stack direction={"row"} alignItems="flex-start" pt={2.5}>
                  <Image
                    src={"/images/svg/sms-notification.svg"}
                    alt="camping plaining"
                    width={20}
                    height={20}
                  />

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      fontSize: "1rem",
                      color: "#AEBAD5",
                      lineHeight: 1.5,
                      px: 1.5,
                    }}
                  >
                    Email: hotrokhachhang@fpt.com.vn
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="main" flexGrow={1}></Box>

      {/* <Footer /> */}
    </Box>
  )
}
