const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittensInit = kittens
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.shift(name)
}