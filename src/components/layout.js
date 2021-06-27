import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import SkipToContent from "./ui/skip-to-content"
import BgElement from "../components/ui/bgElement"

const Layout = ({
  location,
  hero,
  headerColor,
  hideHeader,
  hideFooter,
  children,
  decor,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <SkipToContent />

      {decor && <BgElement side="right" className="top-32" />}

      {!hideHeader && <Header color={headerColor} />}

      <main id="main">
        {hero}
        {children}
      </main>

      {!hideFooter && <Footer />}
    </div>
  )
}

Layout.defaultProps = {
  decor: true,
}

export default Layout
