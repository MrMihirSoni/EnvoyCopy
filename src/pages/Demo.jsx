import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
const Demo = () => {
    const {isLoggedIn} = useContext(AuthContext)
    return (<>
    {
        isLoggedIn?
        <div style={{ backgroundColor: '#aad9e6', padding: '4rem' }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '4rem',
            }}>Manage your whole workplace on one easy-to-use platform</h2>
            <p style={{
                textAlign: 'center',
                fontSize: '1.5rem',
                margin: '2rem'
            }}>See how we can help you create a workplace your employees will love</p>
            <div style={{paddingTop:'4rem', borderTop:'1px solid #3f4450'}}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '3rem',
                }}>Explore our interactive tours</h2>
                <p style={{
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    margin: '2rem'
                }}>See how Envoy works by exploring interactive product tours of various areas of Envoy.</p>
                <img style={{width:'40rem',display:'block',margin:'auto',}} src="https://assets-global.website-files.com/64820bb890b5d776bb0c9faf/65180b931b5b8c2eda4cdaae_nurture-page-hero.gif" alt="" />
            </div>
        </div>
        :
        <h1 style={{
            textAlign:'center',
            margin:'20rem'
          }}>You need to log in first</h1>
    }
    </>
    )
}

export default Demo
