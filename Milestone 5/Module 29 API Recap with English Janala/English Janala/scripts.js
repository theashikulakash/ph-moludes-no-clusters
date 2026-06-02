// console.log("JS Check")

// Get ⚡ All Levels
// https://openapi.programming-hero.com/api/levels/all
// Get ⚡ Words by Levels
// https:// openapi.programming-hero.com/api/level/{id}
// https://openapi.programming-hero.com/api/level/5
// Get ⚡ Words Detail
// https:// openapi.programming-hero.com/api/word/{id}
// https://openapi.programming-hero.com/api/word/5
// Get ⚡ All Words
// https://openapi.programming-hero.com/api/words/all

const createElement = (arr) => {
    if (!arr || arr.length === 0) return "No synonyms"
    return arr.map(el => `<span class="btn btn-sm mx-1">${el}</span>`).join(" ")
}

const synonyms = ["hello", "Hi", "Konnichiwa"]
console.log(createElement(synonyms))

const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("word-container").classList.add("hidden")
    } else {
        document.getElementById("word-container").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")
    }

}

const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((json) => displayLesson(json.data))
}

const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".lesson-btn")
    lessonButtons.forEach(btn => btn.classList.remove("active"))
}

const loadLevelWord = (id) => {
    manageSpinner(true)
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            removeActive()
            const clickBtn = document.getElementById(`lesson-btn-${id}`)
            if (clickBtn) clickBtn.classList.add("active")
            displayLevelWord(data.data)


        })
}

const loadWordDetail = async (id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    const res = await fetch(url)
    const details = await res.json()
    // show details in modal
    displayWordDetails(details.data)
}
const displayWordDetails = (word) => {
    const detailsBox = document.getElementById("details-container")
    detailsBox.innerHTML = ""

    if (!word) {
        detailsBox.innerHTML = "<p>Word details not found</p>"
        document.getElementById("my_modal_5").showModal()
        return
    }

    const pronunciation = word.pronunciation || word.pronounciation || "N/A"
    const meaning = word.meaning || "Meaning not available"
    const example = word.sentence || "Example not available"

    detailsBox.innerHTML = `
        <div class="space-y-4">
            <div>
                <h2 class="text-2xl font-bold">${word.word} (<i class="fa-solid fa-microphone-lines"></i> : ${pronunciation})</h2>
            </div>
            <div>
                <h2 class="font-bold">Meaning</h2>
                <p>${meaning}</p>
            </div>
            <div>
                <h2 class="font-bold">Example</h2>
                <p>${example}</p>
            </div>
            <div>
                <h2 class="font-bold">Synonym</h2>
                <div class="">${createElement(word.synonyms)}</div>
            </div>
        </div>
    `
    document.getElementById("my_modal_5").showModal()

}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container")
    const noLesson = document.getElementById("no-lesson")
    const noLessonImg = document.getElementById("no-lesson-img")

    // reset container
    wordContainer.innerHTML = ""
    wordContainer.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"

    // toggle null message
    if (!words || words.length === 0) {
        noLesson.classList.remove("hidden")
        // show illustration only when this situation comes after a fetch
        noLessonImg.classList.remove("hidden")
        manageSpinner(false)
        return
    }
    noLesson.classList.add("hidden")
    noLessonImg.classList.add("hidden")

    words.forEach((word) => {
        console.log(word)
        const card = document.createElement("div")
        card.innerHTML = `
                <div class="bg-white rounded-xl shadow-sm text-center p-10 px-5 h-full">
                <h2 class="font-bold text-2xl">${word.word}</h2>
                <p class="font-normal">Meaning/Pronounciation</p>
                <div class="text-xl font-medium font-bangla">${word.meaning ? word.meaning : "মানে খুঁজে পাইনি"} / ${word.pronunciation || word.pronounciation || "Pronunciation N/A"}</div>
                <div class="flex justify-between items-center gap-2 mt-4">
                <button  onclick="loadWordDetail(${word.id})" class="btn btn-circle bg-[#1A91FF10] rounded-md flex-1  "><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn btn-circle bg-[#1A91FF10] rounded-md flex-1"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>`;
        wordContainer.append(card)

    });
    manageSpinner(false)
}

const displayLesson = (lessons) => {
    // 1. get the container & empty
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = ""
    // 2. get into every lessons
    for (let lesson of lessons) {
        //     3. create Element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>`
        //     4. append into container
        levelContainer.append(btnDiv)
    }

}
loadLessons();

document.getElementById("btn-search").addEventListener("click", () => {
    const input = document.getElementById("input-search");
    const searchValue = input.value.trim().toLowerCase();

    manageSpinner(true);

    fetch("https://openapi.programming-hero.com/api/words/all")
        .then(res => res.json())
        .then(data => {
            removeActive();
            const allWords = data.data;
            const filterWords = allWords.filter(word => word.word.toLowerCase().includes(searchValue));
            displayLevelWord(filterWords);
        })
});