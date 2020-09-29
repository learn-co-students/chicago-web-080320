


class Rectangle {
  constructor(args){
    this.width = args.width
    this.height = args.height
    this.color = args.color
    this.element = document.createElement('div')
    this.element.id = uuid.v1()

    this.render()

    this.createListener()
  }


  createListener(){


    this.element.addEventListener('click', () => {
      this.width *= 1.1
      this.height *= 1.1
      this.color = this.color.split(',').map(color =>  parseInt(color) + 10 ).join(',')

      this.setStyle()
    })
  }

  setStyle(){
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.backgroundColor= `rgb(${this.color})`
  }

  render() {
    const main = document.querySelector('main')
    this.setStyle()

    main.append(this.element)
  }

}





const rect = new Rectangle({ width: 40, height: 80, color: '15,15,0' })

















