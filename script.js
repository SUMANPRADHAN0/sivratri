const messages = [
    "Hey Mama,", 
    "I hope you’re doing well. Today, on this special occasion of Mahashivratri, I want to share something straight from my heart. Over time, our bond has grown deeper, and I truly cherish every moment we spend together. You are not just my cousin but also one of my closest friends..",
    "But beyond friendship, I have started feeling something more for you. I don’t know how you feel about this, and I don’t want to make things awkward between us. But I believe love is beyond boundaries, and my feelings for you are genuine.",
    "I just wanted to be honest with you. No matter what your feelings are, I respect you and our bond. I just hope to hear what’s in your heart too.",
    "Take your time, and whatever you decide, I will always value our relationship. I hope we can talk about this soon. Love you, Mama! ❤️"
];

const secondMessages = [
    "I know I shared my feelings with you on Valentine’s Day, and I never really got a clear answer...",
    "I completely respect your space, but I just wanted to ask—how do you truly feel about us?",
    "No pressure, no expectations—just an honest conversation. No matter what you say, I’ll always value our bond.",
    "So, Mama, do you feel the same way about me? 🥺",
    "Take your time, and just be honest with me. That’s all I ask."
];

const yesMessage = [
    "Hearing you say 'Yes' feels like a blessing, especially on Mahashivratri...",
    "Our bond reminds me of the eternal love between Lord Shiva and Goddess Parvati...",
    "Parvati’s love for Shiva was pure and unwavering—she waited, prayed, and proved her devotion until Shiva accepted her love. In the same way, my love for you is beyond everything—beyond society, beyond norms, beyond what people say. It’s just you and me, a connection that feels destined.",
    "Like Shiva and Parvati, our journey might not be easy, but love is about faith, understanding, and standing by each other, no matter what. I promise to always be there for you, to respect you, and to cherish this bond forever.",
"On this Mahashivratri, let’s celebrate not just divine love but our love—a love that is beyond everything!",
"Yours, Suman"
];

const promises = [
    "✨ My Promises to You on This Mahashivratri ✨",
    "🌸 I promise to love you unconditionally – Just like Goddess Parvati’s devotion to Lord Shiva, my love for you will remain strong, no matter what challenges come our way.",
    "🔥 I promise to stand by you always – Just as Shiva and Parvati are inseparable, I will always be there for you, in happiness and in hardships.",
    "🕉 I promise to respect and cherish you – Like how Shiva worshipped Parvati as Shakti, I will always respect your thoughts, dreams, and choices.",
    "🌿 I promise to be your peace and strength – No matter how difficult life gets, I will be your calm like Shiva and your support like Parvati.",
    "🌙 I promise to be your moonlight in the darkest nights – Just like Shiva’s moonlit hair, I will be your light in the darkest times.",
    "🌺 I promise to be your forever – Just as Shiva and Parvati are eternal, my love for you will be timeless and everlasting.",
    "🌟 I promise to be your best friend, your partner, and your love – I will be everything you need, always and forever.",
    "🙏 I promise to be your Suman – Your love, your strength, and your forever. 🌹",
    "💞 I promise to make our bond divine and everlasting – Like the eternal love of Mahadev and Maa Parvati, our love will transcend time and remain pure forever."
];

const mahashivratriWishes = [
    "✨ Happy Mahashivratri, Mama! ✨",
    "On this sacred day, we celebrate not just devotion but the purest love story ever—Shiva and Parvati’s. It is said that Parvati was deeply in love with Shiva, the supreme ascetic who had renounced everything. But her love was unwavering. She meditated, performed intense penance, and waited for years—proving that true love is about patience, dedication, and faith.",
    "Finally, Lord Shiva, moved by her devotion, accepted her love, and together they became the embodiment of divine companionship. Their union symbolizes that true love is beyond time, beyond obstacles, and beyond worldly norms.",
    "Just like them, may our bond be filled with understanding, strength, and divine blessings. May Mahadev and Maa Parvati always guide us and protect our love.",
    "Har Har Mahadev! 🙌🔥",
    "Yours, Suman",

    "P.S. I can’t wait to celebrate this Mahashivratri with you, Mama! 🌙🌺 but it's long distance🥹",
    "P.P.S. I hope you liked my little surprise! 🥰",
    "P.P.P.S. I love you, Mama! ❤️",
    
    "Last line- Maybe I am too late to be your first, but like Shiva and Parvati’s eternal love, I am preparing myself to be your last—your forever. ❤️🕉"
];

function startExperience() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('typing-section').style.display = 'block';
    playMusic();
    typeText("typed-text", messages, () => {
        typeText("typed-text", secondMessages, () => {
            document.getElementById('proposal').style.display = 'block';
        });
    });
}

function typeText(elementId, textArray, callback) {
    let index = 0;
    let textElement = document.getElementById(elementId);
    textElement.innerHTML = "";
    
    function type() {
        if (index < textArray.length) {
            let paragraph = document.createElement("p");
            paragraph.textContent = "";
            textElement.appendChild(paragraph);
            
            let charIndex = 0;
            function typeChar() {
                if (charIndex < textArray[index].length) {
                    paragraph.textContent += textArray[index].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, 50);
                } else {
                    index++;
                    setTimeout(type, 1000); // Wait before typing the next message
                }
            }
            typeChar();
        } else {
            setTimeout(callback, 1500); // Wait before showing the next section
        }
    }
    type();
}

function showYesMessage() {
    document.getElementById('proposal').style.display = 'none';
    document.getElementById('yesMessage').style.display = 'block';
    typeText("yes-typed-text", yesMessage, () => {
        // Directly continue to the Promise Section on the same screen
        typeText("yes-typed-text", promises, () => {
            // Directly continue to Mahashivratri wishes on the same screen
            typeText("yes-typed-text", mahashivratriWishes, () => {});
        });
    });
}

function hideNoButton() {
    document.querySelector('.no-btn').style.display = 'none';
}

function playMusic() {
    document.getElementById('bg-music').play();
}
