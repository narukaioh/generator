
// Name: Hailey Bolton
// Gender: Female Ancestry: Dwarf
// Appearance: Fit
const rollDice = (x) => Math.floor(Math.random() * x) + 1

const d2 = () => rollDice(2)
const d6 = () => rollDice(6)
const d8 = () => rollDice(8)
const d10 = () => rollDice(10)
const d20 = () => rollDice(20)
const d50 = () => rollDice(50)

const gender = () => {
    const number = d20()
    if (number >= 1 && number <= 9) {
        return "Female"
    }

    if (number >= 10 && number <= 18) {
        return "Male"
    }

    return "Nonbinary"
}

const ancestry = () => {
    const number = d10() - 1
    const database = [
        "Dwarf", "Elf", "Halfling",
        "Human", "Human", "Dragonborn",
        "Gnome", "Half-elf", "Half-orc",
        "Tiefling"]

    return database[number]
}

const name = () => {
    const type = gender()
    const number = d50() - 1
    const nonbinary = d2()

    const femaleNames = []
    const maleNames = []

    if (type === 'Female') {
        return femaleNames[number]
    }

    if (type === 'Male') {
        return maleNames[number]
    }

    return (nonbinary === 1) ? femaleNames[number] : maleNames[number]
}

console.log(ancestry())