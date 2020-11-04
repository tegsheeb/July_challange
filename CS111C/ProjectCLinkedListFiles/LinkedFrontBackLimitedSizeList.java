public class LinkedFrontBackLimitedSizeList<T extends Comparable<? super T>> implements FrontBackLimitedSizeListInterface<T>, Comparable<LinkedFrontBackLimitedSizeList<T>> { 
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
		if (isFull()) {
			return false;
		} else {
			Node newNode = new Node(newEntry);
			if(head == null) {
				head = newNode;
				tail = newNode;
			} else if(head.next == null) {
				newNode.next = head;
				head = newNode;	
				head.next = tail;			
			} else {
				newNode.next = head;
				head = newNode;
			}
			numberOfElements++;
			return true;
		}
	}

	public boolean addBack(T newEntry) {
		if (isFull()) {
			return false;
		} else {
			Node newNode = new Node(newEntry);
			if(head == null){
				head = newNode;
				tail = newNode;
			} else if (head.next == null){
				head.next = newNode;
				tail = newNode;
			} else {
				tail.next = newNode;
				tail = newNode;
			}
			numberOfElements += 1;
			return true;
		}
	}

	public T removeFront() {
		if( head == null) {
			return null;
		} else if (head.next == null) {
			Node removedNode = head;
			head = null;
			tail = null;
			numberOfElements--;
			return removedNode.data;
		} else {
			Node removedNode = head;
			head = head.next;
			numberOfElements--;
			return removedNode.data;
		}
	}
	
	public T removeBack() {
		if( head == null) {
			return null;
		} else if (head.next == null) {
			Node removedNode = head;
			head = null;
			tail = null;
			numberOfElements--;
			return removedNode.data;
		} else {
			Node prev = head;
			Node currentNode = prev.next;
			while(currentNode != null && currentNode.next != null) {
				prev = prev.next;
				currentNode = currentNode.next;
			}
			prev.next = null;
			tail = prev;
			numberOfElements--;
			return currentNode.data;
		}	
	}

	public void clear() {
		head = null;
		tail = null;
		numberOfElements = 0;
	}

	public T getEntry(int givenPosition) {
		if (isValidPosition(givenPosition)) {
			int currentPosition = 0; 
			Node currentNode = head;
			T foundElement = null;
			boolean found = false;
			while(currentNode != null && !found){
				if (currentPosition == givenPosition) {
					foundElement = currentNode.data;
					found = true;
				} else {
					currentNode = currentNode.next;
					currentPosition++;
				}
			}
			return foundElement;
		}
		return null;
	}
	private boolean isValidPosition(int givenPosition){
		return givenPosition >= 0 && givenPosition < maximumSize;
	}
	
	public int indexOf(T anEntry) {
		Node currentNode = head;
		int currentIndex = 0;
		while (currentNode != null) {
			if(currentNode.data.equals(anEntry)) {
				return currentIndex;
			}
			currentIndex++; 
			currentNode = currentNode.next;
		}
		return -1;
	}
	
	public int lastIndexOf(T anEntry) {
		Node currentNode = head;
		int lastIndex = -1;
		int currentIndex = 0;
		while (currentNode != null) {
			if(currentNode.data.equals(anEntry)) {
				lastIndex = currentIndex;
			}
			currentIndex++; 
			currentNode = currentNode.next;
		}
		return lastIndex;
	}
	
	public boolean contains(T anEntry) {
		Node currentNode = head;
		while (currentNode != null) {
			if (currentNode.data.equals(anEntry)) {
				return true;
			}
			currentNode = currentNode.next;
		}
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
	
    @Override
    public String toString() {
		String arrayString = "";
		Node currentNode = head;
        if (numberOfElements > 0) {
            while(currentNode != null){
				arrayString += currentNode.data + ", ";
				currentNode = currentNode.next;
            }
            arrayString = arrayString.substring(0, arrayString.length() - 2);
        }
		if (head == null && tail == null) {
			return "[" + arrayString + "]";
		} else {
			return "[" + arrayString + "]\thead=" + head.data + " tail=" + tail.data;
		}
	}
	@Override
	public int compareTo(LinkedFrontBackLimitedSizeList<T> other) {
		Node currentNode = head;
		Node otherCurrentNode = other.head;
		while (currentNode != null && otherCurrentNode != null) {
			if(currentNode.data.compareTo(otherCurrentNode.data) > 0) {
				return 1;
			} else if (currentNode.data.compareTo(otherCurrentNode.data) < 0) {
				return -1;
			} else {
				currentNode = currentNode.next;
				otherCurrentNode = otherCurrentNode.next;
			}
		}

		if(currentNode == null && otherCurrentNode == null) {
			return 0;
		} else if (currentNode == null && otherCurrentNode != null) {
			return -1;
		} else {
			return 1;
		}
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
