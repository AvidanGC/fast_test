$(document).ready(function () { 
    const path= 'https://avidan.herokuapp.com' ;
//get Inventory total
axios.get(`${path}/api/inventory/stock_total`)
    .then( res => {
        console.log(res.data);
        let lbl = document.getElementById('total_products');
        lbl.innerHTML = res.data
    }).catch(e => {
      console.log(e);
  })
   //get Inventory by prodcut         
document.getElementById("getStock").onclick = function(e) {
    let sku = document.getElementById('sku').value;
    getInventoryByProduct(sku);
};
    

function getInventoryByProduct(sku){
        data = JSON.stringify({"sku":sku});
        axios.get(`${path}/api/inventory/stock_by_product/${sku}`)
          .then( response => {
            let product = response.data;
            let total = document.getElementById('total_sku');
            let name = document.getElementById('nameProduct');
            total.innerHTML = product.total;
            name.innerHTML = product.name;
            const card = document.getElementById('info_prod');
            card.classList.remove('invisible');
            document.getElementById('sku').value = '';
            
          }).catch(e => {
            console.log(e);
        })
      
        
    }
});
