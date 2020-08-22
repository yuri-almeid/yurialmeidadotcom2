async function main(){
  

  const model = await tf.loadLayersModel('http://yurialmeida.com/AI/my-model.json', { mode: 'no-cors' });
}

main()