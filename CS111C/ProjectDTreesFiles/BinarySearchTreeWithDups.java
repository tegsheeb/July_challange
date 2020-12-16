import java.util.*;

public class BinarySearchTreeWithDups<T extends Comparable<? super T>> extends BinarySearchTree<T>
		implements SearchTreeInterface<T>, java.io.Serializable {

	public BinarySearchTreeWithDups() {
		super();
	}

	public BinarySearchTreeWithDups(T rootEntry) {
		super(rootEntry);
		setRootNode(new BinaryNode<T>(rootEntry));
	}

	@Override
	public T add(T newEntry) {
		T result = newEntry;
		if (isEmpty()) {
			setRootNode(new BinaryNode<T>(newEntry));
		} else {
			addEntryHelperNonRecursive(newEntry);
		}
		return result;
	}
	
	// YOUR CODE HERE! THIS METHOD CANNOT BE RECURSIVE.
	private void addEntryHelperNonRecursive(T newEntry) {
		Stack<BinaryNode<T>> nodeStack = new Stack<BinaryNode<T>>();
		BinaryNode<T> rootNode = getRootNode();
		nodeStack.push(rootNode);

		while(!nodeStack.empty()) {
			BinaryNode<T> currentNode = nodeStack.pop();
			int comparison = newEntry.compareTo(currentNode.getData());

			if (comparison <= 0) {
				if (currentNode.hasLeftChild()) {
					nodeStack.push(currentNode.getLeftChild());
				} else {
					currentNode.setLeftChild(new BinaryNode<>(newEntry));
				}
			} else {
				if (currentNode.hasRightChild()) {
					nodeStack.push(currentNode.getRightChild());
				} else {
					currentNode.setRightChild(new BinaryNode<>(newEntry));
				}
			}

		}
	}


	// YOUR CODE HERE! THIS METHOD CANNOT BE RECURSIVE.
	// MAKE SURE TO TAKE ADVANTAGE OF THE SORTED NATURE OF THE BST!
	public int countEntriesNonRecursive(T target) {
		// this initial code is meant as a suggestion to get your started- use it or delete it!
		int count = 0;
		BinaryNode<T> currentNode = getRootNode();
		Stack<BinaryNode<T>> nodeStack = new Stack<BinaryNode<T>>();
		nodeStack.push(currentNode);
		boolean noFurtherOption = false;
		while(!nodeStack.isEmpty() && !noFurtherOption) {
			currentNode = nodeStack.pop();
			int comparison = target.compareTo(currentNode.getData());
			if (comparison == 0) {
				count += 1;
				if(currentNode.hasLeftChild()) {
					nodeStack.push(currentNode.getLeftChild());
				} else {
					noFurtherOption = true;
				}
			} else if (comparison < 0) {
				if(currentNode.hasLeftChild()) {
					nodeStack.push(currentNode.getLeftChild());
				}
			} else {
				if(currentNode.hasRightChild()) {
					nodeStack.push(currentNode.getRightChild());
				}
			}
		}
		return count;
	}

	// YOUR CODE HERE! MUST BE RECURSIVE! YOU ARE ALLOWED TO CREATE A PRIVATE HELPER.
	// MAKE SURE TO TAKE ADVANTAGE OF THE SORTED NATURE OF THE BST!
	public int countGreaterRecursive(T target) {
		// this initial code is meant as a suggestion to get your started- use it or delete it!
		int count = 0;
		BinaryNode<T> rootNode = getRootNode();
		
		// consider a helper method!
		count = countGreaterRecursiveHelper(rootNode, target, count);
		
		return count;
	}


	private int countGreaterRecursiveHelper (BinaryNode<T> rootNode, T target, int count) {
		int comparison = rootNode.getData().compareTo(target);
		if (comparison > 0) {
			if (!rootNode.hasLeftChild() && !rootNode.hasRightChild()) {
				count += 1;
			} else {
				if (rootNode.hasLeftChild() && rootNode.hasRightChild()) {
					count = 1 + countGreaterRecursiveHelper(rootNode.getLeftChild(), target, count) + countGreaterRecursiveHelper(rootNode.getRightChild(), target, count);
				} else if (rootNode.hasLeftChild()) {
					count = 1 + countGreaterRecursiveHelper(rootNode.getLeftChild(), target, count);
				} else {
					count = 1 + countGreaterRecursiveHelper(rootNode.getRightChild(), target, count);
				}
			}
		} else {
			if (rootNode.hasRightChild()) {
				count = countGreaterRecursiveHelper(rootNode.getRightChild(), target, count);
			}
		} 
		return count;
	}
		
	// YOUR CODE HERE! MUST USE A STACK!! MUST NOT BE RECURSIVE! 
	// MAKE SURE TO TAKE ADVANTAGE OF THE SORTED NATURE OF THE BST!
	public int countGreaterWithStack(T target) {
		// this initial code is meant as a suggestion to get your started- use it or delete it!
		int count = 0;
		BinaryNode<T> rootNode = getRootNode();
		Stack<BinaryNode<T>> nodeStack = new Stack<BinaryNode<T>>();
		nodeStack.push(rootNode);

		// consider a loop based on the stack!
		while(!nodeStack.isEmpty()) {
			BinaryNode<T> currentNode = nodeStack.pop();
			int comparison = currentNode.getData().compareTo(target);
			if (comparison > 0) {
				count += 1;
				if (currentNode.hasLeftChild()) {
					nodeStack.push(currentNode.getLeftChild());
				}
				if (currentNode.hasRightChild()) {
					nodeStack.push(currentNode.getRightChild());
				}
			} else {
				if (currentNode.hasRightChild()) {
					nodeStack.push(currentNode.getRightChild());
				}
			}
		}
		return count;
	}
		
	// YOUR EXTRA CREDIT CODE HERE! THIS METHOD MUST BE O(n). 
	// YOU ARE ALLOWED TO USE A HELPER METHOD. THE METHOD CAN BE ITERATIVE OR RECURSIVE. 
	public int countUniqueValues() {
		int countDuplicate = 0;
		int totalNode = 0;

		return totalNode - countDuplicate;
	}
	
	public int getLeftHeight() {
		BinaryNode<T> rootNode = getRootNode();
		if(rootNode==null) {
			return 0;
		} else if(!rootNode.hasLeftChild()) {
			return 0;
		} else {
			return rootNode.getLeftChild().getHeight();
		}
	}

	public int getRightHeight() {
		BinaryNode<T> rootNode = getRootNode();
		if(rootNode==null) {
			return 0;
		} else if(!rootNode.hasRightChild()) {
			return 0;
		} else {
			return rootNode.getRightChild().getHeight();
		}
	}
	
}