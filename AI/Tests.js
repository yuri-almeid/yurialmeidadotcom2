async function main(){
  
  let model = tf.sequential();

  await model.loadLayersModel(tf.io.browserHTTPRequest(
    'http://yurialmeida.com/AI/json/my-model.json',
    {method: 'GET', headers: {mode: 'no-cors'} }));

  console.log(model)

}

main()