var cart=[];
var prices=[];
var names=[];
var total;
console.log();
$(".add").click(function() {
    total=0;
    var image=$(".item-url").val();
    var product=$(".item-name").val();
    var price=parseInt($(".item-price").val());
    
    
    cart.push(product);
    prices.push(price);
    
    
    
    $(".items").append("<div class='indiv'>" + "<img src="+ image + ">" + "<p>" +product + "</p> " +  "<p>" + "<p>" + "$"+price+ "</p> "+ "</div>");
    
     prices.forEach(function(element)
        {   prices=prices;
            total=total+element;
        
    });
    
    var numofItems=(cart.length);
    

   
    console.log(total);
    $(".cart").html("Items in cart:"+ " " +numofItems);
    $(".price").html("Prices of Items:" + " $" + total);
    

});

$(".purchase").click(function(){
    var price=parseInt($(".item-price").val());
    
    
    alert("Thank you for shopping at Walmart. Your total will be $" + total + ". Please come again!");    
});