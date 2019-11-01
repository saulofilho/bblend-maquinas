$.ajax({
    url: `/api/catalog_system/pub/products/search/?fq=productId:${productId}`,
    type: 'GET',
    success: function (response) {
    }
  });