import { mainStyle, primaryStyle, secondaryStyle } from "./footerComponentStyle"

const Solutions = () => {
  return (
    <div style={{...mainStyle,gap:'0.6rem'}}>
        <div style={primaryStyle}>Solutions</div>
        <div style={mainStyle}>
            <div style={secondaryStyle}>Centralize workplace management</div>
            <div style={secondaryStyle}>Employee and visitor experience</div>
            <div style={secondaryStyle}>Safety, security and compliance</div>
            <div style={secondaryStyle}>Workplace utilizations and insights</div>
            <div style={secondaryStyle}>Workplace and buildings</div>
            <div style={secondaryStyle}>Manufacturing</div>
            <div style={secondaryStyle}>Pharma & biotech</div>
            <div style={secondaryStyle}>Professional services</div>
            <div style={secondaryStyle}>Technology</div>
        </div>
    </div>
  )
}

export default Solutions
