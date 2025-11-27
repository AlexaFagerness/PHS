console.log("Pink Hoodie JS loaded");

window.addEventListener("DOMContentLoaded", function () {
    
    const randomTipBtn = document.getElementById("randomTipBtn");
    const randomTipText = document.getElementById("randomTipText");

    const tips = [
        "Use a different password for your email than for everything else. If email falls, everything falls.",
        "Turn on two-factor authentication for banking, and email.",
        "Do not click links in 'urgent' messages.",
        "If your browser warns you about a risky site, trust it. Curiosity killed the cat.",
        "Keep your phone and laptop updated. Old software has threats that can be exploited.",
        "Use a passphrase made of several random words instead of a short password.",
        "Avoid using your name, birthday, or address in passwords or Wi-Fi names.",
        "Check your important accounts occasionally for logins you do not recognize."
    ];

    if (randomTipBtn && randomTipText) {
        randomTipBtn.addEventListener("click", function () {
            const index = Math.floor(Math.random() * tips.length);
            randomTipText.textContent = tips[index];
        });
    }

    
    const passwordInput = document.getElementById("passwordInput");
    const checkPasswordBtn = document.getElementById("checkPasswordBtn");
    const passwordResult = document.getElementById("passwordResult");

    function evaluatePassword(pw) {
        if (!pw || pw.length === 0) {
            return { message: "Type something first.", level: "neutral" };
        }

        let score = 0;

        if (pw.length >= 8) score++;
        if (pw.length >= 12) score++;
        if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
        if (/\d/.test(pw)) score++;
        if (/[^A-Za-z0-9]/.test(pw)) score++;

        if (score <= 1) {
            return {
                message: "Very weak. Never use this for anything important.",
                level: "bad"
            };
        } else if (score === 2) {
            return {
                message: "Weak. Better than nothing, but still easy to guess.",
                level: "bad"
            };
        } else if (score === 3) {
            return {
                message: "Okay, but could be stronger. Add length and symbols.",
                level: "medium"
            };
        } else if (score === 4) {
            return {
                message: "Pretty strong. Nice job. Longer is still safer.",
                level: "good"
            };
        } else {
            return {
                message: "Very strong. This would be hard to crack.",
                level: "good"
            };
        }
    }

    if (passwordInput && checkPasswordBtn && passwordResult) {
        checkPasswordBtn.addEventListener("click", function (event) {
            event.preventDefault();

            const pw = passwordInput.value;
            const result = evaluatePassword(pw);

            passwordResult.textContent = result.message;
            passwordResult.classList.remove("bad", "medium", "good", "neutral");
            passwordResult.classList.add(result.level);
        });
    }
});
