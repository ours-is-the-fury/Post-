function Post(URL, PARAMTERS) {
  function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.
    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
      }
    }
    document.body.appendChild(form);
    form.submit();
  }
  post('http://www-1.fuioupay.com:18670/mobile_pay/h5pay/payAction.pay',
    {
      ENCTP: 1,
      VERSION: '2.0',
      LOGOTP: 1,
      MCHNTCD: '0002900F0022256',
      FM: {
        MCHNTCD: '0002900F0022256',
        TYPE: 10,
        VERSION: '2.0',
        MCHNTORDERID: 9632577412589332544,
        USERID: 1236985478,
        AMT: 236,
        BANKCARD: 6226090217436936,
        NAME: '张三',
        IDTYPE: 0,
        IDNO: 411424199310102110,
        BACKURL: 'http://www.baidu.com',
        HOMEURL: 'http://www.baidu.com',
        REURL: 'http://www.baidu.com',
        REM: 1,
        REM: 2,
        REM: 33,
        SIGNTP: 'md5',
        SIGN: 'ea2deecbeef9d59f9dfe6d1cebd96372',
      }
    }
  );
}
