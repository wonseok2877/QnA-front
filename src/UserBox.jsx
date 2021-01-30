import { useContext, useState } from "react";
import { QnAContext } from "./context/Finder";


const UserBox=()=>{
    // const { userName, setU } = useContext(QnAContext);
    // const [name, setName] = useState("")
    // const [username, setUserName] = useState(localStorage.getItem("user"))
    const {name, setName} = useContext(QnAContext);
    const {username, setUserName} = useContext(QnAContext);
    const {globalName, setG} = useContext(QnAContext);
    setG(username)

    // const [test, setTest] = useState(true)
    const current = localStorage.getItem("user");
    // if(current && test){
    //     const value = window.confirm(`${current}입니까?`)
    //     if(value){
            
    //         setName(current)
    //         setTest(false)
    //         console.log(test);
    //     }
    // }else{
    //     console.log("없어");
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setU(e.target.value)
        localStorage.setItem("user",name)
        setUserName(name)
        setG(name)
      };
      console.log(username);


      const handleClick=()=>{
          localStorage.removeItem("user")
          setUserName(null)
          setG(null)

      }

    return(
    <div>{!username ? <form className="d-flex mt-5" onSubmit={(e) => handleSubmit(e)} >
    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}  placeholder="이름을 입력해 주세용" />
    </form>: <div>{username}<button onClick={handleClick}>변경</button></div>
    }

        </div>
    )

}

export default UserBox