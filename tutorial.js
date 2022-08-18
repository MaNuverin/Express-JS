const tabs = document.querySelector(".tabs");
const content = document.querySelector('.tabs > .content');

const hashes = new Map([
    ["#expres", "tab1"],
    ["#nest", "tab2"],
    ["#angular", "tab3"],
])
// define another map called data for mapping the tab id with an object

const data = new Map([
    [
        "tab1",
        {
            url : "index.html#express",
            content : "Express is a NodeJs library for server-side Javascript"
        }
    ],
    [
        "tab2", 
        {
            url : "index.html#nest",
            content : "Nest JS is the Library Node JS Light WEIGHT"
        }
    ],
    [
        "tab3",
        {
            url: "index.html#angular",
            content: "angular is a platform for fullstack"
        }
    ]
])
// make function update for content
function update(tabId){
    //menghapus class active saat menyeleksi tab
    const currentTab = tabs.querySelector('.active')
    if(currentTab.id != tabId){
        currentTab.classList.remove("active")
    }

    //menambahkan class active untuk menyeleksi tab

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active")

    const entry = data.get(tabId);

    if(entry){
        //update the url
        history.pushState(null, "", entry.url)
        //change the content
        content.innerHTML = entry.content;
    }
    
}
(() => {
        const tabId = hashes.get(window.location.hash);

        if(tabId) update(tabId)
    })();
tabs.addEventListener("click", (event) => {
    if(!event.target.id) return;
    update(event.target.id)
})