class MockDatabase {
    constructor() {
        this.admin = JSON.parse(localStorage.getItem("ADMIN-cards")) || [];
        this.user = JSON.parse(localStorage.getItem("USER-cards")) || [];

        this.admin_order = localStorage.getItem("ADMIN-order") || 0
        this.user_order = localStorage.getItem("USER-order") || 0
    }
 
  
    getAdminCard() {
        return this.admin
    }
    getUserCard() {
        return this.user
    }
    getAllCards() {
        //return sorted card (from newest to oldest)
        return [...this.admin].concat([...this.user]).sort((a,b) => {
            if(a.created < b.created) {
                return 1
            } 
            return -1 
        })
    }
    generateNewId() {
        return Math.floor(Math.random() * 200);
    }
    getAdminOrder() {
        return this.admin_order
    }
    getUserOrder() {
        return this.user_order
    }
    addCard(role, content) {
        let newCard = {
            id: this.generateNewId(),
            role: role,
            content: content,
            created: new Date().toLocaleTimeString(),
            order: (role.toLowerCase() === 'admin') ? Number(this.admin_order) + 1 : Number(this.user_order) + 1
        }
        if(role.toLowerCase() === 'admin') {
            this.admin_order ++ 
            this.admin.push(newCard)

        } else {
            this.user_order++
            this.user.push(newCard)
        }
        this.syncUpdate()
    }
    AddToAdmin() {
        let newCard = {
            id: this.generateNewId(),
            role: 'admin',
            content: "",
            created: new Date(),
            order : this.admin_order + 1
        }
        this.admin_order ++
        this.admin.push(newCard) 
        this.syncUpdate()
        return newCard.id //mark which one will user be editing the content 
    }
    AddToUser() {
        let newCard = {
            id:this.generateNewId(),
            role: 'user', 
            content: "",
            created: new Date(),
            order: this.user_order + 1
        }
        this.user_order++
        this.user.push(newCard)
        this.syncUpdate()
        return newCard.id
    }
    findAdminCard(id) {
        let searchedId = this.admin.findIndex(card => card.id === id) 
        if(searchedId) {
            return searchedId
        }
        return -1 
    }
    editCardContent(id, role,content) {
        // this should be use to edit the existing card. 
        var searchedItemIndex = null ;
        if(role.toLowerCase() === "admin") {
            searchedItemIndex = this.getAdminCard().findIndex((card) => card.id === id)
            if(searchedItemIndex !==  -1) {
                
                this.admin[searchedItemIndex].content = content // if we're editing the latest one, then ..
            } 
            
        } else {
            searchedItemIndex = this.getUserCard().findIndex((card) => card.id === id)
            this.user[searchedItemIndex].content = content
        }
        this.syncUpdate()
        
    }
    getNumberOfUserCards() {
        return this.user.length
    }
    getNumberOfAllCards() {
        return this.user.length + this.admin.length
    }
    syncUpdate() {
        //in this case, to local storage. Only admin will be able to access both.
        localStorage.setItem("ADMIN-cards", JSON.stringify(this.admin))
        localStorage.setItem("USER-cards", JSON.stringify(this.user))
        localStorage.setItem("ADMIN-order", this.admin_order)
        localStorage.setItem("USER-order", this.user_order)

    }
}
export const database = new MockDatabase()