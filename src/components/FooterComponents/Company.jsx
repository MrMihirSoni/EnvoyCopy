import { mainStyle, primaryStyle, secondaryStyle } from "./footerComponentStyle"

const Company = () => {
  return (
    <div style={{...mainStyle,gap:'0.6rem'}}>
      <div style={primaryStyle}>Company</div>
      <div style={mainStyle}>
        <div style={secondaryStyle}>About Envoy</div>
        <div style={secondaryStyle}>News Room</div>
        <div style={secondaryStyle}>Careers</div>
        <div style={secondaryStyle}>Data Security</div>
        <div style={secondaryStyle}>Contact Us</div>
        <div style={secondaryStyle}>Partner</div>
      </div>
    </div>
  )
}

export default Company
