class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(array) {
		this.array = buildTree.removeDuplicates(array);
		const treeBuild = new buildTree(array);
		this.root = treeBuild.build(this.array);
	}
}

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

	static removeDuplicates(array) {
		const sorted = buildTree.sortArray(array);
		let uniqueArray = sorted.filter(function (item, pos) {
			return sorted.indexOf(item) == pos;
		});
		// console.log(uniqueArray, 'uniqueArray');
		return uniqueArray;
	}

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

function depth(bst, value) {
	function depthRecursive(node, value, currentDepth) {
		if (node === null) {
			return null;
		}
		if (node.value === value) {
			return currentDepth;
		}
		if (value < node.value) {
			return depthRecursive(node.left, value, currentDepth + 1);
		} else {
			return depthRecursive(node.right, value, currentDepth + 1);
		}
	}
	return depthRecursive(bst.root, value, 0);
}

function height(bst, value) {
	const node = find(bst, value);
	if (node === null) return null;
	return Math.max(getHeight(node.left), getHeight(node.right));
}

function getHeight(node) {
	if (node === null) return 0;
	const leftHeight = getHeight(node.left);
	const rightHeight = getHeight(node.right);
	return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(bst) {
	if (bst === null) return true;
	const leftHeight = getHeight(bst.left);
	const rightHeight = getHeight(bst.right);
	if (Math.abs(leftHeight - rightHeight) > 1) return false;
	return isBalanced(bst.left) && isBalanced(bst.right);
}

function rebalance(bst) {
	const array = inOrder(bst);
	const newTree = new Tree(array);
	return newTree;
}

function levelOrder(node, funct) {
	if (node === null) return;
	const queue = [node];
	levelOrderRecursive(queue, funct);
}

function levelOrderRecursive(queue, funct) {
	if (queue.length === 0) return;
	const node = queue.shift();
	funct(node);
	if (node.left !== null) queue.push(node.left);
	if (node.right !== null) queue.push(node.right);
	levelOrderRecursive(queue, funct);
}

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

function driverScript() {
	function randomNumberArrayRecursive(size) {
		if (size === 0) return [];
		const random = Math.floor(Math.random() * 100);
		return [random, ...randomNumberArrayRecursive(size - 1)];
	}
	const testArray = randomNumberArrayRecursive(10);
	console.log(testArray);
	console.log('-----------------------');
	const test = new Tree(testArray);
	prettyPrint(test.root);
	console.log('-----------------------');
	const isBalancedTest = isBalanced(test.root);
	console.log(isBalancedTest, 'isBalanced');
	console.log('-----------------------');
	console.log('Level Order');
	const level = levelOrder(test.root, node => console.log(node.value));
	console.log(level);
	console.log('-----------------------');
	console.log('Pre Order');
	const pre = preOrder(test.root);
	console.log(pre);
	console.log('-----------------------');
	console.log('In Order');
	const inOrderTest = inOrder(test.root);
	console.log(inOrderTest);
	console.log('-----------------------');
	console.log('Post Order');
	const post = postOrder(test.root);
	console.log(post);
	console.log('-----------------------');
	console.log('Depth');
	const depthTest = depth(test, testArray[3]);
	console.log(depthTest, ' - ', testArray[3]);
	console.log('-----------------------');
	console.log('Height');
	const heightTest = height(test.root, testArray[3]);
	console.log(heightTest, ' - ', testArray[3]);
	console.log('-----------------------');
	const unbalanceAdd = [
		8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000,
		19000, 20000,
	];
	unbalanceAdd.forEach(num => insert(test.root, num));
	prettyPrint(test.root);
	console.log('-----------------------');
	const isBalancedTest2 = isBalanced(test.root);
	console.log(isBalancedTest2, 'isBalanced');
	console.log('-----------------------');
	const rebalanceTest = rebalance(test.root);
	prettyPrint(rebalanceTest.root);
	console.log('-----------------------');
	const isBalancedTest3 = isBalanced(rebalanceTest.root);
	console.log(isBalancedTest3, 'isBalanced');
	console.log('-----------------------');
	console.log('Pre Order');
	const pre2 = preOrder(test.root);
	console.log(pre2);
	console.log('-----------------------');
	console.log('In Order');
	const inOrderTest2 = inOrder(test.root);
	console.log(inOrderTest2);
	console.log('-----------------------');
	console.log('Post Order');
	const post2 = postOrder(test.root);
	console.log(post2);
	console.log('-----------------------');
}

driverScript();

/* //const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const test = new Tree([1, 2, 3, 4, 5, 6, 7]);

/* prettyPrint(test.root);
console.log('-------');
insert(test.root, 8);
prettyPrint(test.root);
console.log('-------');
deleteNode(test.root, 8);
prettyPrint(test.root);
console.log('-------');
const test3 = depth(test, 7);
console.log(test3);
const test4 = depth(test, 8);
console.log(test4);
prettyPrint(test.root);
console.log('-------');
const test5 = height(test.root, 6);
console.log(test5);
console.log('-------');
const test6 = isBalanced(test.root);
console.log(test6);
insert(test.root, 8);
insert(test.root, 800);
insert(test.root, 900);
insert(test.root, 1000);
insert(test.root, 1100);
insert(test.root, 1200);
insert(test.root, 1300);
insert(test.root, 1400);
insert(test.root, 1500);
insert(test.root, 1600);
insert(test.root, 1700);
console.log('-------');
const test7 = rebalance(test.root);
prettyPrint(test.root);
console.log('-------');
const test8 = isBalanced(test7.root);
console.log(test8);
console.log('-------');
prettyPrint(test7.root);
 */
