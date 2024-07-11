import { useState ,useEffect} from 'react'
import axios from 'axios'
import img0 from "./Images/img0.jpg"
import img1 from "./Images/img1.jpg"
import img2 from "./Images/img2.jpg"
import img3 from "./Images/img3.jpg"
import img4 from "./Images/img4.jpg"

// import { Configuration, OpenAIApi } from "openai";


function Saaduddin() {
    const [Text, setText] = useState("")
    const [items, setItems] = useState([]);
 
    const API_Key = process.env.REACT_APP_API_KEY
    const onChangeHandler = (e) => {
        setText(e.target.value)
    }


        async function MachineResponse(text){
            try {
                const res = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${API_Key}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [
                            {
                                role: 'user',
                                content: text
                            }
                        ]
                    }) // body
                })
                const response = await res.json(); 
                console.log(response)
                const chatBotResponse = response.choices[0].message.content;
                setItems((items) => [...items, { text: chatBotResponse, type: 'chatbot' }]);//
                setText(''); 
            } catch (error) {
                console.log(error);
            }
        }

        useEffect(() => {
            // Only make the API call if Text has changed
            if (Text.trim() !== ''  &&  /[.!?]$/.test(Text)) {
            setItems((items) => [...items, { text: Text, type: 'user' }]);
             MachineResponse(Text);
             setText(''); 
            }
    
          }, [Text, API_Key]);



        const addNewItem = async () => {
            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            // If textareaValue is not empty, add it to the items array
            
            if (Text.trim() !== '') {
                // if text is from text area then its user
                setItems((items) => [...items, { text: Text, type: 'user' }]);
                await delay(600)
                setText('');   
            }
        };



        return (
            <>
                <div className="homepage">

                    <div className="col1">
                        <div className="leftside">
                            <section className="sec">
                                <h2>Chatbot <span className="material-symbols-outlined">chat</span></h2>
                                <p>Read - Design - Develop - Help - Chat </p>
                                <div id='img' >
                                    <img src={img0} className='image' alt='text' />
                                    <img src={img1} className='image' alt='text' />
                                    <img src={img2} className='image'alt='text'/>
                                    <img src={img3} className='image' alt='text'/>
                                    <img src={img4} className='image' alt='text'/>
                                </div>
                            </section>
                        </div>

                    </div>

                    <div className="col2">

                        <div className="rightside">

                            <h2>Chatbot
                                {/* <span><button><span className="material-symbols-outlined">close</span> </button></span> */}
                            </h2>
                            <section className='chatArea'>
                                {
                                    items.map((item, index) => {
                                        if (item.type === 'chatbot') {
                                            return (
                                                <ul key={index} className='Area'>
                                                    <li className="UserReceive" >
                                                        <h3>Chatbot <span className="material-symbols-outlined">chat</span></h3>
                                                        <p>{item.text}</p>
                                                    </li>
                                                </ul>
                                            )
                                        } else if (item.type === 'user') {
                                            return (
                                                <ul key={index} className='Area1'>
                                                    <li className="UserSend">
                                                        <p>{item.text}</p>
                                                    </li>
                                                </ul>
                                            )
                                        }
                                    }
                                
                                    ) 

                                }

                            </section>

                            <div className="User">
                                <textarea placeholder="Enter your query..." className="textArea" required onChange={onChangeHandler} value={Text} ></textarea>
                                <span id="Request" className="material-symbols-outlined" onClick={addNewItem}>send</span>
                            </div>
                         
                        </div>
                        <p style={{ color: 'white' }} className='special' >Completer your "query/question" by ending with one of the charaters   [ . OR ? OR ! ] </p>
                    </div>

                </div>









            </>
        )
    }

    export default Saaduddin



    // if (Text.toLowerCase() === 'hi') {
    //     chatBotRespnse = "How may I help you"
    // } else if (Text.toLowerCase() === 'i want to have a chat with you') {
    //     chatBotRespnse = "Ofcourse"
    // } else {
    //     chatBotRespnse = 'I did not understand that. Can you please rephrase?';
    // }