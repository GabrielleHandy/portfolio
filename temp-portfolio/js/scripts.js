


/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


//https://css-tricks.com/snippets/css/typewriter-effect/ typewriting effect



class TxtType {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
}


window.onload = function() {
    var elements = document.querySelector(".typewrite");
    
    
    var toRotate = elements.getAttribute('data-type');
    var period = elements.getAttribute('data-period');
    if (toRotate) {
          new TxtType(elements, JSON.parse(toRotate), period);
        }
    
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// window.onload = function populateExperience() {
//     const experienceDiv = document.getElementById('experience')
//     let file = File("/assets/Experience.csv")
//     let reader = (file)
//     reader
// }
import { createReadStream } from 'fs';

createReadStream('/assets/Experience.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Each row is an object with columns as keys
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed.');
  });


var experienceHtml = `<div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-primary fw-bolder mb-2">${jobDate}</div>
                                                <div class="small fw-bolder">${jobTitle}</div>
                                                <div class="small text-muted">${company}</div>
                                                <div class="small text-muted">${jobLocation}</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>${jobSummary}</div></div>
                                    </div>
                                </div>
                            </div>`