const projectList = [
    {
        id: 1,
        number: "01",
        title: "E-Commerce Shopping Cart Web App",
        description: "Developed a full-stack E-Commerce Shopping Cart Web Application that allows users to browse products, add items to the cart, and securely manage their purchases. The application provides a seamless and responsive user experience with dynamic product management and real-time cart updates.The frontend is built using modern UI technologies to ensure responsiveness across devices, while the backend handles authentication, product management, and order processing. State management is implemented to efficiently track cart items and pricing, ensuring persistence even after page refresh using local storage.Key features include user authentication, product listing by categories, add/remove/update cart functionality, total price calculation, and secure API integration. The project demonstrates strong understanding of full-stack development, RESTful APIs, and efficient state handling.",
        techStack: ["MongoDB", "Express", "React", "Node", "Redux ToolKit"],
        image: "assets/projects/project1.webp",
        liveLink: "https://shopping-cart-frontend-tan.vercel.app/",
        githubLink: "https://github.com/Khaja-Altaf-Hussain/Shopping_Cart_Backend"
    }, {
        id: 2,
        number: "02",
        title: "E-Commerce Shopping Cart Web App",
        description: "Developed a full-stack E-Commerce Shopping Cart Web Application that allows users to browse products, add items to the cart, and securely manage their purchases. The application provides a seamless and responsive user experience with dynamic product management and real-time cart updates.The frontend is built using modern UI technologies to ensure responsiveness across devices, while the backend handles authentication, product management, and order processing. State management is implemented to efficiently track cart items and pricing, ensuring persistence even after page refresh using local storage.Key features include user authentication, product listing by categories, add/remove/update cart functionality, total price calculation, and secure API integration. The project demonstrates strong understanding of full-stack development, RESTful APIs, and efficient state handling.",
        techStack: ["MongoDB", "Express", "React", "Node", "Redux ToolKit"],
        image: "assets/projects/project1.webp",
        liveLink: "https://shopping-cart-frontend-tan.vercel.app/",
        githubLink: "https://github.com/Khaja-Altaf-Hussain/Shopping_Cart_Backend"
    }
];
const projects = document.querySelector(".projects");
let currentIndex = 0;
const renderProject = (index) => {
    const projectContent = projectList[index];
    const prevDisabled = currentIndex === 0;
    const nextDisabled = currentIndex===projectList.length - 1;
    projects.innerHTML = `
    <div class="projects-info">
        <h3>${projectContent?.number}</h3>
        <h4>${projectContent?.title}</h4>
        <p>${projectContent?.description}</p>
        <div class="tech-stack">
            ${
            projectContent?.techStack?.map((tech,i)=>{
                return `
                <span key=${i}>${tech}</span>
                `
            }).join(",")
            }
        </div>
        <hr/>
        <div class="links">
            <a href=${projectContent?.liveLink} target="_blank"><i class="fa-solid fa-arrow-right"></i></a>
            <a href=${projectContent?.githubLink} target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
    <div class="carousel">
                    <img src=${projectContent?.image} alt="${projectContent?.title}">
                    <div class="arrows">
                        <a href="#" id="previous" class=${prevDisabled?"disabled-btn":""}><i class="fa-solid fa-arrow-left"></i></a>
                        <a href="#" id="next" class=${nextDisabled?"disabled-btn":""}><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
    </div>
    `;
    document.getElementById('previous').addEventListener("click",(e)=>{
        e.preventDefault();
        if(currentIndex>0) currentIndex--;
        renderProject(currentIndex);
    });
    document.getElementById('next').addEventListener("click",(e)=>{
        e.preventDefault();
        if(currentIndex<projectList.length-1) currentIndex++;
        renderProject(currentIndex);
    })
};
renderProject(currentIndex);