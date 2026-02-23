let Interviewbox =[];
let Rejectedbox =[];
let currentStatus ='all';




let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected")


const allcardParent = document.getElementById("all-card")
 
const mainContainer = document.querySelector('main');

const filterSectoin =document.getElementById('filtered-section')

const allfilterbtn = document.getElementById("all-filter-btn")
const interviebtn = document.getElementById("Interview-filter-btn")
const rejectedbtn = document.getElementById("Rejected-filter-btn")
const noJobs =document.getElementById('jobs-available')
const jobsCount =document.getElementById("Available-Jobs")

function calculateCount(){
    total.innerText = allcardParent.children.length
    interview.innerText =Interviewbox.length
    rejected.innerText =Rejectedbox.length
    jobsCount.innerText=allcardParent.children.length


}

calculateCount()



function toggleStyle(id){
    
    allfilterbtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviebtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedbtn.classList.remove('bg-[#3B82F6]', 'text-white')


    allfilterbtn.classList.add('bg-[#FFFFFF]', 'text-black')
    interviebtn.classList.add('bg-[#FFFFFF]', 'text-black')
    rejectedbtn.classList.add('bg-[#FFFFFF]', 'text-black')
    

    const selected = document.getElementById(id)
    currentStatus=id

    selected.classList.remove('bg-[#FFFFFF]', 'text-black')
    selected.classList.add('bg-[#3B82F6]' ,'text-white')



    if(id=='all-filter-btn'){
       allcardParent.classList.remove('hidden');
        filterSectoin.classList.add('hidden')
        noJobs.classList.add("hidden")
    }else if(id=='Interview-filter-btn'){
        allcardParent.classList.add('hidden');
        filterSectoin.classList.remove('hidden')
        filterSectoin.innerHTML=''

    if(Interviewbox.length === 0){
        noJobs.classList.remove('hidden')
        filterSectoin.innerHTML=''
    }else{
        noJobs.classList.add('hidden')
    }
    renderInterview()
    }else if(id== 'Rejected-filter-btn'){
        allcardParent.classList.add('hidden');
        filterSectoin.classList.remove('hidden')
        if(Rejectedbox.length ===0){
            noJobs.classList.remove('hidden')
        }
        renderrejected()
        
    }


    
}






mainContainer.addEventListener('click',function(event){

    
    
    if(event.target.classList.contains('interview-btn')){
    
    const parentNode = event.target.parentNode.parentNode;
    const mobileShop = parentNode.querySelector('.mobile-shop').innerText
    const native =parentNode.querySelector('.native-Developer').innerText
    const fullTime =parentNode.querySelector('.full-time').innerText
    const notApplicate =parentNode.querySelector('.Not-Applied-button').innerText
    const cross =parentNode.querySelector('.cross-platform').innerText
    
    

   
    parentNode.querySelector('.Not-Applied-button').innerText ='interview'
    
    const cardInfo ={
        mobileShop,
        native,
        fullTime,
        notApplicate:'interview',
        cross
    }
    
    
    
    const mobileShopExist = Interviewbox.find(item=> item.mobileShop == cardInfo.mobileShop )
    if(!mobileShopExist){
        Interviewbox.push(cardInfo)
    }

    Rejectedbox = Rejectedbox.filter(item=> item.mobileShop != cardInfo.mobileShop)
    calculateCount()
    
    if( currentStatus=='Rejected-filter-btn'){
       renderrejected()
     }
    


    }else if(event.target.classList.contains('rejected-btn')){
    
    const parentNode = event.target.parentNode.parentNode;
    const mobileShop = parentNode.querySelector('.mobile-shop').innerText
    const native =parentNode.querySelector('.native-Developer').innerText
    const fullTime =parentNode.querySelector('.full-time').innerText
    const notApplicate =parentNode.querySelector('.Not-Applied-button').innerText
    const cross =parentNode.querySelector('.cross-platform').innerText



    
    parentNode.querySelector('.Not-Applied-button').innerText ='Rejected'
    
    const cardInfo ={
        mobileShop,
        native,
        fullTime,
        notApplicate:'Rejected',
        cross
    }
    
    
    
    const mobileShopExist = Rejectedbox.find(item=> item.mobileShop == cardInfo.mobileShop )
    if(!mobileShopExist){
        Rejectedbox.push(cardInfo)
    }
     Interviewbox = Interviewbox.filter(item=> item.mobileShop != cardInfo.mobileShop)

     if( currentStatus=='Interview-filter-btn'){
        renderInterview ()
     }
    calculateCount()
    
    
    }else if(event.target.closest('.delete-btn')){
    const card = event.target.closest('.job-card')
    if(card){
        card.remove();
        calculateCount()

    }
        
    }


})





function renderInterview (){
    
    filterSectoin.innerText=''
    for (let interview of Interviewbox){
        console.log(interview)
        let div = document.createElement('div');
        div.className  =' mb-5  job-card flex justify-between border border-gray-300 rounded-sm shadow-lg bg-[#FFFFFF] md:gap-9'
        div.innerHTML=`
        
        <div class="p-5">
                    <h2 class="mobile-shop text-[#002C5C] text-[20px] font-semibold">${interview.mobileShop}</h2>
                    <p class="native-Developer text-[#64748B]">React Native Developer</p>
                    <p class="full-time py-4 text-[#64748B]">Remote . Full-time . $130,000 - $175,000</p>
                    <button class="Not-Applied-button btn btn-active">${interview.notApplicate}</button>
                    <p class="cross-platform py-3">Build cross-platform mobile applications using React Native. Work on products used
                        by millions of users worldwide.</p>
                    <div class="flex gap-5">
                        <button class="interview-btn btn btn-outline btn-success">interview</button>
                        <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
                    </div>
                </div>
    
        `
        filterSectoin.appendChild(div)
    }

}









function renderrejected (){
   
    filterSectoin.innerText=''
    for (let rejected of Rejectedbox){
        console.log(interview)
        let div = document.createElement('div');
        div.className =' mb-5 job-card flex justify-between border border-gray-300 rounded-sm shadow-lg bg-[#FFFFFF] md:gap-9'
        div.innerHTML=`
        
        <div class="p-5">
                    <h2 class="mobile-shop text-[#002C5C] text-[20px] font-semibold">${rejected.mobileShop}</h2>
                    <p class="native-Developer text-[#64748B]">React Native Developer</p>
                    <p class="full-time py-4 text-[#64748B]">Remote . Full-time . $130,000 - $175,000</p>
                    <button class="Not-Applied-button btn btn-active">${rejected.notApplicate}</button>
                    <p class="cross-platform py-3">Build cross-platform mobile applications using React Native. Work on products used
                        by millions of users worldwide.</p>
                    <div class="flex gap-5">
                        <button class="interview-btn btn btn-outline btn-success">interview</button>
                        <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
                    </div>
                </div>
    
        `
        filterSectoin.appendChild(div)
    }

}