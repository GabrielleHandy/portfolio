


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
    if(elements){

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




    }
    
    
};

 
    const experienceDiv = document.getElementById('experience')
    if(experienceDiv){
       const jobHistory = [
        {
          "Job Title": "Information Specialist",
          "Date": "February 2023 to Present",
          "Company": "Forsyth County Public Library",
          "Location": "Winston-Salem, NC",
          "Job Summary": "Design and create eye-catching flyers and displays to promote library programs and events, leveraging graphic design skills. Efficiently manage library resources and circulation using automated software systems. Assist library patrons in resolving technology-related inquiries, demonstrating strong technical aptitude. Responsible for maintaining and organizing digital records and data using Microsoft Excel. Utilize library software to streamline processes such as issuing library cards, reserving rooms, and managing book holds."
        },
        {
          "Job Title": "Developer Internship at Shopify",
          "Date": "May 2022- June 2022 (Left early for personal reasons)",
          "Company": "Shopify Canada",
          "Location": "Canada",
          "Job Summary": "Hands-on experience with writing and pushing code that improved the backend code base of Shopify’s product with guided mentorship. Followed Agile methodology, and participated in daily scrum meetings, project planning, and sprints involving multiple areas of development. Experience with Ruby."
        },
        {
          "Job Title": "Software Engineering Fellowship",
          "Date": "November 2021- January 2022",
          "Company": "Hackbright Academy",
          "Location": "San Francisco, CA",
          "Job Summary": "Exponentially grew knowledge and coding experience using hands-on practice, projects, and guided mentorship. Part of an empowered team working on delivering quality software projects in an agile environment. Examples of projects include: Movie ratings app: Tech used: HTML, Jinja2, Flask, SQLAlchemy. Shark-themed hangman game: Tech used: Ajax, Javascript, Flask. Melon shopping site -Backend- Tech used: Flask, Jinja. Followed Agile methodology, and participated in daily scrum meetings, project planning, and sprints."
        },
        {
          "Job Title": "Manga Translator with Tech and Translation Skills",
          "Date": "March 2020 to May 2020",
          "Company": "JianLai Global",
          "Location": "Remote",
          "Job Summary": "Skillfully translated Chinese manga content for a Chinese manga website, employing bilingual proficiency. Edited and enhanced previously translated work for accuracy and clarity. Developed and maintained a comprehensive glossary to streamline future translation projects."
        }
      ]


          for(let job in jobHistory){
            console.log(job)
            let experience = document.createElement('div')
            experience.innerHTML= `<div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-primary fw-bolder mb-2">${jobHistory[job]["Date"]}</div>
                                                <div class="small fw-bolder">${jobHistory[job]["Job Title"]}</div>
                                                <div class="small text-muted">${jobHistory[job]["Company"]}</div>
                                                <div class="small text-muted">${jobHistory[job]["Location"]}</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8"><div>${jobHistory[job]["Job Summary"]}</div></div>
                                    </div>
                                </div>
                            </div>`


            experienceDiv.appendChild(experience)

          }

    }
    



