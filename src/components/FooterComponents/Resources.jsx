import { mainStyle, primaryStyle, secondaryStyle } from "./footerComponentStyle"

const Resources = () => {
  return (
    <div style={{...mainStyle,gap:'0.6rem'}}>
        <div style={primaryStyle}>Resources</div>
        <div style={mainStyle}>
            <div style={secondaryStyle}>Blog</div>
            <div style={secondaryStyle}>Case Studies</div>
            <div style={secondaryStyle}>Demo</div>
            <div style={secondaryStyle}>eBooks</div>
            <div style={secondaryStyle}>Reports</div>
            <div style={secondaryStyle}>Product Updates</div>
            <div style={secondaryStyle}>Webinars</div>
            <div style={secondaryStyle}>Developers</div>
            <div style={secondaryStyle}>Envoy Store</div>
        </div>
    </div>
  )
}

export default Resources
