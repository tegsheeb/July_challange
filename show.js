const func = (data, cb) => {
  cb(data);
};

func(myData, (newDate) => {

});

const promiseFunc = (func) => {
  return (data) => new Promise((resolve, reject) => {
    func(data, (err, cbData) => {
      if (err) reject(err);
      resolve(cbData)
    })
  });
}

const newFuncAsPromise = promiseFunc(func);

newFuncAsPromise.then((result) => {

});