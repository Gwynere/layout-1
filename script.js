const waypoints = document.querySelectorAll('.reveal');

function checkpoint() {
    waypoints.forEach(waypoint => {

        //halfway through the element
        const addClassAt = (window.scrollY + window.innerHeight) - waypoint.clientHeight / 2;

        const isHalfShown = addClassAt > waypoint.offsetTop;

        const elementBottom = waypoint.offsetTop + waypoint.clientHeight;
        const isNotScrollPast = (window.scrollY + window.innerHeight) <= elementBottom;

        if (isHalfShown && isNotScrollPast) {
            waypoint.classList.add('active');
        }
    });
};

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


window.addEventListener("scroll", checkpoint);