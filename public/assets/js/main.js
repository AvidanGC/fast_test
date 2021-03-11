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
    
    if(sku != ""){
        getInventoryByProduct(sku);
    }
};
    

function getInventoryByProduct(sku){
        data = JSON.stringify({"sku":sku});
        const alert = document.getElementById('alert');
        alert.classList.add('invisible');
        const card = document.getElementById('info_prod');
        card.classList.add('invisible');

        axios.get(`${path}/api/inventory/stock_by_product/${sku}`)
          .then( response => {
              
          if(Object.keys(response.data).length > 0 && response.data.status !== "error"){
                let product = response.data;
                let total = document.getElementById('total_sku');
                let name = document.getElementById('nameProduct');
                total.innerHTML = product.total;
                name.innerHTML = product.name;
                card.classList.remove('invisible');
            
          }else{
            alert.classList.remove('invisible');
            alert.innerHTML = response.data.message;
          }
          document.getElementById('sku').value = '';
            
          }).catch(e => {
            console.log(e);
        })
      
        
    }
});
