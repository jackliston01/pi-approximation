function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ff(num) {
    if (num == 0) {
    return Decimal(1)
    }
    else if (num > 1) {
      return Decimal(num).times(ff(num-1))
    
    
      }
    else{
      return Decimal(num)
    
    
    }}



async function calc(){
    let sum= new Decimal(0)
        let negone = new Decimal(-1)
        let one = new Decimal(1)

        let two = new Decimal(2)

    window.history.replaceState(null, "", window.location.pathname);
    const start = performance.now()
    const formula = document.querySelector('input[name="formula"]:checked').value
    let precision = document.getElementById('precision').value
    const n = document.getElementById('n').value
    precision = Number(precision)
    const interval = document.getElementById('interval').value
    console.log(typeof precision )
    Decimal.set({ precision: precision });

    if (formula === "leib") {
        console.log(100%interval==0)
        console.log('leib')

        for (let i =0; i<n; i++){
            let iv = new Decimal(i)

            sum = sum.plus((negone.pow(iv)).div((two.times(iv)).plus(one)))

    
    
            if (i%interval==0){
                await delay(0)

                document.getElementById("pivalue").innerText=(sum.times(4))            }

            }
            

            }
    else if (formula=="euler"){
        let sum= new Decimal(0)

        
        
        for (let i =0; i<100; i++){
        let iv = new Decimal(i)

        sum = sum.plus( (((ff(iv)).pow(two)).times((two.pow(iv.minus(1))))).div(ff((two.times(iv).plus(1)))))
       
        
        if (i%interval==0){
            await delay(0)

            document.getElementById("pivalue").innerText=(sum.times(4))            }

        }}

    
    const end = performance.now()
    document.getElementById('time').innerText= `Time: ${(((end-start)/1000)).toFixed(3)} seconds`   
    }




    
    




