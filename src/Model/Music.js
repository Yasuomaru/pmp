class Music {
  #title
  #length
  #fileUri
  #backgroundImage

  constructor(input){
    this.#title = input.title
    this.#length = input.length
    this.#fileUri = input.fileUri
    this.#backgroundImage = input.backgroundImage
  }

  // getters
  getTitle(){
    return this.#title
  }

  getLength(){
    return this.#length
  }

  getFileUri(){
    return this.#fileUri
  }

  getBackgroundImage(){
    return this.#backgroundImage
  }

  // setters
  setTitle(title){
    this.#title = title
  }

  setLength(length){
    this.#length = length
  }

  setFileUri(fileUri){
    this.#fileUri = fileUri
  }

  setBackgroundImage(backgroundImage){
    this.#backgroundImage = backgroundImage
  }
}

export { Music }