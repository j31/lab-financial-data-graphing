

const stockInfo  = axios.create({
  baseURL: 'http://api.coindesk.com/v1/bpi/historical/close.json',
});

function refresh(dateFrom, dateTo) {
  stockInfo.get(`?start=${dateFrom}&end=${dateTo}`)
 
  .then(( res ) => {
    console.log( res.data.bpi )
    printTheChart( res.data.bpi );
  })
  .catch(function (error) {
    console.log(error);
  });
}
  
  
  let printTheChart = (( bitData ) => {
    
    let bitLabels = Object.keys(bitData) 
    let bitPrice = Object.values(bitData) 
    
    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: bitLabels,
        datasets: [{
          label: "BitCoin",
          // backgroundColor: 'rgb(0, 255, 0)',
          borderColor: 'rgb(255, 100, 0)',
          data: bitPrice,
        }]
      }
    });
  });
  
  
  document.getElementById("dateTo").onchange = function(){
    dateFrom = document.getElementById("dateFrom").value
    dateTo = document.getElementById("dateTo").value
    refresh ( dateFrom, dateTo)
  }
  
  
  