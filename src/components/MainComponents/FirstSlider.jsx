import { useState } from "react"
import { contentDiv, mainDiv, img, btn, h4Div } from "./firstSliderStyle";
import { Link, useHref } from "react-router-dom";

const FirstSlider = () => {
    const [count, setCount] = useState(1);
    const increment = () => {
        if (count < 4) setCount(count + 1);
    }
    const decrement = () => {
        if (count > 1) setCount(count - 1);
    }
    
    return (
        <div style={{
            margin:'8rem 0'
        }}>
            <div>
                {
                    (count == 1) ? <div style={mainDiv}>
                        <div style={contentDiv}>
                            <div style={h4Div}><h4 style={{color:'white', fontWeight:'600'}}>NEW VIDEO</h4></div>
                            <div><h3 style={{
                                fontSize:'3rem',

                            }}>Unlock the full potential of your workplace.</h3></div>
                            <div><button onClick={()=> window.open('https://envoy.com/blog/the-future-of-workplace-management-is-here', '_blank')} style={btn}>Learn more!</button></div>
                        </div>
                        <div><img style={img} src="https://assets-global.website-files.com/64820bb890b5d776bb0c9faf/6542c34ba83d0fcd2be4a52a_Video_platform-Promo_card-Envoy-231018-p-500.png" alt="" /></div>
                    </div> :
                    (count == 2) ? <div style={mainDiv}>
                        <div style={contentDiv}>
                            <div style={h4Div}><h4 style={{color:'white', fontWeight:'600'}}>NEW REPORT</h4></div>
                            <div><h3 style={{
                                fontSize:'3rem',

                            }}>Workplace compliance that's so effective, it's future proof.</h3></div>
                            <div><button onClick={()=> window.open('https://envoy.com/ebooks/workplace-compliance-report','_blank')} style={btn}>Download the report!</button></div>
                        </div>
                        <div><img style={img} src="https://assets-global.website-files.com/64820bb890b5d776bb0c9faf/6542c23e3ebd98914bd2532e_Compliance_Report-Title-Card-Envoy-232410.png" alt="" /></div>
                    </div> :
                    (count == 3) ? <div style={mainDiv}>
                        <div style={contentDiv}>
                            <div style={h4Div}><h4 style={{color:'white', fontWeight:'600'}}>UPDATES</h4></div>
                            <div><h3 style={{
                                fontSize:'3rem',

                            }}>Don't miss out Envoy's latest product news.</h3></div>
                            <div><button onClick={()=> window.open('https://envoy.com/category/product','_blank')} style={btn}>Let's go!</button></div>
                        </div>
                        <div><img style={img} src="https://assets-global.website-files.com/64820bb890b5d776bb0c9faf/6523516cd4d7a45f935a20bc_updates-p-500.png" alt="" /></div>
                    </div> :
                    <div style={mainDiv}>
                        <div style={contentDiv}>
                            <div style={h4Div}><h4 style={{color:'white', fontWeight:'600'}}>DEMO</h4></div>
                            <div><h3 style={{
                                fontSize:'3rem',

                            }}>See Envoy in action! Join our weekly demo webinar.</h3></div>
                            <div><button onClick={()=> window.open('https://envoy.com/demo','_blank')} style={btn}>Register now!</button></div>
                        </div>
                        <div><img style={img} src="https://assets-global.website-files.com/64820bb890b5d776bb0c9faf/6523516c82dd299f7c0f824a_Demo-p-500.png" alt="" /></div>
                    </div>
                }
            </div>
            <div style={{
                margin:'2rem auto',
                width:'max-content',
                display:'flex',
                gap:'2rem'  
            }}>
                <button onClick={decrement} style={{
                    padding:'0 1.2rem 0.4rem 1.2rem',
                    border:'none',  
                    borderRadius:'5px',
                    fontSize:'2rem'
                }}>&lt;</button>
                <button onClick={increment} style={{
                    padding:'0 1.2rem 0.4rem 1.2rem',
                    border:'none',      
                    borderRadius:'5px',
                    fontSize:'2rem'
                }}>&gt;</button>
            </div>
        </div>
    )
}

export default FirstSlider
