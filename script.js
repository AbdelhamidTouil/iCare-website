function show() {
    document.getElementById('di').style.display = 'block';
    document.getElementById('b1').style.display = 'none';
}

know = {


    "icare": "&nbsp &nbsp &nbsp &nbsp Hello! how can I help?",
    "Do I have any medical appointment this week?": "&nbsp &nbsp &nbsp &nbsp Yes, I will remind you of it 15min before",
    "Can you send me the hospital's location": "&nbsp &nbsp &nbsp &nbsp The hospital's location will be shown on your screen in few seconds",
    "help": "&nbsp &nbsp &nbsp &nbsp Hold tight, I will make the necessary calls",
    "I need the nearest pharmacy": "&nbsp &nbsp &nbsp &nbsp The pharmacy location will be shown on your screen in few seconds",
    "call my son I'm not okay": "&nbsp &nbsp &nbsp &nbsp We are calling your son mam",
    "Remind me of my appointment 15min before": "&nbsp &nbsp &nbsp &nbsp sure thing!",
    "check my medical folder": "&nbsp &nbsp &nbsp &nbsp you will recieve the information needed in few seconds",
    "do you care?": "&nbsp &nbsp &nbsp &nbsp Absolutely! I do Care about you and your beloved poeple",
    "I feel sick": "&nbsp &nbsp &nbsp &nbsp I'm going to call your doctor",
    "remind me of my medicin": "&nbsp &nbsp &nbsp &nbsp I will remind you of it 5 minutes before",
    "how are you?": "&nbsp &nbsp &nbsp &nbsp I'm great, I hope you are too",
    "I want to contact iCare team": "&nbsp &nbsp &nbsp &nbsp It is our pleasure, we will reach you in few seconds",
    "call my nurse": "&nbsp &nbsp &nbsp &nbsp We will reach the nurse in few seconds",
    "what is iCare": "&nbsp &nbsp &nbsp &nbsp iCare is a medical mobile app which take care of your medical appointment, reaching your doctor, nurse and pharmacy in need. Furthermore, iCare make you close to your family and friends in case of danger  ",
    "help me": "&nbsp &nbsp &nbsp &nbsp Hold tight, I will make the necessary calls",
    "call my first contact person": "&nbsp &nbsp &nbsp &nbsp okay, I hope you're alright",
    "call my second contact person": "&nbsp &nbsp &nbsp &nbsp okay, I hope you're alright",
    "call my third contact person": "&nbsp &nbsp &nbsp &nbsp okay, I hope you're alright",
    "call my son I'm not okay": "&nbsp &nbsp &nbsp &nbsp We are calling your son mam",
    "danger": "&nbsp &nbsp &nbsp &nbsp Hold tight, I will make the necessary calls",
    "check my blood type": "&nbsp &nbsp &nbsp &nbsp I will, I hope that you are fine",
    "pain": "&nbsp &nbsp &nbsp &nbsp Should I call your doctor",
    "Send me the location of my doctor": "&nbsp &nbsp &nbsp &nbsp You will have the location of your doctor if few seconds",
    "Send me the location of my nurse": "&nbsp &nbsp &nbsp &nbsp You will have the location of your nurse if few seconds",
    "check my son's appointment": "&nbsp &nbsp &nbsp &nbsp Checking your son's appointment... ",
    "am I pretty": "&nbsp &nbsp &nbsp &nbs Absolutely you are",


};

user=document.querySelector("#userBox").style.color="black" ;
user=document.querySelector("#userBox").style.background="#ffffff";

function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("t").innerHTML += user + "\n";
    if (user in know) {
        document.getElementById("t").innerHTML += know[user] + "\n";
    } else {
        document.getElementById("t").innerHTML += "&nbsp &nbsp &nbsp &nbsp i dont undderestand...\n";

    }
}