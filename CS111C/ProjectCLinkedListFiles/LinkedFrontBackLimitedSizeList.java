public class LinkedFrontBackLimitedSizeList<T> implements FrontBackLimitedSizeListInterface<T> {

	private Node head, tail;
	private int numberOfElements;
	private int maximumSize;

	public LinkedFrontBackLimitedSizeList(int maximumSizeOfList) {
		head = null;
		tail = null;
		numberOfElements = 0;
		maximumSize = maximumSizeOfList;
	}

	public boolean addFront(T newEntry) {
		// if(head == null) {

		// } else {

		// }
		return false;
	}

	public boolean addBack(T newEntry) {
		// if(head == null) {

		// } else {

		// }
		return false;
	}

	public T removeFront() {
		return null;
	}
	
	public T removeBack() {
		return null;
	}
	public void clear() {

	}

	public T getEntry(int givenPosition) {
		return null;
	}
	
	public int indexOf(T anEntry) {
		return -1;
	}
	
	public int lastIndexOf(T anEntry) {
		return -1;
	}
	
	public boolean contains(T anEntry) {
		return false;
	}

	public int size() {
		return numberOfElements;
	}

	public boolean isEmpty(){
		return numberOfElements == 0;
	}

	public boolean isFull(){
		return numberOfElements == maximumSize;
	}
	
	public class Node {
		public T data;
		public Node next;

		private Node(T dataPortion) {
			data = dataPortion;
			next = null;
		}

		private Node(T dataPortion, Node nextNode) {
			data = dataPortion;
			next = nextNode;
		}

		private T getData() {
			return data;
		}

		private void setData(T newData) {
			data = newData;
		}

		private Node getNextNode() {
			return next;
		}

		private void setNextNode(Node nextNode) {
			next = nextNode;
		}
	}

}
