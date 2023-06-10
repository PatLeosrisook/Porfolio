let searchBox = document.querySelector(".Search")
let meaningSection = document.querySelector("#Meanings")
let audio = null
let playAudio = document.querySelector(".PlayBtn")
let sourceLink = document.querySelector("#sourceLink")
let fontList = document.querySelector(".font")
let dropList = document.querySelector('.dropList')
let dropListItems = document.querySelectorAll('.dropList li')
let selectedItem = document.querySelector("#selected_font")
let currentlySelected = document.querySelector('.dropList .selected')
let main = document.querySelector('main')
let setMode = document.querySelector("#setMode")
let invalidText = document.querySelector("#invalid_input")
let keyword = document.querySelector('#word')
let currentMode = 'light'
searchBox.addEventListener("keyup", function(e) {
    if(e.key == "Enter") {
        if(e.target.value == "") {

            searchBox.classList.add("invalidInput")
            invalidText.style.display = 'block'
            return;
        }
        //if there is and invalid input before, rmove it.
        searchBox.classList.remove("invalidInput")
        invalidText.style.display = 'none'
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${e.target.value}`).then(response => {
            return response.json()
        }).then(data => {
            
            return data
        }).then(result => {
        
            createItem(result[0].meanings, result[0].phonetics, result[0].sourceUrls, e.target.value) 
        }).catch(e => {
            //hide currently appearing section then replace with "not found " section
            if(main.childNodes[1].getAttribute('id') == "Empty") {
                document.querySelector("#Empty").style.display = "none"
                document.querySelector("#Def_notFound").style.display = "block"
                document.querySelector("#Definitions").style.display = "none"
                
            } else if(main.childNodes[1].getAttribute('id') == "Definitions") {
                document.querySelector("#Definitions").style.display = "none"
                document.querySelector("#Empty").style.display = "none"
               document.querySelector("#Def_notFound").style.display = "block"
       
           }
        })
    } else {
        //show that the input is invalid
        
    }
})
function createItem(meanings, phonetic,source,word) {
    
    keyword.textContent = word
    //if the existing section (childnode[1]) is and empty section then input the definition section
    if(main.childNodes[1].getAttribute('id') == "Empty") {
        document.querySelector("#Empty").style.display = "none"
        document.querySelector("#Definitions").style.display = "flex"
        //hide this just in case it doesn't
        document.querySelector("#Def_notFound").style.display = "none"
    } else if(main.childNodes[1].getAttribute('id') == "Def_notFound") {
        document.querySelector("#Def_notFound").style.display = "none"
        document.querySelector("#Definitions").style.display = "flex"

    }

    if(meaningSection.childElementCount !== 0) {
        let children = document.querySelectorAll(".meaning")
        //when finding new word, remove the previous one 
        children.forEach(child => {
            child.remove()
        })
    } 
    let sourceWrap = document.querySelector(".link_wrap")
    sourceLink.textContent = source[0]
    sourceWrap.append(sourceLink)
    meanings.forEach((meaning, index) => {
        let section = document.createElement('section')
        let partOfSpeech = document.createElement("article")
        let p = document.createElement("p")
        let POS_text = document.createTextNode(meaning.partOfSpeech)
        let hori = document.createElement('div')
        let definitionSection = document.createElement("section")
        let definitionHead = document.createElement("p")
        let definitionHeadText = document.createTextNode("Meaning")
        let listOfMeanings = document.createElement("ul")
        let synonymWrap = document.createElement("article")
        let synonymHeading = document.createElement("p")
        let synText = document.createTextNode("Synonyms")
        let pronounciation = document.querySelector("#Pronounciation")
        listOfMeanings.classList.add("list_of_means")
        
        section.classList.add("meaning")
        //meaning header 
        partOfSpeech.classList.add("POS")
        p.append(POS_text)
        hori.classList.add("horizon_line")
        synonymHeading.append(synText)
        
        if(currentMode == 'dark') {
            p.classList.add("dark_mode_text")
            hori.classList.add("dark_mode_line")
            synonymHeading.classList.add("dark_mode_example")
        }

        synonymWrap.append(synonymHeading)
        synonymWrap.classList.add("synonyms")

        partOfSpeech.append(p)
        
        partOfSpeech.append(hori)
        definitionSection.classList.add("meaning_wrap")
        definitionHead.append(definitionHeadText)
        // let phonetic = meaning.phonetics.filter(phonetic => phonetic.text.length > 0 && phonetic.audio.length > 0)
        let phonetics = phonetic.filter(p => p.text != "" && p.audio != "")
        pronounciation.textContent = phonetics[0].text
        audio = new Audio(phonetics[0].audio)

        meaning.definitions.forEach(def => {

            let li = document.createElement("li")
            let definition = document.createTextNode(def.definition)
            li.append(definition)
            if(def.hasOwnProperty("example")) {
                let span = document.createElement("span")
                let exampleText = document.createTextNode(def.example)
                let lineBreak = document.createElement('br')
                let lineBreak2 = document.createElement('br')
                span.append(exampleText)
                span.classList.add("example")
                if(currentMode == 'dark') {
                    span.classList.add('dark_mode_example')
                }
                li.append(lineBreak)
                li.append(lineBreak2)
                li.append(span)
            }
            if(currentMode == "dark") {
                li.classList.add("dark_mode_text")
            }
            listOfMeanings.append(li)
        })
        definitionSection.append(definitionHead)
        definitionSection.append(listOfMeanings)
        meaning.synonyms.forEach(syn => {
            let link = document.createElement("a")
            let linkText = document.createTextNode(syn)
            link.append(linkText)
            synonymWrap.append(link)
            
        })
        section.append(partOfSpeech)
        section.append(definitionSection)
        section.append(synonymWrap)
        if(index == meanings.length - 1 && currentMode == 'dark') {
            console.log("last child")
            section.classList.add('dark_mode_section')
        }
        meaningSection.append(section)
    })

    
}
playAudio.addEventListener('click', function(e) {
    if(audio !== null) {
        audio.play()
    }
})
fontList.addEventListener
fontList.addEventListener("click", function(e) {
    // const result = dropClasses.toggle("showList")
    dropList.classList.toggle('showList')
})
setMode.addEventListener('change',function() {
    if(setMode.checked){
        currentMode = 'dark'
        // document.getElementsByTagName("body")[0].style.backgroundColor = "#050505";
        document.getElementsByTagName('body')[0].classList.add('dark_mode_bg')
        document.querySelectorAll('.synonyms p ').forEach(s => {
            s.classList.add("dark_mode_example")
        })
        keyword.style.color = 'white'
        document.querySelector(".Search").classList.add("dark_input");

        document.querySelectorAll('.list_of_means li').forEach(li => {
            li.classList.add("dark_mode_text")
        })
        document.querySelectorAll(".empty_state_head").forEach(empty => {
            empty.classList.add('dark_mode_text')
        })
        document.querySelectorAll(".empty_state_para").forEach(empty => {
            empty.classList.add('empty_state_para_dark')
        })

        document.querySelector('.dropList').classList.add('dark_mode_dropList')
        
        document.querySelectorAll('.dropList li').forEach(li => {
            if(li.classList.contains('selected')) {
                li.style.color = "#8F19E8";
            } else {

                li.style.color = 'white'
            }
        })
        document.querySelector("#selected_font").classList.add("dark_mode_text")
        document.querySelector("#Moon_path").classList.add('dark_moon')

        document.querySelectorAll('.POS p').forEach(p => {
            p.classList.add("dark_mode_text")
        })
        document.querySelectorAll('.horizon_line').forEach(line => {
            line.classList.add("dark_mode_line")
        })
        document.querySelectorAll('.synonyms p').forEach(syn => {
            syn.classList.add("dark_mode_example")
        })
        document.querySelectorAll('.meaning')[document.querySelectorAll('.meaning').length - 1].classList.add('dark_mode_section')
    } else {
        currentMode = 'light'
        document.getElementsByTagName('body')[0].classList.remove('dark_mode_bg')
        document.querySelector(".Search").classList.remove("dark_input")
        document.querySelectorAll(".empty_state_head").forEach(empty => {
            empty.classList.remove("dark_mode_text")
        })
        document.querySelectorAll(".empty_state_para").forEach(empty => {
            empty.classList.remove("empty_state_para_dark")
        })
        keyword.style.color = 'black'
        document.querySelectorAll('.list_of_means li').forEach(li => {
            li.classList.remove("dark_mode_text")
        })
        

        document.querySelector('.dropList').classList.remove("dark_mode_dropList")
        document.querySelectorAll('.dropList li').forEach(li => {
            if(li.classList.contains('selected')) {
                li.style.color = "#8F19E8";
            } else {

                li.style.color = 'black'
            }
        })
        document.querySelector("#selected_font").classList.remove("dark_mode_text")
        document.querySelector("#Moon_path").classList.remove('dark_moon')

        document.querySelectorAll('.POS p').forEach(p => {
            p.classList.remove("dark_mode_text")
        })
        document.querySelectorAll('.horizon_line').forEach(line => {
            line.classList.remove("dark_mode_line")
        })
        document.querySelectorAll('.synonyms p').forEach(syn => {
            syn.classList.remove("dark_mode_example")
        })
        //TODO:: change the border bottom

        document.querySelectorAll('.meaning')[document.querySelectorAll('.meaning').length - 1].classList.remove('dark_mode_section')
    }

})

dropListItems.forEach(item => {
    item.addEventListener("click", function(e) {
        selectedItem.childNodes[0].textContent = e.target.textContent
        //remove the selected style from currently selected, then re apply to the new one.
        currentlySelected.classList.remove('selected')
        e.target.classList.add("selected")
        //if it's in dark mode, make sure the default one is back to white, not black colour font
        if(currentMode == 'dark') {
            document.querySelectorAll('.dropList li').forEach(li => {
                if(li.classList.contains('selected')) {
                    li.style.color = "#8F19E8";
                } else {
    
                    li.style.color = 'white'
                }
            })
        }
        currentlySelected = e.target
        if(currentlySelected.textContent == "Mono") {
            document.querySelectorAll("*").forEach(element => {
                element.style.fontFamily = 'inconsolata'
            })
        } else if(currentlySelected.textContent == 'Serif') {
            document.querySelectorAll("*").forEach(element => {
                element.style.fontFamily = 'lora'
            })
        } else {
            document.querySelectorAll("*").forEach(element => {
                element.style.fontFamily = 'inter'
            })
        }
    })
})