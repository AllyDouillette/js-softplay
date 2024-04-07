// do not change these lines
const adults = 0
const children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// first we initialize the variables that keep track of the adults and kids
const numAdults = 0;
const numChildren = 0;

// here is what the object of the softballCenter looks like
const softballCenter = {
  "adults": numAdults,
  "children": numChildren
}

// here's the tracker that tracks the total
const softballCenterTotal = {
  "adults": 0,
  "children": 0,
}

// function that basically only prints out the current state of the softball-Center-object
const occupancy = () => softballCenter
const total = () => softballCenterTotal

//adding shit so i can easily reset them – not necessarily used
const resetOccupancy = () => {
  softballCenter.adults = 0,
  softballCenter.children = 0
}

const resetTotalCount = () => {
  softballCenterTotal.adults = 0,
  softballCenterTotal.children = 0
}

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
  total: total,
}
