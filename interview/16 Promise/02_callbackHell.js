method1(function(err, result) {
  if (err) {
    throw err;
  }
  method2(function(err, result) {
    if (err) {
    throw err;
    }
    method3(function(err, result) {
      if (err) {
        throw err;
      }
      method4(function(err, result) {
        if (err) {
          throw err;
        }
        method5(result);
      });
    });
  });
});