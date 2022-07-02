import React from "react";

function makeEmojiArray (minutes) {
    let timeInterval = 5 ;
    let popEmoji = "☕️"
    let emojiList = ""

    if (minutes >= 30) {
         timeInterval = 10
         popEmoji = "🍱"
    }


    for (let i = 0; i < minutes; i += timeInterval){

        emojiList += popEmoji
    }
    return emojiList
}

function Article ({ title, date = "January 1, 1970", preview, minutes }) {
    const emojiList = makeEmojiArray(minutes)
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} - {emojiList} {minutes} min read </small>
            <p>{preview}</p>
        </article>
    )

}

export default Article