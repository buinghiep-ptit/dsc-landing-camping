import { LandingLayout } from '@/layout/landing'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'

export interface ILandingPageProps {}

export default function LandingPage(props: ILandingPageProps) {
  return (
    <Box>
      <Container>
        <div>Landing Page</div>
      </Container>
    </Box>
  )
}
LandingPage.Layout = LandingLayout
