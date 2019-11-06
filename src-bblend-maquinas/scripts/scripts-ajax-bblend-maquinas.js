$.ajax({
  url: `/api/catalog_system/pub/products/search/?fq=productId:${productId}`,
  type: 'GET',
  success: function (response) {
  }
});

//frete modal
$('#btn-calcular-cep').on('click', function (e) {
  e.preventDefault();
  let items = [{
    id: 'SKU-DO-PRODUTO',  // sku do item
    quantity: 1,
    seller: '1'
  }];
  let postalCode = $('#input-cep').val();
  let country = 'BRA';
  vtexjs.checkout.simulateShipping(items, postalCode, country)
    .done(function (result) {
      $('#resultado-cep').html("Teste: R$" + result);
    });
})



$('#btn-calcular-cep').on('click', function (e) {
  e.preventDefault();
  var shippingData = [{
    logisticsInfo: logisticsInfoList,
    selectedAddresses: selectedAddressesList
  }];
  var orderFormId = '9f879d435f8b402cb133167d6058c14f';
  var country = 'BRA';
  vtexjs.checkout.simulateShipping(shippingData, orderFormId, country)
    .done(function (result) {
      $('#resultado-cep').html("Teste: R$" + result);
    });
})