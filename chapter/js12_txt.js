"use strict";

/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ 
    Author: Ayah Abdalla 
    Date: 4/28/2025

    Filename: js12.js
*/

// Runs onc the page is loaded and readu
$( () => {
    
    // Animate the h1 heading
    $("section > h1").css({
    fontSize: 0,
    opacity: 0
    })
    .animate({
    fontSize: "2.3em",
    opacity: 1
    }, 600);
    // Reveal the question when the page opens
    $("dl#faq")
    .hide()
    .effect("clip", {
    mode: "show",
    direction: "horizontal"
    }, 600);
    
    // Add click events to each question in the FAQ
    $("dl#faq dt").click(e => {
        let question = $(e.target);
        let answer = $(question.next());
        $(question).toggleClass("hiddenAnswer");

        if ($(question).hasClass("hiddenAnswer")) {
        $(answer).hide();
        } else {
        $(answer).show();
        }
    });

});