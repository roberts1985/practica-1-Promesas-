const koder = {
    name: "Roberto",
    interviewed: false,
    proposal: false,
    isEnrolled: false,
    introductoryCourse: false
}

const doInterview = (koderInterview) => {
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            koderInterview.interviewed = true
            if(!koderInterview.interviewed) {
                reject('No se pudo realizar la entrevista...')
            }
            resolve(koderInterview)
        },2000)
    })
}

const sendProposal = (koderProposal) => {
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            koderProposal.proposal = true
            if(!koderProposal.proposal){
                reject('No se pudo mandar la propuesta...')
            }
            resolve(koderProposal)
        },2000)
    })
}

const fillContract = (koderContract) => {
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            koderContract.isEnrolled = true
            if(!koderContract.isEnrolled){
                reject('No se pudo llenar el contrato...')
            }
            resolve(koderContract)
        },2000)
    })
}

const takeCourse = (koderCourse)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            koderCourse.introductoryCourse = true
            if(!koderCourse.introductoryCourse){
                reject('No se pudo tomar el curso de inducción...')
            }
            resolve(koderCourse)
        },2000)
    })
}

const main = async () => {
    const koderForm = await doInterview(koder)
    console.log(`${koderForm.name} llenó el formulario...`)
    console.log(koderForm)

    const koderProposal = await sendProposal(koderForm)
    console.log(`${koderProposal.name} mandó la propuesta...`)
    console.log(koderProposal)

    const koderContract = await fillContract(koderProposal)
    console.log(`${koderContract.name} llenó el contrato...`)
    console.log(koderContract)

    const koderCourse = await takeCourse(koderContract)
    console.log(`${koderCourse.name} está tomando curso de inducción...`)
    console.log(koderCourse)
}

main()