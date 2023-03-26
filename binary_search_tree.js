// the nodes of the tree
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// the actual tree class from which nodes are created and the buildTree method is called
class Tree {
	constructor(array) {
		this.array = buildTree.removeDuplicates(array);
		const treeBuild = new buildTree(array);
		this.root = treeBuild.build(this.array);
	}
}
// apty named class to build the tree.
class buildTree {
	constructor(array) {
		this.array = array;
	}
	// need to sort for bst to to work
	static sortArray(array) {
		return array.sort(function (a, b) {
			return a - b;
		});
	}
	// remove duplicates from array to reduce complexity
	static removeDuplicates(array) {
		const sorted = buildTree.sortArray(array);
		let uniqueArray = sorted.filter(function (item, pos) {
			return sorted.indexOf(item) == pos;
		});
		// console.log(uniqueArray, 'uniqueArray');
		return uniqueArray;
	}

	// build the tree and make recursive calls until base case of unique array length === 0 is met
	build(uniqueArray) {
		if (uniqueArray.length === 0) return null;
		let mid = Math.floor(uniqueArray.length / 2);
		let root = new Node(uniqueArray[mid]);
		let left = uniqueArray.slice(0, mid);
		let right = uniqueArray.slice(mid + 1);
		root.left = this.build(left);
		root.right = this.build(right);
		return root;
	}
}

// to pring a visual representation of the tree in the console
const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}
	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
};

function find(bst, value) {
	let current = bst.root;
	while (current.value !== value) {
		if (value < current.value) {
			current = current.left;
		} else {
			current = current.right;
		}
		if (current === null) {
			return null;
		}
	}
	return current;
}

function insert(bst, value) {
	let newNode = new Node(value);
	let current = bst.root;
	if (current === null) {
		bst.root = newNode;
		return;
	}
	while (current.value !== value) {
		if (value < current.value) {
			if (current.left === null) {
				current.left = newNode;
				return;
			} else {
				current = current.left;
			}
		} else {
			if (current.right === null) {
				current.right = newNode;
				return;
			} else {
				current = current.right;
			}
		}
	}
}

function deleteNode(bst, value) {
	let current = bst.root;
	let parent = bst.root;
	let isLeftChild = true;
	while (current.value !== value) {
		parent = current;
		if (value < current.value) {
			isLeftChild = true;
			current = current.left;
		} else {
			isLeftChild = false;
			current = current.right;
		}
		if (current === null) {
			return null;
		}
	}
	// if node is leaf, remove it from tree
	if (current.left === null && current.right === null) {
		if (current === bst.root) {
			bst.root = null;
		} else if (isLeftChild) {
			parent.left = null;
		} else {
			parent.right = null;
		}
		// if node has one child, replace it with its child
	} else if (current.right === null) {
		if (current === bst.root) {
			bst.root = current.left;
		} else if (isLeftChild) {
			parent.left = current.left;
		} else {
			parent.right = current.left;
		}
	}

	// if node has two children, replace it with the smallest value in the right subtree

	if (current.left !== null && current.right !== null) {
		let successor = getSuccessor(current);
		if (current === bst.root) {
			bst.root = successor;
		} else if (isLeftChild) {
			parent.left = successor;
		} else {
			parent.right = successor;
		}
		successor.left = current.left;
	}
}

function getSuccessor(delNode) {
	let successorParent = delNode;
	let successor = delNode;
	let current = delNode.right;
	while (current !== null) {
		successorParent = successor;
		successor = current;
		current = current.left;
	}
	if (successor !== delNode.right) {
		successorParent.left = successor.right;
		successor.right = delNode.right;
	}
	return successor;
}

function preOrder(node) {
	if (node === null) return;
	console.log(node.value);
	preOrder(node.left);
	preOrder(node.right);
}

function inOrder(node) {
	if (node === null) return;
	inOrder(node.left);
	console.log(node.value);
	inOrder(node.right);
}

function postOrder(node) {
	if (node === null) return;
	postOrder(node.left);
	postOrder(node.right);
	console.log(node.value);
}

//const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const test = new Tree([1, 2, 3, 4, 5, 6, 7]);
prettyPrint(test.root);
console.log('-------');
insert(test, 8);
prettyPrint(test.root);

console.log('-------');

/* // preOrder(test.root);
console.log('-------');
inOrder(test.root);
console.log('-------');
// postOrder(test.root);
console.log(find(test, 0));
insert(test, 8);
prettyPrint(test.root); */

deleteNode(test, 2);
prettyPrint(test.root);
