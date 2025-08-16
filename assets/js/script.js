'use strict';


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.getAttribute("data-select-item");
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "全部") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// modal variables
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalNextBtn = document.querySelector("[data-modal-next-btn]");
const modalPreBtn = document.querySelector("[data-modal-pre-btn]");
const projectItem = document.querySelectorAll("[data-project-item]");
// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
// modal toggle function
const projectModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}
// add click event to all modal items
for (let i = 0; i < projectItem.length; i++) {

  projectItem[i].addEventListener("click", function () {
    //modalImg.src = this.querySelector("[data-project-photo]").src;
    let modalImgArr = this.querySelectorAll("[data-project-photo]");
    let modalIndex = 0;
    modalImg.src = modalImgArr[modalIndex].src;
    modalImg.alt = this.querySelector("[data-project-photo]").alt;
    modalTitle.innerHTML = this.querySelector("[data-project-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-project-text]").innerHTML;
    
    modalNextBtn.addEventListener("click", () => {
      modalImg.classList.add("active");
      if( modalIndex < modalImgArr.length-1 ) { modalIndex ++ ; }
      else { modalIndex = 0} ;      
      modalImg.src = modalImgArr[modalIndex].src;
      setTimeout( () => {
        modalImg.classList.remove("active");
      },600)
    });
    modalPreBtn.addEventListener("click", () => {
      modalImg.classList.add("active");
      if( modalIndex > 0 ) { modalIndex -- ; }
      else { modalIndex = modalImgArr.length-1} ;      
      modalImg.src = modalImgArr[modalIndex].src;
      setTimeout( () => {
        modalImg.classList.remove("active");
      },600)
    });

    projectModalFunc();

  });

}
// add click event to modal close button
modalCloseBtn.addEventListener("click", projectModalFunc);
overlay.addEventListener("click", projectModalFunc);


// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.getAttribute("data-filter-btn");
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.getAttribute(`data-nav-link`) === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



const i18n = {
  // Sidebar
  title_name: { zh: "林新惇", en: "David Lin" },
  title_role: { zh: "懂一點後端的前端工程師", en: "Front-End Engineer with Back-End Basics" },
  label_birth: { zh: "出生年月", en: "Birth Date" },
  label_birth_value: { zh: "1991年10月", en: "October 1991" },
  label_location: { zh: "地區", en: "Location" },
  label_location_value: { zh: "高雄市", en: "Kaohsiung City" },
  // Navbar
  nav_about: { zh: "關於我", en: "About Me" },
  nav_resume: { zh: "學經歷", en: "Resume" },
  nav_portfolio: { zh: "作品集", en: "Portfolio" },
  // About
  about_p1: { zh: "專精於JavaScript、CSS、HTML等前端技術，曾接觸過C++、JAVA、Python、MATLAB，亦曾學習過計算機概論和資料結構", en: "Proficient in JavaScript, CSS, HTML  and other front-end technologies, with experience in C++, Java, Python, MATLAB, Computer Fundamentals and Data Structures." },
  about_p2: { zh: "曾寫過批次檔，方便自動化刪除導致系統無法開啟的log檔；曾為方便公司作業，寫過Google App Script，建立一個簡易的跨部門生產單系統；曾因個人買賣需求，自學過Python爬蟲。", en: "Developed batch scripts to auto-delete problematic log files; built a Google App Script–based inter-departmental production order system; self-learned Python for web scraping to support personal trading." },
  about_p3: { zh: "自2023年離職後學習前端程式語言，相關作品可皆展示於「作品集」標籤。", en: "After leaving my job in 2023, I started learning front-end programming languages. Related projects are all displayed in the “Portfolio” tab." },
  label_badges: { zh: "徽章", en: "Badges" },
  label_skills: { zh: "程式語言", en: "Programming Languages" },
  skill_proficient: { zh: "(熟練)", en: "(Proficient)" },
  skill_average: { zh: "(普通)", en: "(Average)" },
  skill_basic: { zh: "(尚可)", en: "(Basic)" },
  // Resume
  resume_education: { zh: "教育程度", en: "Education" },
  resume_school: { zh: "國立中山大學-社會學系(畢業)", en: "National Sun Yat-sen University - Department of Sociology (Graduated)" },
  resume_experience: { zh: "工作經歷", en: "Work Experience" },
  exp_selftaught: { zh: "全職自學程式語言", en: "Full-time Self-Study of Programming" },
  exp_selftaught_period: { zh: "2023/09 — 至今", en: "2023/09 — Present" },
  exp_selftaught_desc: { zh: "透過W3School、MDN、FreeCodeCamp和Codecademy等，自學全端工程師相關程式語言。", en: "Self-learning full-stack engineering related programming languages through W3School, MDN, FreeCodeCamp, Codecademy, etc." },
  company1_title: { zh: "行政人員", en: "Administrative Officer" },
  company1__desc1: { zh: "一、社團法人成立。", en: "1. Establishment of a social association." },
  company1__desc2: { zh: "二、高雄市地方型SBIR計畫申請及執行。", en: "2. aApplication and execution of the Kaohsiung City Local SBIR Program." },
  company1__desc3: { zh: "三、公司內外部活動辦理。", en: "3. Organization of internal and external company events." },
  company1__desc4: { zh: "四、文具及生產採購。", en: "4. Procurement of stationery and production materials." },
  company1__desc5: { zh: "五、主管交代事項。", en: "5. Tasks assigned by supervisor." },
  exp3_title: {zh: "兼職考生", en: "Part-time National Civil Service Examination" },
  exp3_desc: {zh: "打工兼職邊準備高普考。", en: "Working part-time while preparing for the national civil service examinations." },
  company2_title: { zh: "研究專員", en: "Research Specialist" },
  company2__desc1: { zh: "一、場地租借與PT招募。", en: "1. Venue rental and recruitment of part-time staff." },
  company2__desc2: { zh: "二、問卷調查與研究分析。", en: "2. Questionnaire surveys and research analysis." },
  company2__desc3: { zh: "三、禮品採購與支出核銷。", en: "3. Gift procurement and expense reimbursement." },
  company2__desc4: { zh: "四、微電影公開招標與執行。", en: "4. Public tender and execution of a micro-film project." },
  company3_title: { zh: "總務人員", en: "Administrative Officer" },
  company3__desc1: { zh: "一、採購與資產管理。", en: "1. Procurement and asset management." },
  company3__desc2: { zh: "二、員工旅遊與尾牙辦理。", en: "2. Organization of employee travel and year-end parties." },
  company3__desc3: { zh: "三、員工勞健保與出差勤計算。", en: "3. Handling employee labor and health insurance, as well as attendance." },
  company3__desc4: { zh: "四、建置對外營業分店之POS機、刷卡機與線上金流。", en: "4. Setting up POS systems, credit card machines, and online payment gateways for retail branches." },
  company3__desc5: { zh: "五、主管交代事項。", en: "5. Tasks assigned by supervisor." },
  // Portfolio 分類按鈕
  filter_all: { zh: "全部", en: "All" },
  filter_fullstack: { zh: "全端專案", en: "Full-Stack Projects" },
  filter_frontend: { zh: "前端開發", en: "Front-End Development" },
  filter_backend: { zh: "後端開發", en: "Back-End Development" },
  filter_other: { zh: "其他", en: "Other" },
  filter_select: { zh: "選擇分類", en: "Select Category" },
  // 專案標題、技術說明
  project_title: { zh: "使用技術與特點 :", en: "Technologies & Features:" },
  stock_title: { zh: "股市即時監測與量化交易", en: "Real-time Stock Market Monitoring and Quantitative Trading" },
  stock_desc2: { zh: "Node.js : 後端爬蟲與量化交易計算以node.js建立", en: "Node.js: Backend web scraping and quantitative trading calculations are built with Node.js." },
  stock_desc3: { zh: "React : 透過React Hook渲染頁面", en: "React: Renders pages using React Hooks." },
  stock_desc4: { zh: "Express : 作為伺服器，負責傳遞後端爬蟲與量化交易訊號給前端", en: "Express: Serves as the server, responsible for transmitting backend web scraping and quantitative trading signals to the frontend." },
  stock_desc5: { zh: "WebSocket : 讓前端與伺服器保持連線，即時更新最新資訊", en: "WebSocket: Allows the frontend to maintain a persistent connection with the server for real-time information updates." },
  stock_desc6: { zh: "Git : 使用Git進行版本控制", en: "Used Git for version control." },
  stock_desc7: { zh: "牽涉金錢交易，故不公開程式", en: "Given that it involves financial transactions, the program code is not publicly disclosed." },
  ptcgp_title: { zh: "PTCGP卡片收藏追蹤", en: "PTCGP Card Collection Tracker" },
  ptcgp_desc2: { zh: "Electron套件 : 將網頁包裝成桌面應用程式", en: "Electron: Packaged the web application into a desktop app." },
  ptcgp_desc3: { zh: "fs套件 : 將資料存放於本地端，並且可以進行兩個不同存檔間的交叉比對", en: "fs module: Stored data locally and allowed for cross-comparison between two different save files." },
  ptcgp_desc4: { zh: "Git : 進行版本控制，每次出新組包時方便更新", en: "Git: Used for version control, facilitating updates with each new set release." },
  ptcgp_desc5: { zh: "不寫死程式碼，方便(自製小工具)爬蟲程式擴展新卡包資料", en: "Flexible code design: Avoided hardcoding to easily extend new card set data with a custom web scraping tool." },
  booking_title: { zh: "Boovago(Booking仿作)", en: "Boovago (Booking Clone)" },
  booking_desc1: { zh: "MongoDB : 作為資料庫使用", en: "MongoDB: Used as the database." },
  booking_desc2: { zh: "Express : 作為後端伺服器，以RESTful API風格建立完整的新增、刪除、修改和查看功能", en: "Express: Served as the backend server, creating full CRUD functionalities with a RESTful API style." },
  booking_desc3: { zh: "React : 透過React Hook渲染頁面", en: "React: Rendered pages using React Hooks." },
  booking_desc4: { zh: "Node.js : 後端伺服器環境以node.js建立", en: "Node.js: The backend server environment was built with Node.js." },
  booking_desc5: { zh: "註冊和登入系統 :", en: "Registration and Login System:" },
  booking_desc6: { zh: "使用Git進行版本控制", en: "Used Git for version control." },
  booking_desc7: { zh: "註冊時，前端會檢查「確認密碼」是否一致，後端會確認名稱與信箱是否與現有帳號重複", en: "During registration, the frontend checks if the 'confirm password' matches, and the backend verifies if the name and email are already in use." },
  booking_desc8: { zh: "註冊後，後端會將密碼透過Bcrypt套件加密，確保資料庫不會直接紀錄密碼", en: "After registration, the backend encrypts the password using the Bcrypt package to ensure passwords are not stored directly in the database." },
  booking_desc9: { zh: "登入後，以JSON Web Token作資訊保存與驗證", en: "After login, JSON Web Token (JWT) is used for information storage and validation." },
  booking_desc10: { zh: "後台系統", en: "Admin Panel:" },
  booking_desc11: { zh: "登入後，右上角會出現「後台系統」", en: "After logging in, an 'Admin Panel' link appears in the top right." },
  booking_desc12: { zh: "可使用「帳號:123；密碼:123」登入；亦可自行註冊帳號後登入", en: "You can log in with 'Username: 123; Password: 123' or register your own account." },
  booking_desc13: { zh: "API原先設計需登入為Admin才會出現，由於為Demo版，為了有更多觸及率，故拔除驗證功能", en: "The API was originally designed to require an Admin login. For the demo version, the validation has been removed for wider accessibility." },
  booking_desc14: { zh: "具備CRUD功能的飯店管理與帳號管理功能", en: "Includes hotel and account management with full CRUD functionality." },
  booking_desc15: { zh: "*進入網頁後，後端冷啟動約需兩分鐘，敬請靜待後端啟動，以完整網頁體驗", en: "*After entering the website, the backend cold start takes about two minutes. Please wait for the backend to start for a full web experience." },
  booking_desc16: { zh: "*目前並未於各縣市皆創建飯店，縣市與飯店數量可見首頁「探索台灣」", en: "*Hotels have not been created in all cities. The number of cities and hotels can be seen on the homepage 'Explore Taiwan'." },
  booking_desc17: { zh: "*未設計響應式網頁，推薦使用1980*1080以上之裝置，可獲得最佳體驗", en: "*The website is not responsive. It is recommended to use a device with a resolution of 1980*1080 or higher for the best experience." },
  booking_desc18: { zh: "*暫未設置模糊搜尋，地點需完整輸入(如高雄市、台北市)", en: "*Fuzzy search is not yet implemented. Please enter the full location name (e.g 高雄市、台北市)." },
  todolist_title: { zh: "代辦事項清單", en: "Todo List" },
  todolist_desc1: { zh: "代辦事項網頁有兩個版本 :", en: "There are two versions of the todo list webpage:" },
  todolist_desc2: { zh: "版本一(圖1-圖6) - PERN專案 - 使用技術與特點 :", en: "Version 1 (Pics 1-6) - PERN Stack Project - Technologies & Features:" },
  todolist_desc3: { zh: "PostgreSQL : 作為代辦事項資料庫", en: "PostgreSQL: Used as the database for todo items." },
  todolist_desc4: { zh: "Express : 作為後端伺服器，以RESTful API風格建立完整的新增、刪除、修改和查看功能", en: "Express: Served as the backend server with full CRUD functionality in a RESTful API style." },
  todolist_desc5: { zh: "React : 透過React Hook渲染頁面，並以Bootstrap達到響應式網頁設計(RWD)", en: "React: Rendered the page using React Hooks and achieved responsive web design (RWD) with Bootstrap." },
  todolist_desc6: { zh: "Node.js : 後端伺服器環境以node.js建立", en: "Node.js: The backend server environment was built with Node.js." },
  todolist_desc7: { zh: "使用Git進行版本控制", en: "Used Git for version control." },
  todolist_desc8: { zh: "*尚未找到無期限免費方案的PostgreSQL雲端空間，故暫無Demo網頁", en: "*A free, indefinite PostgreSQL cloud space has not been found yet, so there is no demo page for now." },
  todolist_desc9: { zh: "版本二(圖7-圖10) - React前端網頁 - 使用技術與特點 :", en: "Version 2 (Pics 7-10) - React Frontend Webpage - Technologies & Features:" },
  todolist_desc10: { zh: "LocalStorage : 使用本地端的LocalStorage作為資料庫", en: "LocalStorage: Used the browser's LocalStorage as the database." },
  todolist_desc11: { zh: "React : 透過React Hook渲染頁面", en: "React: Rendered the page using React Hooks." },
  todolist_desc12: { zh: "使用Git進行版本控制", en: "Used Git for version control." },
  onlineResume_title: { zh: "林新惇的線上履歷", en: "David Lin's Online Resume" },
  onlineResume_desc1: { zh: "無第三方套件，沒有模板網頁的既視感!", en: "No third-party libraries, avoiding the 'template' look!" },
  onlineResume_desc2: { zh: "由 HTML + CSS + JavaScript 純手刻組成!", en: "Hand-coded from scratch with HTML, CSS, and JavaScript!" },
  onlineResume_desc3: { zh: "響應式網頁設計，大大小小裝置都可以舒適觀看!", en: "Responsive web design for comfortable viewing on all device sizes!" },
  onlineResume_desc4: { zh: "使用Git進行版本控制，且程式碼設計具擴展性，方便未來持續新增!", en: "Uses Git for version control, with an extensible code design for easy future additions!" },
  tool_title: { zh: "自製小工具", en: "Custom Tools" },
  tool_desc1: { zh: "「PTCGP卡片收藏追蹤」爬蟲自動更新卡包資訊", en: "' PTCGP Card Collection Tracker ' Crawler for Automatic Set Updates" },
  tool_desc2: { zh: "axios : 用於抓取網頁資料", en: "axios: Used to fetch web data." },
  tool_desc3: { zh: "cheerio : 用於分析 HTML 結構，並提取目標資料", en: "cheerio: Used to parse the HTML structure and extract target data." },
  tool_desc4: { zh: "fs : 將清洗後的資料儲存進卡包資訊", en: "fs: Saved the cleaned data into the card set information file." },
  tool_desc5: { zh: "因爬取特定網頁，故不公開程式", en: "Code not public due to scraping a specific website." },
  tool_desc6: { zh: "網頁驗證碼自動辨識後填入", en: "Automatic Web CAPTCHA Recognition and Filling" },
  tool_desc7: { zh: "selenium-webdriver : 用於瀏覽器自動化擷取驗證碼，並於tesseract.js辨識後自動填入", en: "selenium-webdriver: Used for browser automation to capture CAPTCHA images, which are then recognized and automatically filled in by tesseract.js." },
  tool_desc8: { zh: "tesseract.js : 用於驗證碼的文字辨識，進行文件數位化和內容提取", en: "tesseract.js: Used for CAPTCHA text recognition, document digitization, and content extraction." },
  tool_desc9: { zh: "此為個人練習，為避免濫用，故不公開程式", en: "This was a personal practice project; code is not public to prevent misuse." },
  PM_title: { zh: "簡易生產管理(GAS+LineBot)", en: "Production Management (GAS+LineBot)" },
  PM_desc1: { zh: "這是2022年工作時所寫的小程式。", en: "This is a small program I wrote during my work in 2022." },
  PM_desc2: { zh: "當時公司生產管理的流程為: 生管人員製單->將Excel上傳NAS->Line通知各部門自行下載。", en: "At that time, the company's production management process was: production control staff create an order -> upload the Excel file to NAS -> notify each department via Line to download it themselves." },
  PM_desc3: { zh: "為了優化這個流程，於是我寫了這支程式。在生管人員新增生產單後，透過Google App Script，將此生產單傳至各部門的各Google Sheets，並且透過Line Bot自動發送訊息。", en: "To optimize this process, I wrote this script. After the production control staff creates a new production order, it is sent to each department's respective Google Sheets via Google Apps Script, and a message is automatically sent via a Line Bot." },
  PM_desc4: { zh: "額外的附加功能:", en: "Additional Features:" },
  PM_desc5: { zh: "在「生產單簡表」的部分，可用於讓各部門回報現況，其將透過Google App Script將回報發送至各部門的Google Sheet。", en: "The 'Production Order Summary' section can be used by each department to report their status, which is then sent to each department's Google Sheet via Google Apps Script." },
  PM_desc6: { zh: "生管人員新增生產單時，會同時在各部門的Google Sheets「日曆總表」建立出貨日期，以方便大家留意出貨期限", en: "When a new production order is created, the shipping date is also created in each department's 'Calendar Summary' Google Sheet to help everyone keep track of shipping deadlines." },
  PM_desc7: { zh: "「日曆總表」以設定規則，只要更改年份或月份，便會自行調整日期", en: "The 'Calendar Summary' is set up with rules to automatically adjust the dates when the year or month is changed." },
  PM_desc8: { zh: "Google Sheets和Line Bot由於離職時已歸還帳號，故無法展示或截圖，請多包涵", en: "The Google Sheets and Line Bot cannot be displayed or screenshotted as the accounts were returned upon my departure. Thank you for your understanding." }
};

// 語系狀態
let currentLang = 'en';

// 切換函式
function toggleLanguage() {
  currentLang = (currentLang === 'zh') ? 'en' : 'zh';
  document.getElementById('lang-toggle').innerText = (currentLang === 'zh') ? '中 / EN' : 'EN / 中';
  
  // 遍歷所有標註元素並替換文字
  document.querySelectorAll('[data-i18n-key]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-key');
    if (i18n[key]) {
      elem.innerText = i18n[key][currentLang];
    }
  });
}

// 綁定按鈕
document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);

// 頁面載入時也可呼叫一次，確保預設語系文字正確
toggleLanguage();