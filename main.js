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
          this.dna.splice(randomBase, 1, 'A')
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
    },
    willLikelySurvive: function(){
      const baseC_baseG = this.dna.filter(base => base === "C" || base ==="G")
      const percentageSurvival = Math.round((baseC_baseG.length / this.dna.length) * 100)
      return percentageSurvival >= 60
    }
  }
}

const organism = pAequorFactory(1, mockUpStrand())
const organism2 = pAequorFactory(2, mockUpStrand())

//Create 30 instances of pAequor and store them in an array only if they are likely to survive
const survivingOrganisms = []
let idCounter = 1

while (survivingOrganisms.length < 30) {
  let newSpecimen = pAequorFactory(idCounter, mockUpStrand())
  if (newSpecimen.willLikelySurvive()) {
    survivingOrganisms.push(newSpecimen)
  }
  idCounter++
}
console.log(survivingOrganisms)


//generate species
function generateSpecimens(survivingOrganisms) {

  const container = document.querySelector(".container-specimens")
  let output = ''
  survivingOrganisms.forEach((specimen) => {
    output += `
      <div class="specimen">
       
        <h2 class="article-titre">Specimen n°${specimen.specimenNum}</h2>
        <p class="dna">Its sequence of DNA is : ${specimen.dna}</p>
        <p class="dna mutation">Its DNA could mutate to : ${specimen.mutate()}</p>
     
      </div>
    `
  })
  container.innerHTML = output
  
}
generateSpecimens(survivingOrganisms)







