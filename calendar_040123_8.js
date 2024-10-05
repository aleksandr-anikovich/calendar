///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// начало 04.01.2023  ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

let nowDate = new Date()
let nowDateNumber = nowDate.getDate()
let nowMonth = nowDate.getMonth()
let nowYear = nowDate.getFullYear()
let titleNumberYear = 0


document.title = getDataForTitle()
//////////////////////////////////


writeTitYear(nowYear)
setProgresYear(nowYear)
writeCalrndar(nowYear)
///////
const buttonBack = document.querySelector('.back')
buttonBack.addEventListener('click', function () {
    titleNumberYear = --nowYear
    clearCalendar()
    writeTitYear(titleNumberYear)
    setProgresYear(titleNumberYear)
    writeCalrndar(titleNumberYear)
    showNowData()
})

const buttonForward = document.querySelector('.forward')
buttonForward.addEventListener('click', function () {
    titleNumberYear = ++nowYear
    clearCalendar()
    writeTitYear(titleNumberYear)
    setProgresYear(titleNumberYear)
    writeCalrndar(titleNumberYear)
    showNowData()
})

function writeTitYear(numYear) {
    document.querySelector('.numYear').remove()

    const titNumYear = document.createElement('h5')
    titNumYear.classList.add('numYear')
    titNumYear.textContent = numYear

    let tYear = document.querySelector('.numYearDiv')
    tYear.append(titNumYear)


}

function setProgresYear(nowYear) {

    console.log('nowYear ', nowYear)
    // let tekYear = document.querySelector('.numYear').innerText
    // console.log('tekYear',tekYear)
    console.log('qwerv ', String(new Date().getFullYear()))


    const sumDayYear = Math.round((new Date(nowYear, 11, 31) - new Date(nowYear, 0, 0)) / 86400000)

    const progressDayYear = (new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()) - new Date(nowDate.getFullYear(), 0, 0)) / 86400000

    document.querySelector('.progressYearValue').remove()
    const pYear = document.createElement('div')
    pYear.classList.add('progressYearValue')

    let t=''
    if (sumDayYear > 0) {
        if (nowYear === Number(new Date().getFullYear())) {
            pYear.textContent = `${Math.round(progressDayYear / sumDayYear * 100)}%`
           t= `${Math.round(progressDayYear / sumDayYear * 100)}%`
        } else if (nowYear > Number(new Date().getFullYear())) {
            pYear.textContent = '0%'
            t='0%'
        } else if (nowYear < Number(new Date().getFullYear())) {
            pYear.textContent = '100%'
            t='100%'
        }
    } else {
        pYear.textContent = '0%'
        t='0%'
    }

    let tYear = document.querySelector('.progressYear')
    tYear.append(pYear)

    document.querySelector('.progressYearValue').style.width=t

}
 
//////////////// заполнение  массива  месяца ////////////////
function fillNumMonth(year, month) {
    let numMonth = []
    const clearCell = new Date(year, month, 0).getDay() /// пустые вначале
    for (let i = 1; i <= clearCell; i++) {
        numMonth.push(' ')
    }

    const fullCell = new Date(year, month + 1, 0).getDate() /// заполненные даты
    for (let i = 1; i <= fullCell; i++) {
        numMonth.push(i)
    }

    const remains = 42 - numMonth.length

    if (remains > 0) {
        for (let i = 1; i <= remains; i++) {
            numMonth.push(' ')
        }
    }
    return numMonth
}


//////////////// финальное заполнение  месяца ////////////////
function fillWebMonth(numArray, numM) {
    console.log('!!! ',numM)
    for (let i = 0; i < numArray.length; i++) {
        const dayCell = document.createElement('div')
        //dayCell.classList.add('d' + (i + 1))
        dayCell.classList.add('d' + (i + 1)+'m'+numM)
        dayCell.id=('d' + (i + 1))

        dayCell.textContent = numArray[i]

        let month = document.querySelector('.month' + numM)
        month.append(dayCell)
    }
}

///////////// заполнение года /////////////////
function writeCalrndar(titleNumberYear) {
    for (let i = 0; i <= 11; i++) {
        fillWebMonth(fillNumMonth(titleNumberYear, i), i + 1)
    }
}

function clearCalendar() {
    for (let y = 1; y <= 12; y++) {
        for (let i = 1; i <= 42; i++) {
            document.querySelector('#d' + i).remove()
        }
    }
}

function getDataForTitle() {
    let dd = String(nowDateNumber)
    let mm = String(nowMonth + 1)
    let gg = nowYear

    if (dd.length === 1) {
        dd = '0' + dd
    }

    if (mm.length === 1) {
        mm = '0' + mm
    }

    return `Сегодня ${dd}.${mm}.${gg}`
}


showNowData()

function showNowData() {
    let dd = nowDateNumber
    let mm = nowMonth + 1
    console.log('mm-- ',mm)
    let gg = nowYear
    let tekYear = document.querySelector('.numYear').innerText

    if (tekYear === String(new Date().getFullYear())) {
        let showData = document.querySelector('.month' + mm).children
        console.log('showData-- ',showData)
        for (let i = 0; i < showData.length; i++) {
            if (showData[i].innerText === String(dd)) {
                console.log('showData[i].className',showData[i].className)
                document.querySelector('.' + showData[i].className).style.border = "1px solid #138808"
                document.querySelector('.' + showData[i].className).style.background = '#2D572C'
            }
        }
    }
}


//
// for (let i=1;i<=42;i++){
//     const numDay=document.querySelector('.d'+i)
// numDay.addEventListener('cli')
// }

// const nDay = document.querySelector('.d22')
// nDay.addEventListener('click', function () {
//     console.log('nDay')
// })
