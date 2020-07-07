let restaurant = {
    name: 'Espos',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
//seatParty 
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + this.partySize
},
//removeParty 
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(1))
