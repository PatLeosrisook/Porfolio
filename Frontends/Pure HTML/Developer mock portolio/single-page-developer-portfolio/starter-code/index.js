class CustomComponent extends HTMLElement{
    constructor() {
        super();
        
        const template = document.querySelector("template");
        const content = document.importNode(template.content, true);
        const shadowRoot = this.attachShadow({mode: 'open'})
        this.imageElement = shadowRoot.querySelector("img")
        this.headingElement = shadowRoot.querySelector("h3")
        this.techElement = shadowRoot.querySelector("div")
        let url = this.getAttribute('imageUrl')
        document.querySelector(".project_img").setAttribute('src' , url)
        // Fetch the template HTML from template.html
        shadowRoot.appendChild(content)
        
    }
  // Define a property to set the image source
    set imageUrl(url) {
        if (this.imageElement) {
        this.imageElement.setAttribute('src', url) ;
        document.querySelector("img").setAttribute('src', url)
        }
    }

    // Define a getter for the image source
    get imageUrl() {
        return this.imageElement ? this.imageElement.src : '';
    
    }

    setTitle(title) {
        this.headingElement.textContent = title
    }
    getTitle() {
        return this.headingElement.textContent
    }
    setTech(tech) {
        this.techElement.textContent = tech
    }
    getTech() {
        return this.techElement.textContent
        
    }
    

}
customElements.define("project-component", CustomComponent)