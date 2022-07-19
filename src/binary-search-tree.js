const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.data = null;
  }

  root() {
      if (Object.keys(this).length == 0) {
        return null;
    }
    return this.data;
    //  function rootres(res, value){
    //   if (!res) {
    //    //  this.root =  value;
    //   return value;
    //  }
    // }
  }

  add (data) {
    function addres(res, value) {
      if (!res) {
        return new Node(value);
      }
      if (res.data === value) {
        return res;
      }
      if (value < res.data) {
        res.left = addres(res.left, value);
      } else {
        res.right = addres(res.right, value);
      }
      return res;
    }
    this.data = addres(this.data, data);
  }

  has(data) {
    function hasres(res, value) {
      if (!res) {
        return false;
      }
      if (res.data === value) {
        return true;
      }
      return (value < res.data)? hasres(res.left, value): hasres(res.right, value);
    }
    return hasres(this.data, data);
  }

  find(data) {
    function findres(res, value) {
      if (!res) {
          return null;
      }
      if (res.data === value) {
        return res;
      }
      return value < res.data ? findres(res.left, value) : findres(res.right, value);
    }
    return findres(this.data, data);
  }

  remove(data) {
    function removeres (res, value) {
      if (!res) {
          return null;
      }
      console.log(value);
      console.log(res.data);
      if (value < res.data) {
            res.left = removeres (res.left, value);
            return res;
      } else if (value > res.data) {
          res.right  = removeres (res.right, value);
          return res;
      } else {
        if (!res.left && !res.right) {
          return null;
        }
        if (!res.left) {
          res = res.right;
          return res;
      }
        if (!res.right) {
          res = res.left;
          return res;
        }
        let min = res.right;
          while (min.left) {
            min = min.left;
            console.log('min.left');
            console.log(min.left);
          }
          res.data = min.data;
          res.right = removeres(res.right, min.data);
          return res;
          }
    }
    this.data = removeres(this.data, data);
  }

  min() {
    if (!this.data) {
      return null;
    }
    let res = this.data;
    while (res.left) {
      res = res.left;
    }
    return res.data;
  }

  max() {
    if (!this.data) {
      return null;
    }
    let res = this.data;
    while (res.right) {
      res = res.right;
    }
    return res.data;
  }
}

module.exports = {
  BinarySearchTree
};

/*const tree = new BinarySearchTree();

tree.add(10);
tree.add(5);
tree.add(22);
tree.add(41);
tree.add(7);
tree.add(4);
tree.add(16);
tree.add(1);
tree.add(17);
tree.add(11);
tree.remove(16);
// tree.has(4);
tree.find(10);
tree.find(100);
*/
