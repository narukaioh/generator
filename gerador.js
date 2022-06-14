
// Name: Hailey Bolton
// Gender: Female Ancestry: Dwarf
// Appearance: Fit
const rollDice = (x) => Math.floor(Math.random() * x) + 1

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

console.log(ancestry())