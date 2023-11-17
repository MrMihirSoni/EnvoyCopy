import React, { useContext, useState } from 'react';
import {style1, style1h, style234567, style234567h, style8, style8h} from './navbarStyles';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';
import { UserDetails } from '../context/UserDetails';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [hovering1, setHovering1] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  const [hovering3, setHovering3] = useState(false);
  const [hovering4, setHovering4] = useState(false);
  const [hovering5, setHovering5] = useState(false);
  const [hovering6, setHovering6] = useState(false);
  const [hovering7, setHovering7] = useState(false);
  const [hovering8, setHovering8] = useState(false);
  const {isLoggedIn} = useContext(AuthContext);
  const {userDetails} = useContext(UserDetails);
  const navigate = useNavigate()
  const signup = ()=>{
    navigate('/signUp')
  }

  return (
    <div style={{
      display:'flex',
      justifyContent:'space-between',
      height:'5.5rem',
      padding:'1.5rem 1rem',
      borderBottom:'1px solid #e2e2e6'
    }}>
      <Link to='/' style={{
        display:'flex',
        alignItems: 'center',
        textDecoration:'none'
      }}>
        <img style={{
          height: '100%'
        }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX////vOTTvMy3uJB3uIRruKCHuKyX96+vybmv3qqn5v77vNTDxV1P70dD84uLybGn6y8rwRED4srHwSkbzfXv4ubjvNC7yZ2TuLijuHBPvPTj2l5X/+fn82tn1kpDxXVr+7+/83dz0hIL2oaDxU0/uEQH1i4n4tbT5vrz1lJL3p6YIFiq8AAAETElEQVR4nO3di3KiMBTGcSCBqvFSL1XwUull2+6+/wPuzmwB2wEnJznMCfb7PUDKf0VlDQlRBAAAAAAAAAA/z3F+mgk7lf3l3R3OiVbStN6PHnrpOy2K3MQhMEmqDkf2wGedSJddysyMt69cZ9JN35jihTVwH9QL+J8+MBYuAwyM42LFFrjJpWPaFSemwFkhndLBLJkK15dfEiaR9eULS72zBM50k5eq80LU6DVV2+Z41iyFm6R5/fq5mKCZndM6UbO8E+sTw5g7jvH8PdaJOcc3xlN9krJ9dHlbVKeVOTOMNqn+wbY7htF4zFX9IjKMtqqu1zK+L1hvy+qdoxiuwMdVYTrxH4zLrvo8VaX/YEEWjqo3omL48EOhCBSSoFAECklQKAKFJCgUgUISFIpAIQkKRaCQBIUiUEjiVnj3tl6STMeUg5IvnBS5IUqXpf344oV3LnOqCWEOQrzw2WlaXNvfQCJeuHS6tSizv39EvHDvVEiYDBQv3DndnaI+rP+AeOHE5ZPGZPYzZeKF0UaTz1NT3NuPL18Yjan3aepXyhx6AIVRNO/zvtggCnuFQhIUikAhCQpFoJAEhSJQSIJCESgkQaEIFJKgUAQKSRwLj7N7kifSQQVQ+JgRl2gXS8LPpQEU7prFV7bML8KyMfHCB93VcU06oF/1z05zT6n9iyheePuza26Ftz9DOqRZbqfCfGp/UAEVWt9sslWvhKWE4RSata3dsO4Yqgt1T2ujAyqc+x9AGxSSoLANCr2hkASFbVDoDYUkKGyDQm8oJEFhGxR6QyEJCtv8pMKb/yUqf1l18tnBL5zCOM866WnpfFABFV6TGOcN8wZSGGePrgc1lEL3XXKHUhgTVqt9NZRCE7se1FAK843rQQ2k0LhfDwRU2L1tda5i2n1Ql8IpTEabLm8++0qHU3j716U/4P8WKHSEQhIUtkGhNxSSoLANCr2hkASFbVDoDYUkKGyDQm8oJMEvUW2a9Ra7kaU30oRpOIX2j0vMC8pP/AEVEmjCw2GHWRjrAa0hdStU9n9goIXpu/UfEC+cbrsqrr6G9uvVxQvHqqviCkN4WqN4YbSmbwZtCsL48oXHRZF23yvURmXD2lMhiuYP3fd7taH0hVHYLxSSoFAECklQKAKFJCgUgUISFIpAIQkKRaCQBIUiUEiCQhGshau60P6xaL3bVdMGqvQf7KPaTpaw+Wbv6qkf5bxIs3Gq5iCM8R+MyT3rMR3rHXOz3wzDsbhYdcQxXLNlrgrjPD1O68crZqT9JLusmn2d09fV01zY7DFvnh+pS47C48VkoMmUFqYuJu54TtIoOmRxoAr3FYxfHI3TtHz/3FfZfjdzeaxo/7Z7hi/DT+MQEz2WEbf4E16iyZjehJ8+tNMjfvuTLblv7CxHRTiNJtd9XHycFjrNE+pD4bltt0mmzaHsIfCfcnIYnafCdpux/e70AAAAAAAAAAAAwOcvjIKb8SbPoTkAAAAASUVORK5CYII=" alt="" />
        <h2 style={{
          fontWeight: '500'
        }}>Envoy</h2>
      </Link>
      <div style={{
        display:'flex',
        alignItems: 'center',
        gap:'1.8rem'
      }}>
        <button onMouseEnter={()=>setHovering1(true)} onMouseLeave={()=> setHovering1(false)} style={hovering1?style1h:style1}>We'er hiring!</button>
        <button onMouseEnter={()=>setHovering2(true)} onMouseLeave={()=> setHovering2(false)} style={hovering2?style234567h:style234567} >Products</button>
        <button onMouseEnter={()=>setHovering3(true)} onMouseLeave={()=> setHovering3(false)} style={hovering3?style234567h:style234567}>Solutions</button>
        <button onMouseEnter={()=>setHovering4(true)} onMouseLeave={()=> setHovering4(false)} style={hovering4?style234567h:style234567}>Resources</button>
        <Link to='/demo' onMouseEnter={()=>setHovering5(true)} onMouseLeave={()=> setHovering5(false)} style={hovering5?style234567h:{...style234567, textDecoration:'none'}}>Demo</Link>
        <button onMouseEnter={()=>setHovering6(true)} onMouseLeave={()=> setHovering6(false)} style={hovering6?style234567h:style234567}>Pricing</button>
        <Link to='/login' onMouseEnter={()=>setHovering7(true)} onMouseLeave={()=> setHovering7(false)} style={hovering7?style234567h:{...style234567, textDecoration:'none'}}>{isLoggedIn?userDetails.userName:'Log in'}</Link>
        <button onClick={signup} onMouseEnter={()=>setHovering8(true)} onMouseLeave={()=> setHovering8(false)} style={hovering8?style8h:style8}>Get Started</button>
      </div>
    </div>
  )
}

export default Navbar;
