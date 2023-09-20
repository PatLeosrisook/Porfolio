class CustomComponent extends HTMLElement{
    constructor() {
        super();
        const template = document.querySelector("#project-template");
        const shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.appendChild(template.cloneNode(true))
        this.imageElement = shadowRoot.querySelector("img")
        this.headingElement = shadowRoot.querySelector("h3")
        this.techElement = shadowRoot.querySelector("div")
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