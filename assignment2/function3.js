var t;
Assignment = {


  settings: {
    cart: [{ name :"Watch",description : "Rolex",price : 100,}],
  },


  init: function() {
    t = this.settings;
  },


  product : function(name,description,price) {
    cart.push({name:name,description:description,price:price});
    return cart;
    },

  calculate : function(cart) {
    var total = 0;
    for(var i = 0; i < t.cart.length; i++)
    {
        total += t.cart[i].price ;
    }
    return total - ((total/100)*10);
  },

};










