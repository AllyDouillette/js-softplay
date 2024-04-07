// array of all centers
const centers = []

// here is what the object of the individual place looks like
function center(sport) {
  this.id = centers.length
  this.sport = sport
  this.enteringCheck = (adultsEntering, childrenEntering) => adultsEntering >= childrenEntering ? true : false
  this.enter = (adultsEntering, childrenEntering) => {
    if (this.enteringCheck(adultsEntering, childrenEntering)) {
      this.currentPresence.adults += adultsEntering
      this.currentPresence.children += childrenEntering
      this.totalTally.adults += adultsEntering
      this.totalTally.children += childrenEntering
      return true
    } else {
      return false
    }
  }
  this.leavingCheck = (adultsLeaving, childrenLeaving) => (adultsLeaving >= childrenLeaving && this.currentPresence.adults - childrenLeaving >= this.currentPresence.children - childrenLeaving) ? true : false
  this.leave = (adultsLeaving, childrenLeaving) => {
    if (this.leavingCheck(adultsLeaving, childrenLeaving)) {
      this.currentPresence.adults -= adultsLeaving
      this.currentPresence.children -= childrenLeaving
      return true
    } else {
      return false
    }
  }
  this.currentPresence = {
    adults: 0,
    children: 0
  }
  this.totalTally = {
    adults: 0,
    children: 0
  }
}

const addCenter = (sport) => centers.push(new center(sport))

addCenter("football")
addCenter("softball")
addCenter("handball")

module.exports = {
  centers,
  enter: centers[0].enter,
  leave: centers[0].leave,
  occupancy: centers[0].currentPresence,
  total: centers[0].totalTally
}