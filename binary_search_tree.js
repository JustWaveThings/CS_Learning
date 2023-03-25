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

//const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const test = new Tree([1, 2, 3, 4, 5, 6, 7]);
prettyPrint(test.root);
