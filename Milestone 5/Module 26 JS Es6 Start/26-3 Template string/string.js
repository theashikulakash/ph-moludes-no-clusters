// const fname = "Ashikul"
// const lname = "Akash"

// const aboutMe = `My name is ${fname} ${lname}. I am a web developer. Practice area PH.`

// console.log(aboutMe)




// const title = "Heading";
// const price = "120";
// const description = `i am ashikul akash 1 
// i am ashikul akash 2
// i am ashikul akash 3
// i am ashikul akash 4
// `;


function getCardHtml(title, price, description) {
    const div = `<div class="card">
    <h2>${title}</h2>
    <p>$ ${price}/- USD</p>
    <p>${description}</p>
</div> `;
    console.log(div);
}


getCardHtml('Iphone 11', '140', 'Launched in 2019');

// console.log(getCardHtml)