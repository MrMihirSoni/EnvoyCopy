import { useNavigate } from "react-router-dom"
const StartDemo = () => {
    const navigate = useNavigate()
    const startDemo = ()=>{
        navigate('/demo')
    }
    const signup =()=>{
        navigate('/signUp')
    }
  return (
    <div style={{
        maxWidth:'800px',
        margin:'8rem auto'
        }}>
        <h2 style={{
            fontSize:'3.5rem',
            textAlign:'center',
            fontWeight:'600'
        }}>Connecting people, spaces and data to power the places where people work best together</h2>
        <div style={{
            width:'max-content',
            margin:'2rem auto',
            display:'flex',
            gap:'2rem'
        }}>
            <button onClick={startDemo} style={{
                padding:'0.8rem 1.2rem',
                borderRadius:'5px',
                border:'none',
                color:'white',
                backgroundColor:'red',
                cursor:'pointer',
                fontWeight:'600'
            }}>See a demo</button>
            <button onClick={signup} style={{
                padding:'0.8rem 1.2rem',
                borderRadius:'5px',
                border:'none',
                color:'red',
                cursor:'pointer',
                fontWeight:'600'
            }}>Start a trial</button>
        </div>
    </div>
  )
}

export default StartDemo
