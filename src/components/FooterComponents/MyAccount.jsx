import { mainStyle, primaryStyle, secondaryStyle } from "./footerComponentStyle"

const MyAccount = () => {
  return (
    <div style={{...mainStyle, gap:'0.6rem'}}>
        <div style={primaryStyle}>My Account</div>
        <div style={mainStyle}>
            <div style={secondaryStyle}>Log in</div>
            <div style={secondaryStyle}>Sign in</div>
            <div style={secondaryStyle}>Support</div>
        </div>
    </div>
  )
}

export default MyAccount
