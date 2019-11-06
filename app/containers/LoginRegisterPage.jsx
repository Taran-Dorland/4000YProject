import react from "react";
//import "./LoginRegisterPage.scss";
import { Login, Register } from "./components/index";

class LoginRegisterApp extends React.component {
constructor(props){
    super(props)
    this.state = {
        isLogginActive: true
    };
}
changeState() {
    //ES6 Object Destructuring
    const { isLogginActive } = this.state;
  
    //We toggle the component classes depending on the current active state 
    if (isLogginActive) {
      //Right side for login
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      //Left side for Register 
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    //Of course we need to toggel the isLogginActive by inversing it's previous state 
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
}

render(){
const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    return (
      <div className="LoginRegisterApp">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            containerRef={ref => (this.rightSide = ref)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
    return(
        <div className="RightS" ref={props.containerRef} onClick={props.onClick} >

       <div className="inner-container">

       <div className="text">{props.current} 
       </div>
       </div>
        </div>
    );
};

