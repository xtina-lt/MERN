import React from 'react';

// GET A NEW QUOTE FOR EACH BUTTON CLICK / HIDEs
const change = () => {   
    // DEFINE QUOTES
    let t = "Quote:";
    let arr = [
            {title : t,
            desc:"Life is a promise.. Fulfill it",
            img:"https://m.lovethispic.com/uploaded_images/blogs/Inspiring-Gif-Quotes-Of-The-Day-49125-2.gif"
            },
        {
            title : t,
            desc : "Find a Reason to Smile",
            img: "https://i.gifer.com/KuhU.gif"
        },
        {
            title : t,
            desc : "Be Addicted to Your Passion",
            img : "https://c.tenor.com/V62KtXdTJQQAAAAC/motivational-quotes.gif"
        }
    ]
    // get random indexfrom arr
    let rand = Math.floor(Math.random() * arr.length);

    // CHANGE HTML
    // get id
    let x = document.getElementById("change-me");
    // change innerHtml
    x.innerHTML =`<h1> ${arr[rand].title} </h1> <h2> "${arr[rand].desc}!" </h2> <img src=${arr[rand].img} alt="quote" />`;
    // switch display
    (x.style.display === 'inline') ? x.style.display = 'none' : x.style.display = 'inline';
}

const Quote = () => {
    return (
        <div>
            <span id="change-me" style={{
                display: 'none',
            }}>

            </span>

            <button onClick={() => change()}>
                Click Me
            </button>
        </div>
    );
}

export default Quote;