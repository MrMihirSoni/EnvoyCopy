import Company from './FooterComponents/Company';
import Products from './FooterComponents/Products';
import Solutions from './FooterComponents/Solutions';
import Resources from './FooterComponents/Resources';
import MyAccount from './FooterComponents/MyAccount';
import { secondaryStyle } from './FooterComponents/footerComponentStyle';
import { input, inputButton } from './FooterComponents/inputStyle';
const Footer = () => {
    return (
        <div>
            <div style={{
                width: '90%',
                margin: 'auto',
                marginTop: '8rem',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <div style={{
                            fontSize: '3rem',
                            color: 'red',
                            fontWeight: '700',
                            marginBottom: '1rem'
                        }}>Try Envoy for free</div>
                        <div style={{
                            fontSize: '1.2rem',
                            fontWeight: '500'
                        }}>Transforming your workplace is easier than you think. Get started in minutes.</div>
                    </div>
                    <div>
                        <form action="">
                            <input type="email" style={input} placeholder='Enter your email' />
                            <input type="submit" onClick={(e)=>e.preventDefault()} style={{
                                ...inputButton,
                                marginLeft: '2rem'
                            }} value='Get Started' />
                        </form>
                    </div>
                </div>
                <div style={{
                    margin: '2.5rem 0',
                    padding: '1.5rem 0',
                    fontSize: '1.2rem',
                    borderTop: '1px solid #e2e2e6',
                    borderBottom: '1px solid #e2e2e6',
                    fontWeight: '600'
                }}><img style={{ height: '1.2rem' }} src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png' /> Contact our sales team today at <span style={{ color: 'red', cursor: 'pointer' }}>(877) 652-2808</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '3rem' }}>
                    <Products />
                    <Solutions />
                    <Resources />
                    <Company />
                    <MyAccount />
                </div>
            </div>
            <div style={{
                backgroundColor: '#ebebf0',
                padding: '2rem 0'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '90%',
                    margin: 'auto'
                }}>
                    <div style={secondaryStyle}>Platform status</div>
                    <div style={secondaryStyle}>Terms of service</div>
                    <div style={secondaryStyle}>Privacy policy</div>
                    <div style={secondaryStyle}>© 2023 Envoy. All rights reserved.</div>
                    <div style={{display:'flex', gap:'1rem'}}>
                        <div style={secondaryStyle}>Follow us</div>
                        <div><a href="https://www.facebook.com/profile.php?id=100073545931574" target='_blank'><img src="https://cdn-icons-png.flaticon.com/512/81/81341.png" alt="" style={{height:'1.3rem'}}/></a></div>
                        <div><a href="https://www.linkedin.com/in/mihir-soni-775221261" target='_blank'><img src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="" style={{height:'1.3rem'}}/></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
