const setLocalDb = (minute) => {
    localStorage.setItem("minute", JSON.stringify(minute))
}

const getLocalDb = () => {
    const data = JSON.parse(localStorage.getItem("minute"));
    return data
}
export { 
    setLocalDb,
    getLocalDb
 }