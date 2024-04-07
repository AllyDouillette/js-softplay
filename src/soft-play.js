// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// here is what the object of the softballCenter looks like
new softballCenter = (sport) = {
  this.id: 1;
  this.sport = sport;
  this.currentPresence = {
    adults: adults,
    children: children
  },
  this.totalTally = {
    adults: 0,
    children: 0
  }
}

// function that basically only prints out the current state of the softball-Center-object
// ToDo: only give back the present Adults and present Children
const occupancy = (() => softballCenter.currentPresence)
const total = (() => softballCenter.totalTally)

//adding shit so i can easily reset them – not necessarily used
const resetOccupancy = () => {
  softballCenter.currentPresence.adults = 0,
  softballCenter.currentPresence.children = 0
}

const resetTotalCount = (() => {
  softballCenter.totalTally.adults = 0,
  softballCenterTotal.totalTally.children = 0
})

const enter = (num1, num2) => {
  if (num1 >= num2) {
    softballCenter.adults += num1
    softballCenter.children += num2
    softballCenterTotal.adults += num1
    softballCenterTotal.children += num2
    return true
  } else {
    return false
  }
}

const leave = (num1, num2) => {
  if (num1 >= num2 && softballCenter.adults - num1 >= softballCenter.children - num2) {
    softballCenter.adults -= num1
    softballCenter.children -= num2
    return true
  } else {
    return false
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
