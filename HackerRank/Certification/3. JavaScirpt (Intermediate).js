//! 1 = Activity List
// The goal of this problem is to use prototypal inheritance

// function Activity(amount) {
//     this.setAmount(amount);
// }

// Activity.prototype.setAmount = function(amount) { // Use regular function syntax
//     if (amount <= 0) {
//         return false;
//     } else {
//         this.amount = amount;
//         return true;
//     }
// };

// Activity.prototype.getAmount = function() { // Use regular function syntax
//     return this.amount;
// };

// function Payment(amount, receiver) {
//     this.setAmount(amount);
//     this.setReceiver(receiver);
// }

// Payment.prototype = Object.create(Activity.prototype); // Inherit from parent Activity

// Payment.prototype.setReceiver = function(receiver) { // Use regular function syntax
//     this.receiver = receiver;
// };

// Payment.prototype.getReceiver = function() { // Use regular function syntax
//     return this.receiver;
// };

// function Refund(amount, sender) {
//     this.setAmount(amount); // Corrected from setSender(amount)
//     this.setSender(sender);  // Corrected to use setSender properly
// }

// Refund.prototype = Object.create(Activity.prototype); // Inherit from parent Activity

// Refund.prototype.setSender = function(sender) { // Use regular function syntax
//     this.sender = sender;
// };

// Refund.prototype.getSender = function() { // Use regular function syntax
//     return this.sender;
// };

//! 2 = Image Cloning. = Completed within 15 mins.

class Size {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Image {
  constructor(url, size) {
    this.url = url;
    this.size = size;
  }

  getUrl() {
    return this.url;
  }

  setUrl(url) {
    this.url = url;
  }

  setSize(width, height) {
    this.size = new Size(width, height);
  }

  getSize() {
    return this.size;
  }

  cloneImage() {
    return new Image(this.url, new Size(this.size.width, this.size.height));
  }
}
