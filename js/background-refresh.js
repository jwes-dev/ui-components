export function AutoReloadOnBlur() {
    console.log("monitorinig");

    var fingerPrint = localStorage.getItem("last-finger-print");

    setInterval(() => {
        window.fetch("/file-watch.php").then(resp => resp.text()).then(content => {
            if(content !== fingerPrint) {
                console.log("change detected");
                localStorage.setItem("last-finger-print", content);
                location.reload();
            }
        });
    }, 2000);
}