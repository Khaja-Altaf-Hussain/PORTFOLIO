const media = document.querySelector(".contact-media");
const contactList = [
    {
        id: 1,
        icon: "fa-solid fa-phone",
        name: "Phone",
        value: "+91 7075393168",
        href: "tel:+917075393168"
    }, {
        id: 2,
        icon: "fa-regular fa-envelope",
        name: "E-Mail",
        value: "khajaaltafhussain47@gmail.com",
        href: "mailto:khajaaltafhussain47@gmail.com"
    }, {
        id: 3,
        icon: "fa-solid fa-location-pin",
        name: "Country",
        value: "India",
        href: "#"
    }
];
const contactContent = contactList.map((element) => {
    return `
    <div class="media" key=${element?.id}>
        <span>
            <i class="${element?.icon}"></i>
        </span>
        <div class="contact-value">
            <p>${element?.name}</p>
            <a href=${element?.href}>${element?.value}</a>
        </div>
    </div>
    `
}).join("");
if (media) {
    media.innerHTML = contactContent;
}
const sendBtn = document.querySelector("#send-msg")
const originalText = sendBtn.innerHTML
const originalStyle = {
    backgroundColor: sendBtn.style.backgroundColor,
    color: sendBtn.style.color,
    border: sendBtn.style.border,
    boxShadow: sendBtn.style.boxShadow
}

document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault()
    sendBtn.innerHTML = "Sending...";
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";
    sendBtn.disabled = true;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    if (!name || !email || !phone || !message) {
        sendBtn.innerHTML = originalText;
        Object.assign(sendBtn.style, originalStyle)
        sendBtn.disabled=false;
        return Toastify({
            text: "All Fields Are Required !",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true,
            style: {
                background: "rgb(206,16,16)",
            },
            onClick: function () { } 
        }).showToast();
    }
    emailjs.send("service_1denn0r", "template_qqjssqd", {
        name, email, phone, message
    }).then(() => {
        Toastify({
            text: "Messge Sent !",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true,
            style: {
                background: "rgb(9,222,38)",
            },
            onClick: function () { } 
        }).showToast();
        document.getElementById("contact-form").reset();
        setTimeout(()=>{
            sendBtn.innerHTML=originalText;
            Object.assign(sendBtn.style,originalStyle);
            sendBtn.disabled=false;
        },2000)
    },
        (error) => {
            Toastify({
            text: "Messge Error !",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true,
            style: {
                background: "rgb(206,16,16)",
            },
            onClick: function () { } 
        }).showToast();
        setTimeout(()=>{
            sendBtn.innerHTML=originalText;
            Object.assign(sendBtn.style,originalStyle);
            sendBtn.disabled=false;
        },2000)
            console.log("FAILED...", error)
        }
    )
})