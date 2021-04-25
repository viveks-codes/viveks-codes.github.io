# Portfolio

## A simple portfolio template for Developers

**_IMPORTANT NOTE_**: This is only made with HTML ,CSS and some javascript libraries for animations. Without using react or gatsby like stuff. This is done to make it simple , so you only have to clone or download it before use. No need for a node package manager or any other complicated stuff . Just clone it and use it..

<h2 align="center">
  <img src="https://media.tenor.com/images/461e45aac4581c3283b382643248b144/tenor.gif" alt="Look up!" width="600px" />
  <br>
</h2>

## Features

⚡️ With only HTML , CSS and Javascript\
⚡️ One Page Layout\
⚡️ Fully Responsive\
⚡️ Modern UI + Reveal animations on scroll\
⚡️ Well organized documentation\

To view a live example, **[click here](https://dazzling-leakey-94ae39.netlify.app/)**\
To view a demo example, **[click here](https://sleepy-chandrasekhar-4761ea.netlify.app/)**

---

## Utilized

- [Tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) - Parallax effect
- [Smooth-scroll](https://github.com/cferdinandi/smooth-scroll) -For smooth scroll
- [Aniamte on Scroll](https://michalsnik.github.io/aos/) -For reveal on scroll

## Getting Started

## How To Use

Just go and click on clone or download. Also you can do it from your command line. On your command line :

```bash

# Clone this repository
 git clone https://github.com/devrinku/portfolio


# Go into the repository
 cd portfolio

# Remove current origin repository
rm -rf .git
```

<h2 align="center">
  <img src="https://dazzling-leakey-94ae39.netlify.app/template.PNG" alt="Simplefolio" width="100%">
</h2>

---

## Instructions:

Go to `index.html` and fill your information, they are 6 sections:

### 1 Navbar Section

- In two places given below put your own resume link,or just fill your information in the given link...

Inside class `sidenav`

- On class `closeSideNav button` which is `<a>` tag, put your custom resume link or follow the default link and fill your own information.

```html
<li>
  <!-- Give your own resume link here or follow this,and add your cerdentials -->
  <a
    class="closeSideNav button"
    href="https://docs.google.com/document/d/1cDSInadltq4nYs2RzJsSZKM82VhC6TuT3DOy83nLdPo/edit#"
    >Resume</a
  >
</li>
```

Inside class `right`

- On class `button resume` which is anchor tag, put your custom resume link or follow the default link and fill your own information.

```html
<li class="down" data-aos="fade-down" data-aos-delay="600">
  <!-- Give your own resume link here or follow this,and add your cerdentials -->
  <a
    class="button resume"
    href="https://docs.google.com/document/d/1cDSInadltq4nYs2RzJsSZKM82VhC6TuT3DOy83nLdPo/edit#"
    >Resume</a
  >
</li>
```

### 2 Header

- On class `x-large info fw-600` which is `<p>` tag, put your own name.

```html
<p
  data-aos="fade-zoom-in"
  data-aos-delay="2400"
  style="color: rgb(215, 215, 241);"
  class="x-large info fw-600"
>
  <!-- Own name here -->
  John Doe
</p>
```

- On class `x-large info my-1 fw-600 blue` which is h1 tag, put your own type ,depending upon you want to specify the type of developer you are .

```html
<h1
  data-aos="fade-zoom-in"
  data-aos-delay="2400"
  class="x-large info my-1 fw-600 blue"
>
  <!-- Own specification here -->
  I am a web devloper.
</h1>
```

- On class `button info-btn my-1` which is `<a>` tag, put your own email id

```html
<!-- Inside href attribute your own email -->
<a
  data-aos="fade-zoom-in"
  data-aos-delay="3000"
  class="button info-btn my-1"
  href="mailto:abc@gmail.com"
  >Get In Touch</a
>
```

### 3 Aside

Inside class `data-side`,there are some `<a>` tags.In these anchor tags, replace #! with your own social media links.You can also delete the whole section if you want..Get icons [here](https://fontawesome.com/)

```html
<ul>
  <li class="data-side" data-aos="fade-left" data-aos-delay="1400">
    <!-- #! Replace your facebook profile  link here-->
    <a href="#!"><i class="fab fa-facebook medium"></i></a>
  </li>
</ul>
```

### 4 About

On `<img>` ,give your image.You can make the image circular by giving a class of `round-img`.Below in the a tag you can give a link to your github account.

```html
<!-- Provide  link to your github profile inside href attribute -->
<a href="#!">
  <div class="imgoverlay"></div>
  <!-- Your Image Here -->
  <img src="ai.jpg" class="" alt=""
/></a>
```

On class `small grey text-left` which is the first `<p>` in section `about` tag ,replace the dummy text with your message ,that you want to convey to your recruiter..

```html
<p class="small grey text-left">
  <!-- Your message here -->
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam error enim
  quidem mollitia eligendi, voluptas minus consequuntur eaque maiores deleniti.
  Provident quasi, vitae distinctio asperiores libero ullam harum molestiae
  debitis quas?
</p>
```

Inside class `skills` there are some `<li>` tags,,give the name of technologies you have learned

```html
<div class="skills">
  <ul>
    <p class="small grey text-left my-1">
      Languages & <br />
      Frameworks:
    </p>
    <!-- Give the name of language/framework you have learned.You can add as much as names you want just wrap that whole inside the li tag,and give the icon -->
    <li><i class="fas fa-angle-right"></i>Tech 1</li>
    <li><i class="fas fa-angle-right"></i>Tech 2</li>
    <li><i class="fas fa-angle-right"></i>Tech 3</li>
  </ul>
  <ul>
    <p class="small grey my-1 text-left">
      Tools & <br />
      Platforms:
    </p>
    <!-- Give the name of language/framework you have learned  -->
    <li><i class="fas fa-angle-right"></i>Tool 1</li>
    <li><i class="fas fa-angle-right"></i>Tool 2</li>
    <li><i class="fas fa-angle-right"></i>Tool 3</li>
  </ul>
</div>
```

### 5 Work

You can expect this class `grid-2-work my-1` as a single project...
If you have more then 3 projects,you just have to copy this whole class and paste it.If you are having 5 projects you should have 5 containers of class `grid-2-work my-1`.You can add as much as projects you want..

The `<p>` tags before class `grid-2-work my-1` are project names.Give your own project name here.

```html
<p data-aos="fade-right" data-aos-offset="300" class="medium fw-600 text-left">
  <!-- Your project name here -->
  Project Name
</p>
```

In `<p>` tags inside `grid-2-work my-1` give your own content..Like replace project description with your own project description..Inside span give the technologies you have used to make that particular project..You can add more spans if you have used more technologies..
Inside class `links` in first `<a>` tag give your own github repo for that project..And in second `<a>` give a link to your deployed project. Also give  
In `<img>` tag give image of your project...`<img>` is inside an `<a>` tag, give a link to that `<a>` which goes to your live project....

```html
<div data-aos="fade-right" data-aos-offset="300" class="grid-2-work my-1">
  <div class="project-data">
    <p
      data-aos="fade-right"
      data-aos-offset="300"
      class="small grey text-left my"
    >
      <!-- Your Project description -->
      Project description
    </p>
    <ul class="my-2">
      <li>
        <i class="fas fa-chevron-circle-right"></i>
        <span class="small grey text-left my">
          <!-- Technology used -->
          Lorem.
        </span>
      </li>
      <li>
        <i class="fas fa-chevron-circle-right"></i>
        <span class="small grey text-left my">
          <!-- Technology used -->
          Lorem, ipsum.
        </span>
      </li>
      <li>
        <i class="fas fa-chevron-circle-right"></i>
        <span class="small grey text-left my">
          <!-- Technology used -->
          Lorem ipsum dolor sit.
        </span>
      </li>
      <li>
        <i class="fas fa-chevron-circle-right"></i>
        <span class="small grey text-left my">
          <!-- Technology used -->
          Lorem, ipsum.
        </span>
      </li>
      <li>
        <i class="fas fa-chevron-circle-right"></i>
        <span class="small grey text-left my">
          <!-- Technology used -->
          Lorem, ipsum dolor.
        </span>
      </li>
      <li>
        <i class="fas fa-chevron-circle-right"></i>
        <span class="small grey text-left my">
          <!-- Technology used -->
          Lorem ipsum dolor sit.
        </span>
      </li>
      <li>
        <i class="fas fa-chevron-circle-right"></i>
        <span class="small grey text-left my">
          <!-- Technology used -->
          Lorem ipsum dolor sit amet.
        </span>
      </li>
    </ul>
    <div class="links">
      <!-- Give a link to your project repository -->
      <a target="_blank" class="button btn" href="#!"> Code</a>
      <!-- Givethe link tp your live project -->
      <a target="_blank" class="button btn" href="#!"> Demo</a>
    </div>
  </div>
  <div data-tilt data-tilt-max="5" class="project-img">
    <!-- Give link to your live project in href attribute -->
    <a href="#!">
      <!-- Give image of your project -->
      <img src="pro1.jpg" alt=""
    /></a>
  </div>
</div>
```

### 6 Contact

Inside class `contact text-center` there are 3 `<p>` tags.In second `<p>` give your location.In third `<p>` tag say something to recruiter to hire you or to get in contact with you..After that in `<a>` give your own email id

```html
<div
  data-aos="fade-zoom-in"
  data-aos-delay="300"
  data-aos-offset="300"
  class="contact text-center"
>
  <p class="large white fw-600">Contact</p>
  <p class="medium grey fw-600 my-2">
    <i class="fas fa-map-marker-alt mx-1"></i>
    <!-- Your Location Here -->
    Lorem, ipsum dolor.
  </p>
  <p class="medium grey fw-600">
    <!-- Your message for recruiter to come in contact with you  -->
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
    pariatur.
  </p>
  <!-- Give Your own email id -->
  <a class="button my-2" href="mailto:ab@gmail.com">Get In Touch</a>
  <div>
    <a class="last mx" href="#top"> <i class="fas large fa-chevron-up"></i></a>
  </div>
</div>
```

In class `social-icons my-1`..There are some `<a>` tags wrapped insde `<li>`.Just give your own social media links inside href attribute of `<a>`..You can add more just copy on `<li>` tag and paste that..Search for that icon from font awesome ,copy the `<i>` and paste inside the `<a>`..
see [Font Awesome Icons](https://fontawesome.com/)

```html
<div class="social-icons my-1">
  <ul>
    <li>
      <!-- Add the link to your social media account  -->
      <a href="#!">
        <!-- Give Your social media icon  -->
        <i class="fab fa-facebook grey large"></i
      ></a>
    </li>
  </ul>
</div>
```

## Deploy 📦

Now its the time to deploy your portfolio

First make a repository of your project on github..

I recommend to use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY..

Just go there create your account. \

1.On your dashboard ,ypu will see `NEW SITE FROM GIT` ,click on that..

2.It will ask you for your github email and password...

3.After authenticaton you will get all your repository list..Select your portfolio repository ..

4.After selecting you will get window ,at the bottom there will a option of `Deploy` click on that..It will take a couple of seconds

5.Congrats your portfolio is live.

## Authors

- **Rajesh Kumar** - [https://github.com/devrinku](https://github.com/devrinku)

## License 📄

This project is licensed under the [MIT License](LICENSE)

## Acknowledgments 🎁

This was my first project after HTML CSS and Javascript..I wanted to share ,as it can be usefull for another devloper....If you like this project please drop a star..

### **_IMPORTANT NOTE_** : If you are facing any issue in using this...Just clone or download...Open the file..I have tried my best to explain things with the help of html comments there...I hope you will not face any issue there..
