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
import { Box } from "@mui/system"
import iconMountain from "../../public/images/svg/mountain-icon.svg"

import Image from "next/image"
import { theme } from "@/utils"
import { FadeInSection } from "@/components/common/fadein-section"
import { Bubble } from "@/components/common/bubble"

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
    title: "Cộng đồng hỗ trợ",
    subTitle:
      "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế.",
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
    title: "Trợ lý ảo",
    subTitle:
      "Trợ lí ảo duy nhất thị trường hỗ trợ tối đa cho trải nghiệm dã ngoại tuyệt vời",
    imageUrl: null,
  },
  {
    id: 5,
    title: "Thông tin chính xác",
    subTitle:
      "Thông tin chi tiết (địa điểm cắm trại, dụng cụ dã ngoại, tuyến đường, thời tiết,..)",
    imageUrl: null,
  },
  {
    id: 6,
    title: "Cộng đồng hỗ trợ",
    subTitle:
      "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế. ",
    imageUrl: "/images/slider-img3.jpg",
  },
  {
    id: 7,
    title: "Lộ trình thông minh",
    subTitle:
      "Thiết kế lộ trình thông minh “CHỈ 30 GIÂY” cho kế hoạch dã ngoại hoàn hảo!",
    imageUrl: null,
  },
  {
    id: 8,
    title: "Cộng đồng hỗ trợ",
    subTitle:
      "Cộng đồng trải rộng, tương tác sôi động, chia sẻ trải nghiệm thực tế. ",
    imageUrl: "/images/slider-img4.jpg",
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

export interface ILandingLayoutProps {}

export function LandingLayoutDesktop({ children }: ILayoutProps) {
  return (
    <Box
      minHeight="100vh"
      sx={{ overflowX: "hidden" }}
      display={{ xs: "none", md: "block" }}
    >
      <Bubble />
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
                <Image
                  src={imageTitleParallax}
                  alt="camping plaining"
                  width={343}
                  height={89}
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
                    fontSize: "2.25rem",
                    letterSpacing: "2px",
                    color: "#ffffff",
                    zIndex: 1,
                  }}
                >
                  Camping Plaining
                </Typography>
              </Box>
            </Box>
            <Box sx={{ px: 3 }}>
              <Stack direction={"row"} mt={-0.5}>
                <Typography
                  sx={{
                    fontFamily: "Livvic",
                    fontWeight: 900,
                    lineHeight: "64px",
                    fontSize: "3rem",
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
      </FadeInSection>

      <Container>
        <Box sx={{ py: 0, position: "relative" }}>
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
            <FadeInSection fadeType="fade-down" sx={{ textAlign: "center" }}>
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
            </FadeInSection>
          </Container>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              mt: 6,
            }}
          >
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
                {item.imageUrl ? (
                  <FadeInSection fadeType="fade-up">
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
                    fadeType="fade-down"
                    sx={{
                      height: "100%",
                      backgroundColor: "#FDF8F2",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      px: 3,
                      py: {
                        xs: 2,
                        lg: 0,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1.25rem", display: "block" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "15px",
                        lineHeight: 1.75,
                        py: 1,
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

          <Box mt={6}>
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
                        letterSpacing: "0.5px",
                        color: "#FF7836",
                        pt: 4,
                      }}
                    >
                      Tận dụng tài năng
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
                      pt: 0.5,
                      pb: 1.5,
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

                <StyledButton variant="contained">
                  Đăng ký tham gia ngay
                </StyledButton>
              </FadeInSection>

              <FadeInSection fadeType="fade-left">
                <Box
                  mt={4}
                  sx={{
                    backgroundColor: "#EDFDEF",
                    padding: "32px 56px 40px",
                    float: "right",
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Livvic",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      color: "#101426",
                      pt: 0.5,
                      pb: 1.5,
                    }}
                  >
                    Quyền lợi thành viên
                  </Typography>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Image
                      src={"/images/svg/tick-circle.svg"}
                      alt="award icon"
                      width={24}
                      height={24}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.5,
                        ml: 1.5,
                      }}
                    >
                      Thu nhập không giới hạn 20M+++/tháng
                    </Typography>
                  </Stack>

                  <Stack direction={"row"} alignItems={"center"}>
                    <Image
                      src={"/images/svg/tick-circle.svg"}
                      alt="award icon"
                      width={24}
                      height={24}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.5,
                        ml: 1.5,
                      }}
                    >
                      Chính sách bonus, hoa hồng lên tới 20%
                    </Typography>
                  </Stack>

                  <Stack direction={"row"} alignItems={"center"}>
                    <Image
                      src={"/images/svg/tick-circle.svg"}
                      alt="award icon"
                      width={24}
                      height={24}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.5,
                        ml: 1.5,
                      }}
                    >
                      Hỗ trợ xây dựng thương hiệu cá nhân
                    </Typography>
                  </Stack>

                  <Stack direction={"row"} alignItems={"center"}>
                    <Image
                      src={"/images/svg/tick-circle.svg"}
                      alt="award icon"
                      width={24}
                      height={24}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.5,
                        ml: 1.5,
                      }}
                    >
                      Tài trợ voucher, chi phí dã ngoại lên tới 100%
                    </Typography>
                  </Stack>
                </Box>
              </FadeInSection>
            </Stack>
          </Box>
        </Box>
      </Container>

      <Box bgcolor={"#00182C"} mt={10}>
        <FadeInSection>
          <Container>
            <Box position={"relative"} pb={4} pt={4.5}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                }}
              >
                <Image src={iconMountain} alt="icon" />
              </Box>

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
                      color: "#FF7836",
                      pt: 4,
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
                    color: "#ffffff",
                    pt: 0.5,
                  }}
                >
                  Camping Planning và thành viên
                </Typography>
              </Box>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  py: 3.5,
                  px: 17,
                  gap: "97px",
                }}
              >
                {LIST_JOURNEY.map((item, index) => (
                  <Box
                    key={index}
                    pt={index === 1 ? 13 : 0}
                    sx={{
                      width: {
                        xs: "100%",
                        lg: "33.33%",
                      },
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        paddingTop: "100%",
                        backgroundImage: `url('/images/bg-erase.png')`,
                        backgroundPosition: "center center",
                        backgroundSize: "contain",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          width: "100%",
                          height: "100%",
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
                            width={32}
                            height={32}
                          />

                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: "#ffffff",
                              lineHeight: 1.875,
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 400,
                              fontSize: "15px",
                              color: "#AEBAD5",
                              lineHeight: 1.5,
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Container>
        </FadeInSection>
      </Box>

      <Box mt={6.5}>
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
                  color: "#FF7836",
                  pt: 3.5,
                  px: 2,
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
                pt: 0.5,
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
              mt: 6,
            }}
          >
            {LIST_QUOTE.map(item => (
              <Box
                key={item.author}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "50%",
                  },
                  backgroundColor: item.opacity ? "#F6F9FE" : "#EFF4FB",
                  p: 4,
                }}
              >
                <Stack
                  direction={"row"}
                  sx={{
                    height: "100%",
                    alignItems: "flex-start",
                  }}
                >
                  <Box minWidth={60} minHeight={40}>
                    <Image
                      src={"/images/svg/double-quote-icon.svg"}
                      alt="award icon"
                      width={60}
                      height={40}
                      objectFit="contain"
                    />
                  </Box>

                  <Stack
                    direction={"column"}
                    sx={{
                      pl: 3,
                      gap: "24px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.125rem",
                        fontWeight: 400,
                        lineHeight: 1.75,
                      }}
                    >
                      {item.content}
                    </Typography>
                    <Stack direction={"row"} alignItems="center">
                      <Image
                        src={item.avatar}
                        alt="award icon"
                        width={48}
                        height={48}
                        objectFit="contain"
                      />
                      <Stack direction={"column"} px={1.5} gap={"2px"}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            lineHeight: 1.5,
                          }}
                        >
                          {item.author}
                        </Typography>
                        <Typography variant="subtitle2">
                          {item.major}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box mt={10} bgcolor={"#FCF5ED"}>
        <Container>
          <Stack direction={{ xs: "column", md: "row" }} gap={"26px"}>
            <FadeInSection
              fadeType="fade-left"
              component="form"
              sx={{
                backgroundColor: "#181D33",
                borderRadius: "24px",
                p: 5,
                my: 10,
                zIndex: 2,
              }}
            >
              <Stack direction={"column"} gap={"16px"}>
                <Stack direction={"row"} pl={2.5}>
                  <Typography
                    // variant="h5"
                    sx={{
                      fontFamily: "Livvic",
                      fontWeight: 900,
                      letterSpacing: "0.5px",
                      fontSize: "32px",
                      color: theme.palette.primary.main,
                      // pt: 4,
                      px: 1,
                    }}
                  >
                    Đăng ký thành viên
                  </Typography>
                  <Box mr={-2.5} mt={-1}>
                    <Image
                      src={"/images/svg/tree-talent-icon.svg"}
                      alt="award icon"
                      width={32}
                      height={40}
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
            <FadeInSection
              fadeType="fade-right"
              sx={{
                flex: 1,
                position: "relative",
                paddingTop: "50%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundImage: `url("/images/bg-signup-location.png")`,
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "40px",
                  right: 0,
                  display: "flex",
                  textAlign: "center",
                }}
              >
                <Image
                  src={imageTitleParallax}
                  alt="camping plaining"
                  width={343}
                  height={89}
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
                    fontSize: "2.25rem",
                    letterSpacing: "2px",
                    color: "#ffffff",
                    zIndex: 1,
                  }}
                >
                  Camping Plaining
                </Typography>
              </Box>
            </FadeInSection>
          </Stack>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          backgroundColor: "#101426",
        }}
        py={8}
      >
        <Container>
          <Image
            src={"/images/svg/logo-fpt-telecom-default.svg"}
            alt="camping plaining"
            width={120}
            height={40}
          />
          <Grid container spacing={4} pt={5}>
            <Grid item xs={12} md={6}>
              <Stack direction={"column"} alignItems="flex-start">
                <Stack direction={"row"} alignItems="center">
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
                    width={32}
                    height={32}
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
