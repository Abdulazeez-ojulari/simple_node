function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  let  count = 5
  while(count>0) {
    console.log('Abdulazeez Containers! ' + count);
    await sleep(5000);
    count--
  }
}

main();
