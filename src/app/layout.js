'use client'
import StyledComponentsRegistry from './registry'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styled from 'styled-components'

const StyledBody = styled.body`
margin: 0;
padding: 0;
`

export default function RootLayout({ children }) {
  return (
    <html>
      <StyledBody style={{ margin: '0px' }}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </StyledBody>
    </html>
  )
}
