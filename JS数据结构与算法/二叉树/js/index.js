function BinaryTree() {
    function Node(value) {
        /*
        三个属性值，分别为节点的值，节点左箭头，节点右箭头
        */
        this.value = value;
        this.left = null;
        this.right = null;
    }
    var root = null; //初始化根节点
    //创建二叉树
    this.insert = function (value) {
        var newNode = new Node(value);
        /**
         * 如果根节点为空，则将新节点传给根节点
         * 如果根节点不为空，将新节点插入根节点之后。
         */
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }
    //创建插入节点的函数，两个参数分别为父亲节点，孩子节点
    function insertNode(node, newNode) {
        /**
         * 如果新节点的值小于父亲节点的值，则将其插入父亲节点的左侧，否则，插入右侧
         * 当插入时，做判断，如果父亲节点的左孩子没有值，则直接插入，否则将其插入左孩子之下
         */
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }
    //二叉树的中序遍历
    this.inOrderTraver = function (callback) {
        console.log("##中序遍历##");
        inOrderTraverNode(root, callback);
        return this;
    }

    function inOrderTraverNode(node, callback) {
        if (node !== null) {
            inOrderTraverNode(node.left, callback);
            callback(node.value);
            inOrderTraverNode(node.right, callback);
        }
    }
    //二叉树的前序遍历
    this.preOrderTraver = function (callback) {
        console.log("##前序遍历##");
        preOrderTraverNode(root, callback);
        return this;
    }

    function preOrderTraverNode(node, callback) {
        if (node !== null) {
            callback(node.value);
            preOrderTraverNode(node.left, callback);
            preOrderTraverNode(node.right, callback);
        }
    }
    //二叉树的后序遍历
    this.postOrderTraver = function (callback) {
        console.log("##后序遍历##");
        postOrderTraverNode(root, callback);
        return this;
    }

    function postOrderTraverNode(node, callback) {
        if (node !== null) {
            postOrderTraverNode(node.left, callback);
            postOrderTraverNode(node.right, callback);
            callback(node.value);
        }
    }
}

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach((value) => {
    binaryTree.insert(value);
});
var callback = function (value) {
    console.log(value);
}
binaryTree.inOrderTraver(callback).preOrderTraver(callback).postOrderTraver(callback);