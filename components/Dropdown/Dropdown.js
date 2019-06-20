class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content')
    // assign the reference to the ".dropdown-content" class found in the dropdown element

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent());
    this.container = document.querySelector('.section');
    this.container.addEventListener('click', ()=> this.removeContent());
  }
    // Toggle the ".dropdown-hidden" class off and on 
    toggleContent(){
      this.content.classList.toggle('dropdown-hidden');
      console.log();
    }
    removeContent(){
    this.content.classList.add('dropdown-hidden');
    }
  }
  
  const container = document.querySelector('body');
  container.addEventListener('click', function() {
  
  })
  

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
