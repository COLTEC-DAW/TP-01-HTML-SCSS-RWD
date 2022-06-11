let cppProducts = new Set(["CLion", "AppCode", "ResharperCpp"]);
let csProducts = new Set(["Resharper", "Rider", "dotPeek", "doTrace", "dotMemory", "dotCover", "TeamCity"]);
let dartProducts = new Set(["IntelliJ", "PyCharm", "WebStorm", "PhpStorm", "Rider", "CLion", "RubyMine", "AppCode", "GoLand"]);
let dslProducts = new Set(["Kotlin", "MPS"]);
let fsProducts = new Set(["Rider"]);
let goProducts = new Set(["IntelliJ", "GoLand"]);
let groovyProducts = new Set(["IntelliJ", "TeamCity"]);
let htmlProducts = new Set(["IntelliJ", "PyCharm", "WebStorm", "PhpStorm", "Rider", "CLion", "RubyMine", "AppCode", "GoLand", "TeamCity", "Resharper"]);
let java = new Set(["IntelliJ", "IntelliJEdu", "kotlin", "Qodana", "TeamCity"]);
let jsProducts = new Set(["IntelliJ", "RubyMine", "PhpStorm", "Rider", "CLion", "GoLand", "WebStorm", "AppCode", "CodeWithMe", "PhpStorm", "Resharper"])
let kotlinProducts = new Set(["IntelliJ", "IntelliJEdu", "kotlin", "Qodana", "DataLore"]);
let objectiveCProducts = new Set(["CLion", "AppCode", "TeamCity"])
let phpProducts = new Set(["IntelliJ",  "PhpStorm",  "TeamCity", "Qodana"]);
let pythonProducts = new Set(["IntelliJ", "Qodana", "DataLore", "DataSpell", "PyCharm", "Rider", "CLion", "DataGrip", "GOLand", "TeamCity", "PyCharmEud"]); 
let rProducts = new Set(["PyCharm"]);
let rubyProducts = new Set(["IntelliJ",  "RubyMine",  "TeamCity"])
let rustProducts = new Set(["IntelliJ", "CLion", "WebStorm"]);
let scalaProducts = new Set(["IntelliJ", "IntelliJEdu"])
let sqlProducts = new Set(["IntelliJ",  "PhpStorm", "Rider", "CLion", "DataGrip", "RubyMine", "AppCode", "GoLand"]);
let swiftProducts = new Set(["CLion", "AppCode"])
let vbNetProducts = new Set(["Rider", "dotPeek", "dotTrace", "Resharper", "dotMemory", "dotCover"])

let dotNetProducts = new Set(["Rider", "dotPeek", "dotTrace", "Resharper", "dotMemory", "dotCover", "TeamCity"])
let androidProducts = new Set(["IntelliJ", "Qodana", "Kotlin"])
let angularProducts = new Set(["IntelliJ",  "PhpStorm", "Rider", "Resharper", "GoLand", "WebStorm"])
aspNetProducts = new Set(["Rider", "dotPeek", "dotTrace", "Resharper", "dotMemory", "dotCover", "TeamCity"])  
djangoProducts = new Set(["IntelliJ", "Qodana", "PyCharm"])
iosProducts = new Set(["AppCode"])
javaSeProducts = new Set(["IntelliJ", "IntelliJEdu"])
springProducts = new Set(["InelliJ"])
jRubyProducts = new Set(["IntelliJ"])
jupyterProducts = new Set(["PyCharm", "DataLore", "DataSpell"])
numpyProducts = new Set(["DataSpell"])
notebooksProducts = new Set(["DataSpell"])  
phpTProducts = new Set(["InelliJ", "Products"])
pyTorchProducts = new Set(["DataSpell"])
reactProducts = new Set(["IntelliJ",  "PhpStorm", "CLion", "GoLand", "WebStorm", "RubyMine"])
railsProducts = new Set(["IntelliJ", "RubyMine"])
tensorFlowProducts = new Set(["DataSpell"])  

let codeReviewProducts = new Set(["Space", "Qodana", "CodeWithMe"])
let collabProducts = new Set(["Space", "Qodana", "CodeWithMe", "YouTrack", "DataSpell"])
let integrationProducts = new Set(["Space", "Qodana", "TeamCity"])
let dataScienceProducts = new Set(["IntelliJ", "PyCharm", "DataLore", "DataSpell"])
let educationProducts = new Set(["IntelliJEdu", "PyCharmEdu"])
let ideProducts = new Set(["IntelliJ", "RubyMine", "PhpStorm", "Rider", "CLion", "GoLand", "WebStorm", "AppCode", "CodeWithMe", "DataLore", "DataSpell", "DataGrip", "IntelliJEdu", "PyCharmEdu"])
let knowledgeProducts = new Set(["Space", "YouTrack"])
let languageProducts = new Set(["Kotlin", "MPS"])
let packadgeManadgement = new Set(["Space"])
let projectManadgement = new Set(["Space", "YouTrack"])
let sourceCodeManadgement = new Set(["Space"])
let teamsProducts = new Set(["DataLore", "Space", "YouTrack", "Hub", "TeamCity", "CodeWithMe", "Projector", "Qodana"])
let utilityProducts = new Set(["toolbox", "projector"])
let visualStudioTools = new Set(["Rider", "dotPeek", "dotTrace", "Resharper", "dotMemory", "dotCover", "ResharperCpp"])

allProducts = new Set(["IntelliJ", "RubyMine", "Hub", "CodeWithMe", "toolbox", "projector","Kotlin", "MPS", "PhpStorm", "CLion", "GoLand", "WebStorm", "AppCode", "CodeWithMe", "DataLore", "DataSpell", "DataGrip", "IntelliJEdu", "PyCharmEdu", "Rider", "dotPeek", "dotTrace", "Resharper", "dotMemory", "dotCover", "ResharperCpp","Space", "YouTrack" ])
visibleProducts = new Set(["IntelliJ", "RubyMine", "Hub", "CodeWithMe", "toolbox", "projector","Kotlin", "MPS", "PhpStorm", "CLion", "GoLand", "WebStorm", "AppCode", "CodeWithMe", "DataLore", "DataSpell", "DataGrip", "IntelliJEdu", "PyCharmEdu", "Rider", "dotPeek", "dotTrace", "Resharper", "dotMemory", "dotCover", "ResharperCpp","Space", "YouTrack" ])


function unCheckCheckboxes(){
    let inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].type == "checkbox"){
            inputs[i].checked = false;
        }
    }
}

function getCheckboxes(){
  let inputs = document.getElementsByTagName("input");
  let checkboxes = [];

    for(let i = 0; i < inputs.length; i++){
        if(inputsnew [i].type == "checkbox"){
            checkboxes.push(inputsnew [i]);
        }
    }

    return checkboxes;
}

function filterProducts(parameter){
    let products = eval(parameter + "Products")
    console.log(products)

}

