const aboutTabs=document.querySelectorAll(".tab");
const aboutContent=document.querySelectorAll(".tab-content");
document.addEventListener("DOMContentLoaded",()=>{
    if(aboutTabs){
        aboutTabs[0].click();
    }
});
aboutTabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        e.preventDefault();
        aboutTabs.forEach((a)=>{
            a.classList.remove("active");
        });
        tab.classList.add("active");
        aboutContent.forEach((c)=>{
        c.classList.remove("active");
    });
    const activeTab=tab.dataset.section;
    document.getElementById(activeTab).classList.add("active");
    if(activeTab==="education"){
        const education=document.querySelector(".education-list");
        const educationList=[
            {
                id: 1,
                date: "2023-2027",
                degree: "Bachelor of Technology (BTech)",
                course: "Information Technology (IT)",
                institutions: "Vidya Jyothi Institute of Technology,Aziznagar,Hyderabad",
                details: " Studied core subjects like Data Structures, Web Development, Computer Network, Cloud Computing, Java Programming, Python Programming, C programming , Full Stack Development, and Operating System.Built multiplle academic projects i.e Real-Time Project, Mini Project, Mega Project using Machine Learning, Arduino ,IOT Devices and MERN stack.",
            },
            {
                id: 2,
                date: "2021-2023",
                degree: "Higher Secondary Education",
                course: "Mathematics, Physics, Chemistry (MPC)",
                institutions: "Shaheen Junior College,Shah-Ali Banda,Hyderabad",
                details: "Focused on Physics, Chemistry, and Mathematics.Developed a strong foundation in logical thinking and problem-solving.",
            },{
                id: 3,
                date: "2021",
                degree: "Secondary School Certificate",
                course:"SSC",
                institutions: "Royale Mission High School,Alijah Kotla,Hyderabad",
                details: "Completed foundational education with subjects including Science, Mathematics, Social, Computer, English.",
            }
        ];
        const eduactionContent=educationList.map((element)=>{
            return`
            <div class="asideContentBox" key=${element?.id}>
                        <h4>${element?.date}</h4>
                        <h3>${element?.degree}</h3>
                        <h2>${element?.course}</h2>
                        <div class="company-name">
                            <span></span>
                            <p>${element?.institutions}</p>
                        </div>
                        <p>${element?.details}</p>
                    </div>
            `;
        }).join("");
        if(education){
            education.innerHTML=eduactionContent;
        }
    }else if(activeTab==="skills"){
        const skills=document.querySelector(".skill-list");
        const skillsList=[
            {
                id: 1,
                name: "HTML - HYPER TEXT MARKUP LANGUAGE",
                icon: "assets/skills/html.png"
            },{
                id: 2,
                name: "CSS - CASCADING STYLE SHEET",
                icon: "assets/skills/css.png"
            },{
                id: 3,
                name: "TAILWIND-CSS",
                icon: "assets/skills/tailwind.png"
            },{
                id: 4,
                name: "JAVASCRIPT",
                icon: "assets/skills/js.png"
            },{
                id: 5,
                name: "REACT.JS",
                icon: "assets/skills/react.png"
            },{
                id: 6,
                name: "NODE.JS",
                icon: "assets/skills/node.png"
            },{
                id: 7,
                name: "SQL",
                icon: "assets/skills/sql.png"
            },{
                id: 8,
                name: "MONGODB",
                icon: "assets/skills/mongodb.png"
            },
            {
                id: 9,
                name: "MERN-FULL-STACK",
                icon: "assets/skills/mern.png"
            },{
                id: 10,
                name: "DOCKER",
                icon: "assets/skills/docker.jpg"
            },{
                
                id: 11,
                name: "OPENSHIFT",
                icon: "assets/skills/openshift.jpg"
            },{
                id: 12,
                name: "DATA-STRUCTURES-AND-ALGORITHM-BASICS",
                icon: "assets/skills/dsa.png"
            },
            {
                id: 13,
                name: "COMPUTER-NETWORK-BASICS",
                icon: "assets/skills/cn.png"
            },{
                id: 14,
                name: "DATA-ANALYTICS",
                icon: "assets/skills/dataanalytics.jpg"
            },{
                id: 15,
                name: "JAVA_PROGRAMMING",
                icon: "assets/skills/java.jpg"
            },{
                id: 16,
                name: "C_PROGRAMMING",
                icon: "assets/skills/c.jpg"
            },{
                id: 17,
                name: "PYTHON",
                icon: "assets/skills/py.jpg"
            },{
                id: 18,
                name: "OPERATING-SYSTEM-BASICS",
                icon: "assets/skills/os.jpg"
            },{
                id: 19,
                name: "LINUX-BASICS",
                icon: "assets/skills/linux.png"
            }
        ];
        const skillContent=skillsList.map((element)=>{
            return`
            
            <div class="skill-box" key=${element?.id}>
            
            <img src=${element?.icon} alt=${element?.name} title=${element?.name} loading="lazy">
            
            </div>
            
            `
        }).join("");
        if(skills){
            skills.innerHTML=skillContent;
        }
    }else if(activeTab==="about-me"){
        const myInfo=document.querySelector(".my-info");
        const infoList=[
            {
                id: 1,
                key:"Name : ",
                value: "Khaja Altaf Hussain",
            },{
                id: 2,
                key:"Country : ",
                value: "India",
            },{
                id: 3,
                key:"Email : ",
                value: "khajaaltafhussain47@gmail.com",
            },{
                id: 4,
                key:"Address : ",
                value: " Bahadurpura,Hyderabad",
            }
        ];
        const infoContent=infoList.map((element)=>{
            return `
            <div class="info-box" key=${element?.id}>
            <span>${element?.key}</span>
            <span>${element?.value}</span>
            </div>
            `
        }).join("");
        if(myInfo){
            myInfo.innerHTML=infoContent;
        }
    }
    })
})