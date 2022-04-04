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
      const randomBase = Math.floor(Math.random() * this.dna.length)
      let baseToMutate = this.dna[randomBase]
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
    }, 
    compareDNA: function(otherOrganism){
      const identicalBases = this.dna.reduce((acc, current, index, arr) => {
        if (arr[index] === otherOrganism.dna[index]){
          return acc + 1
        } else {
          return acc
        }
      }, 0)
      const percentageSimilarities = Math.round((identicalBases / this.dna.length) * 100)
      console.log(`The 2 organisms have ${percentageSimilarities}% of common DNA`)
    }
  }
}

const organism = pAequorFactory(1, mockUpStrand())
//console.log(organism.dna)
console.log(organism.mutate())







