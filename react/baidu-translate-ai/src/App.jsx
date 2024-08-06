import { useState } from "react"
import LanguageSelector from "./components/LanguageSelector"
import './App.css'
import { useEffect, useRef } from "react"

const App = () => {
  // useState 现在最牛逼的hook技术
  // vue 借鉴了 react hooks 思想
  // useReducer vue-router 框架本身就内置了hook函数
  const [ sourceLanguage, setSourceLanguage ] = useState('eng_Latn')
  const [ targetLanguage, setTargetLanguage ] = useState('zho_Hans')
  const [ input,setinput ] = useState('zho_Hans')
  const [ output,setoutput ] = useState('zho_Hans')
  const [disabled,setDisabled] = useState(false)
  // 
  const worker = useRef(null);// 响应式 web worker 对象


  useEffect(()=>{
    // 局部 onMouted
    // console.log('mounted');
    if(!worker.current){
      worker.current = new Worker(
        new URL("./worker.js",import.meta.url),{
        type:'module'
      })
      console.log(worker.current);
      
      worker.current.addEventListener('message',(e)=> {
        console.log(e);
      })
      
    }
    // worker.current = new Worker()
    return () => {
      console.log('unmounted');
      // worker.current = null;
    }
  })
  const translate = () => {
    setDisabled(true)
    // ai 任务复杂， event loop 在这里就不灵了
    // 前端游戏，加密，压缩，AI，多线程 Web Worker
    // html5 浏览器提供的多线程机制(纯计算类，不能做DOM，没有this)
    worker.current.postMessage({
      text:"请帮我翻译"
    })
  }

  return (
    <>
      <h1>Transformers.js</h1>
      <p>来自HuggingFace 抱抱脸社区的NLP js库，完成常见的AI 任务</p>
      <p>未来端模型将大放异彩</p>    
      <div className="container">
        <LanguageSelector
          type="Source"
          defaultLanguage={sourceLanguage}
          onChange={x => setSourceLanguage(x.target.value)}
        />
        <LanguageSelector
          type="Target"
          defaultLanguage={targetLanguage}
          onChange={x => setTargetLanguage(x.target.value)}
        />
        
      </div>
      <div className="textbox-container">
        <textarea
          value={input}
          row={3}
          onChange={(e)=>setinput(e.target.value)}
          ></textarea>
          <textarea
          value={output}
          row={3}
          readOnly
          ></textarea>
      </div>
      <button disabled={disabled} onClick={translate}></button>
    </>
  )
}
export default App