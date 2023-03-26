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

// to print a visual representation of the tree in the console
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
	let current = bst;
	if (current === null || current === undefined) {
		return null;
	}
	if (current.value === value) {
		return current;
	}
	if (value < current.value) {
		return find(current.left, value);
	} else {
		return find(current.right, value);
	}
}

function insert(bst, value) {
	if (bst === null) {
		return new Node(value);
	}
	if (value < bst.value) {
		bst.left = insert(bst.left, value);
	} else {
		bst.right = insert(bst.right, value);
	}
	return bst;
}

function deleteNode(node, value) {
	if (node === null) return null;
	if (value === node.value) {
		if (node.left === null && node.right === null) {
			return null;
		}
		if (node.right === null) {
			return node.left;
		}
		if (node.left === null) {
			return node.right;
		}
		let successor = getSuccessor(node);
		node.value = successor.value;
		node.right = delete (node.right, successor.value);
		return node;
	} else if (value < node.value) {
		node.left = deleteNode(node.left, value);
		return node;
	} else {
		node.right = deleteNode(node.right, value);
		return node;
	}
}

function getSuccessor(delNode) {
	return getSuccessorRecursive(delNode, delNode.right, delNode, false);
}

function getSuccessorRecursive(delNode, current, parent, isLeftChild) {
	if (current === null) {
		if (isLeftChild) {
			parent.left = null;
		} else {
			parent.right = null;
		}
		return delNode;
	}
	return getSuccessorRecursive(current, current.left, current, true);
}

/* function getSuccessor(delNode) {
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
 */
function preOrder(node, output = []) {
	if (node === null) {
		return output;
	} else {
		output.push(node.value);
		preOrder(node.left, output);
		preOrder(node.right, output);
		return output;
	}
}

function depth(bst, value) {
	let currentDepth = 0;
	let current = bst.root;
	while (current.value !== value) {
		if (value < current.value) {
			current = current.left;
			currentDepth++;
		} else {
			current = current.right;
			currentDepth++;
		}
		if (current === null) {
			return null;
		}
	}
	return currentDepth;
}

function height(bst, value) {
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
	let currentLeftHeight = 0;
	let currentRightHeight = 0;
	while (current.left !== null || current.right !== null) {
		if (current.left !== null) {
			current = current.left;
			currentLeftHeight++;
		} else {
			current = current.right;
			currentRightHeight++;
		}
		return currentLeftHeight >= currentRightHeight
			? currentLeftHeight
			: currentRightHeight;
	}
}

function inOrder(node, output = []) {
	if (node === null) return output;
	inOrder(node.left, output);
	output.push(node.value);
	inOrder(node.right, output);
	return output;
}

function postOrder(node, output = []) {
	if (node === null) return output;
	postOrder(node.left, output);
	postOrder(node.right, output);
	output.push(node.value);
	return output;
}

// const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const test = new Tree([1, 2, 3, 4, 5, 6, 7]);

prettyPrint(test.root);
console.log('-------');
insert(test.root, 8);
prettyPrint(test.root);
console.log('-------');
deleteNode(test.root, 8);
prettyPrint(test.root);
console.log('-------');
