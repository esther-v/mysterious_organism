// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Factory function
const pAequorFactory = (num, dnaArray) => {
  return {
    specimenNum: num,
    dna: dnaArray,
    mutate: function(){
      let randomBase = Math.floor(Math.random() * this.dna.length)
      console.log(randomBase)
      let baseToMutate = this.dna[randomBase]
      console.log(baseToMutate)
      console.log(this.dna)
      switch(baseToMutate) {
        case 'A':
          this.dna.splice(randomBase, 1, 'T')
          break;
        case 'T':
          this.dna.splice(randomBase, 1, 'C')
          break;
        case 'C':
          this.dna.splice(randomBase, 1, 'G')
          break;
        case 'G':
          this.dna.splice(randomBase, 1, '1')
          break;
      }
      return this.dna
    } 
  }
}

const organism = pAequorFactory(1, mockUpStrand())
//console.log(organism.dna)
console.log(organism.mutate())







