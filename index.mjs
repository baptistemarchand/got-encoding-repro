import got from 'got'

const main = async () => {

  const res1 = await got('https://latin1-api.vercel.app/', {
    encoding: 'latin1',
    responseType: 'json',
  })
  // Outputs: {data: "?"} 
  console.log('res1', res1.body)

  const res2 = await got('https://latin1-api.vercel.app/', {
    encoding: 'latin1',
  })
  // Outputs: {data: "é"} 
  console.log('res2', JSON.parse(res2.body))
}

main()
