'use client'

import StyledComponentsRegistry from './registry'
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'
import styled from 'styled-components'

const StyledBody = styled.body`
margin: 0;
padding: 0;
`

export default function RootLayout({ children }) {
  return (
    <html>
      <StyledBody style={{ margin: '0px', backgroundColor:'#000000' }}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </StyledBody>
    </html>
  )
}
