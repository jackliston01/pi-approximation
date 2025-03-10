function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded");

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const pageId = e.target.dataset.page;
        
            navigateToPage(pageId);
            // Update URL without reload
            history.pushState({page: pageId}, '', `#${pageId}`);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.page) {
           
            navigateToPage(e.state.page);
        }
    });

    // Handle direct access with hash
    const hash = window.location.hash.slice(1);
    if (hash) {
        
        navigateToPage(hash);
    }
});

function navigateToPage(pageId) {
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
       
        selectedPage.classList.add('active');
    } else {
        console.error(`Page not found: ${pageId}`);
    }
}

async function calc(){

    window.history.replaceState(null, "", window.location.pathname);
    const start = performance.now()
    const formula = document.querySelector('input[name="formula"]:checked').value
    const precision = document.getElementById('precision').value
    const interval = document.getElementById('interval').value
    Decimal.set({ precision: 10000 });

    if (formula === "leib") {
        console.log(100%interval==0)
        let sum= new Decimal(0)
        let one = new Decimal(-1)
        let two = new Decimal(2)

        for (let i =0; i<precision; i++){
            let iv = new Decimal(i)

            sum = sum.plus(((one.pow(iv)).div((two.times(iv)).minus(one))))

    
    
            if (i%interval==0){
                await delay(0)

                document.getElementById("pivalue").innerText=(sum.times(4))            }

            }
            

            }
    const end = performance.now()
    document.getElementById('time').innerText= `Time: ${(((end-start)/1000)).toFixed(3)} seconds`   





    }
    




