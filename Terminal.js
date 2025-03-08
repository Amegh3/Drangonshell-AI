
const responses = {
    // Basic Greetings
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
        // Standard greetings
        "hi": "Hello!",
        "hello": "Hey!",
        "hey": "Hey there!",
        "yo": "Yo!",
        "hi hi": "Hi hi!",
        "hey hey": "Hey hey!",
        "hello hello": "Hello hello!",
    
        // Shortened & informal variations
        "hii": "Hi!",
        "hiii": "Hey there!",
        "hlo": "Hello!",
        "helo": "Hello!",
        "heyy": "Hey!",
        "heyyy": "Hey hey!",
        "yo yo": "Yo yo!",
        "hy": "Hey!",
        "hyy": "Hey!",
        "lo": "Hello!",
        "sup": "Hey! What’s up?",
        "wazzup": "What’s up!",
        "wassup": "What’s up!",
    
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
            "report cybercrime": "Report cybercrimes in India at the official portal: https://cybercrime.gov.in or call the cybercrime helpline 1930.",
            "my account hacked": "Change your passwords, enable multi-factor authentication (MFA), and report the issue to the platform. If money is involved, call 1930.",
            "phishing attack": "If you've shared sensitive info, change passwords immediately. Report phishing emails to report.phishing@cert-in.org.in.",
            "identity theft": "Notify your bank, file a complaint at https://cybercrime.gov.in, and monitor financial transactions closely.",
            "ransomware attack": "Disconnect from the internet, do not pay the ransom, and report the incident to CERT-In (www.cert-in.org.in).",
            "data breach": "Check if your data is leaked using Have I Been Pwned. Reset passwords and enable two-factor authentication.",
            "online fraud": "Call the cyber fraud helpline **1930** or file a complaint on **https://cybercrime.gov.in**. Act fast to freeze transactions.",
            "malware infection": "Run a full scan using a trusted antivirus. Update your security patches and avoid clicking unknown links.",
            "social media hacked": "Reset your password, enable 2FA, log out of all devices, and report to the platform's support.",
            "financial fraud": "Immediately call your bank and cyber helpline **1930** to stop fraudulent transactions.",
            "atm fraud": "Block your card by calling your bank’s helpline and file a complaint at **https://cybercrime.gov.in**.",
            "uPI fraud": "Report UPI fraud to your bank and call **1930** to attempt reversing the transaction.",
    
        

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
    "freelance": "Amegh offers professional cybersecurity services, including penetration testing, vulnerability assessments, and security consulting. Drop a mail about your quriess on ttariyahgema@gmail.com",
    "work": "Amegh specializes in network security, ethical hacking, and vulnerability assessments.",
    "Projects": "Amegh has completed over 20+ cybersecurity projects, including CTF challenges, web security assessments, and malware analysis.",
    "projects": "Amegh has completed over 20+ cybersecurity projects, including CTF challenges, web security assessments, and malware analysis.visit his github account ",
    "who is Amegh": "Amegh is my creator! A skilled Security Analyst and Cybersecurity Enthusiast with expertise in VAPT, Ethical Hacking, and Threat Intelligence.",
    "who created you": "I was created by Amegh A .",
    "who made this": "This system was developed by Amegh, a cybersecurity professional with deep knowledge in penetration testing and cyber defense.",
    "amegh": "Amegh is my creator!",
    "amegh's fav dish": "kunjikayii butter roast with kunji mukku stick grill with cold b+ve blood ",

    // Certifications & Education
    "Certificates": "Amegh holds industry-recognized cybersecurity certifications. Would you like a list?",
    "certificates": "Amegh holds industry-recognized cybersecurity certifications. Would you like a list?",
    "Yes_certificates": "Here are some of Amegh's certifications:\n- IBM Cybersecurity Advanced certificates\n- Certified Ethical Hacker (CEH)v13\n- Certified Security Tester\n- Advanced SOC Analyst \n- and more",
    "Education": "Amegh has a degree in Cybersecurity along with multiple industry certifications.",
    "education": "Amegh has a degree in Cybersecurity along with multiple industry certifications.",

    // Technical Skills
    "Skills": "Amegh specializes in:\n- Penetration Testing\n- Network Security\n- Ethical Hacking\n- SOC \n- Digital Forensics\n- Web Security\n- Cloud Security",
    "skills": "Amegh specializes in:\n- Penetration Testing\n- Network Security\n- Ethical Hacking\n- SOC\n- Digital Forensics\n- Web Security\n- Cloud Security",
   

// Fun Interactions
    "Do you like hacking": "As an AI, I don't hack, but I can provide knowledge about ethical hacking!",
    "do you like hacking": "As an AI, I don't hack, but I can provide knowledge about ethical hacking!",

    // Fun Cybersecurity Facts
    "Tell me a fact": "Fact: The first computer virus, 'Creeper', was created in the early 1970s!",
    "tell me a fact": "Fact: The first computer virus, 'Creeper', was created in the early 1970s!",
    "Another fact": "Fact: The term 'hacker' originally meant someone skilled at programming, not a cybercriminal!",
    "another fact": "Fact: The term 'hacker' originally meant someone skilled at programming, not a cybercriminal!",
    "More facts": "Fact: In 2010, the Stuxnet worm was discovered—it was the first known cyber weapon designed to disrupt industrial systems!",
    "more facts": "Fact: In 2010, the Stuxnet worm was discovered—it was the first known cyber weapon designed to disrupt industrial systems!",
    
    // Fun Commands
    "Hack me": "Nice try! But ethical hacking is all about securing systems, not breaking into them! 😏",
    "hack me": "Nice try! But ethical hacking is all about securing systems, not breaking into them! 😏",
    "Self-destruct": "Initiating self-destruction in 3...2...1... Just kidding! 😆 I'm here to assist, not explode!",
    "self-destruct": "Initiating self-destruction in 3...2...1... Just kidding! 😆 I'm here to assist, not explode!",
    "What’s your favorite cybersecurity term?": "I’d say ‘Zero Trust’! Because in cybersecurity, trust should always be verified! 🔒",
    "what’s your favorite cybersecurity term?": "I’d say ‘Zero Trust’! Because in cybersecurity, trust should always be verified! 🔒",
    "Are you a bot?": "Yes! But a cybersecurity-aware bot. Ask me about ethical hacking, VAPT, or security tips!",
    "are you a bot?": "Yes! But a cybersecurity-aware bot. Ask me about ethical hacking, VAPT, or security tips!",
    
    
    // Contact
    "Contact": "You can reach Amegh via LinkedIn, GitHub, or email at hgemattariya@gmail.com.",
    "contact": "You can reach Amegh via LinkedIn, GitHub, or email at hgemattariya@gmail.com.",
    
    // Exit
    "Bye": "Goodbye! Have a great day!",
    "bye": "Goodbye! Have a great day!",
    "Exit": "Closing the terminal session. See you next time!",
    "exit": "Closing the terminal session. See you next time!"
};


const alternativeResponses = [
    "I didn't get that. Try asking about Projects, Experience, or Cybercrime Help!",
    "Hmm, not sure about that. Ask about Certifications, Contact, or Education.",
    "I’m not sure. You can ask: Report Cybercrime, Online Fraud, or Financial Fraud.",
    "That doesn’t seem right. Try asking about Amegh’s Skills, Certifications, or Penetration Testing.",
    "I didn’t understand. Maybe try: Report UPI Fraud, Online Scams, or Amegh's Skills.",
    "Not sure what you mean. Explore Amegh's Experience, Skills, or Contact Info.",
    "Hmm... I can't answer that. Ask about Reporting Cybercrime, Securing Accounts, or Hacked Accounts.",
    "I’m unsure. Try: Certifications, Ethical Hacking, or Cybercrime Assistance.",
    "That’s unclear. You can ask: Hacked Account, Online Fraud, or Amegh’s Projects.",
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
    response = "Did you mean 'certificates'?";
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
