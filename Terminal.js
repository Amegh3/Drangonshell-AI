
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
    "Freelance": "Amegh offers professional cybersecurity services, including penetration testing, vulnerability assessments, and security consulting. Drop a mail about your quriess on ttariyahgema@gmail.com",
    "work": "Amegh specializes in network security, ethical hacking, and vulnerability assessments.",
    "Projects": "Amegh has completed over 20+ cybersecurity projects, including CTF challenges, web security assessments, and malware analysis.",
    "projects": "Amegh has completed over 20+ cybersecurity projects, including CTF challenges, web security assessments, and malware analysis.visit his github account ",
    "who is Amegh": "Amegh is my creator! A skilled Security Analyst and Cybersecurity Enthusiast with expertise in VAPT, Ethical Hacking, and Threat Intelligence.",
    "who created you": "I was created by Amegh A .",
    "who made this": "This system was developed by Amegh, a cybersecurity professional with deep knowledge in penetration testing and cyber defense.",
    "amegh": "Amegh is my creator!",

    // Certifications & Education
    "Certificates": "Amegh holds industry-recognized cybersecurity certifications. Would you like a list?",
    "certificates": "Amegh holds industry-recognized cybersecurity certifications. Would you like a list?",
    "Yes_certificates": "Here are some of Amegh's certifications:\n- IBM Cybersecurity Advanced certificates\n- Certified Ethical Hacker (CEH)v13\n- Certified Security Tester\n- Advanced SOC Analyst \n- and more",
    "Education": "Amegh has a degree in Cybersecurity along with multiple industry certifications.",
    "education": "Amegh has a degree in Cybersecurity along with multiple industry certifications.",

    // Technical Skills
    "Skills": "Amegh specializes in:\n- Penetration Testing\n- Network Security\n- Ethical Hacking\n- SOC \n- Digital Forensics\n- Web Security\n- Cloud Security",
    "skills": "Amegh specializes in:\n- Penetration Testing\n- Network Security\n- Ethical Hacking\n- SOC\n- Digital Forensics\n- Web Security\n- Cloud Security",
   // cybersecurity topics

"penetration testing": "penetration testing, or ethical hacking, is the practice of testing a system for vulnerabilities before malicious hackers can exploit them.",
"ethical hacking": "ethical hacking involves legally breaking into computers to test defenses and improve security.",
"vapt": "vulnerability assessment and penetration testing (VAPT) is a process used to identify and fix security vulnerabilities in a system.",
"osint": "open source intelligence (OSINT) involves gathering publicly available information for cybersecurity or investigative purposes.",
"cyber threats": "cyber threats include attacks such as malware, phishing, ransomware, and data breaches that target systems and networks.",
"linux security": "linux security involves implementing measures like firewalls, SELinux, and access control to protect Linux-based systems.",
"red teaming": "red teaming is an advanced form of security testing where ethical hackers simulate real-world attacks to improve defenses.",
"network security": "network security protects networks from unauthorized access, attacks, and data breaches.",
"social engineering": "social engineering is a manipulation technique that exploits human psychology to gain access to sensitive information.",
"digital forensics": "digital forensics is the investigation of cybercrimes through the analysis of digital evidence.",
"bug bounties": "bug bounty programs reward ethical hackers for finding and reporting security vulnerabilities in systems and applications.",
"reverse engineering": "reverse engineering is the process of analyzing software, malware, or hardware to understand its inner workings.",
"cybersecurity tools": "cybersecurity tools include scanners, SIEM solutions, IDS/IPS, firewalls, and malware analysis platforms.",
"threat intelligence": "threat intelligence involves gathering, analyzing, and sharing information about current and emerging cyber threats.",
"malware analysis": "malware analysis is the process of examining malicious software to understand its behavior and impact.",
"cybersecurity roadmaps": "cybersecurity roadmaps outline the learning paths, skills, and certifications needed to build a career in cybersecurity.",
"industry certifications": "cybersecurity certifications like CEH, OSCP, CISSP, and CISM validate expertise in various security domains.",
"career paths": "cybersecurity career paths include penetration tester, SOC analyst, security consultant, and digital forensic investigator.",
"exploit development": "exploit development involves creating and testing exploits to assess vulnerabilities in software and systems.",
"web security": "web security involves securing websites, web applications, and online services from cyber threats.",
"cloud security": "cloud security ensures the protection of data, applications, and services hosted in cloud environments.",
"dark web": "the dark web is a part of the internet that requires special software to access and is often associated with anonymity.",
"cyber crime investigations": "cyber crime investigations involve tracking digital evidence to analyze and prevent cybercriminal activities.",
"privacy enhancements": "privacy enhancements include encryption, VPNs, secure browsers, and privacy-focused security practices.",
"blue teaming": "blue teaming focuses on defending networks against cyber threats by monitoring, detecting, and responding to attacks.",
"cyber defense strategies": "cyber defense strategies include threat detection, response planning, and security hardening techniques.",
"zero-day vulnerabilities": "zero-day vulnerabilities are security flaws that are unknown to the vendor and have no patches available.",
"siem (security information and event management)": "SIEM tools collect, analyze, and correlate security events to detect and respond to threats.",
"ids/ips (intrusion detection & prevention systems)": "IDS/IPS tools monitor network traffic for suspicious activity and prevent intrusions.",
"threat hunting": "threat hunting is the proactive search for cyber threats that may have evaded existing security defenses.",
"phishing attacks": "phishing is a cyber attack where attackers impersonate trusted entities to steal sensitive information.",
"password cracking": "password cracking involves using tools like brute force and dictionary attacks to test password strength.",
"cryptography techniques": "cryptography is the practice of securing communication and data through encryption techniques.",
"data breaches": "a data breach is an incident where sensitive, protected, or confidential data is accessed or disclosed without authorization.",
"cyber warfare": "cyber warfare involves cyber attacks conducted by nations or organizations for political or military purposes.",
"cybersecurity frameworks": "cybersecurity frameworks like NIST and ISO provide structured guidelines for securing digital assets and networks.",
"risk management": "cyber risk management involves identifying, assessing, and mitigating security risks within an organization.",
"soc (security operations center) operations": "SOC teams monitor, detect, analyze, and respond to cybersecurity incidents in real time.",
"ransomware": "ransomware is a type of malware that locks or encrypts a victim's files and demands payment for their release.",
"ethical hacking certifications": "popular ethical hacking certifications include CEH, OSCP, GPEN, and LPT.",
"cybersecurity laws": "cybersecurity laws govern digital security, privacy, and cybercrime regulations across various countries.",
"iot security": "IoT security focuses on protecting internet-connected devices from cyber threats and unauthorized access.",
"zero trust architecture": "zero trust security is a model where no one is trusted by default, and continuous verification is required for access.",
"secure coding": "secure coding involves writing software with security best practices to prevent vulnerabilities and exploits.",
"cyber attack techniques": "cyber attack techniques include DDoS, SQL injection, malware, phishing, and privilege escalation.",
"mitre att&ck": "MITRE ATT&CK is a framework that categorizes tactics and techniques used in cyber attacks.",
"incident response": "incident response is the process of managing and mitigating cybersecurity incidents in an organization.",
"penetration testing reports": "penetration testing reports document security vulnerabilities, risk assessments, and remediation steps.",
"cves (common vulnerabilities and exposures)": "CVEs are publicly known security vulnerabilities that are tracked and documented for mitigation.",
"cybersecurity conferences": "cybersecurity conferences like DEF CON, Black Hat, and RSA provide insights into the latest security trends.",

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

// Alternative responses for unrecognized queries
const alternativeResponses = [
    "I'm not sure about that. Try asking about Projects, Skills, or Cybersecurity Trends!",
    "Could you clarify? You can ask about Certifications, Contact, or  About Ethical Hacking.",
    "I'm not sure about that. But you can ask about Cybercrime Reporting, Online Scams, or Data Breaches in India!",
    "Could you clarify? You can ask about Amegh’s Certifications, Ethical Hacking, or Penetration Testing skills.",
    "Hmm, I didn't quite get that. Maybe try: What is OSINT, How to report UPI fraud, or Best Cybersecurity Practices?",
    "That’s an interesting question! While I don’t know, you can explore Cyber Threats, Digital Forensics, or OSINT.",
    "I'm not sure about that. But you can ask about Reporting Cybercrime, Online Fraud, or Identity Theft.",
    "Could you clarify? You can ask about Phishing Attacks, Ransomware, or Data Breaches.",
    "Hmm, I didn't quite get that. Maybe try: How to Report a Hacked Account, What to Do in an Online Fraud, or Protecting Against Malware.",
    "I might not have that answer yet. But you can ask about Financial Fraud, UPI Scams, or ATM Security Tips.",
    
];




let lastContext = "";





// Event listener for Enter key in the terminal input
document.getElementById("commandInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let userInput = event.target.value.trim().toLowerCase();
        event.target.value = "";

        if (userInput === "") return;

        displayMessage(userInput, "user");

        let response = alternativeResponses[Math.floor(Math.random() * alternativeResponses.length)];
        let suggestedCommands = [];
  // Handling typos and variations
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
} else if (userInput === "yes" && lastContext === "certificates") {
    response = responses["yes_certificates"];
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
    newLine.innerText = `> ${text.trim()}`;  // Ensure spacing and trim unnecessary spaces
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
