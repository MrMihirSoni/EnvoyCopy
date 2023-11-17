import { mainStyle, primaryStyle, secondaryStyle } from "./footerComponentStyle"

const Products = () => {
  return (
    <div style={{...mainStyle, gap:'0.6rem'}}>
        <div style={primaryStyle}>Products</div>
        <div style={mainStyle}>
            <div style={secondaryStyle}>Workplace</div>
            <div style={secondaryStyle}>Visitors</div>
            <div style={secondaryStyle}>Connect</div>
            <div style={secondaryStyle}>Mobile App</div>
            <div style={secondaryStyle}>Integrations</div>
            <div style={secondaryStyle}>Developers</div>
        </div>
    </div>
  )
}

export default Products
