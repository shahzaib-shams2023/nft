import './App.css';

function App() {
  return (
    <div className="App">
        <div class="main-content">
       
        <div class="side-bar">
      
        <div class="logo">
         <img src="./images/logo.png" alt="" />
        </div>
       
        <div class="links">
          <ul>
              <li class="link-item selected"><a href=""  ><i class='bx bx-home-alt' ></i></a></li>
              <li class="link-item"><a href=""><i class='bx bx-grid-alt' ></i></a></li>
            <li class="link-item"><a href=""><i class='bx bx-cog'></i></a></li>
          </ul>
        </div>
   
        <div class="notification">
         <a href="">
            <div class="dot-icon"></div>
            <i class='bx bx-bell' ></i>
         </a>
        </div>
      </div>
  
          <div class="content-section">
           
            <div class="top-account-section">
           
             <div class="left-side account-content">
                <div class="logo"><img src="./images/avatar.png" alt="" /></div>
                &nbsp; <span class="currency"> ETH/USDT</span>
                <div class="ratings">
                    <i class='bx bx-up-arrow-alt' ></i>&nbsp;4593004
                    <i class='bx bx-up-arrow-alt' ></i>&nbsp;4593004
                </div>
             </div>
            
             <div class="right-side account-content">
                <div class="logo"><img src="./images/avatar.png" alt="" /></div>
                &nbsp; <span class="currency"> ETH/USDT</span>
                <div class="title">
                    <span><b>UserId:</b>3049ajie</span>
                </div>
             </div>
            </div>
           
            <div class="top-title-section">
                <div class="title">
                    <h3>Dashboard</h3>
                </div>
                <div class="icon">
                    <i class=' icon bx bx-loader-circle' ></i>
                </div>
            </div>
           
  
        <div class="row-for-cards">
            <div class="card">
                <div class="heading">
                    <div class="text">The Eyedeas #1093</div>
                    <div class="icon-heading"><i class='bx bx-dots-horizontal-rounded'></i></div>
                </div>
                <img src="./images/1.png" alt="" />
                <div class="titles">
                    <div class="title-content"><div class="text">Owner</div> <div class="code" > 2398aasjd903</div></div>
                    <div class="title-content"><div class="text">Owner</div> <div class="code" > 2398aasjd903</div></div>
                    <div class="title-content"><div class="text">Owner</div> <div class="code" > 2398aasjd903</div></div>
                </div>
            </div>
          
            <div class="card">
                <div class="heading">
                    <div class="text">The Eyedeas #1093</div>
                    <div class="icon-heading"><i class='bx bx-dots-horizontal-rounded'></i></div>
                </div>
                <img src="./images/2.png" alt="" />
                <div class="titles">
                    <div class="title-content"><div class="text">Owner</div> <div class="code" > 2398aasjd903</div></div>
                    <div class="title-content"><div class="text">Owner</div> <div class="code" > 2398aasjd903</div></div>
                    <div class="title-content"><div class="text">Owner</div> <div class="code" > 2398aasjd903</div></div>
                </div>

            </div>
            
            <div class="card">
                <div class="heading">
                    <div class="text">The Eyedeas #1093</div>
                    <div class="icon-heading"><i class='bx bx-dots-horizontal-rounded'></i></div>
                </div>
                <img src="./images/3.png" alt="" />
                <div class="titles">
                    <div class="title-content"><div class="text">Owner</div> <div class="code" > 2398aasjd903</div></div>
                    <div class="title-content"><div class="text">Owner</div> <div class="code" > 2398aasjd903</div></div>
                    <div class="title-content"><div class="text">Owner</div> <div class="code" > 2398aasjd903</div></div>
                </div>

            </div>
        </div>
     
        <div class="footer">
            <div class="contents">
                
            <div class="arrow-left arrows">
                <i class='bx bx-chevron-left' ></i>
            </div>
            <div class="arrow-right arrows">
                <i class='bx bx-chevron-right' ></i>
            </div>
            </div>
        </div>
        
      </div>
   
    </div>
    </div>
  );
}

export default App;
