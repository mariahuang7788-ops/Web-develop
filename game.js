function generate() {

    const mood = document.getElementById("mood").value;
    const theme = document.getElementById("theme").value;

    const names = ["Luna", "Nova", "Raven", "Aria", "Zyra", "Mika", "Vex", "Elara"];
    const randomName = names[Math.floor(Math.random() * names.length)];

    let makeup = "";
    let outfit = "";
    let vibe = "";

    if (mood === "cute") {
        makeup = "Soft pastel blush, glossy lips, sparkly highlights";
    } else if (mood === "dark") {
        makeup = "Smoky eyes, deep lipstick, sharp contouring";
    } else if (mood === "elegant") {
        makeup = "Neutral tones, golden shimmer, clean sculpted look";
    } else {
        makeup = "Bold neon colors, dramatic eyeliner, creative face paint";
    }

    if (theme === "anime") {
        outfit = "Anime school uniform or magical girl outfit";
    } else if (theme === "fantasy") {
        outfit = "Elven robes or enchanted warrior armor";
    } else if (theme === "gothic") {
        outfit = "Victorian gothic dress or dark streetwear";
    } else {
        outfit = "Futuristic armor with LED accents";
    }

    vibe = mood + " " + theme + " cosplay character";

    document.getElementById("result").innerHTML = `
        <div class="card">
            <h2>✨ Your Character: ${randomName}</h2>
            <p><strong>Vibe:</strong> ${vibe}</p>
            <p><strong>Makeup Style:</strong> ${makeup}</p>
            <p><strong>Outfit Idea:</strong> ${outfit}</p>

            <div>
                <span class="tag">${mood}</span>
                <span class="tag">${theme}</span>
            </div>
        </div>
    `;
}

function resetApp() {
    document.getElementById("result").innerHTML = "";
}