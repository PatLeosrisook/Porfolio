
function Database () {
    this.admin = JSON.parse(localStorage.getItem("ADMIN-cards")) || []
    this.user = JSON.parse(localStorage.getItem("USER-cards")) || []
    this.admin_order = JSON.parse(localStorage.getItem("ADMIN-order")) || 0
    this.user_order = JSON.parse(localStorage.getItem("USER-order")) || 0

      
    this.AdminCard = function() {
        return this.admin
    }
    this.UserCard = function() {
        console.log(this.user)
        return this.user
    }
    this.AllCards = function() {
        //return sorted card (from newest to oldest)
        return [...this.admin].concat([...this.user]).sort((a,b) => {
            if(a.created < b.created) {
                return 1
            } 
            return -1 
        })
    }
    this.GenerateNewId = function() {
        return Math.floor(Math.random() * 200);
    }
    this.AdminOrder = function() {
        return this.admin_order
    }
    this.UserOrder = function() {
        return this.user_order
    }
    this.AddCard = function(role, content) {
        let newCard = {
            id: this.GenerateNewId(),
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
        this.SyncUpdate()
    }

    this.FindAdminCard = function(id) {
        let searchedId = this.admin.findIndex(card => card.id === id) 
        if(searchedId) {
            return searchedId
        }
        return -1 
    }
    this.EditCardContent = function(id, role,content) {
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
        this.SyncUpdate()
        
    }
    this.NumberOfUserCards = function() {
        return this.user.length
    }
    this.NumberOfAllCards = function() {
        return this.user.length + this.admin.length
    }
    this.SyncUpdate = function() {
        //in this case, to local storage. Only admin will be able to access both.
        localStorage.setItem("ADMIN-cards", JSON.stringify(this.admin))
        localStorage.setItem("USER-cards", JSON.stringify(this.user))
        localStorage.setItem("ADMIN-order", this.admin_order)
        localStorage.setItem("USER-order", this.user_order)

    }
}
export const database = new Database()