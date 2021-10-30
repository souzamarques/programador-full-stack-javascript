class ResourceProcessorStation {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours
    }
}

/*
let totalProcessing = ResourceProcessorStation.calculateProcessInHours(108000, 3)
console.log(totalProcessing)
*/

let processor = new ResourceProcessorStation("Gaia", 2000)
let totalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 12)
console.log(totalProcessed)