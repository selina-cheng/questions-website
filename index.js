// QUESTIONS
const strangersQuestions = [
    "Do you squeeze the toothpaste tube or roll it? What's the advantage of your method?",
    "Do you think I have a sibling? Older or younger?",
    "How many siblings do you have? What's your birth order?",
    "What about me is most strange or unfamiliar?",
    "What's one of your nicknames? What do you prefer to be called?",
    "What's something you intended to do today, but didn't? Why not?",
    "Using only one word, what was your first impression of the other?",
    "What do you do if you can't sleep at night?",
    "Which do you do more often: hum or whistle?",
    "What do you think I'd splurge on?",
    "What do you think my major is?",
    "What do you think I'm going to do in the future (work/employment)?",
    "What was your first impression of me?",
    "Do you think I was popular in high school?",
    "Do you think I like hot cheetos?",
    "Do you think I like to read?",
    "Do you think I'm in Greek Life?",
    "Do you think I like Taco Bell?",
    "What type of music do you think I listen to?",
    "Who is your favorite music artist?",
    "Where do you think I grew up?",
    "Where did you grow up?",
    "What's your favorite Starbucks drink?",
    "What is your most defining characteristic?",
    "What's a special compliment you've received?",
    "What's the craziest thing you did in your childhood?",
    "What are your hobbies now?",
    "What were your past hobbies?",
    "Did you enjoy PE in school?",
    "What was your favorite and least favorite subject in school, and why?",
    "What are you afraid of?",
    "Do you have any pets?",
    "Describe yourself in one word.",
    "What is your dream vacation?",
    "What was your favorite vacation you've been on?",
    "Do you remember your dreams?",
    "What's your most memorable dream?",
    "How do you usually celebrate your birthday?",
    "Did you study more, or party more in school?",
    "What is the best way you like to learn?",
    "What subject do you know best?",
    "What colleges did you apply to?",
    "Are you more of a leader or follower?",
    "Do you usually talk more or listen more?",
    "Would you describe yourself as an observant person?",
    "What languages do you speak?",
    "What is your favorite thing about your hometown?",
    "Would you rather spend time with your family or friends?",
    "How sociable are you?",
    "What's a pet peeve you have?",
    "How do you usually spend the holidays?",
    "How do you make friends?",
    "What's the nicest thing you've done for someone else?",
    "Do you prefer calling or texting?",
    "What qualities would your friendships and relationships ideally have?",
    "What kinds of people do you like the most?",
    "Do you think you're a good judge of character?",
    "Are most of your friends older, younger, or the same age as you?",
    "What is a characteristic in others that you admire?",
    "What do you find interesting about people?",
    "What do you and your friends do together?",
    "Do you remember the names of people you meet?",
    "What are your weekend rituals?"
];

const friendsQuestions = [
    "Who is the closest friend you've ever had? Describe that relationship.",
    "What room in your house best reflects your personality? Explain why.",
    "How many days could you last in solitary confinement? How would you do it?",
    "What's the last thing you lied about?",
    "What is your most defining characteristic?",
    "Are you lying to yourself about anything?",
    "What is your least favorite personality trait in a person?",
    "What is your saddest memory?",
    "What is your happiest memory?",
    "Who had the most positive influence on you?",
    "Do you have any nostalgic foods, smells, or songs?",
    "What is something you wish you did earlier in life?",
    "What does success mean to you?",
    "How would you describe the perfect day?",
    "Have you ever had any serious illnesses or injuries?",
    "How do you think people describe you? Does that differ from how you view yourself?",
    "Are you more carefree or full of worries?",
    "What have you taught yourself?",
    "What is your strongest memory from elementary, middle, and high school?",
    "What accomplishment are you most proud of?",
    "What have you recently discovered about yourself?",
    "What year of school would you do over again?",
    "How are you different from a year ago? 3 years ago?",
    "Who is your favorite person to gossip with?",
    "What do you friends find likeable about you?",
    "Who is your best friend?",
    "Who would you want to be closer friends with?",
    "What friend is most like you? Least like you?",
    "Is there anybody you hate? Who and why?",
    "How important is it for you to be popular?",
    "What is one topic you think you should avoid discussing with friends?",
    "Have you ever had a physical fight with a friend?",
    "What do you look for in a friend?",
    "Is it important that you're well liked by most people?",
    "How do you react when a friend criticizes you?",
    "How forgiving are you?",
    "How important is it that your friends support your values?",
    "Are you slow to trust people?",
    "Who do you have the most respect for?",
    "How much influence do you think you have on people?",
    "What qualities do you require in a friendship?",
    "What is your guilty pleasure?",
    "Do you have a secret talent?",
    "Do you value your time or waste it?",
    "Do you value others' time as much as your own?",
    "What are you obsessive about, and why?",
    "What do you think your worst habit is?",
    "What is the most difficult habit you have ever tried to get rid of?",
    "What is one personality trait you have tried the hardest to change in yourself?",
    "Do you think you swear often?",
    "What trait would you like to have?",
    "What makes you most angry?",
    "How private are you?",
    "What are your most embarrassing moments?",
    "Do you have any regrets?",
    "Do you consider yourself good-looking?",
    "Do you tend to avoid or make eye contact?",
    "Are you bad or good at keeping secrets?",
    "Are you an overthinker?",
    "What's a phrase you wish you would stop saying?",
    "How competitive are you?",
    "Would you like to be famous?"
];

const gFriendsQuestions = [
    "Do you think I've ever been in love?",
    "Do you think I've ever had my heart broken?",
    "What is one of your best and worst childhood memories?",
    "What would you change about your childhood and why?",
    "What frustrates you now about your current relationships?",
    "Do you think you are hard on yourself?",
    "When are you the most difficult to deal with?",
    "When's the last time you felt lucky to be you?",
    "What would you tell your younger self?",
    "What would your younger self not believe about you today?",
    "What is your favorite adjective to be described with?",
    "When is the last time you cried?",
    "What's the biggest mistake you've made?",
    "What about me surprises you?",
    "What do you think my weakness is?",
    "How do our personalities compliment eachother?",
    "What are you overthinking right now?",
    "What is your favorite part of yourself?",
    "What is your most toxic trait?",
    "What have you been taking for granted recently?",
    "What do you think my love language is?",
    "How do you give love and receive love?",
    "What is a feeling you're uncomfortable with sharing",
    "How old do you feel?",
    "What makes a friend a best friend?",
    "Who do I remind you of?",
    "Would most people describe you as humble or proud? What would you describe yourself as?",
    "What do you think people say about you behind your back?",
    "What scares you the most about the future?",
    "What topic usually turns into an argument for you?",
    "How do you comfort others?",
    "What is your greatest weakness?",
    "What would make you feel completely content right now?",
    "How much do you trust people?",
    "How self confident are you?",
    "How self-centered are you?",
    "What is your most sentimental object?",
    "Who have you lost touch with, but will still wonder about?",
    "When have you recently felt overwhelmed?",
    "Are you ever satisfied?",
    "What worries you?",
    "What makes you jealous?",
    "How often do you second guess yourself?",
    "When have you felt betrayed?",
    "When do you feel out of control?",
    "Is your birthday important to you?",
    "Do you wish you had more influence on people?",
    "Do you care more about people-pleasing or speaking the truth?",
    "What makes you flustered?",
    "How do you avoid conflict?",
    "If you could learn one truth about the future, what would you want to know?",
    "What do you feel more often: gratitude or envy?"
];

const bfQuestions = [
    "What was the most difficult thing to overcome from your childhood?",
    "What traumatic event changed your life?",
    "What person in your life do you find the most challenging? Why?",
    "What's something about you that no one knows?",
    "What was the hardest period of your life?",
    "What was the happiest period of your life?",
    "What's the hardest thing you've ever had to do?",
    "What's the most significant loss you've experienced?",
    "Have you forgiven yourself for past failures?",
    "How do you want to be remembered?",
    "How good are you at setting boundaries?",
    "How do you deal with self doubt?",
    "What's missing in your life?",
    "What recently has made you depressed?",
    "Have you ever felt excluded?",
    "When do you feel the loneliest?",
    "What do you need to feel secure?",
    "When do you feel insecure?",
    "How sensitive do you think you are?",
    "What are the differences between your mother and father?",
    "How have your friends changed or stayed the same over the years?",
    "What do you consider your best quality? Worst quality?",
    "Is it more important for you to look good or feel good?",
    "What's the most important thing to you?",
    "How have your priorities changed overtime?",
    "What lesson did you have to learn the hard way?",
    "If you could learn one truth about yourself, what would you want to know?"
];

// LEVEL 1 - STRANGERS
if (document.getElementById('strangers-button')){
    getQuestion("strangers");
}  
// LEVEL 2 -  FRIENDS
if (document.getElementById('friends-button')){
    getQuestion("friends");
}  
// LEVEL 3 - GOOD FRIENDS
if (document.getElementById('gfriends-button')){
    getQuestion("gfriends");
}  

// LEVEL 4 - BEST FRIEND
if (document.getElementById('bf-button')){
    getQuestion("bf");
}  

function getQuestion(level){
    let count = -1;
    let button = "";
    let questions;
    let q = "";
    let back = "";

    switch(level) {
        case "strangers":
            button = document.getElementById('strangers-button');
            questions = strangersQuestions;
            q = 'strangers-q';
            back = document.getElementById('strangers-back');
            break;
        case "friends":
            button = document.getElementById('friends-button');
            questions = friendsQuestions;
            q = 'friends-q';
            back = document.getElementById('friends-back');
            break;
        case "gfriends":
            button = document.getElementById('gfriends-button');
            questions = gFriendsQuestions;
            q = 'gfriends-q';
            back = document.getElementById('gfriends-back');
            break;
        case "bf":
            button = document.getElementById('bf-button');
            questions = bfQuestions;
            q = 'bf-q';
            back = document.getElementById('bf-back');
            break;
        default:
            return;
    }

    button.addEventListener("click", function(){ // next question
        if (count < questions.length - 1){
            count++;
            document.getElementById(q).innerHTML = questions[count];
        }
    });

    back.addEventListener("click", function(){ // previous question
        if (count < questions.length + 1 && count >= 1){
            count--;
            document.getElementById(q).innerHTML = questions[count];
        }
    });
}