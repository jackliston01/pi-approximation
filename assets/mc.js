
var running=true
async function run(){
    running=true
    while (running){
    var total=0
    const interval = document.getElementById('interval').value
    const n = document.getElementById('n').value
    for (var i =0; i<n; i++ ){
        var x=math.random(-1,1)
        var y=math.random(-1,1)
        if ((x*x+y*y) < 1){
            total++
        }
        if (i%interval == 0){
            await delay(0)
           document.getElementById("pivalue").innerText=(total*4/n)
           myChart.data.datasets[1].data = [{ x: x, y: y }]
           myChart.update()            
        }
        

        }
        running=false
        
           document.getElementById("pivalue").innerText=(total*4/n)            

}}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const scchart = document.getElementById('scchart')
scchart.style.width = '100%';
scchart.style.maxWidth = '600px';
scchart.style.height = 'auto';
scchart.style.aspectRatio = '1/1';


const unitCirclePoints = [];
for (let deg = 0; deg <= 360; deg++) {
  const rad = deg * Math.PI / 180;
  unitCirclePoints.push({ x: Math.cos(rad), y: Math.sin(rad) });
}

const myChart = new Chart(scchart, {
  type: 'scatter',
  data: {
    datasets: [
      {
        label: 'Unit Circle',
        data: unitCirclePoints,
        showLine: true,
        borderColor: 'blue',
        backgroundColor: 'transparent',
        pointRadius: 0
      },
      {
        label: 'Points',
        data: [{ x: 0, y: 0 }],
        backgroundColor: 'red',
        pointRadius: 8
      }
    ]
  },
  options: {
      animation: false,

    responsive: false,
    maintainAspectRatio: true,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        min: -1,
        max: 1,
        grid: {
          color: (ctx) => ctx.tick.value === 0 ? 'black' : '#ccc',
          lineWidth: (ctx) => ctx.tick.value === 0 ? 2 : 1
        }
      },
      y: {
        min: -1,
        max: 1,
        grid: {
          color: (ctx) => ctx.tick.value === 0 ? 'black' : '#ccc',
          lineWidth: (ctx) => ctx.tick.value === 0 ? 2 : 1
        }
      }
    }
  }
});
