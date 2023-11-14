
// function createLyricsCard(lyrics) {
//     const card = document.createElement("div");
//     card.classList.add("rounded-xl border border-neutral-200 shadow-md py-3 px-3");
//     card.innerHTML = `
//         <h2 class="mt-1 text-xl font-semibold text-black">${lyrics.title} - ${lyrics.artist}</h2>
//         <img  class="w-full h-auto" src="${lyrics.imageUrl}" alt="${lyrics.title} Image">
//         <a class=" mt-3 mb-2 bg-purple-600 p-3  text-white shadow-lg rounded-full" href="${lyrics.downloadUrl}" download>Download</a>
//     `;
//     return card;
// }

// // Function to fetch and display lyrics data
// async function displayLyricsCards() {
//     const cardContainer = document.getElementById("#content");
    
//     // Function to create a lyrics card



//     // Fetch the data from the JSON file
//     try {
//         const response = await fetch("data.json");
//         if (!response.ok) {
//             throw new Error("Failed to fetch data");
//         }
//         const lyricsData = await response.json();

//         lyricsData.forEach((lyrics) => {
//             const card = createLyricsCard(lyrics);
//             cardContainer.appendChild(card);
//         });
//     } catch (error) {
//         console.log("Error fetching data:", error);
//     }
// }



// // // Function to create a lyrics card
// // function createLyricsCard(lyrics) {
// //     const card = document.createElement("div");
// //     card.classList.add("rounded-xl border border-neutral-200 shadow-md py-3 px-3");
// //     card.innerHTML = `
// //         <h2 class="mt-1 text-xl font-semibold text-black">${lyrics.title} - ${lyrics.artist}</h2>
// //         <img  class="w-full h-auto" src="${lyrics.imageUrl}" alt="${lyrics.title} Image">
// //         <a class=" mt-3 mb-2 bg-purple-600 p-3  text-white shadow-lg rounded-full" href="${lyrics.downloadUrl}" download>Download</a>
// //     `;
// //     return card;
// // }



// // Call the function to display lyrics cards
// displayLyricsCards();


const navbar = document.querySelector('nav');


function createLyricsCard(lyrics) {
    const card = document.createElement("div");
    card.classList.add("rounded-xl", "border", "border-neutral-200", "shadow-md", "py-3","mt-3", "px-3");
    card.innerHTML = `
        <img class="w-full h-auto rounded-md" src="${lyrics.imageUrl}" alt="${lyrics.title} Image">
        <h2 class="mt-1 text-2xl font-semibold text-black">${lyrics.title}</h2>
        <P class="text-black mt-1">${lyrics.artist}</P>
        <div class="mt-3 mb-3">
        <a class="mt-3 mb-2 bg-purple-600 p-3 text-white shadow-lg rounded-full" href="${lyrics.downloadUrl}" download>Download</a>
        </div>
    `;
    return card;
}

// Function to fetch and display lyrics data
async function displayLyricsCards() {
    const cardContainer = document.getElementById("content"); // Remove the '#' from the ID selector
    
    // Fetch the data from the JSON file
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const lyricsData = await response.json();

        lyricsData.forEach((lyrics) => {
            const card = createLyricsCard(lyrics);
            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Call the function to display lyrics cards
displayLyricsCards();
