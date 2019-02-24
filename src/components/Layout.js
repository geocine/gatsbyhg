import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './style.css'

const TemplateWrapper = ({ children }) => (
  <div className="layout">
    <Helmet title="Home | Gatsby + WordPress" />
    <header>Header</header>

    <Navbar />

    <main>{children}</main>

    <aside>Sidebar</aside>

    <footer>Footer</footer>
  </div>
)

export default TemplateWrapper
