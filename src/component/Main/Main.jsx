import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
const {onSent,recentPrompt,showResult,loading,resultData,input,setInput}=useContext(Context)

  return (
    <div className='main'>

        <div className="nav">
            <p>Gemini</p>
            {/* <img src={assets.user_icon} alt="" /> */}
        <img src="https://i.pinimg.com/564x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" alt="" />
         </div>
        <div className="main-container">
            {!showResult?<>
                <div className="greet">
                <p><span>Hello, Neeraj</span></p>
                <p>How can I help you today?</p>
            </div>
                <div className="cards">
                <div className="card">
                    <p>Draft and email to a recruiter to accept a job offer </p>
              <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Create a new 12 week study plan for learning a new language</p>
              <img src={assets.bulb_icon} alt="" />
                </div>
                 <div className="card">
                    <p>help me pick a movie to watch based on a genre</p>
              <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p> Brainstorm presentation ideas about a topic</p>
              <img src={assets.code_icon} alt="" />
                </div>
            </div>
        
            </> :
            <div className='result'>
                <div className="result-title">
{/* <img src={assets.user_icon} alt="" /> */}
<img src="https://i.pinimg.com/564x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" alt="" />

<p>{recentPrompt}</p>

                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />


                    </div>:
 <p> {resultData}</p>
                    }
  {/* <p dangerouslySetInnerHTML={{__html:resultData}}> {resultData}</p> */}
  {/* <p> {resultData}</p> */}

                </div>
                
                </div>
                }
            
           
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"placeholder='Enter a prompt here' />
                <div>
<img src={assets.gallery_icon} alt="" />
<img src={assets.mic_icon} alt="" />
{input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null
}
                </div>
                </div>
                <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double-check its responses.    
                </p>
            </div>
        </div>
    </div>



  )
}

export default Main