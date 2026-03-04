// console.log(document.querySelectorAll("a"));

let controlpressed = false;

function redirect(link, click, scrollToTop) {
    if (!controlpressed) {
        click.preventDefault ? click.preventDefault() : undefined;
        fetch(link)
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    // get the data from the fetched file to "data" variable
                    return response.text();
                } else {
                    // file could not be found. The line below directs user to requested page using 404 webpage (if possible).
                    window.location.href = link;
                }
            })

            .then(data => {
                // truncation process variables - used for string slice
                let start = 0;
                let end = 0;
                let sliceddata = 0;

                // truncation process function, requires a tag
                function truncationProcess(t) {
                    const openingTag = t;
                    const closingTag = t.substring(0, 1) + "/" + t.substring(1);
                }

                function mainFocus(n) {
                    return String(data[n] + data[n + 1] + data[n + 2] + data[n + 3] + data[n + 4] + data[n + 5]) === "<main>" ? n + 6 : null;
                }

                function mainoutFocus(n) {
                    return String(data[n - 6] + data[n - 5] + data[n - 4] + data[n - 3] + data[n - 2] + data[n - 1] + data[n]) === "</main>" ? n - 6 : null;
                }

                // truncationProcess("<main>");
                // html file truncation process to specified tag
                for (let len = 0; len < data.length; len++) {

                    start = !start ? mainFocus(len) : start;
                    end = !end ? mainoutFocus(len) : end;

                    if (start && end) {
                        sliceddata = data.slice(start, end);
                        break;
                    }
                }

                document.querySelector("main").innerHTML = sliceddata ? sliceddata : "";
                click.preventDefault ? history.pushState({ page: `${link}` }, "Test", `${link}`) : null;

                document.querySelectorAll("a.nav-link").forEach(to => {
                    let processLink = link;
                    to.classList.remove("active");

                    for (let mei = 0; mei < processLink.length; mei++) {
                        if (to.getAttribute("href") === processLink.substring(mei)) {
                            processLink = processLink.substring(mei);
                            break;
                        }
                    }

                    if (to.getAttribute("href") === processLink) {
                        to.classList.add("active");
                    }
                });

                if (scrollToTop) {
                    window.scrollTo(0, 0);
                }
            });
        
    }
}

document.querySelectorAll("a.nav-link").forEach(e => {
    console.log(e.getAttribute("href"));

    e.addEventListener("click", (l) => {
        redirect(e.getAttribute("href"), l, true);
    })
});

window.addEventListener("keydown", (k) => {
    if (k.key = "Control") {
        controlpressed = true;
    }
})

window.addEventListener("keyup", () => {
    controlpressed = false;
})

window.addEventListener("popstate", (e) => {
    const p = window.location.pathname;
    redirect(p, 0)
})