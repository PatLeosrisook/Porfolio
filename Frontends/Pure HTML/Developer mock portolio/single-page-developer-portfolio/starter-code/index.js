class CustomComponent extends HTMLElement{
    constructor() {
        super();
        document.addEventListener('DOMContentLoaded', () => {
            const template = document.querySelector("template");
            const content = template.content
            const shadowRoot = this.attachShadow({mode: 'open'})
            shadowRoot.appendChild(content)
            this.imageElement = shadowRoot.querySelector("img")
            this.headingElement = shadowRoot.querySelector("h3")
            this.techElement = shadowRoot.querySelector("div")
        })
            // Fetch the template HTML from template.html
        
    }
    setImageUrl(url) {
        this.imageElement.src = url 
    }
    getImageUrl() {
        return this.imageElement.src
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