const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  const donoting = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did noting'), 2000)
    })
  }
  const doSomething = async () => {
    console.log(await doSomethingAsync())
    console.log(await donoting())
  }
  
  console.log('Before')
  doSomething()
  console.log('After')