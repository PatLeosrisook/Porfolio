class MockDatabase {
    constructor() {
        // this.admin = [];
        // this.user = []
        this.admin = JSON.parse(localStorage.getItem('ADMIN-cards')) || [];
        this.user = JSON.parse(localStorage.getItem("USER-cards")) || [];

        this.admin_order = localStorage.getItem("ADMIN-order")
        this.user_order = localStorage.getItem("USER-order")
    }
  
    getAdminCard() {
        return this.admin
    }
    getUserCard() {
        return this.user
    }
    generateNewId() {
        return Math.floor(Math.random() * 200);
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
        this.admin.push(newCard) //newest card will be on top.
        this.syncUpdateToCloud()
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
        this.syncUpdateToCloud()
        return newCard.id
    }
    editCardContent(id, role,content) {
        console.log("EDITING", id, role, content)
        var searchedItemIndex = null ;
        if(role == "admin") {
            searchedItemIndex = this.getAdminCard().findIndex((card) => card.id == id)
            this.admin[searchedItemIndex].content = content // if we're editing the latest one, then ..
            
        } else {
            searchedItemIndex = this.getUserCard().findIndex((card) => card.id == id)
            this.user[searchedItemIndex].content = content
        }
        
    }
    getNumberOfUserCards() {
        return this.user.length
    }
    getNumberOfAllCards() {
        return this.user.length + this.admin.length
    }
    syncUpdateToCloud() {
        console.log("SYNC...")
        //in this case, to local storage. Only admin will be able to access both.
        localStorage.setItem('ADMIN-cards', JSON.stringify(this.admin))
        localStorage.setItem('USER-cards', JSON.stringify(this.user))
        localStorage.setItem('ADMIN-order', this.admin_order)
        localStorage.setItem('USER-order', this.user_order)

    }
}
export const database = new MockDatabase()