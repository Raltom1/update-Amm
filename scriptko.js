document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        
    });
});
/*Loading */
function showLoader(event) {
    event.preventDefault();
    document.getElementById('loader').style.display = 'block';
    setTimeout(function() {
        window.location.href = 'index2.html';
    }, 1000); // Adjust the delay as needed
}
/*Button sa project image */
function changeImage(button, direction) {
    const projectItem = button.closest('.project-item');
    const images = projectItem.querySelectorAll('.project-images img');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
}
/**Dito naman read more button script */
function changeImage(button, step) {
    const projectItem = button.closest('.project-item');
    const images = projectItem.querySelectorAll('.project-images img');
    const activeImage = projectItem.querySelector('.project-images .active');
    const index = Array.from(images).indexOf(activeImage);
    let newIndex = index + step;

    if (newIndex < 0) {
        newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
        newIndex = 0;
    }

    activeImage.classList.remove('active');
    images[newIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectInfo = this.parentElement;
            projectInfo.classList.toggle('show');
        });
    });
});

/**Certificate */
document.addEventListener("DOMContentLoaded", function () {
    renderImageToCanvas('kat1bayan1', './Katibayan/Picture1.png');
    renderImageToCanvas('kat1bayan2', './Katibayan/Picture2.png');
});

function renderImageToCanvas(canvasId, imageSrc) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = imageSrc;
}

function disableKey(e) {
    if (e.key === 'PrintScreen' || (e.key === 'p' && (e.ctrlKey || e.metaKey)) || (e.key === 's' && (e.ctrlKey || e.metaKey)) || (e.key === 'S' && (e.ctrlKey || e.metaKey)) || (e.key === 's' && (e.ctrlKey && e.shiftKey)) || (e.key === 'S' && (e.ctrlKey && e.shiftKey))) {
        e.preventDefault();
        alert('Screenshots and printing are disabled on this page.');
        return false;
    }
    return true;
}

document.addEventListener('keydown', disableKey);

document.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen') {
        alert('Screenshots are disabled on this page.');
        navigator.clipboard.writeText('');
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

function initOverlay() {
    const overlay = document.getElementById('overlay');
    setInterval(() => {
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    }, 300);
}
/**Sa navigation link naman */
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');
            if (href === '#footer') {
                // Scroll to footer
                document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
            } else if (href === 'index2.html') {
                // Redirect to Projects page
                window.location.href = href;
            } else {
                // Default behavior (redirect within index.html using hash)
                window.location.href = 'index.html' + href;
            }
            event.preventDefault();
        });
    });
});





/**sa footer link */
document.addEventListener("DOMContentLoaded", function () {
    renderImageToCanvas('certificateCanvas1', 'path/to/certificate1.jpg');
    renderImageToCanvas('certificateCanvas2', 'path/to/certificate2.jpg');
});

function renderImageToCanvas(canvasId, imageSrc) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = imageSrc;
}

function disableKey(e) {
    if (e.key === 'PrintScreen' || (e.key === 'p' && (e.ctrlKey || e.metaKey)) || (e.key === 's' && (e.ctrlKey || e.metaKey)) || (e.key === 'S' && (e.ctrlKey || e.metaKey)) || (e.key === 's' && (e.ctrlKey && e.shiftKey)) || (e.key === 'S' && (e.ctrlKey && e.shiftKey))) {
        e.preventDefault();
        alert('Screenshots and printing are disabled on this page.');
        return false;
    }
    return true;
}

document.addEventListener('keydown', disableKey);

document.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen') {
        alert('Screenshots are disabled on this page.');
        navigator.clipboard.writeText('');
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

function initOverlay() {
    const overlay = document.getElementById('overlay');
    setInterval(() => {
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    }, 300);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.quick-links a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');
            if (href === '#projects') {
                window.location.href = 'index2.html'; // Redirect to index2.html for Projects
            } else {
                window.location.href = 'index.html'; // Redirect to index.html for other sections
            }
            event.preventDefault();
        });
    });
});



