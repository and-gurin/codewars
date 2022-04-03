const calculate=(...par1)=>(...par2)=> {
  return [].concat(par1, par2).reduce((a, b) => a + b)
}