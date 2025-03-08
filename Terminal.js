
 const responses = {
    "Hi": "Hello! How can I assist you today?",
    "hi": "Hello! How can I assist you today?",
    "Hello": "Hey there! What would you like to know?",
    "hello": "Hey there! What would you like to know?",
    "Hey": "Hey! Need any help?",
    "hey": "Hey! Need any help?",
    "How are you": "I'm just a bot, but I'm always here to assist you!",
    "how are you": "I'm just a bot, but I'm always here to assist you!",
    "osint": "Open Source Intelligence (OSINT) involves gathering publicly available information for cybersecurity or investigative purposes.",
    "digital forensics": "Digital forensics is the investigation of cybercrimes through the analysis of digital evidence.",
    "career paths": "Cybersecurity career paths include roles like Penetration Tester, Security Analyst, Incident Responder, and Red Team Specialist.",

    // Time-based greetings
    "morning": "Good morning!",
    "gm": "Good morning!",
    "good morning": "Good morning!",
    "afternoon": "Good afternoon!",
    "good afternoon": "Good afternoon!",
    "evening": "Good evening!",
    "good evening": "Good evening!",
    "night": "Good night!",
    "good night": "Good night, sleep well!",
    "gn": "Good night!",

    // Slang & unique greetings
    "ahoy": "Ahoy!",
    "hiya": "Hiya!",
    "yo bro": "Yo bro!",
    "hello mate": "Hello mate!",
    "hey dude": "Hey dude!",
    "greetings": "Greetings!",
    "hi friend": "Hi friend!",
    "salutations": "Salutations!",
    "hola": "Hola!",
    "bonjour": "Bonjour!",
    "namaste": "Namaste!",
    "peace": "Peace!",
    "wassup bro": "What’s up bro!",
    "sup dude": "Hey dude!",

    // Cybercrime reporting
    "how to report cybercrime": "Report cybercrimes in India at https://cybercrime.gov.in or call the cybercrime helpline 1930.",
    "my account hacked": "Change your passwords, enable multi-factor authentication (MFA), and report the issue to the platform. If money is involved, call 1930.",
    "phishing attack": "If you've shared sensitive info, change passwords immediately. Report phishing emails to report.phishing@cert-in.org.in.",
    "identity theft": "Notify your bank, file a complaint at https://cybercrime.gov.in, and monitor financial transactions closely.",
    "ransomware attack": "Disconnect from the internet, do not pay the ransom, and report the incident to CERT-In (www.cert-in.org.in).",
    "data breach": "Check if your data is leaked using Have I Been Pwned. Reset passwords and enable two-factor authentication.",
    "online fraud": "Call the cyber fraud helpline 1930 or file a complaint on https://cybercrime.gov.in.",
    "malware infection": "Run a full scan using a trusted antivirus. Update security patches and avoid clicking unknown links.",
    "social media hacked": "Reset your password, enable 2FA, log out of all devices, and report to the platform's support.",
    "financial fraud": "Immediately call your bank and cyber helpline 1930 to stop fraudulent transactions.",
    "atm fraud": "Block your card by calling your bank’s helpline and file a complaint at https://cybercrime.gov.in.",
    "upi fraud": "Report UPI fraud to your bank and call 1930 to attempt reversing the transaction.",

    // Personal Information
    "Who are you": "I'm an AI chatbot designed to answer your questions about Amegh!",
    "who are you": "I'm an AI chatbot designed to answer your questions about Amegh!",
    "What is your name": "I'm Amegh's chatbot assistant.",
    "what is your name": "I'm Amegh's chatbot assistant.",
    "Who is Amegh": "Amegh is a Security Analyst and Cybersecurity Enthusiast. Want to know more? Type 'Projects', 'Skills', 'Education', or 'Experience'.",
    "who is amegh": "Amegh is a Security Analyst and Cybersecurity Enthusiast. Want to know more? Type 'Projects', 'Skills', 'Education', or 'Experience'.",
    "what's up": "Not much! Just waiting to assist you.",
    "ok": "Alright!", 
    "okay": "Understood!",
    "yes": "Great!",
    "no": "Alright, let me know if you need anything!",

    // Experience & Work
    "Experience": "Amegh is a Security Analyst with hands-on experience in VAPT, network security, and cybersecurity research.",
    "experience": "Amegh is a Security Analyst with hands-on experience in VAPT, network security, and cybersecurity research.",
    "freelance": "Amegh offers professional cybersecurity services, including penetration testing, vulnerability assessments, and security consulting. Drop a mail at ttariyahgema@gmail.com.",
    "work": "Amegh specializes in network security, ethical hacking, and vulnerability assessments.",
    "Projects": "Amegh has completed over 20+ cybersecurity projects, including CTF challenges, web security assessments, and malware analysis.",
    "projects": "Amegh has completed over 20+ cybersecurity projects, including CTF challenges, web security assessments, and malware analysis. Visit his GitHub account.",
    "who created you": "I was created by Amegh A.",
    "who made this": "This system was developed by Amegh, a cybersecurity professional with deep knowledge in penetration testing and cyber defense.",
    "amegh": "Amegh is my creator!",
    "amegh's fav dish": "Kunjikayii butter roast with kunji mukku stick grill with cold B+ve blood.",

    // Certifications & Education
    "certificates": "Here are some of Amegh's certifications:\n- IBM Cybersecurity Advanced certificates\n- Certified Ethical Hacker (CEH)v13\n- Certified Security Tester\n- Advanced SOC Analyst \n- and more",
    "Education": "Amegh has a degree in Cybersecurity along with multiple industry certifications.",
    "education": "Amegh has a degree in Cybersecurity along with multiple industry certifications.",

    // Technical Skills
    "Skills": "Amegh specializes in:\n- Penetration Testing\n- Network Security\n- Ethical Hacking\n- SOC \n- Digital Forensics\n- Web Security\n- Cloud Security",
    "skills": "Amegh specializes in:\n- Penetration Testing\n- Network Security\n- Ethical Hacking\n- SOC\n- Digital Forensics\n- Web Security\n- Cloud Security",

    // Fun Interactions
    "Do you like hacking": "As an AI, I don't hack, but I can provide knowledge about ethical hacking!",
    "do you like hacking": "As an AI, I don't hack, but I can provide knowledge about ethical hacking!"
};



const alternativeResponses = [
    "I didn't get that. Try asking about Projects, Experience, or Cybercrime Help!",
    "Hmm, not sure about that. Ask about Certifications, Contact, or Education.",
    "I’m not sure. You can ask: Report Cybercrime, Online Fraud, or Financial Fraud.",
    "That doesn’t seem right. Try asking about Amegh’s Skills, Certifications, or Penetration Testing.",
    "I didn’t understand. Maybe try: Report UPI Fraud, Online Scams, or Amegh's Skills.",
    "Not sure what you mean. Explore Amegh's Experience, Skills, or Contact Info.",
    "I’m unsure. Try: Certifications, Ethical Hacking, or Cybercrime Assistance.",
    "I don’t have that info. Ask about Certifications, Education, or Freelance Security Services.",
];



let lastContext = "";





document.getElementById("commandInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let userInput = event.target.value.trim().toLowerCase();
        event.target.value = "";

        if (userInput === "") return;

        displayMessage(userInput, "user");

        let response = alternativeResponses[Math.floor(Math.random() * alternativeResponses.length)];
        let suggestedCommands = [];
  
  if (userInput.includes("certif") || userInput.includes("cerfic") || userInput.includes("certi")) {
    response = "certificates";
    suggestedCommands = ["certificates"];
    lastContext = "certificates";
} else if (userInput.includes("skill")) {
    response = responses["skills"];
} else if (userInput.includes("experience")) {
    response = responses["experience"];
} else if (userInput.includes("freelance") || userInput.includes("services")) {
    response = responses["freelance"];
} else if (userInput.includes("education")) {
    response = responses["education"];
} else if (userInput.includes("hobby") || userInput.includes("interest")) {
    response = responses["hobbies"];
} else if (userInput.includes("project")) {
    response = responses["projects"];
} else if (userInput.includes("contact")) {
    response = responses["contact"];
} else if (userInput.includes("linkedin")) {
    response = responses["linkedin"];
} else if (userInput.includes("github")) {
    response = responses["github"];
} else if (userInput.includes("news") || userInput.includes("latest cyber attack")) {
    response = responses["latest cybersecurity news"];
} else if (userInput.includes("fact")) {
    response = responses["tell me a fact"];
} else if (userInput.includes("joke")) {
    response = responses["tell me a joke"];
    lastContext = "";
} else if (responses[userInput]) {
    response = responses[userInput];
    lastContext = userInput;
}

displayMessage(response, "bot", suggestedCommands);
}
});   

function displayMessage(text, sender, suggestions = []) {
    let chatOutput = document.getElementById("chatOutput");
    let newLine = document.createElement("div");
    newLine.className = sender;
    newLine.innerText = `> ${text.trim()}`;  
    chatOutput.appendChild(newLine);

    if (suggestions.length > 0) {
        suggestions.forEach(cmd => {
            let btn = document.createElement("button");
            btn.innerText = cmd;
            btn.className = "suggestion-btn";
            btn.onclick = () => displayMessage(responses[cmd], "bot");
            chatOutput.appendChild(btn);
        });
    }

    chatOutput.scrollTop = chatOutput.scrollHeight;
}
