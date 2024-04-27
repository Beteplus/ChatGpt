import react from "react";
import "./App.css";
import chatGpt from "./assets/assets/chatgpt.svg";
import addBtn from "./assets/assets/add-30.png";
import msgIcon from "./assets/assets/message.svg";
import home from "./assets/assets/home.svg";
import save from "./assets/assets/bookmark.svg";
import rocket from "./assets/assets/rocket.svg";
import sendBtn from "./assets/assets/send.svg";
import userIcon from "./assets/assets/user-icon.png";
import gptImg from "./assets/assets/chatgptLogo.svg";
function App() {
  return (
    <>
      <div className="App">
        <div className="sidebar">
          <div className="upperside">
            <div className="upperSideTop">
              <img src={chatGpt} alt="logo" className="logo" />
              <span className="brand">ChatGpt</span>
            </div>
            <button className="midBtn">
              <img src={addBtn} alt="" className="addBtn" />
              New Chat
            </button>
            <div className="upperSideBottom">
              <button className="query">
                <img src={msgIcon} alt="query" />
                what is programming
              </button>
              <button className="query">
                <img src={msgIcon} alt="query" />
                How to Use Api
              </button>
            </div>
          </div>

          {/* ===============lower Side================= */}
          <div className="lowerside">
            <div className="listitems">
              <img src={home} alt="" className="listImg" />
              Home
            </div>
            <div className="listitems">
              <img src={save} alt="" className="listImg" />
              Saved
            </div>
            <div className="listitems">
              <img src={rocket} alt="" className="listImg" />
              Upgrade to Pro
            </div>
          </div>
        </div>
        <div className="main">
          <div className="chats">
            <div className="chat">
              <img src={userIcon} alt="" className="chatImg" />
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reprehenderit, distinctio dignissimos commodi in qui ea, voluptatibus vitae fuga sunt quam animi, optio mollitia inventore suscipit eius fugit. Cupiditate, sit.</p>
            </div>
            <div className="chat bot">
              <img src={gptImg} alt="" className="chatImg" />
              <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sit rerum ducimus cupiditate accusantium amet rem esse maxime accusamus, itaque nobis explicabo eligendi dolor ipsa eius iure? Alias, a consectetur.
              Delectus quis asperiores voluptatem molestiae esse architecto quaerat ut sit labore, similique ab omnis sed culpa officia amet reiciendis enim dolore debitis repellendus optio eos saepe distinctio. Maiores, ut ab?
              Quidem distinctio, temporibus nihil eveniet aliquid maiores vel veritatis adipisci pariatur laborum id accusantium consectetur cupiditate neque a ullam. Itaque inventore non, perspiciatis officia libero ratione enim provident velit numquam?
              Voluptate optio cupiditate cumque autem quia dolor impedit nemo repudiandae nisi similique nihil molestias expedita commodi asperiores animi exercitationem laudantium, </p>
            </div>
          </div>

          <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder="send a message" />
              <button className="send">
                <img src={sendBtn} alt="sendBtn" />
              </button>
            </div>
            <p>
              Chat-Gpt Clone By Bete Mengistu And also Chat-Gpt May produce in
              accurate information about person , place or facts
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
